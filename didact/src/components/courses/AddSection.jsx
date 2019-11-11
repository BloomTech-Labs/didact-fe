import React, { useState} from 'react';

import { useDispatch } from 'react-redux';
import { Mixpanel } from '../../utils/mixpanel';

import { addSectionToCourse } from '../../store/actions'

import { DidactField, DidactInput, DidactLabel, DidactTextArea, FormTitle } from '../dashboard/FormStyles'
import { ButtonDiv, DidactButton } from '../dashboard/ButtonStyles'

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
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
        // marginLeft: '70%',
    },
    card: {
        // width: '50vw',
        maxWidth: 500,
        minWidth: 375,
        borderRadius: 15,
        margin: '10px auto',
        boxShadow: 'none'
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
    const classes = useStyles();
    const dispatch = useDispatch()
    const [values, setValues] = useState(initalValues);

    
    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        Mixpanel.track("Section Added.")
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
                    <form onSubmit={handleSubmit} className={classes.container} noValidate autoComplete="off">
                        <FormTitle>Add Section </FormTitle>
                        <DidactField>
                            <DidactLabel for='title'>Lesson Name</DidactLabel>
                            <DidactInput id='title' type='text' value={values.name || ""} onChange={handleChange('name')} placeholder='Lesson Name' />  
                        </DidactField>
                        <DidactField>
                            <DidactLabel for='order'>Order</DidactLabel>
                            <DidactInput id='order' type='text' value={values.order || ""} onChange={handleChange('order')} placeholder='Order' />  
                        </DidactField>
                        <DidactField>
                            <DidactLabel for='description'>Description</DidactLabel>
                            <DidactTextArea rows="8" id='description' value={values.description || ""} onChange={handleChange('description')} placeholder='Description' />  
                        </DidactField>
                        <DidactField>
                            <DidactLabel for='link'>URL Link</DidactLabel>
                            <DidactInput id='link' type='text' value={values.link || ""} onChange={handleChange('link')} placeholder='URL Link' />  
                        </DidactField>
                        <ButtonDiv>
                            <DidactButton style={{marginLeft: '10px'}} onClick={handleCancel}>Cancel</DidactButton>
                            <DidactButton type='submit' style={{marginRight: '4%'}}>Submit Section</DidactButton>
                        </ButtonDiv>
                    </form>
                </CardContent>
            </Card>
       
        </>
    )
}

export default AddSection;