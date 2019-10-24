import React, { useState } from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from 'yup';
import { registerAction } from '../../store/actions';
import { useDispatch } from 'react-redux';

import { Wrapper, RegisterWrapper, RegisterFormWrapper } from './RegisterStyles'

import HeaderNoIcons from '../header/HeaderNoIcons'

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
    namePlate: {
        display: 'flex',
        justifyContent: 'space-between',
        width: "70%",
        height: '2.7em',
        "& *": {
            border: 'solid #9B9B9B 1.2px',
            backgroundColor: '#F7F7F7'
        }
    },
    passPlate: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        width: "70%",
        height: '15em',
        "& *": {
            border: 'solid #9B9B9B 1.2px',
            backgroundColor: '#F7F7F7',
            height: '18%'
        }
    },
    signUpButton: {
        width: '70%',
        height: '2.7em',
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
        "& *": {
            height: '100%',
            backgroundColor: '#5A5A5A',
            color: 'white',
            border: 'transparent',
            borderRadius: '5%',
            width: '33%',
            textDecoration: 'none'
        }
    }
}));

const RegisterForm = (props) => {
    const classes = useStyles();
    const { errors, touched } = props;
    if (localStorage.getItem('token')) {
        props.history.push('/')
    }

    return (
        <RegisterFormWrapper>
            <div className="header">
                <h1>Signup</h1>
            </div>
            <Form>
                <div className="inputWrapper">
                    <div>
                        <div className="nameInputs">
                            <div className={"input size-half" + ((touched.first_name && errors.first_name) ? ' error' : '')}>
                                <p>First Name</p>
                                <Field type="text" name="first_name" placeholder="First Name"></Field>
                                {touched.first_name && errors.first_name && <p className="errorMessage">First Name Required</p>}
                            </div>
                            <div className={"input size-half" + ((touched.last_name && errors.last_name) ? ' error' : '')}>
                                <p>Last Name</p>
                                <Field type="text" name="last_name" placeholder="Last Name"></Field>
                                {touched.last_name && errors.last_name && <p className="errorMessage">Last Name Required</p>}
                            </div>
                        </div>
                        <div className={"input" + ((touched.email && errors.email) ? ' error' : '')}>
                            <p>Email</p>
                            <Field type="email" name="email" placeholder="Email"></Field>
                            {touched.email && errors.email && <p className="errorMessage">Invalid Email Address</p>}
                        </div>
                        <div className={"input" + ((touched.password && errors.password) ? ' error' : '')}>
                            <p>Password</p>
                            <Field type="password" name="password" placeholder="Password"></Field>
                            {touched.password && errors.password && <p className="errorMessage">Invalid Password</p>}
                        </div>
                        <div className={"input" + ((touched.confirmPassword && errors.confirmPassword) ? ' error' : '')}>
                            <p>Confirm Password</p>
                            <Field type="password" name="confirmPassword" placeholder="Confirm Password"></Field>
                            {touched.confirmPassword && errors.confirmPassword && <p className="errorMessage">Passwords do not match</p>}
                        </div>
                    </div>
                    <div>
                        <button type="submit">Signup Now</button>
                    </div>
                </div>
            </Form>
            <div className="socialButtons">
                <a href="http://didactlms-staging.herokuapp.com/api/auth/facebook">Sign In With Facebook</a>
                <a href="http://didactlms-staging.herokuapp.com/api/auth/google">Sign In With Google</a>
            </div>
        </RegisterFormWrapper>
    )
}

const FormikRegisterForm = withFormik({
    mapPropsToValues({ email, password, confirmPassword, first_name, last_name }) {
        return {
            email: email || "",
            password: password || "",
            confirmPassword: confirmPassword || "",
            first_name: first_name || "",
            last_name: last_name || ""
        }
    },

    validationSchema: Yup.object().shape({
        email: Yup.string().required("Email is required").email("Must be an Email"),
        password: Yup.string().required("Password is required"),
        confirmPassword: Yup.string().required().oneOf([Yup.ref('password'), null], 'Passwords must match'),
        first_name: Yup.string().required("First Name is required"),
        last_name: Yup.string().required("Last Name is required"),
    }),
    handleSubmit(values, props) {
        props.props.dispatch(registerAction(props.props.history, values))
    }

})(RegisterForm);

const FormikRegisterWrapper = props => {
    const dispatch = useDispatch();
    const classes = useStyles();

    console.log(dispatch)
    return (
        <Wrapper>
            <HeaderNoIcons/>
            <RegisterWrapper>
                <FormikRegisterForm dispatch={dispatch} history={props.history}/>
            </RegisterWrapper>
        </Wrapper>
    )
}

export default FormikRegisterWrapper; 