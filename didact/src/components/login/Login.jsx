import React from "react";
import {Form, Field, withFormik} from "formik";
import * as Yup from 'yup';
import { loginAction } from '../../store/actions';
import {useDispatch} from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    header: {
        width: '50%',
        margin: '0 auto',
        '& *': {
            textAlign: 'left'
        } //testtest
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '45%',
        border: 'solid #9B9B9B 1.2px',
        borderRadius: '1%',
        margin: '0 auto',
        padding: '2%'
    },
    email: {
        width: "70%",
        height: '15em',
        "& *": {
            border: 'solid #9B9B9B 1.2px',
            backgroundColor: '#F7F7F7',
            height:'18%'
        }
    },
    password: {
        width: "70%",
        height: '15em',
        "& *": {
            border: 'solid #9B9B9B 1.2px',
            backgroundColor: '#F7F7F7',
            height:'18%'
        }
    },
    loginButton: {
        width: '70%',
        height:'2.7em',
        textAlign: 'center',
        backgroundColor: '#5A5A5A',
        color: 'white',
        border: 'transparent',
        borderRadius: '5%'
    },
    footer: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '50%',
        height: '2.7em',
        margin: '0 auto',
        paddingTop: '2%',
        "& *":{
            height:'100%',
            backgroundColor: '#5A5A5A',
            color: 'white',
            border: 'transparent',
            borderRadius: '5%',
            width: '33%',
            textDecoration: 'none'
        }
    }
  }));


const LoginForm = (props) => {
    const classes = useStyles();
    if(localStorage.getItem('token'))
    {
        props.history.push('/')
    }
    const {errors, touched} = props
    return (
        <>
        <div className={classes.header}>
            <h1>Login</h1>
        </div>
            <Form>
                <div className={classes.container}>
                    <div className={classes.email}>
                        <Field type= "email" name = "email" placeholder = "Email"></Field>
                        {/* {touched.email && errors.email && <p>{errors.email}</p>} */}
                    </div>
                    <div className={classes.password}>
                        <Field type= "password" name = "password" placeholder = "Password"></Field>
                        {/* {touched.password && errors.password && <p>{errors.password}</p>} */}
                    </div>
                </div>
                <div>
                <button className={classes.loginButton} type="submit">Login</button>
                </div>
            </Form>
        </>
    )
}

const FormikLoginForm = withFormik({
    mapPropsToValues({email, password}){
        return {
            email: email || "",
            password: password || ""
        }
    },

    validationSchema: Yup.object().shape({
        email: Yup.string().required("Email is required").email(),
        password: Yup.string().required("Password is required" )
    }),
    handleSubmit(values, props){
        props.props.dispatch(loginAction(props.props.history, values))
    },

})(LoginForm, useDispatch);

const FormikLoginWrapper = props =>
{
    const classes = useStyles();
    const dispatch = useDispatch();
    return (
        <>
            <FormikLoginForm dispatch={dispatch} history={props.history}/>
            <div className={classes.footer}>
                <a href="http://didactlms-staging.herokuapp.com/api/auth/facebook">Sign In With Facebook</a>
                <a href="http://didactlms-staging.herokuapp.com/api/auth/google">Sign In With Google</a>
            </div>
        </>
    )
}

export default FormikLoginWrapper;