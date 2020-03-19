import React from "react";
import { CourseCard } from "./ResultCardStyles";
const CourseCard = props => {
  const course = props.course;

  return (
    <CourseCard>
      <div></div>
      <div>
        <div>Playlist</div>
        <h1>{course.title}</h1>
        <Link to={`/courses/all/${course.id}`}>View Course</Link>
      </div>
    </CourseCard>
  );
};
