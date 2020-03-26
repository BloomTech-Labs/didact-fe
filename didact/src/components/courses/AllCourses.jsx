import React, { useEffect, useState } from "react";
import { courseEndPoint } from "../../store/actions/index.js";
import { useDispatch, useSelector } from "react-redux";
import Course from "./Course";

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
  const state = useSelector(state => state);

  useEffect(() => {
    dispatch(courseEndPoint());
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
          <span>All</span>
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
        All Courses
      </h2>
      <div className="course-grid">
        {state.coursesReducer.courses
          ? state.coursesReducer.courses.map((course, i) => (
              <Course key={i} course={course} />
            ))
          : null}
      </div>
    </CoursesWrapper>
  );
}

export default AllCourses;
