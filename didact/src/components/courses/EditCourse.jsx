import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCourseById, editCourse } from '../../store/actions'
import { AddButton, PlusDiv, Plus, ButtonText } from '../dashboard/ButtonStyles';
import Tags from './Tags'
import AddSection from './AddSection'
import Sections from './Sections'

import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


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

const EditCourse = (props) => {
    const course = useSelector(state => state.coursesReducer.course)
    const dispatch = useDispatch()
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [courseEdit, setCourseEdit] = useState(true)
    const [addSectionChange, setAddSectionChange] = useState(false);
    const [changes, setChanges] = useState({

        name: "",
        description: "",
        foreign_instructors: "",
        foreign_rating: "",
        link: ""
    })

    useEffect(() => {
        dispatch(getCourseById(props.id))
    }, [props.id, dispatch])

    useEffect(() => {
        setChanges({
            name: course.name,
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

    return (
        <div className={classes.root}>
            {courseEdit ?
                (
                    <Card className={classes.card}>
                        <CardContent >
                            <Typography variant="h5" component="h2">
                                {course.name}
                            </Typography>
                            <CardActions className={classes.descriptionDiv} disableSpacing>
                                <Typography className={classes.descriptionTitle} >Description:</Typography>
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
                                    <Typography paragraph>
                                        {course.description}
                                    </Typography>
                                </CardContent>
                            </Collapse>
                            <Typography color="textSecondary">
                                {course.foreign_instructors}
                            </Typography>
                            <Typography color="textSecondary">
                                {course.foreign_rating}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {course.link}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button onClick={toggleEdit} type='submit' size="small" variant="contained" className={classes.button} >Edit Course</Button>
                        </CardActions>
                    </Card>
                ) : (

                    <Card className={classes.card}>
                        <CardContent>
                            <Typography className={classes.title} gutterBottom>
                                Course Overview
                                </Typography>
                            <form onSubmit={handleCourseSubmit} className={classes.container} noValidate autoComplete="off">
                                <CssTextField
                                    id="standard-name"
                                    label='Name'
                                    className={classes.titleOrInstructorFields}
                                    value={changes.name}
                                    onChange={handleChange('name')}
                                    margin="normal"
                                    variant="outlined"
                                    placeholder="Name"
                                    InputProps={{ classes: { underline: classes.blackUnderline, input: classes.input } }}
                                />
                                <CssTextField
                                    id="standard-name"
                                    label="Instructors"
                                    className={classes.titleOrInstructorFields}
                                    value={changes.foreign_instructors}
                                    onChange={handleChange('foreign_instructors')}
                                    margin="normal"
                                    variant="outlined"
                                    placeholder="Instructors"
                                    InputProps={{ classes: { underline: classes.blackUnderline, input: classes.input } }}
                                />
                                <CssTextField
                                    id="standard-name"
                                    label="Description"
                                    className={classes.descriptionField}
                                    value={changes.description}
                                    onChange={handleChange('description')}
                                    margin="normal"
                                    multiline={true}
                                    rows='6'
                                    variant="outlined"
                                    placeholder="Description"
                                    InputProps={{ classes: { input: classes.inputDescription } }}
                                />
                                <CssTextField
                                    id="standard-name"
                                    label="Rating"
                                    className={classes.courseUrlField}
                                    value={changes.foreign_rating}
                                    onChange={handleChange('foreign_rating')}
                                    margin="normal"
                                    variant="outlined"
                                    placeholder="Course Url"
                                    InputProps={{ classes: { underline: classes.blackUnderline, input: classes.input } }}
                                />
                                <CssTextField
                                    id="standard-name"
                                    label="Course Url"
                                    className={classes.courseUrlField}
                                    value={changes.link}
                                    onChange={handleChange('link')}
                                    margin="normal"
                                    variant="outlined"
                                    placeholder="Course Url"
                                    InputProps={{ classes: { underline: classes.blackUnderline, input: classes.input } }}
                                />
                                <Button type='submit' size="small" variant="contained" className={classes.button} >Edit Course</Button>
                            </form>
                        </CardContent>
                    </Card>
                )
            }
            <Tags course={course} props={props} />
            <Sections course={course} props = {props}/>
            {addSectionChange ? (
            <div>
                    <AddSection course={course} props={props} setAddSectionChange = {setAddSectionChange}/>
                    <AddButton onClick={handleSectionFormToggle} >
                        <PlusDiv>
                            <Plus>+</Plus>
                        </PlusDiv>
                        <ButtonText>Add Section</ButtonText>
                    </AddButton>
                </div>
                ) : (
                    <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
                        <AddButton onClick={handleSectionFormToggle} >
                            <PlusDiv>
                                <Plus>+</Plus>
                            </PlusDiv>
                            <ButtonText>Add Section</ButtonText>
                        </AddButton>
                    </div> 
                    )}
        </div>
    )
}

export default EditCourse;