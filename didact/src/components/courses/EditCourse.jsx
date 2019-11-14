import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCourseById, editCourse, deleteCourse } from '../../store/actions'
import Tags from './Tags'
import AddSection from './AddSection'
import Sections from './Sections'

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
//Material UI Icons
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import IconButton from '@material-ui/core/IconButton';
import DeleteModal from './DeleteModal'
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import { AddButton, ButtonText, ButtonDiv, FinishEdit, TrashCanEdit, DidactButton } from '../dashboard/ButtonStyles';
import { DidactField, DidactInput, DidactLabel, DidactTextArea, FormTitle } from '../dashboard/FormStyles';


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
    container: {
        display: 'flex',
        flexWrap: 'wrap',
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
        flexDirection: 'column',
        justifyContent: "space-between",
        fontSize: '1.4rem',
        padding: '0px'
    },
    span: {
        cursor: 'pointer',
        "&:hover":{
          color: 'white'
        }
      }

}));

const EditCourse = ({ props, id }) => {
    const state = useSelector(state => state)
    const course = state.coursesReducer.course
    const dispatch = useDispatch()
    const [expanded, setExpanded] = React.useState(false);
    const [courseEdit, setCourseEdit] = useState(false)
    const [addSectionChange, setAddSectionChange] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [editCourseText, setEditCourseText] = useState('')
    const [changes, setChanges] = useState({
        name: "",
        category: "",
        description: "",
        foreign_instructors: "",
        foreign_rating: "",
        link: ""
    })
    const classes = useStyles(courseEdit);

    useEffect(() => {
        dispatch(getCourseById(id))
    }, [id, dispatch])

    useEffect(() => {
        if(!props.phoneSize){
            setEditCourseText("Edit Course")
        } else {
            setEditCourseText("Edit")
        }
    })

    useEffect(() => {
        setChanges({
            name: course.name,
            category: course.category,
            description: course.description,
            foreign_instructors: course.foreign_instructors,
            foreign_rating: course.foreign_rating,
            link: course.link
        })
    }, [course])

    const toggleEdit = () => {
        setCourseEdit(!courseEdit)
    }

    const handleCourseSubmit = event => {
        event.preventDefault()
        dispatch(editCourse(course.id, changes))
        toggleEdit()
    }

    const handleChange = name => event => {
        setChanges({ ...changes, [name]: event.target.value });
    };

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleSectionFormToggle = () => {
        setAddSectionChange(true)
    }

    const handleCancel = event => {
        event.preventDefault()
        toggleEdit()
    }

    const backToCourse = () => {
        if (props.match.params.pathId) {
            props.history.push(`/learning-paths/${props.match.params.pathId}`)
        } else {
            props.history.push(`/courses/${props.match.params.id}`)
        }

    }

    const handleBack = () => {
        props.history.push('/courses')
        
    } 


    const handleDelete = () => {
        dispatch(deleteCourse(props.match.params.id, props.history))
    }

    const handleModalOpen = () => {
        setOpenModal(true);
    };

    const handleModalClose = () => {
        setOpenModal(false);
    };



    if (!state.coursesReducer.isLoading) {
        return (
            <>
                {/* <FinishEdit style={{ fontSize: '1.4rem' }} onClick={backToCourse}>{(props.match.params.pathId ? `<- BACK TO PATH` : `<- BACK TO COURSE`)}</FinishEdit> */}
                <div style={{display: 'flex', justifyContent: 'space-between', margin: '-10px 10px 10px 10px', borderBottom: '1px solid black'}}>
                <p style={{fontWeight: 'bold', marginLeft: '10px', display: 'flex', flexDirection:'row', alignItems: 'center'}}><span className={classes.span}  onClick={handleBack}>Courses</span><ChevronRightIcon style={{fontSize: '1.6rem'}}/><span className={classes.span} onClick={backToCourse}>{course.name && course.name.substring(0, 15)}...</span><ChevronRightIcon style={{fontSize: '1.6rem'}}/><span>Edit</span></p>
                </div>
                <div className={classes.root}>
                    {!courseEdit ?
                        (<Card className={classes.card} style={{ background: '#386581', color: 'white' }}>
                            <CardContent >
                                <h3>{course.name}</h3>
                                <CardActions className={classes.descriptionDiv} disableSpacing>
                                    <p>{course.description && !expanded ? (`${course.description.substring(0, 100)} ...`) : null}</p>
                                    <IconButton
                                        className={clsx(classes.expand, {
                                            [classes.expandOpen]: expanded,
                                        })}
                                        onClick={handleExpandClick}
                                        aria-expanded={expanded}
                                        aria-label="show more"
                                        style={{ color: 'white', marginTop: '-15px' }}
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
                                <a style={{ color: 'white' }} href={course.link} alt="course link">{course.link}</a>
                                <p>{course.category ? (`Category: ${course.category}`) : (null)}</p>
                            </CardContent>
                            <CardActions>
                                <DidactButton onClick={toggleEdit} style={{ marginLeft: '75.5%' }} type='submit'>{editCourseText}</DidactButton>
                            </CardActions>
                        </Card>)
                        :
                        (<Card className={classes.card}>
                            <CardContent>
                                <TrashCanEdit style={{fontSize: '2.6rem'}} onClick={handleModalOpen}></TrashCanEdit>
                                {openModal ? <DeleteModal handleDelete={handleDelete} text={"this course"} open={openModal} handleModalClose={handleModalClose} /> : null}
                                <form onSubmit={handleCourseSubmit} className={classes.container} noValidate autoComplete="off">
                                    <FormTitle>Course Overview</FormTitle>
                                    <DidactField>
                                        <DidactLabel for='title'>Course Name</DidactLabel>
                                        <DidactInput id='title' type='text' value={changes.name || ""} onChange={handleChange('name')} placeholder='Course Name' />
                                    </DidactField>
                                    <DidactField>
                                        <DidactLabel for='instructors'>Instructors</DidactLabel>
                                        <DidactInput id='instructors' type='text' value={changes.foreign_instructors || ""} onChange={handleChange('foreign_instructors')} placeholder='Instructors' />
                                    </DidactField>
                                    <DidactField>
                                        <DidactLabel for='description'>Description</DidactLabel>
                                        <DidactTextArea rows="8" id='description' value={changes.description || ""} onChange={handleChange('description')} placeholder='Description' />
                                    </DidactField>
                                    <DidactField>
                                        <DidactLabel for='url'>Course Url</DidactLabel>
                                        <DidactInput id='url' type='text' value={changes.link || ""} onChange={handleChange('link')} placeholder='Course Url' />
                                    </DidactField>
                                    <DidactField>
                                        <DidactLabel for='category'>Category</DidactLabel>
                                        <DidactInput id='category' type='text' value={changes.category || ""} onChange={handleChange('category')} placeholder='Category' />
                                    </DidactField>
                                    <ButtonDiv>
                                        <DidactButton style={{ marginLeft: '10px' }} onClick={handleCancel}>Cancel</DidactButton>
                                        <DidactButton type='submit' style={{ marginRight: '4%' }}>Submit Edit</DidactButton>
                                    </ButtonDiv>
                                </form>
                            </CardContent>
                        </Card>)
                    }
                    <Tags course={course} props={props} />
                    <Sections course={course} props={props} />
                    {addSectionChange ?
                        (<div>
                            <AddSection course={course} props={props} setAddSectionChange={setAddSectionChange} />
                            <AddButton onClick={handleSectionFormToggle} >
                                <AddCircleRoundedIcon className={classes.circleIcon} />
                                <ButtonText>Add Section</ButtonText>
                            </AddButton>
                        </div>)
                        :
                        (<div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
                            <AddButton onClick={handleSectionFormToggle} >
                                <AddCircleRoundedIcon className={classes.circleIcon} />
                                <ButtonText>Add Section</ButtonText>
                            </AddButton>
                        </div>)
                    }
                </div>
            </>
        )
    } else {
        return <h1>Loading...</h1>
    }
}

export default EditCourse;
