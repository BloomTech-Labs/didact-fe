import React, { useEffect } from "react";
import { courseEndPoint } from "../../store/actions/index.js";
import { useDispatch, useSelector } from "react-redux";
import Course from "../courses/Course";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles({
  welcome: {
    // marginRight: props => !props.phoneSize ? "30px" : '0',
    borderRadius: 15,
    maxWidth: '825px',
    fontSize: '1.1rem',
    boxShadow: 'none'
  },
  current: {
    width: props => (props.mediumScreenSize || props.phoneSize)  ? '100%' : '60%',
    maxWidth: 540,
    marginTop: '40px',
    marginRight: props => (props.mediumScreenSize || props.phoneSize)  ? '0' :'15px',
    height: '150px',
    borderRadius: 15,
    display: 'flex',
    alignItems: "center",
    justifyContent: 'center',
    fontSize: '1.1rem',
    boxShadow: 'none'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  rowContainer: {
    display: 'flex',
    flexFlow: props => (props.mediumScreenSize || props.phoneSize) ? 'row wrap' : "row",
    justifyContent: props => (props.mediumScreenSize || props.phoneSize)  ? "center" : 'space-between',
    width: "100%",
    maxWidth: "825px",
    // paddingRight: props => !props.phoneSize ? "25px" : '0',
  },
});

function Dashboard({props}) {
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  const isLoadingVerify = state.onboardingReducer.isLoading
  const userName = state.onboardingReducer.user;
  const firstName = userName.first_name ? userName.first_name.substring(0, 1).toUpperCase() + userName.first_name.substring(1) : null;
  const classes = useStyles(props);

  useEffect(() => {
    if(!isLoadingVerify){
      dispatch(courseEndPoint());
    }
  }, [dispatch, isLoadingVerify]);

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
          ? (<Course style={{width: '825px'}} course={state.coursesReducer.courses[0]} />)
          : null } 
        </div>
      </div>
    </div>

  );
}

export default Dashboard;
