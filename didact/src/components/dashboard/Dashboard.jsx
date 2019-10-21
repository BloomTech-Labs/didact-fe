import React, { useEffect } from "react";
import { courseEndPoint } from "../../store/actions/index.js";
import { useDispatch, useSelector } from "react-redux";
import Course from "../courses/Course";

function Dashboard() {
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  useEffect(() => {
    dispatch(courseEndPoint());
  }, [dispatch]);

  return (
    <div>
      {state.coursesReducer.courses
        ? state.coursesReducer.courses.map(course => (
            <Course key={course.id} course={course} />
          ))
        : null} 
    </div>

  );
}

export default Dashboard;
