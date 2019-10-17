import React from "react";
import {Form, Field, withFormik} from "formik";
import * as Yup from 'yup';
import { loginAction } from '../../store/actions';
import {useDispatch} from 'react-redux';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import { mergeClasses } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    header: {
    
    },
    container: {
       
      },
  }));

const LoginForm = (props) => {
    const classes = useStyles();
    const {errors, touched} = props
    return (
        <>
        <div className={classes.header}>
            <h1>Signup</h1>
            <h4>Subtitle</h4>
        </div>
            <Form className={classes.container}>
                <Field type= "name" name="firstName" placeholder="First Name"></Field>
                <Field type= "name" name="lastName" placeholder="Last Name"></Field>
                <Field type= "email" name = "email" placeholder = "Email"></Field>
                {touched.email && errors.email && <p>{errors.email}</p>}
                <Field type= "password" name = "password" placeholder = "Password"></Field>
                {touched.password && errors.password && <p>{errors.password}</p>}
                <div>
                <button type="submit">Login</button>
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
    const dispatch = useDispatch();
    return (
        <>
            <FormikLoginForm dispatch={dispatch} history={props.history}/>
            <a href="http://didactlms-staging.herokuapp.com/api/auth/facebook">Sign In With Facebook</a>
            <a href="http://didactlms-staging.herokuapp.com/api/auth/google">Sign In With Google</a>
        </>
    )
}

export default FormikLoginWrapper;