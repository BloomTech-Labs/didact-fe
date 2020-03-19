import React from "react";
import { useSelector } from "react-redux";

const CourseResults = props => {
  const courses = useSelector(state => state.coursesReducer.courses);

  return <div></div>;
};

export default CourseResults;
