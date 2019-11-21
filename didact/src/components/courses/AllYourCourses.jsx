import React, { useEffect, useState } from "react";
import { getYourCourses, getYourLearningPaths } from "../../store/actions/index.js";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ButtonStyles } from '../learningPaths/YourLearningPathsStyles'
import YourCourse from './YourCourse'

//Material UI Imports
import { makeStyles } from '@material-ui/core/styles';
//Material UI Icons
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import useMediaQuery from "@material-ui/core/useMediaQuery";


const useStyles = makeStyles(theme => ({
    buttonDiv: {
        display: "flex",
        justifyContent: 'flex-end',
    },
    addButtonDiv: {
        marginTop: '40px',
        marginLeft: '20px'
    },
    addButtonDivTablet: {
        display: 'flex',
        flexFlow: 'row wrap',
        marginBottom: "-20px",
        maxWidth: '500px'
    },
  
    circleIcon: {
        fontSize: '3.5rem',
        marginRight: '5px',
        marginLeft: '10px',
        color: "white"
    }, 
  
    expand: {
        transform: 'rotate(0deg)',
        // marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    root: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '-40px'
    },
    rootTablet: {
        display: 'flex',
        flexDirection: 'column',
    },
}));

function AllCourses(props) {
    const tabletSize = useMediaQuery("(max-width:1150px)");
    const classes = useStyles();
    const dispatch = useDispatch();
    const [addingCourses] = useState(true)
    const state = useSelector(state => state);

    useEffect(() => {
        dispatch(getYourCourses());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getYourLearningPaths())
    }, [dispatch])

    return (
    <div>
        <div style={{display: 'flex', justifyContent: 'space-between', margin: '-10px 10px 10px 10px', borderBottom: '1px solid black'}}>
                <p style={{fontWeight: 'bold', marginLeft: '10px', display: 'flex', flexDirection:'row', alignItems: 'center'}}><span>Courses</span><ChevronRightIcon style={{fontSize: '1.6rem'}}/><span>Overview</span></p>
        </div>
        <h2 style={{margin: '10px', maxWidth: "540px", width: "100%", textAlign: 'left'}}>Your Courses</h2>
        <div className = {tabletSize ? classes.rootTablet : classes.root}>
            {tabletSize ? (
            <div className = {classes.addButtonDivTablet}>
                <ButtonStyles style={{display: "flex", justifyContent: 'flex-start'}}>   
                    <div className = "buttons">
                        <Link style={{ fontSize: '1.4rem' }} to={'/courses/yours/add'}>New Course</Link>
                        <Link style={{ fontSize: '1.4rem' }} to={'/courses/all'}>All Courses</Link>
                    </div>
                </ButtonStyles>
            </div>) : null }
            <div>
                {state.coursesReducer.yourCourses
                    ? state.coursesReducer.yourCourses.map((course, i) => (
                        <YourCourse key={i} course={course} addingCourses={addingCourses} props={props.props}/>
                    ))
                    : null}

            </div>
            {!tabletSize ? (
            <div className = {classes.addButtonDiv}>
                <ButtonStyles style={{display: "flex", justifyContent: 'flex-start'}}>   
                    <div className = "buttons">
                        <Link style={{ fontSize: '1.4rem' }} to={'/courses/yours/add'}>New Course</Link>
                        <Link style={{ fontSize: '1.4rem' }} to={'/courses/all'}>All Courses</Link>
                    </div>
                </ButtonStyles>
            </div>) : null } 
        </div>
    </div>
    );
}

export default AllCourses;
