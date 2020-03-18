import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  courseEndPoint,
  getYourLearningPaths,
  getLearningPath
} from "../../store/actions/index.js";
import { useDispatch, useSelector } from "react-redux";
import YourCourse from "../courses/YourCourse";
import Course from "../courses/Course";

//art
import sphere from "../../assets/sphere.png";
// import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

//Material UI Imports
import { makeStyles } from "@material-ui/core/styles";

// Styled Component Imports
import { LearningPathCard } from "../learningPaths/YourLearningPathsStyles";
import { TopDashboardCard } from "./DashboardStyles";
import zIndex from "@material-ui/core/styles/zIndex";

const useStyles = makeStyles({
  current: {
    width: props =>
      props.mediumScreenSize ? "540px" : props.phoneSize ? "100%" : "400px",
    paddingLeft: "33px",
    paddingBottom: "25px",
    paddingTop: "0",
    marginRight: props => (props.phoneSize ? "0px" : "40px")
  },

  container: {
    display: "flex",
    flexFlow: props =>
      props.mediumScreenSize || props.phoneSize ? "row wrap" : "row"
  },

  smallContainer: {
    display: "flex",
    flexDirection: "column"
  }
});

function Dashboard({ props }) {
  const classes = useStyles(props);
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const options = {
    weekday: "long"
    // month: "long",
    // day: "numeric"
  };
  const date = new Date();
  const today = date.toLocaleDateString(undefined, options);
  const time = date.toLocaleTimeString([], { timeStyle: "short" });
  const isLoadingVerify = state.onboardingReducer.isLoading;
  const userName = state.onboardingReducer.user;
  const firstName = userName.first_name
    ? userName.first_name.substring(0, 1).toUpperCase() +
      userName.first_name.substring(1)
    : null;
  const learningPaths = state.learningPathReducer.yourLearningPaths;
  const learningPathCourses = state.learningPathReducer.learningPath.courses;
  const learningPath = state.learningPathReducer.learningPath;
  const [learningPathOrder, setLearningPathOrder] = useState([]);
  const [coursePathOrder, setCoursePathOrder] = useState([]);

  useEffect(() => {
    if (!isLoadingVerify) {
      dispatch(courseEndPoint());
      dispatch(getYourLearningPaths());
    }
  }, [dispatch, isLoadingVerify]);

  useEffect(() => {
    if (learningPathOrder.length > 1)
      dispatch(getLearningPath(learningPathOrder[0].id));
    else {
      dispatch(getLearningPath(1));
    }
  }, [dispatch, learningPathOrder]);

  useEffect(() => {
    if (learningPathCourses)
      setCoursePathOrder(
        [...learningPathCourses].sort((a, b) => a.path_order - b.path_order)
      );
  }, [learningPathCourses]);

  useEffect(() => {
    if (learningPaths)
      setLearningPathOrder(
        [...learningPaths].sort((a, b) => a.user_path_order - b.user_path_order)
      );
  }, [learningPaths]);

  return (
    <>
      <div
        className="bottom-border"
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "-10px 10px 10px 0px",
          borderBottom: "1px solid black"
        }}
      ></div>

      <div>
        <p
          style={{
            fontWeight: "bold",
            fontFamily: "Open Sans",
            fontSize: "13px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: "5%"
          }}
        >
          Dashboard
        </p>

        {/* <FiberManualRecordIcon
          style={{
            color: "#52bbb4",
            fontSize: "18em",
            margin: 0
          }}
        /> */}
      </div>

      <TopDashboardCard>
        <div className={classes.topContainer}>
          <div>
            <span
              style={{
                fontSize: "21px",
                textAlign: "left",
                fontWeight: "bold",
                fontFamily: "Helvetica"
              }}
            >
              {today}, {time}
            </span>
          </div>

          <div>
            <p style={{ fontWeight: "500", fontSize: "44px" }}>
              Welcome,
              <br />{" "}
              <span style={{ fontWeight: "bold", fontSize: "44px" }}>
                {firstName}!{" "}
              </span>
            </p>
          </div>
        </div>
        <img
          src={sphere}
          style={{
            margin: "-21% 0 0% 45%",
            zIndex: "2",
            height: "320px"
          }}
          alt="sphere"
        />
      </TopDashboardCard>

      <div className={classes.container}>
        <div className={classes.smallContainer}>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              textAlign: "left",
              marginLeft: "10px"
            }}
          >
            Recent Activity
          </p>
          <LearningPathCard className={classes.current}>
            <div className="title">
              <h3
                style={{
                  fontFamily: "Open Sans",
                  color: "black",
                  marginBottom: "40px"
                }}
              >
                {learningPathOrder.length >= 1
                  ? learningPathOrder[0].title
                  : "Join a Learning Path"}
              </h3>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <div style={{ display: "flex", alignItems: "center" }}></div>
                {learningPathOrder.length >= 1 ? (
                  <div
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      display: "flex",
                      justifyContent: "center",
                      marginLeft: "10px",
                      flexDirection: "column"
                    }}
                  >
                    <span>{`${learningPathCourses &&
                      learningPathCourses.length} CLASSES`}</span>
                    <span>{`${learningPath.pathItems &&
                      learningPath.pathItems.length} ITEMS`}</span>
                  </div>
                ) : null}
                <button style={{ margin: "0 10px" }}>
                  <Link
                    to={
                      learningPathOrder.length >= 1
                        ? `/learning-paths/${learningPathOrder.length >= 1 &&
                            learningPathOrder[0].id}`
                        : `learning-paths/join`
                    }
                  >
                    {learningPathOrder.length >= 1
                      ? "Go To Path"
                      : "Join A Path"}
                  </Link>
                </button>
              </div>
            </div>
          </LearningPathCard>
        </div>
        <div>
          <div className={classes.smallContainer}>
            <p
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                textAlign: "left",
                marginBottom: "-20px"
              }}
            >
              Next Item
            </p>
            {coursePathOrder.length >= 1 ? (
              <YourCourse
                props={props}
                style={{ color: "#242424" }}
                course={coursePathOrder[0]}
              />
            ) : state.coursesReducer.courses[0] ? (
              <Course
                props={props}
                style={{ color: "#242424" }}
                course={state.coursesReducer.courses[0]}
              />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
