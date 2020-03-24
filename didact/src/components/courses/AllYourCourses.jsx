import React, { useEffect, useState } from "react";
import {
  getYourCourses,
  getYourLearningPaths
} from "../../store/actions/index.js";
import { useDispatch, useSelector } from "react-redux";
import YourCourse from "./YourCourse";

import { CoursesWrapper } from "./CourseStyles";

//Material UI Imports
import { makeStyles } from "@material-ui/core/styles";
//Material UI Icons
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles(theme => ({
  span: {
    cursor: "pointer",
    "&:hover": {
      color: "black"
    }
  }
}));

function AllCourses(props) {
  const tabletSize = useMediaQuery("(max-width:1150px)");
  const classes = useStyles();
  const dispatch = useDispatch();
  const yourCourses = useSelector(state => state.coursesReducer.yourCourses);

  useEffect(() => {
    dispatch(getYourCourses());
  }, []);

  useEffect(() => {
    dispatch(getYourLearningPaths());
  }, [dispatch]);

  const handleBack = () => {
    props.props.history.push("/courses/yours");
  };

  return (
    <CoursesWrapper>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <p
          style={{
            fontWeight: "bold",
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <span className={classes.span} onClick={() => handleBack()}>
            Courses
          </span>
          <ChevronRightIcon style={{ fontSize: "1.6rem" }} />
          <span>Your Courses</span>
        </p>
        <p
          className={classes.span}
          style={{
            fontWeight: "bold",
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
          }}
          onClick={handleBack}
        >
          <ChevronLeftIcon style={{ fontSize: "1.6rem" }} />
          Your Courses
        </p>
      </div>
      <h2
        style={{
          maxWidth: "540px",
          width: "100%",
          textAlign: "left"
        }}
      >
        Your Courses
      </h2>
      <div className="course-grid">
        {yourCourses
          ? yourCourses.map((course, i) => (
              <YourCourse key={i} course={course} />
            ))
          : null}
      </div>
    </CoursesWrapper>
  );
}

export default AllCourses;
