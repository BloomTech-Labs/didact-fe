import React, { useEffect, useState } from "react";
import { getYourCourses, getYourLearningPaths } from "../../store/actions/index.js";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AddButton, ButtonText } from '../dashboard/ButtonStyles';
import YourCourse from './YourCourse'

//Material UI Imports
import { makeStyles } from '@material-ui/core/styles';
//Material UI Icons
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
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
        color: "#5b5b5b"
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
    }, dispatch)
 
    return (
    <div>
        <div style={{display: 'flex', justifyContent: 'space-between', margin: '-10px 10px 10px 10px', borderBottom: '1px solid black'}}>
                <p style={{fontWeight: 'bold', marginLeft: '10px', display: 'flex', flexDirection:'row', alignItems: 'center'}}><span>Courses</span><ChevronRightIcon style={{fontSize: '1.6rem'}}/><span>Overview</span></p>
        </div>
        <h2 style={{margin: '10px', maxWidth: "540px", width: "100%", textAlign: 'left'}}>Your Courses</h2>
        <div className = {tabletSize ? classes.rootTablet : classes.root}>
            {tabletSize ? (
            <div className = {classes.addButtonDivTablet}>
                <Link style={{ textDecoration: 'none' }} to='/courses/add'>
                    <AddButton style = {{marginRight: '10px'}}>
                        <AddCircleRoundedIcon  className = {classes.circleIcon}/>
                        <ButtonText>New Course</ButtonText>
                    </AddButton>
                </Link>
                {/* <AddButton style = {{marginRight: '10px'}}>
                    <AddCircleRoundedIcon className = {classes.circleIcon}/>
                    <ButtonText>Add Courses To Learning Path</ButtonText>
                </AddButton> */}
                <Link to="/courses/all" style={{ textDecoration: 'none' }} >
                    <AddButton >
                       <AddCircleRoundedIcon className = {classes.circleIcon}/>
                        <ButtonText>All Courses</ButtonText>
                    </AddButton>
                </Link>
            </div>) : (null) }
            <div>
                {state.coursesReducer.yourCourses
                    ? state.coursesReducer.yourCourses.map((course, i) => (
                        <YourCourse key={i} course={course} addingCourses={addingCourses}/>
                    ))
                    : null}

            </div>
            {!tabletSize ? (<div className = {classes.addButtonDiv}>
                <Link style={{ textDecoration: 'none' }} to='/courses/yours/add'>
                    <AddButton >
                        <AddCircleRoundedIcon className = {classes.circleIcon}/>
                        <ButtonText>New Course</ButtonText>
                    </AddButton>
                </Link>
                {/* <AddButton onClick={handleAddingCourses}>
                    <AddCircleRoundedIcon className = {classes.circleIcon}/>
                    <ButtonText>{addingCourses ? "Done Adding" : "Add Courses"}</ButtonText
                </AddButton> */}
                <Link to="/courses/all" style={{ textDecoration: 'none' }} >
                    <AddButton >
                       <AddCircleRoundedIcon className = {classes.circleIcon}/>
                        <ButtonText>All Courses</ButtonText>
                    </AddButton>
                </Link>
            </div>) : (null) }
        </div>
    </div>
    );
}

export default AllCourses;
