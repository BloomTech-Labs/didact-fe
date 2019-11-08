import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { removeCourseFromPath, deletePathItem } from '../../store/actions/index'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import DeleteModal from '../courses/DeleteModal'
import { TrashCanEdit, DidactButton } from '../dashboard/ButtonStyles';
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
    card: {
        width: '100%',
        maxWidth: 540,
        borderRadius: 15,
        margin: '10px 0',
        boxShadow: 'none',
        backgroundColor: '#386581',
        color: 'white'
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
    
    descriptionDiv: {
        display: "flex",
        width: "100%",
        flexDirection: 'column',
        justifyContent: "space-between",
        fontSize: 12,
        color: "white"
    },
    descriptionTitle: {
        marginBottom: "0px",
    },

}));


const CourseLearningPath = ({ course, index, props}) => {
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
        <Draggable draggableId={`${index}`} index={index} className={classes.root} >
            {(provided, snapshot) => (
                !toggleEdit ? ( 
                    <DraggableDiv className={classes.card} 
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef} 
                    isDragging={snapshot.isDragging}>
                    <CardContent >
                        <TrashCanEdit style={{fontSize: '2.6rem'}} onClick={handleModalOpen}></TrashCanEdit>
                        {openModal ? <DeleteModal handleDelete ={() => handleDelete(course)} text={modalText} open={openModal} handleModalClose={handleModalClose} /> : null}
                        <h3>{course.name}</h3>
                        <CardActions className={classes.descriptionDiv} disableSpacing >
                            <p className={classes.descriptionTitle} > {course.description && !expanded ? (`${course.description.substring(0, 100)} ...`) : null}</p>
                            <IconButton
                                className={clsx(classes.expand, {
                                    [classes.expandOpen]: expanded,
                                })}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                                style={{ color: 'white'}}
                            >
                                <ExpandMoreIcon />
                            </IconButton>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <p>{course.description}</p>
                            </CardContent>
                        </Collapse>
                        <p>{course.foreign_instructors}</p>
                        <p>{course.foreign_rating}</p>
                        <a href={course.link} alt = "course link" style = {{color: 'white', cursor: 'pointer'}}>
                        {course.link}
                         </a>
                        <p>{course.category ? (`Category: ${course.category}`) : (null)}</p>
                        <p>{course.type ? (course.type) : (null)}</p>
                    </CardContent>
                    <CardActions>
                        {/* <Button style={{marginLeft: '70.5%'}} type='submit' size="small" variant="contained" className={classes.button} >Edit Course</Button> */}
                        {course.path_id ? <DidactButton onClick = {handleToggleEdit} style={{marginLeft: '80%'}} type='submit' size="small" variant="contained">Edit Item</DidactButton> : null}
                    </CardActions>
                </DraggableDiv>
                ) : (course.path_id ? (<EditPathItems course = {course} props = {props} handleToggleEdit = {handleToggleEdit}/>) : null)
            )}

            </Draggable> 
        )
 }   

 export default CourseLearningPath;