import React, { useEffect } from "react";
import { courseEndPoint } from "../../store/actions/index.js";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, Link } from "react-router-dom";
import Course from "../courses/Course";

import ReactTooltip from 'react-tooltip'

import {CoursesCard, CourseMenuDiv, CourseDiv } from './DashboardStyles'

function Dashboard() {
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  useEffect(() => {
    dispatch(courseEndPoint());
 
  }, [dispatch]);
 
  return (
    // <div></div>
    //   {state.coursesReducer.courses
    //     ? state.coursesReducer.courses.map(course => (
    //         <Course key={course.id} course={course} />
    //       ))
    //     : null} 
    // </div>

    <CoursesCard>
      <CourseMenuDiv>
        <span className="title">Courses</span>
        <span className="options">•••</span>
      </CourseMenuDiv>
      {state.coursesReducer.courses
        ? state.coursesReducer.courses.map((course,index) => (
            <CourseDiv className="course">
              <div className="picture">
                {/* Picture */}
              </div>
              <div className="info">
                <Link to={`/courses/${course.id}`} className="title" data-tip data-for={`courseName-${index}`}>{course.name}</Link>
                <ReactTooltip id={`courseName-${index}`} place="top" type="dark" effect="solid">
                  <span>{course.name}</span>
                </ReactTooltip>
                <span className="source">Udemy</span>
              </div>
            </CourseDiv>
          ))
        : null} 
    </CoursesCard>

  );
}

export default Dashboard;
