import React, { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import { updateLesson } from '../../store/actions'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// import { updateSection, getLessonsBySectionId } from '../../store/actions';


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
        marginLeft: '70%',
    },
    card: {
        width: '50vw',
        maxWidth: 500,
        minWidth: 375,
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

const Lesson = ({ ...props }) => {
    // console.log("props.lesson:", props.lesson)
    // console.log("lessonprops.lessonprops:", props.section)
    const [toggleLessonEdit, setToggleLessonEdit] = useState(false)
    const classes = useStyles();
    const dispatch = useDispatch()
    const [changes, setChanges] = useState({
        name: "",
        description: "",
        order: "",
        link: ""
    })
    const [filterLesson, setFilterLesson] = useState([])
    

    // useEffect(() => {
    //     if(props.lesson) setFilterLesson(props.lesson.filter(l => props.section.id === l.course_sections_id))
    // },[props.lesson])

    const handleToggleLessonEdit = () => {
        setToggleLessonEdit(!toggleLessonEdit)
    }

    const handleChange = name => event => {
        setChanges({ ...changes, [name]: event.target.value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        // dispatch(updateLesson(props.props.match.params.id, section.id, changes))
        // setSectionEdit(true)

        
    };
    return (
        <div style={{ display: 'flex' }}>
            <button onClick={handleToggleLessonEdit}>Edit Lesson</button>
            {!toggleLessonEdit ? <p><a style={{ textDecoration: 'none', color: 'black' }} href={props.lesson.link}>{props.lesson.name}</a> {props.lesson.type}</p>
                : <form onSubmit={handleSubmit} className={classes.container} noValidate autoComplete="off">
                    <CssTextField
                        id="standard-name"
                        label='Name'
                        className={classes.titleOrInstructorFields}
                        value={changes.name}
                        onChange={handleChange('name')}
                        margin="normal"
                        variant="outlined"
                        placeholder="Name"
                        InputProps={{ classes: { input: classes.input } }}
                    />
                    <CssTextField
                        id="standard-name"
                        label="Order"
                        className={classes.titleOrInstructorFields}
                        value={changes.order}
                        onChange={handleChange('order')}
                        margin="normal"
                        variant="outlined"
                        placeholder="Instructors"
                        InputProps={{ classes: { input: classes.input } }}
                    />
                    <CssTextField
                        id="standard-name"
                        label="Section Url"
                        className={classes.courseUrlField}
                        value={changes.link}
                        onChange={handleChange('link')}
                        margin="normal"
                        variant="outlined"
                        placeholder="Course Url"
                        InputProps={{ classes: { input: classes.input } }}
                    />
                    <Button type='submit' size="small" variant="contained" className={classes.button} >Submit Edit</Button>
                </form>}
        </div>
    )
}

export default Lesson