import React, { useEffect } from "react";
import { courseEndPoint } from "../../store/actions/index.js";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route } from "react-router-dom";
import Course from "./courses/Course";
import Header from "../headerAndFooter/Header"


function Dashboard() {
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  useEffect(() => {
    dispatch(courseEndPoint());
  }, [dispatch]);

  return (
    <div>
      {/* <Header/> */}
      {state.coursesReducer.courses
        ? state.coursesReducer.courses.map(course => (
            <Course key={course.id} course={course} />
          ))
        : null} 
    </div>

  );
}

export default Dashboard;
