import React, { useEffect, useState } from "react";
import { courseEndPoint } from "../../store/actions/index.js";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AddButton, PlusDiv, Plus, ButtonText } from '../dashboard/ButtonStyles';
import Course from './Course'

import ReactTooltip from 'react-tooltip'

// import { CoursesCard, CourseMenuDiv, CourseDiv } from '../dashboard/DashboardStyles'
// import { AddButton, PlusDiv, Plus, ButtonText } from '../dashboard//ButtonStyles';

import { makeStyles } from '@material-ui/core/styles';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import useMediaQuery from "@material-ui/core/useMediaQuery";


const useStyles = makeStyles(theme => ({
    buttonCourse: {
        border: "none",
        margin: "20px",
        backgroundColor: '#f2e9d4',
        outline: 'none',
        padding: '10px',
        borderRadius: 15,
        width: '120px',
        fontSize: "13px",
        cursor: 'pointer'
    },
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
        flexDirection: 'row',
        marginBottom: "-20px"
    },
    card: {
        // minWidth: 375,
        maxWidth: 600,
        margin: '40px 0 40px 0', 
        padding: '10px',
        borderRadius: '15px',
        // backgroundColor: '#eeeff3'
    },
    circleIcon: {
        fontSize: '3.5rem',
        marginRight: '5px',
        marginLeft: '10px',
        color: "#5b5b5b"
    }, 
    descriptionDiv: {
        width: "100%",
        display: 'flex',
        justifyContent: "space-between",
        fontSize: 14,
        color: "#757575"
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
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    pos: {
        marginBottom: 12,
    },
    root: {
        display: 'flex',
        flexDirection: 'row',
    },
    rootTablet: {
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        fontSize: 14,
    },

    tooltip: {
        width: "400px"
    },

}));

function AllCourses(props) {
    const tabletSize = useMediaQuery("(max-width:1150px)");
    const classes = useStyles();
    const dispatch = useDispatch();
    const [expanded, setExpanded] = useState(false);
    const [addingCourses, setAddingCourses] = useState(true)
    const state = useSelector(state => state);
    console.log('user', state.onboardingReducer.user)
    // console.log(state.coursesReducer.courses)

    useEffect(() => {
        dispatch(courseEndPoint());
    }, [dispatch]);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleAddingCourses = () => {
        setAddingCourses(!addingCourses)
        console.log(addingCourses)
    }

    return (
        <div className = {tabletSize ? classes.rootTablet : classes.root}>
            {tabletSize ? (
            <div className = {classes.addButtonDivTablet} style = {{display: 'flex', flexDirection: 'row wrap'}}>
                <Link style={{ textDecoration: 'none' }} to='/courses/add'>
                    <AddButton style = {{marginRight: '10px'}}>
                        <AddCircleRoundedIcon  className = {classes.circleIcon}/>
                        <ButtonText>Add Course</ButtonText>
                    </AddButton>
                </Link>
                <AddButton>
                    <AddCircleRoundedIcon className = {classes.circleIcon}/>
                    <ButtonText>Add Courses To Learning Path</ButtonText>
                </AddButton>
                <Link style={{ textDecoration: 'none' }} >
                    <AddButton >
                       <AddCircleRoundedIcon className = {classes.circleIcon}/>
                        <ButtonText>Search Courses</ButtonText>
                    </AddButton>
                </Link>
            </div>) : (null) }
            <div>
                {state.coursesReducer.courses
                    ? state.coursesReducer.courses.map((course, i) => (
                        <Course key = {i} course = {course} addingCourses={addingCourses}/>
                    ))
                    : null}

            </div>
            {!tabletSize ? (<div className = {classes.addButtonDiv}>
                <Link style={{ textDecoration: 'none' }} to='/courses/add'>
                    <AddButton >
                        <AddCircleRoundedIcon className = {classes.circleIcon}/>
                        <ButtonText>Add Course</ButtonText>
                    </AddButton>
                </Link>
                <AddButton onClick={handleAddingCourses}>
                    <AddCircleRoundedIcon className = {classes.circleIcon}/>
                    <ButtonText>{addingCourses ? "Done Adding" : "Add Courses"}</ButtonText>
                </AddButton>
                <Link style={{ textDecoration: 'none' }} >
                    <AddButton >
                       <AddCircleRoundedIcon className = {classes.circleIcon}/>
                        <ButtonText>Search Courses</ButtonText>
                    </AddButton>
                </Link>
            </div>) : (null) }
        </div>
    );
}

export default AllCourses;
