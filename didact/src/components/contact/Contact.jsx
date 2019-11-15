import React, { useState } from 'react';
import { useDispatch } from "react-redux";

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Mixpanel } from '../../utils/mixpanel';
import { DidactField, DidactInput, DidactLabel, DidactTextArea, FormTitle } from '../dashboard/FormStyles'
import { DidactButton } from '../dashboard/ButtonStyles'
import { sendContactMessage } from '../../store/actions'

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: '98%',
        borderRadius: 5,
        boxShadow: 'none',
        marginLeft: '10px'
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    sharper: {
        borderRadius: 5,
        height: '51px'
    },
    sharperMessage: {
        borderRadius: 5,
        // lineHeight: '51px',
        paddingTop: '15px',
        '::input': {
        }
    },
    shoveOver: 
    {
        marginLeft: '44px'
    },
    shoveOverPlusOne: 
    {
        marginLeft: '45px'
    },
    sharperGrayButton: {
        borderRadius: 5,
        backgroundColor: '#242424BF',
        margin: '10px auto',
        width: '276px',
        height: '51px',

    }
}));

const Contact = (props) =>
{
    const classes = useStyles();
    const dispatch = useDispatch();
    const [values, setValues] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        Mixpanel.track("Course Added.")
        dispatch(sendContactMessage(values))
    }

    const handleBack = () => {
        props.props.history.push('/')
    }  

    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-between', margin: '-10px 10px 10px 10px', borderBottom: '1px solid black'}}>
                <p style={{fontWeight: 'bold', marginLeft: '10px'}}>Contact</p>
                <p onClick = {handleBack} style={{cursor: 'pointer'}}>{`<${" "} Back To Dashboard`}</p>
            </div>

            <Card className={classes.card}>
                <CardContent>
                    <form onSubmit={handleSubmit} className={classes.container} noValidate autoComplete="off">
                    <DidactField>
                        <DidactLabel for='title' className={classes.shoveOver}>Name</DidactLabel>
                        <DidactInput id='title' type='text' value={values.name || ""} onChange={handleChange('name')} placeholder='Name' className={classes.sharper} />
                    </DidactField>
                    <DidactField>
                        <DidactLabel for='instructors' className={classes.shoveOver}>Email Address</DidactLabel>
                        <DidactInput id='instructors' type='email' value={values.email || ""} onChange={handleChange('email')} placeholder='Email' className={classes.sharper} />
                    </DidactField>
                    <DidactField>
                        <DidactLabel for='description' className={classes.shoveOverPlusOne}>Message</DidactLabel>
                        <DidactTextArea rows="12" id='description' value={values.message || ""} onChange={handleChange('message')} placeholder='Message' className={classes.sharperMessage} />
                    </DidactField>
                    <DidactButton type='submit' className={classes.sharperGrayButton}>Submit</DidactButton>
                    </form>
                </CardContent>
            </Card>

        </div>
    )
}

export default Contact