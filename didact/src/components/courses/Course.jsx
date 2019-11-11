import React, { useEffect, useState } from 'react';
import { courseEndPoint } from "../../store/actions/index.js";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getYourLearningPathsOwned, postCourseToPath } from '../../store/actions/index'

import { AddCourseToPath, PopoverWrapper } from './CourseStyles'
import { DidactButton } from '../dashboard/ButtonStyles'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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
        fontSize: "1.3rem",
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
  
    card: {
        maxWidth: 540,
        margin: '40px 0 40px 0',
        borderRadius: '15px',
        boxShadow: 'none',
        backgroundColor: '#386581',
        color: "white"
    },
    descriptionDiv: {
        width: "100%",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "space-between",
        fontSize: 14,
        color: "#757575",
        padding: '0px'
    },
    expand: {
        transform: 'rotate(0deg)',
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
        opacity: '0',
        padding: '0px'
    },
   
    title: {
        display: 'flex',
    },
    addCourse: {
        background: 'none',
        border: 'black',
        height: '100%',
    },
    courseTitle: {
        maxWidth: '512px',
        paddingLeft: '20px'
    }

}));


const Course = ({ course, addingCourses }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [expanded, setExpanded] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const state = useSelector(state => state);

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

    const learningPaths = state.learningPathReducer.yourLearningPathsOwned

    const filteredPaths = []

    learningPaths.forEach(path => {
        if (!path.courseIds.includes(course.id)) filteredPaths.push(path)
    })

    return (
        <PopoverWrapper>
            <Card className={classes.card}>
                <CardContent>
                    <h3 className={classes.title}>
                        <div className='courseTitle'>
                            <span className={classes.courseTitle}>{course.name}</span>
                        </div>
                        {addingCourses && <button className={classes.addCourse} onClick={handleClick}><img src={playlistAdd} alt='Add Course' /></button>}
                        <div>
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
                                    <AddCourseToPath >
                                        {
                                            <div>
                                                <div style ={{marginTop: '10px', paddingRight: '5px'}} className='closePopover'>
                                                    <img src={closeIcon} onClick={handleClose} alt='Close'/>
                                                </div>
                                                <div className='learningPaths'>
                                                    <h4 style={{margin: " -5px auto"}}>Add to Learning Path</h4>
                                                    {
                                                        (filteredPaths.length > 0 ?
                                                            (
                                                                
                                                                filteredPaths.length > 0 && (filteredPaths.map((learningPath, index) => {
                                                                    return (
                                                                        <div className='learningPathTitle' key={index}>
                                                                            <h5>{learningPath.name}</h5>
                                                                            <button onClick={() => handleAddCourse(learningPath.id, course.id, learningPath.contentLength + 1)}><img src={playlistAdd} alt='Add Course'/></button>
                                                                        </div>

                                                                    )
                                                                }))

                                                            ) :
                                                            <p>Can't Add Course To Any Learning Paths</p>)
                                                    }
                                                </div>
                                                <div className='buttons'>
                                                    <DidactButton onClick={handleClose}>Done</DidactButton>
                                                    <a href='/learning-paths/add'>Create Learning Path</a>
                                                </div>
                                            </div>
                                        }
                                    </AddCourseToPath>
                                }
                            </Popover>
                        </div>
                    </h3>
                    <CardActions className={classes.descriptionDiv} style = {{color: "white"}} disableSpacing>
                        <p >{course.description && !expanded ? (`${course.description.substring(0, 100)} ...`) : null}</p>
                        <IconButton
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expanded,
                            })}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon style={{fontSize: '2.8rem'}}/>
                        </IconButton>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent style = {{padding: 'none'}}>
                            <p className={classes.title} style = {{color: "white"}}>
                                {course.description}
                            </p>
                        </CardContent>
                    </Collapse>
                    <p className={classes.pos}>{course.foreign_rating}</p>
                    <p className={classes.pos}>{course.foreign_instructors}</p>
                    <p className={classes.pos}>{course.category ? (`Category: ${course.category}`) : (null)}</p>
                </CardContent>
                <CardActions className={classes.buttonDiv}>
                    <Link to={`/courses/${course.id}`} ><DidactButton size="small">Go To Course</DidactButton></Link>
                </CardActions>
            </Card>
        </PopoverWrapper>


    )
}

export default Course;