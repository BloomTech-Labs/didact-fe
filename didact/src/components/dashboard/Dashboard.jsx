import React, { useEffect } from "react";
import { courseEndPoint } from "../../store/actions/index.js";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, Link } from "react-router-dom";
import Course from "../courses/Course";
import useMediaQuery from "@material-ui/core/useMediaQuery"

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import ReactTooltip from 'react-tooltip'
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';

import { CoursesCard, CourseMenuDiv, CourseDiv } from './DashboardStyles'
import { AddButton, PlusDiv, Plus, ButtonText } from './ButtonStyles';

const useStyles = makeStyles({
  welcome: {
    marginRight: props => !props.phoneSize ? "30px" : '0',
    borderRadius: 15,
    marginLeft: props => !props.phoneSize ? "-8px" : '0',
    fontSize: '1.1rem'
  },
  current: {
    width: props => (props.mediumScreenSize || props.phoneSize)  ? '100%' : '60%',
    maxWidth: 600,
    marginTop: '40px',
    marginRight: props => (props.mediumScreenSize || props.phoneSize)  ? '0' :'15px',
    height: '150px',
    borderRadius: 15,
    display: 'flex',
    alignItems: "center",
    justifyContent: 'center',
    fontSize: '1.1rem'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  rowContainer: {
    display: 'flex',
    flexFlow: props => (props.mediumScreenSize || props.phoneSize) ? 'row wrap' : "row",
    justifyContent: props => (props.mediumScreenSize || props.phoneSize)  ? "center" : 'space-between',
    maxWidth: 1115,
    marginRight: props => !props.phoneSize ? "30px" : '0',
    marginLeft: props => !props.phoneSize ? "-8px" : '0'
  },
});

function Dashboard({props}) {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const userName = state.onboardingReducer.user;
  const firstName = userName.first_name ? userName.first_name.substring(0, 1).toUpperCase() + userName.first_name.substring(1) : null;
  const classes = useStyles(props);
  console.log(props)

  useEffect(() => {
    dispatch(courseEndPoint());
  }, [dispatch]);

  return (
    <div className={classes.container}>
      <Card className={classes.welcome}>
        <h1>Welcome Back, {firstName}!</h1>
      </Card>
      <div className={classes.rowContainer}>
        <Card className={classes.current}>
          <h2>Current Courses: </h2>
        </Card>
        <div>
        {state.coursesReducer.courses[0]
          ? (<Course style={{width: '1000px'}} course={state.coursesReducer.courses[0]} />)
          : null } 
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
