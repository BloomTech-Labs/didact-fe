import React, { useState, useEffect } from 'react'
import { addTag, getTags } from '../../store/actions'
import { useSelector, useDispatch } from 'react-redux';
import { CoursesCard, CourseMenuDiv, CourseDiv } from '../dashboard/DashboardStyles';
import { TagDelete, P } from '../dashboard/ButtonStyles';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles(theme => ({
    card: {
        width: '50vw',
        maxWidth: 500,
        minWidth: 375,
        borderRadius: 15,
        margin: '10px 0'
    },
    button: {
        boxShadow: 'none',
        borderRadius: '15px',
        background: '#EBE8E1',
        marginLeft: '76.5%',
       
    },
    tagDisplay: {
        display: 'flex',
        flexFlow: 'row wrap',
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
        marginLeft: '10px',
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
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
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
    const allTags = useSelector(state => state.tagsReducer.tags)
    const [openForm, setOpenForm] = useState(false)
    const [tag, setTag] = useState({
        tag: ''
    });

    // const inputLabel = React.useRef("100");
    // const [labelWidth, setLabelWidth] = React.useState(0);
    // React.useEffect(() => {
    //     setLabelWidth(inputLabel.current.offsetWidth);
    // }, []);


    // const [values, setValues] = React.useState({
    //     age: '',
    //     name: 'hai',
    //   });



    useEffect(() => {
        dispatch(getTags())
    }, [])
 
    const handleChange = name => event => {
        setTag({ ...tag, [name]: event.target.value });
       
    };

    const handleClick = () => {
        setOpenForm(!openForm)
    }

    console.log("props", props.props)
    const handleSubmit = event => {
        event.preventDefault()
        dispatch(addTag(props.props.props.match.params.id, tag))
        setTag({tag: ''})
    }

    const handleSubmitSelect = event => {
        event.preventDefault()
        dispatch(addTag(props.props.props.match.params.id, tag))
        setTag({tag: ''})
    }
    const handleTagDelete = () => {

    }
    // const handleChangeSelect = event => {
    //     setValues(oldValues => ({
    //       ...oldValues,
    //       [event.target.name]: event.target.value,
    //     }));
    //   };

    return (
        <>
            <Card className={classes.card}>
                <CardContent className={classes.tagDisplay}>
                    {props.course.tags ? props.course.tags.map((tag, i) => {
                        return (
                            <>
                            <div>
                                
                                <div style={{position: 'relative'}} key={i} className={classes.title} color="textSecondary" gutterBottom>
                                <TagDelete onClick={handleTagDelete}><P>x</P></TagDelete><span style={{paddingRight: '5px'}}>{tag}</span>
                                </div>
                                
                            </div>
                            
                            </>
                        )
                    }) : null}
                </CardContent>
                <CardActions>
                    <Button onClick={handleClick} type='submit' size="small" variant="contained" className={classes.button} >New Tag</Button>
                </CardActions>
                {openForm ? (
                    <>
                        <form onSubmit={handleSubmit} className={classes.container} noValidate autoComplete="off">
                            <CssTextField
                                id="standard-name"
                                label='Add Tag'
                                className={classes.titleOrInstructorFields}
                                value={tag.name}
                                onChange={handleChange('tag')}
                                margin="normal"
                                variant="outlined"
                                placeholder="Name"
                                InputProps={{ classes: { input: classes.input } }}
                            />
                        </form>
                        <form>
                            <select
                                onChange={handleChange('tag')}
                             >
                                <option>Pick a Tag:</option>
                                {allTags.map(el => {
                                            return (<option key={el.id} value={el.name} >{el.name}</option>)
                                        })}
                             </select>
                            <CardActions>
                                     <Button onClick={handleSubmitSelect} type='submit' size="small" variant="contained" className={classes.button} >Add Tag</Button>
                            </CardActions>
                        </form>

                    </>
                ) : null}
            </Card>
        </>
    )
}

export default Tags;

