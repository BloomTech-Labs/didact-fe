import React, { useEffect } from "react";
import { courseEndPoint } from "../../store/actions/index.js";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, Link } from "react-router-dom";
import Course from "../courses/Course";

import ReactTooltip from 'react-tooltip'
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';

import { CoursesCard, CourseMenuDiv, CourseDiv } from './DashboardStyles'
import { AddButton, PlusDiv, Plus, ButtonText } from './ButtonStyles';


function Dashboard() {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  console.log('user', state.onboardingReducer.user)

  useEffect(() => {
    dispatch(courseEndPoint());
  }, [dispatch]);

  return (
    <>
      <Link style={{ textDecoration: 'none' }} to='/courses/add'>
        <AddButton>
          <AddCircleRoundedIcon style={{ fontSize: '3.5rem', marginRight: '5px', marginLeft: '5px', color: "#5b5b5b" }}/>
          <ButtonText>Add Course</ButtonText>
        </AddButton>
      </Link>
      {/* <Link to='/addcourse'><button>Add Course</button></Link> */}
      <CoursesCard>
        <CourseMenuDiv>
          <span className="title">Courses</span>
          <span className="options">•••</span>
        </CourseMenuDiv>
        {state.coursesReducer.courses
          ? state.coursesReducer.courses.map((course, index) => (
            <CourseDiv className="course" key={index}>
              <div className="picture">
                {/* Picture */}
              </div>
              <div className="info">
                <Link to={`/courses/${course.id}`} className="title" data-tip data-for={`courseName-${index}`}>{course.name}</Link>
                <ReactTooltip id={`courseName-${index}`} place="right" type="dark" effect="solid">
                  <span>{course.name}</span>
                </ReactTooltip>
                <span className="source">Udemy</span>
              </div>
            </CourseDiv>
          ))
          : null}
      </CoursesCard>
    </>
  );
}

export default Dashboard;
