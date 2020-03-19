import React from "react";
import { useSelector } from "react-redux";
import { TitleH2 } from "./SearchGeneralStyles";
import Course from "../courses/Course";
const CourseResults = props => {
  const courses = useSelector(state => state.coursesReducer.courses);
  const resultCount = courses.length;
  return (
    <div>
      <TitleH2>
        SEARCH RESULTS <span>{resultCount} RESULTS FOUND</span>
      </TitleH2>
      {courses.map(course => (
        <Course course={course} />
      ))}
    </div>
  );
};

export default CourseResults;
