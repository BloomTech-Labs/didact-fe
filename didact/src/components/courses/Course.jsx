import React, { useEffect, useState } from 'react';
import { courseEndPoint } from "../../store/actions/index.js";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AddButton, PlusDiv, Plus, ButtonText } from '../dashboard/ButtonStyles';

import { getYourLearningPathsOwned, postCourseToPath } from '../../store/actions/index'

import { AddCourseToPath, PopoverWrapper } from './CourseStyles'

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
import Popover from '@material-ui/core/Popover'

import playlistAdd from '../../images/playlist_add_black_24x24.png'
import closeIcon from '../../images/close_black_24x24.png'


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
        color: "#5b5b5b"
    },
    descriptionDiv: {
        width: "100%",
        display: 'flex',
        flexDirection: 'column',
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
        opacity: '0'
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
    title: {
        display: 'flex',
    },
    addCourse: {
        background: 'none',
        border: 'black',
        height: '100%',
    },
    popoverRoot: {
        // backgroundColor: 'rgba(0, 0, 0, 0.5)'
        // backgroundColor: 'red',
    },
    courseTitle: {
        maxWidth: '512px'
    }

}));


const Course = ({ course, addingCourses }) => {
    const tabletSize = useMediaQuery("(max-width:1150px");
    const classes = useStyles();
    const dispatch = useDispatch();
    const [expanded, setExpanded] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const state = useSelector(state => state);
    // console.log('user', state.onboardingReducer.user)
    // console.log(state.coursesReducer.courses)

    useEffect(() => {
        dispatch(courseEndPoint());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getYourLearningPathsOwned())
    }, [dispatch, state.learningPathReducer.learningPath]);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleAddCourse = (path_id, course_id, order) => {
        dispatch(postCourseToPath(path_id, course_id, Number(order)))
        setAnchorEl(null);
    }

    console.log(state.learningPathReducer.yourLearningPathsOwned)

    // const filteredPaths = state.learningPathReducer.yourLearningPaths.filter(path => path)


    const learningPaths = state.learningPathReducer.yourLearningPathsOwned

    const filteredPaths = []

    learningPaths.forEach(path => {
        if (!path.courseIds.includes(course.id)) filteredPaths.push(path)
    })

    return (
        <PopoverWrapper>
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} variant="h5" component="h2">
                        <span className={classes.courseTitle}>{course.name}</span>
                        {addingCourses && <button className={classes.addCourse} onClick={handleClick}><img src={playlistAdd} /></button>}
                        <div className={classes.popoverRoot}>
                            <Popover
                                id={id}
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'center',
                                    horizontal: 'right',
                                }}
                            >
                                {
                                    <AddCourseToPath className={classes.popoverRoot}>
                                        {
                                            <div>
                                                <div className='closePopover'>
                                                    <img src={closeIcon} onClick={handleClose}/>
                                                </div>
                                                <div className='learningPaths'>
                                                    <h4>Add to Learning Path</h4>
                                                    {
                                                        (filteredPaths.length > 0 ?
                                                            (
                                                                
                                                                filteredPaths.length > 0 && (filteredPaths.map((learningPath, index) => {
                                                                    return (
                                                                        <div className='learningPathTitle'>
                                                                            <h3>{learningPath.name}</h3>
                                                                            <button onClick={() => handleAddCourse(learningPath.id, course.id, learningPath.contentLength + 1)}><img src={playlistAdd}/></button>
                                                                        </div>

                                                                    )
                                                                }))

                                                            ) :
                                                            <p>Can't Add Course To Any Learning Paths</p>)
                                                    }
                                                </div>
                                                <div className='buttons'>
                                                    <button onClick={handleClose}>Done</button>
                                                    <a href='/learning-paths/add'>Create Learning Path</a>
                                                </div>
                                            </div>
                                        }
                                    </AddCourseToPath>
                                }
                            </Popover>
                        </div>
                    </Typography>
                    <CardActions className={classes.descriptionDiv} color="textSecondary" disableSpacing>
                        <Typography >{course.description && !expanded ? (`${course.description.substring(0, 100)} ...`) : null}</Typography>
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
                            <Typography className={classes.title} color="textSecondary" paragraph>
                                {course.description}
                            </Typography>
                        </CardContent>
                    </Collapse>
                    <Typography className={classes.pos} color="textSecondary">
                        {course.foreign_rating}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {course.foreign_instructors}
                    </Typography>
                    <Typography color="textSecondary">
                        {course.category ? (`Category: ${course.category}`) : (null)}
                    </Typography>
                </CardContent>
                <CardActions className={classes.buttonDiv}>
                    <Link to={`/courses/${course.id}`} ><button className={classes.buttonCourse} size="small">Go To Course</button></Link>
                </CardActions>
            </Card>
        </PopoverWrapper>


    )
}

export default Course;