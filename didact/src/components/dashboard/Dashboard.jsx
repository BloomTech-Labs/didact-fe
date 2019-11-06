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
  const user = state.onboardingReducer.user

  useEffect(() => {
    dispatch(courseEndPoint());
  }, [dispatch]);

  return (
    <>
      {
        (!state.onboardingReducer.isLoading && user.first_name && user.last_name) ? <h1>Welcome to Didact, {user.first_name.charAt(0).toUpperCase() + user.first_name.slice(1) + ' ' + user.last_name.charAt(0).toUpperCase() + user.last_name.slice(1)}</h1>

        : 'Loading...'
      }
    </>
  );
}

export default Dashboard;
