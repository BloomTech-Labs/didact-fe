import React, { useEffect, useState } from "react";
import { courseEndPoint } from "../../store/actions/index.js";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AddButton, PlusDiv, Plus, ButtonText } from '../dashboard/ButtonStyles';

import ReactTooltip from 'react-tooltip'

// import { CoursesCard, CourseMenuDiv, CourseDiv } from '../dashboard/DashboardStyles'
// import { AddButton, PlusDiv, Plus, ButtonText } from '../dashboard//ButtonStyles';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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
        maxWidth: 550,
        margin: '40px 10px 40px 0',
        padding: '10px',
        borderRadius: '15px',
        // backgroundColor: '#eeeff3'
    },
    circleIcon: {
        fontSize: '3.5rem',
        marginRight: '5px',
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
        flexDirection: 'row'
    },
    rootTablet: {
        display: 'flex',
        flexDirection: 'column'
    },
    title: {
        fontSize: 14,
    },

    tooltip: {
        width: "400px"
    },

}));

function AllCourses(props) {
    const tabletSize = useMediaQuery("(max-width:1150px");
    const classes = useStyles();
    const dispatch = useDispatch();
    const [expanded, setExpanded] = useState(false);
    const state = useSelector(state => state);
    console.log('user', state.onboardingReducer.user)
    console.log(state.coursesReducer.courses)

    useEffect(() => {
        dispatch(courseEndPoint());
    }, [dispatch]);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div className = {tabletSize ? classes.rootTablet : classes.root}>
            {tabletSize ? (<div className = {classes.addButtonDivTablet}>
                <Link style={{ textDecoration: 'none' }} to='/courses/add'>
                    <AddButton style = {{marginRight: '10px'}}>
                        <AddCircleRoundedIcon className = {classes.circleIcon}/>
                        <ButtonText>Add Course</ButtonText>
                    </AddButton>
                </Link>
                {/* <Link style={{ textDecoration: 'none' }} to='/courses/add'>
                    <AddButton>
                        <PlusDiv>
                            <Plus>+</Plus>
                        </PlusDiv>
                        <ButtonText>Add Course</ButtonText>
                    </AddButton>
                </Link> */}
            </div>) : (null) }
            <div>
                {state.coursesReducer.courses
                    ? state.coursesReducer.courses.map((course, i) => (
                        <Card key={i} className={classes.card}>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    {course.name}
                                </Typography>
                                <CardActions className={classes.descriptionDiv} color="textSecondary" gutterBottom disableSpacing>
                                    <Typography >{course.description.substring(0, 100)} ...</Typography>
                                    <IconButton
                                        className={clsx(classes.expand, {
                                            [classes.expandOpen]: expanded,
                                        })}
                                        onClick={handleExpandClick}
                                        aria-expanded={expanded}
                                        aria-label="show more"
                                    >
                                        <ExpandMoreIcon />
                                    </IconButton>
                                </CardActions>
                                <Collapse in={expanded} timeout="auto" unmountOnExit>
                                    <CardContent>
                                        <Typography className={classes.title} color="textSecondary" gutterBottom paragraph>
                                            {course.description.substring(100)}
                                        </Typography>
                                    </CardContent>
                                </Collapse>
                                <Typography className={classes.pos} color="textSecondary">
                                    {course.foreign_rating}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {course.foreign_instructors}
                                </Typography>
                            </CardContent>
                            <CardActions className={classes.buttonDiv}>
                                <Link to={`/courses/${course.id}`} ><button className={classes.buttonCourse} size="small">Go To Course</button></Link>
                            </CardActions>
                        </Card>
                    ))
                    : null}

            </div>
            {!tabletSize ? (<div className = {classes.addButtonDiv}>
                <Link style={{ textDecoration: 'none' }} to='/courses/add'>
                    <AddButton>
                        <AddCircleRoundedIcon className = {classes.circleIcon}/>
                        <ButtonText>Add Course</ButtonText>
                    </AddButton>
                </Link>
                {/* <Link style={{ textDecoration: 'none' }} to='/courses/add'>
                    <AddButton>
                        <PlusDiv>
                            <Plus>+</Plus>
                        </PlusDiv>
                        <ButtonText>Add Course</ButtonText>
                    </AddButton>
                </Link> */}
            </div>) : (null) }
        </div>
    );
}

export default AllCourses;
