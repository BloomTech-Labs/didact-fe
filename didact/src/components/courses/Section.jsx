import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import { updateSection, getLessonsBySectionId, deleteSection } from '../../store/actions';
import Lessons from './Lessons'
import AddLessons from './AddLessons'
import DeleteModal from './DeleteModal'

import AddCircleIcon from '@material-ui/icons/AddCircle';
import { AddButtonInSection, ButtonTextInSection, ButtonDiv, DidactButton, TrashCanEdit } from '../dashboard/ButtonStyles';
import { DidactField, DidactInput, DidactLabel, DidactTextArea, FormTitle } from '../dashboard/FormStyles'


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
        minWidth: 220,
        borderRadius: 15,
        margin: '10px 0',
        padding: '5px',
        boxShadow: 'none'
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
    descriptionDiv: {
        display: "flex",
        width: "100%",
        flexDirection: 'column',
        justifyContent: "space-between",
        fontSize: 12,
        // color: "#757575"
    },
    descriptionTitle: {
        marginBottom: "0px",
        color: 'white',
    },
    iconCircle: {
        color: "#575758",
        fontSize: "2rem",
    },

}));



const Section = ({ course, section, props }) => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const lessons = useSelector(state => state.sectionsReducer.lessons)
    const [expanded, setExpanded] = useState(false);
    const [sectionEdit, setSectionEdit] = useState(false)
    const [addLessonChange, setAddLessonChange] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [changes, setChanges] = useState({
        name: "",
        description: "",
        order: "",
        link: ""
    })

    useEffect(() => {
        setChanges({
            name: section.name,
            order: section.order,
            link: section.link,
            description: section.description,
        })
    }, [section])


    useEffect(() => {
        dispatch(getLessonsBySectionId(props.match.params.id, section.id))
    }, [dispatch, props.match.params.id, section.id])

    const toggleEdit = () => {
        setSectionEdit(!sectionEdit)
    }

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleChange = name => event => {
        setChanges({ ...changes, [name]: event.target.value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(updateSection(props.match.params.id, section.id, changes))
        setSectionEdit(true)
    };

    const handleLessonFormToggle = () => {
        setAddLessonChange(true)
    }

    const handleCancel = event => {
        event.preventDefault()
        setSectionEdit(false)
    }

    const handleDelete = () => {
        dispatch(deleteSection(course.id, section.id))
    }

    const handleModalOpen = () => {
        setOpenModal(true);
    };

    const handleModalClose = () => {
        setOpenModal(false);
    };

    return (
        <>
            {!sectionEdit ?
                (<Card className={classes.card} style={{background: '#386581', color: 'white'}}>
                    <CardContent style={{ marginBottom: "10px" }}>
                        <h3>
                            {section.name}
                        </h3>
                        <CardActions className={classes.descriptionDiv} disableSpacing>
                            <p className={classes.descriptionTitle} >{section.description && !expanded ? (`${section.description.substring(0, 100)} ...`) : null}</p>
                            <IconButton
                                className={clsx(classes.expand, {
                                    [classes.expandOpen]: expanded,
                                })}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon style={{color: 'white'}} />
                            </IconButton>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <p>
                                    {section.description}
                                </p>
                            </CardContent>
                        </Collapse>
                        <a style={{color: 'white'}} href={section.link} alt="section link">{section.link}</a>
                        <CardActions style={{borderBottom: 'grey solid 1px'}}>
                            <DidactButton style={{ marginLeft: '75%' }} onClick={toggleEdit} type='submit'>Edit Section</DidactButton>
                        </CardActions>
                        {lessons ? <Lessons course={course} section={section} props={props} lessons={lessons} /> : null}
                            <AddButtonInSection style = {{marginBottom: '-10px'}}onClick={handleLessonFormToggle}>
                                <AddCircleIcon className={classes.iconCircle} />
                                <ButtonTextInSection>Add Lesson</ButtonTextInSection>
                            </AddButtonInSection>
                        </CardContent>
                    {addLessonChange ? <AddLessons props={props} section={section} setAddLessonChange={setAddLessonChange} /> : null}
                </Card>)
                :
                (<Card className={classes.card}>
                    <CardContent>
                        <TrashCanEdit style={{ fontSize: '2.6rem' }} onClick={handleModalOpen}></TrashCanEdit>
                        {openModal ? <DeleteModal handleDelete={handleDelete} text={"this section"} open={openModal} handleModalClose={handleModalClose} /> : null}
                        <form onSubmit={handleSubmit} className={classes.container} noValidate autoComplete="off">
                            <FormTitle>Edit Section</FormTitle>
                            <DidactField>
                                <DidactLabel for='title'>Lesson Name</DidactLabel>
                                <DidactInput id='title' type='text' value={changes.name || ""} onChange={handleChange('name')} placeholder='Lesson Name' />
                            </DidactField>
                            <DidactField>
                                <DidactLabel for='order'>Section Order</DidactLabel>
                                <DidactInput id='order' type='text' value={changes.order || ""} onChange={handleChange('order')} placeholder='Section Order' />
                            </DidactField>
                            <DidactField>
                                <DidactLabel for='description'>Description</DidactLabel>
                                <DidactTextArea rows="8" id='description' value={changes.description || ""} onChange={handleChange('description')} placeholder='Description' />
                            </DidactField>
                            <DidactField>
                                <DidactLabel for='link'>URL Link</DidactLabel>
                                <DidactInput id='link' type='text' value={changes.link || ""} onChange={handleChange('link')} placeholder='URL Link' />
                            </DidactField>
                            <ButtonDiv>
                                <DidactButton style={{ marginLeft: '10px' }} onClick={handleCancel} size="small" variant="contained" >Cancel</DidactButton>
                                <DidactButton type='submit' style={{ marginRight: '4%' }} size="small" variant="contained" >Submit Edit</DidactButton>
                            </ButtonDiv>
                        </form>
                    </CardContent>
                </Card>)
            }
        </>
    )
}

export default Section