import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { courseEndPoint, getYourLearningPaths, getLearningPath } from "../../store/actions/index.js";
import { useDispatch, useSelector } from "react-redux";
import YourCourse from "../courses/YourCourse";
import Course from '../courses/Course';

//Material UI Imports
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

// Styled Component Imports
import {LearningPathCard} from '../learningPaths/YourLearningPathsStyles'


const useStyles = makeStyles({
 
  current: {
    width: props => (props.mediumScreenSize)  ? '540px' : (props.phoneSize) ? "100%" : "400px",
    // maxWidth: props => (props.phoneSize) ? "400px" : "540px",

  },
  container: {
    display: 'flex',
    flexFlow: props => (props.mediumScreenSize || props.phoneSize)  ? 'row wrap' : 'row',
  },
  
  smallContainer: {
    display: 'flex',
    flexDirection: 'column'
  }
});

function Dashboard({props}) {
  const classes = useStyles(props);
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  const isLoadingVerify = state.onboardingReducer.isLoading
  const userName = state.onboardingReducer.user;
  const firstName = userName.first_name ? userName.first_name.substring(0, 1).toUpperCase() + userName.first_name.substring(1) : null;
  const learningPaths = state.learningPathReducer.yourLearningPaths
  const learningPathCourses = state.learningPathReducer.learningPath.courses
  const learningPath = state.learningPathReducer.learningPath
  const [learningPathOrder, setLearningPathOrder] = useState([])
  const [coursePathOrder, setCoursePathOrder] = useState([])
  

  useEffect(() => {
    if(!isLoadingVerify){
      dispatch(courseEndPoint());
      dispatch(getYourLearningPaths())
    }
  }, [dispatch, isLoadingVerify]);

  useEffect(() => {
    if(learningPathOrder.length > 1) dispatch(getLearningPath(learningPathOrder[0].id))
    else {dispatch(getLearningPath(1))}
  }, [dispatch, learningPathOrder])

  useEffect(() => {
    if(learningPathCourses) setCoursePathOrder([...learningPathCourses].sort((a,b) => a.path_order - b.path_order))
  }, [learningPathCourses])

  useEffect(() => {
    if(learningPaths) setLearningPathOrder([...learningPaths].sort((a,b) => a.user_path_order - b.user_path_order))
  }, [learningPaths])

  return (
    <>
    <div style={{display: 'flex', justifyContent: 'space-between', margin: '-10px 10px 10px 10px', borderBottom: '1px solid black'}}>
        <p style={{fontWeight: 'bold', marginLeft: '10px', display: 'flex', flexDirection:'row', alignItems: 'center'}}>Dashboard</p>
        <p style={{fontWeight: 'bold'}}>Welcome Back, {firstName}!</p>
    </div>
    <div className={classes.container}>
      <div className={classes.smallContainer}>
        <p style={{fontSize: '2rem', fontWeight: 'bold', textAlign: 'left', marginLeft: '10px'}}>Current Learning Path</p>
            <LearningPathCard className={classes.current} style={{marginRight: '20px', paddingLeft: '33px', paddingBottom: '25px'}}>
                <div className='title'>
                    <h1 style={{ fontWeight: 'bold' }}>{learningPathOrder.length >= 1 ? learningPathOrder[0].name : "Join a Learning Path"}</h1>
                    <div style={{display:'flex', justifyContent: 'flex-end'}}>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                        </div>
                        {learningPathOrder.length >= 1 ? 
                        (<div style={{ color: 'white', fontWeight: 'bold', display: 'flex', justifyContent: 'center', marginLeft: '10px', flexDirection: "column"}}>
                          <span>{`${learningPathCourses && learningPathCourses.length} CLASSES`}</span>
                          <span>{`${learningPath.pathItems && learningPath.pathItems.length} ITEMS`}</span>
                        </div>) : null }
                        <button style={{margin: '0 10px'}}><Link to={learningPathOrder.length >= 1 ? `/learning-paths/${learningPathOrder.length >= 1 && learningPathOrder[0].id}` : `learning-paths/join`}>{learningPathOrder.length >= 1 ? "Go To Path" : "Join A Path"}</Link></button>
                    </div>
                </div>
            </LearningPathCard>
          </div>
        <div>
        <div className={classes.smallContainer} >
        <p style={{fontSize: '2rem', fontWeight: 'bold', textAlign: 'left', marginBottom: "-20px",}}>Current Course</p>
        {coursePathOrder.length >= 1 
            ? (<YourCourse course={coursePathOrder[0]}  />)
            : state.coursesReducer.courses[0]
            ? (<Course course={state.coursesReducer.courses[0]} />)
            : null }
        </div>      
      </div>
    </div>
    </>
  );
}

export default Dashboard;
