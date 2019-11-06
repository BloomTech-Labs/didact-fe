import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { removeCourseFromPath, deletePathItem } from '../../store/actions/index'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import DeleteModal from '../courses/DeleteModal'
import {FinishEdit, DeleteForm} from '../dashboard/ButtonStyles';
import {DraggableDiv} from "./DraggableStyles.js";
import EditPathItems from './pathItems/EditPathItems';


import { Draggable } from "react-beautiful-dnd";

const useStyles = makeStyles(theme => ({

    root: {
        width: '100%',
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start"
    },
    button: {
        boxShadow: 'none',
        borderRadius: '15px',
        background: '#EBE8E1',
        // marginLeft: '70%',
    },
    card: {
        width: '100%',
        maxWidth: 600,
        // minWidth: 220,
        borderRadius: 15,
        margin: '10px 0'
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    pos: {
        marginBottom: 12,
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
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        // margin: '10px',
    },
    input: {
        backgroundColor: '#F4F8FA',
        filter: "brightness(95%)",
        borderRadius: 15,

    },
    inputDescription: {
        backgroundColor: '#F4F8FA',
        filter: "brightness(95%)",
        borderRadius: 15,
        margin: '-16px -10px -16px -10px',
        padding: '10px',

    },
    titleOrInstructorFields: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '45%',
        [`& fieldset`]: {
            borderRadius: 15,
        },
    },
    descriptionField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '93%',
        [`& fieldset`]: {
            borderRadius: 15,
            margin: "3px",

        },
    },

    courseUrlField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '93%',
        [`& fieldset`]: {
            borderRadius: 15,
        },
    },

    descriptionDiv: {
        display: "flex",
        width: "100%",
        flexDirection: 'column',
        justifyContent: "space-between",
        fontSize: 12,
        color: "#757575"
        // padding: '0'
    },
    descriptionTitle: {
        marginBottom: "0px",
    },

}));

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'gray',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'gray',
            },
            '&:hover fieldset': {
                borderColor: 'gray',
            },
            '&.Mui-focused fieldset': {
                border: '1px solid gray',
            },

        },
    },
})(TextField);

const CourseLearningPath = ({ course, index, props}) => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const [toggleEdit, setToggleEdit] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [modalText, setModalText] = useState("");

    useEffect(() => {
        if(course.type){
            setModalText(" item from this learning path")
        } else {
            setModalText(" course from this learning path")
        }
    }, [course.type])

    // console.log(course)
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleToggleEdit = () => {
        setToggleEdit(!toggleEdit)
    }
    
    const handleDelete = (course) => {
        if(!course.type){
            dispatch(removeCourseFromPath(props.match.params.id, course.id))
            setOpenModal(false) 
        } else {
            dispatch(deletePathItem(props.match.params.id, course.id))
            setOpenModal(false)
        }
    }

    const handleModalOpen = () => {
        setOpenModal(true);
    };

    const handleModalClose = () => {
        setOpenModal(false);
    };


    return (
        <Draggable draggableId={`${index}`} index={index} className={classes.root}>
            {(provided, snapshot) => (
                !toggleEdit ? ( 
                    <DraggableDiv className={classes.card}  
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    isDragging={snapshot.isDragging}>
                    <CardContent >
                        <DeleteForm onClick={handleModalOpen}>X</DeleteForm>
                        {openModal ? <DeleteModal handleDelete ={() => handleDelete(course)} text={modalText} open={openModal} handleModalClose={handleModalClose} /> : null}
                        <Typography variant="h5" component="h2">
                            {course.name}
                        </Typography>
                        <CardActions className={classes.descriptionDiv} disableSpacing>
                            <Typography color="textSecondary" className={classes.descriptionTitle} > {course.description && !expanded ? (`${course.description.substring(0, 100)} ...`) : null}</Typography>
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
                                <Typography color="textSecondary" paragraph>
                                    {course.description}
                                </Typography>
                            </CardContent>
                        </Collapse>
                        <Typography >
                            {course.foreign_instructors}
                        </Typography>
                        <Typography >
                            {course.foreign_rating}
                        </Typography>
                        <a href={course.link} variant="body2" component="p" alt = "course link" style = {{color: 'black', cursor: 'pointer'}}>
                        {course.link}
                         </a>
                        <Typography color="textSecondary">
                            {course.category ? (`Category: ${course.category}`) : (null)}
                        </Typography>
                        <Typography color="textSecondary">
                            {course.type ? (course.type) : (null)}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        {/* <Button style={{marginLeft: '70.5%'}} type='submit' size="small" variant="contained" className={classes.button} >Edit Course</Button> */}
                        {course.path_id ? <Button onClick = {handleToggleEdit} style={{marginLeft: '80%'}} type='submit' size="small" variant="contained" className={classes.button} >Edit Item</Button> : null}
                    </CardActions>
                </DraggableDiv>
                ) : (course.path_id ? (<EditPathItems course = {course} props = {props} handleToggleEdit = {handleToggleEdit}/>) : null)
            )}

            </Draggable> 
        )
 }   

 export default CourseLearningPath;