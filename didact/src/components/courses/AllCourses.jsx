import React, { useEffect, useState } from "react";
import { courseEndPoint } from "../../store/actions/index.js";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AddButton, ButtonText } from '../dashboard/ButtonStyles';
import Course from './Course'

//Material UI Imports
import { makeStyles } from '@material-ui/core/styles';
//Material UI Icons
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
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
    span: {
        cursor: 'pointer',
        "&:hover":{
          color: 'white'
        }
      }
}));

function AllCourses(props) {
    const tabletSize = useMediaQuery("(max-width:1150px)");
    const classes = useStyles();
    const dispatch = useDispatch();
    const [addingCourses] = useState(true)
    const state = useSelector(state => state);

    useEffect(() => {
        dispatch(courseEndPoint());
    }, [dispatch]);

    const handleBack = () => {
        props.props.history.push('/courses/yours')
    }  
 
    return (
    <div>
        <div style={{display: 'flex', justifyContent: 'space-between', margin: '-10px 10px 10px 10px', borderBottom: '1px solid black'}}>
            <p style={{fontWeight: 'bold', marginLeft: '10px', display: 'flex', flexDirection:'row', alignItems: 'center'}}><span className={classes.span}  onClick={() => handleBack()}>Courses</span><ChevronRightIcon style={{fontSize: '1.6rem'}}/><span>All</span></p>
            <p className={classes.span} style={{fontWeight: 'bold', display: 'flex', flexDirection:'row', alignItems: 'center'}} onClick = {handleBack}><ChevronLeftIcon style={{fontSize: '1.6rem'}}/>Your Courses</p>
        </div>
        <h2 style={{margin: '10px', maxWidth: "540px", width: "100%", textAlign: 'left'}}>All Courses</h2>
        <div className = {tabletSize ? classes.rootTablet : classes.root}>
            <div>
                {state.coursesReducer.courses
                    ? state.coursesReducer.courses.map((course, i) => (
                        <Course key={i} course={course} addingCourses={addingCourses}/>
                    ))
                    : null}

            </div>
            
        </div>
    </div>
    );
}

export default AllCourses;
