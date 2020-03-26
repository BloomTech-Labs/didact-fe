import React from "react";
import { useSelector } from "react-redux";
import { TitleH2, CourseGrid } from "./SearchGeneralStyles";
import CourseResultCard from "./CourseResultCard";
const CourseResults = props => {
  const courses = useSelector(state => state.coursesReducer.courses);
  const resultCount = courses.length;
  return (
    <div>
      <TitleH2>
        SEARCH RESULTS
        {resultCount === 1 ? (
          <span>{resultCount} RESULT FOUND</span>
        ) : (
          <span>{resultCount} RESULTS FOUND</span>
        )}
      </TitleH2>
      <CourseGrid>
        {courses.map(course => (
          <CourseResultCard
            course={course}
            key={course.id}
            style={{ margin: "20px 0" }}
          />
        ))}
      </CourseGrid>
    </div>
  );
};

export default CourseResults;
