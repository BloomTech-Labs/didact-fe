import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getYourLearningPathsOwned } from "../../store/actions/index";

import { BasicCourseCard } from "./CourseStyles";

import ArrowRightAltRoundedIcon from "@material-ui/icons/ArrowRightAltRounded";

import AddCoursePathPlaylist from "./AddCoursePathPlaylist";

const Course = ({ course, props, tracked }) => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getYourLearningPathsOwned());
  }, [dispatch, state.learningPathReducer.learningPath]);

  return (
    <BasicCourseCard>
      <div className="course-header">
        <h3>
          {course.title.length > 35
            ? `${course.title.substring(0, 35)}...`
            : course.title}
        </h3>
        <AddCoursePathPlaylist className="path-playlist" course={course} />
      </div>
      <div className="instructors">
        <span>{course.foreign_instructors}</span>
      </div>

      <p>{course.topic ? `Topic: ${course.topic}` : null}</p>
      <div className="link-div">
        <Link to={`/courses/all/${course.id}`}>
          View Course
          <ArrowRightAltRoundedIcon
            style={{
              fontSize: "2em"
            }}
          />
        </Link>
      </div>
    </BasicCourseCard>
  );
};

export default Course;
