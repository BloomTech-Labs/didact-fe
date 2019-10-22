import React, { useState } from 'react'
import { addTag, getTags } from '../../store/actions'
import { useSelector, useDispatch } from 'react-redux';
import { CoursesCard, CourseMenuDiv, CourseDiv } from '../dashboard/DashboardStyles';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    card: {
        minWidth: 275,
        borderRadius: 15,
    },
    button: {
        boxShadow: 'none',
        borderRadius: '15px',
        background: '#EBE8E1',
        marginLeft: '76.5%',
    },
    tagDisplay: {
        display: 'flex',
        flexDirection: 'row',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    input: {
        backgroundColor: '#F4F8FA',
        filter: "brightness(95%)",
        borderRadius: 15,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        margin: '3px',
        padding: '5px 10px',
        borderRadius: '10px',
        background: '#5B5B5B',
        color: 'white'
    },
    titleOrInstructorFields: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '45%',
        [`& fieldset`]: {
            borderRadius: 15,
        },
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        // margin: '10px',
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

const Tags = (props) => {
    console.log(props)
    const classes = useStyles();
    const dispatch = useDispatch()
    const [openForm, setOpenForm] = useState(false)
    const [tag, setTag] = useState({
        name: ''
    });

    const handleChange = name => event => {
    setTag({ ...tag, [name]: event.target.value });
  };

    const handleClick = () => {
        setOpenForm(!openForm)
    }

    const handleSubmit = event => {
        event.preventDefault()
        dispatch(addTag(props.course.id, tag))
    }

    return (
        <>
            <Card className={classes.card}>
                <CardContent className={classes.tagDisplay}>
                    {props.course.tags ? props.course.tags.map(tag => {
                        return (
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                {tag}
                            </Typography>
                        )
                    }) : null}
                </CardContent>
                <CardActions>
                    <Button onClick = {handleClick} type='submit' size="small" variant="contained" className={classes.button} >Add Tag</Button>
                </CardActions>
                {openForm ? (
                    <form onSubmit={handleSubmit} className={classes.container} noValidate autoComplete="off">
                        <CssTextField
                            id="standard-name"
                            label='Add Tag'
                            className={classes.titleOrInstructorFields}
                            value={tag.name}
                            onChange={handleChange('name')}
                            margin="normal"
                            variant="outlined"
                            placeholder="Name"
                            InputProps={{ classes: { input: classes.input } }}
                        />
                    </form>
                ) : null}
            </Card>
        </>
    )
}

export default Tags;

