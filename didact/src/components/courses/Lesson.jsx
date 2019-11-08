import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { updateLesson, deleteLesson } from '../../store/actions'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {EditLessonButton, EditIconButton, ButtonDiv, DeleteForm, TrashCan, DidactButton} from '../dashboard/ButtonStyles'
import { DidactField, DidactInput, DidactLabel, DidactTextArea } from '../dashboard/FormStyles'
import DeleteModal from './DeleteModal';

import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import BookIcon from '@material-ui/icons/Book';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DescriptionIcon from '@material-ui/icons/Description';

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
        height: '30px',
    },
    card: {
        width: '100%',
        maxWidth: 500,
        minWidth: 220,
        borderRadius: 15,
        margin: '10px 0',
        boxShadow: 'none',
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
        backgroundColor: 'white',
        margin: '0 -21px'
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
        flexDirection: "row",
        justifyContent: 'center',
        // padding: '0'
    },
    descriptionTitle: {
        marginBottom: "0px"
    },
    iconCircle: {
        color: "#575758",
        fontSize: "2rem",
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

const Lesson = ({ course, section, lesson, props }) => {
    const [toggleLessonEdit, setToggleLessonEdit] = useState(false)
    const classes = useStyles();
    const dispatch = useDispatch()
    const [openModal, setOpenModal] = useState(false);
    const [changes, setChanges] = useState({
        name: "",
        order: "",
        link: "",
        type: ""
    })

    const handleToggleLessonEdit = () => {
        setToggleLessonEdit(!toggleLessonEdit)
    }

    useEffect(() => {
        setChanges({
            name: lesson.name,
            order: lesson.order,
            link: lesson.link,
            type: lesson.type
        })
    }, [lesson])

    const handleChange = name => event => {
        setChanges({ ...changes, [name]: event.target.value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(updateLesson(props.match.params.id, section.id, lesson.id, changes))
        handleToggleLessonEdit()
    };

    const handleCancel = event => {
        event.preventDefault()
        setToggleLessonEdit(false)
    }

    const handleDelete = () => {
        dispatch(deleteLesson(course.id, section.id, lesson.id))
    }

    const handleModalOpen = () => {
        setOpenModal(true);
    };

    const handleModalClose = () => {
        setOpenModal(false);
    };

    return (
        <div style={{margin: '15px 0'}}>
            {!toggleLessonEdit ?
                 <>
                 {openModal ? <DeleteModal handleDelete={handleDelete} text={"lesson"} open={openModal} handleModalClose={handleModalClose} /> : null}
                <div style={{ display: 'flex', alignItems: 'center', margin: '0 0 15px 0', borderBottom: 'grey solid 1px'}}>
                    <TrashCan style={{fontSize: "2.6rem"}} onClick={handleModalOpen} />
                    <EditIconButton style={{fontSize: "2.6rem"}} onClick={handleToggleLessonEdit} />
                    <span style={{paddingLeft: '20px', width: '80%', display: "flex", flexDirection: 'row wrap', justifyContent: 'space-between', marginRight: '10px'}}>
                        <a style={{ textDecoration: 'none', color: 'white', textAlign: "left", paddingRight: '5px'}} href={lesson.link}>{lesson.name}</a>
                    </span>
                    <span style={{marginRight: '10px'}} >{lesson.type === "video" 
                        ? (<PlayCircleFilledIcon style={{fontSize: "2.6rem"}}/>) : lesson.type === "reading" 
                        ? (<BookIcon style={{fontSize: "2.6rem"}}/>) : lesson.type === "quiz" 
                        ? (<AssignmentIcon style={{fontSize: "2.6rem"}} />) : lesson.type === 'assignment' || 'discussion' 
                        ? (<DescriptionIcon style={{fontSize: "2.6rem"}}/>) : (null)}
                        </span>
                </div>
                 </>
                : <>
                {/* <DeleteForm onClick={handleModalOpen}>X</DeleteForm> */}
                 <form onSubmit={handleSubmit} className={classes.container} noValidate autoComplete="off">
                    <DidactField>
                        <DidactLabel for='title'>Lesson Name</DidactLabel>
                        <DidactInput id='title' type='text' value={changes.name || ""} onChange={handleChange('name')} placeholder='Lesson Name' />  
                    </DidactField>
                    <DidactField>
                        <DidactLabel for='link'>URL Link</DidactLabel>
                        <DidactInput id='link' type='text' value={changes.link || ""} onChange={handleChange('link')} placeholder='URL Link' />  
                    </DidactField>
                    <DidactField>
                        <DidactLabel for='order'>Order</DidactLabel>
                        <DidactInput id='order' type='text' value={changes.order || ""} onChange={handleChange('order')} placeholder='Order' />  
                    </DidactField>
                    <DidactField>
                        <DidactLabel for='type'>Type</DidactLabel>
                        <DidactInput id='type' type='text' value={changes.type || ""} onChange={handleChange('type')} placeholder='Type' />  
                    </DidactField>
                    <ButtonDiv>
                        <DidactButton style={{marginLeft: '10px'}} onClick={handleCancel} size="small" variant="contained" >Cancel</DidactButton>
                        <DidactButton type="submit" style={{marginRight: '4%'}} size="small" variant="contained"  >Submit Edit</DidactButton>
                    </ButtonDiv>                   
                </form> </>}
        </div>
    )
}

export default Lesson