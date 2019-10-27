import React, { useState} from 'react';

import { useDispatch } from 'react-redux';
import { addSectionToCourse } from '../../store/actions'

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { ButtonDiv } from '../dashboard/ButtonStyles'


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
        // width: '50vw',
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
const initalValues = {
    name: "",
    description: "",
    order: "",
    link: ""
}

const AddSection = ({course, props, setAddSectionChange}) => {
    console.log("Add Section Props: ", props)
    const classes = useStyles();
    const dispatch = useDispatch()
    const [values, setValues] = useState(initalValues);

    
    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(addSectionToCourse(props.match.params.id, values))
        setAddSectionChange(false)
    };

    const handleCancel = event => {
        event.preventDefault()
        setAddSectionChange(false)
        setValues(initalValues)
    }

    return (
        <>
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} gutterBottom>
                        Add Section
                     </Typography>
                    <form onSubmit={handleSubmit} className={classes.container} noValidate autoComplete="off">
                        <CssTextField
                            id="standard-name"
                            label='Name'
                            className={classes.titleOrInstructorFields}
                            value={values.name}
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
                            value={values.order}
                            onChange={handleChange('order')}
                            margin="normal"
                            variant="outlined"
                            placeholder="Order"
                            InputProps={{ classes: { input: classes.input } }}
                        />
                        <CssTextField
                            id="standard-name"
                            label="Description"
                            className={classes.descriptionField}
                            value={values.description}
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
                            label="Section Url"
                            className={classes.courseUrlField}
                            value={values.link}
                            onChange={handleChange('link')}
                            margin="normal"
                            variant="outlined"
                            placeholder="Course Url"
                            InputProps={{ classes: { input: classes.input } }}
                        />
                        <ButtonDiv>
                            <Button style={{marginLeft: '10px'}} onClick={handleCancel} size="small" variant="contained" className={classes.button} >CANCEL</Button>
                            <Button type='submit' style={{marginRight: '4%'}} size="small" variant="contained" className={classes.button} >SUBMIT SECTION</Button>
                        </ButtonDiv>
                    </form>
                </CardContent>
            </Card>
       
        </>
    )
}

export default AddSection;