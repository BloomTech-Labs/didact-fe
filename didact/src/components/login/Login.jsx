import React from "react";
import {Form, Field, withFormik} from "formik";
import * as Yup from 'yup';
import { loginAction } from '../../store/actions';
import {useDispatch, useSelector} from 'react-redux';

import { Wrapper, LoginWrapper, LoginFormWrapper } from './LoginStyles'
import HeaderNoIcons from '../header/HeaderNoIcons'

import beURL from '../../utils/beURL'


const LoginForm = (props) => {

    const state = useSelector(state => state.onboardingReducer)
    const loginError = state.error;

    if(localStorage.getItem('token'))
    {
        props.history.push('/')
    }
    const {errors, touched} = props

    return (
        <LoginFormWrapper>
            <div className="header">
                <h1>Login</h1>
            </div>
            <Form>
                <div className="inputWrapper">
                    <div>
                        <div className={"input" + ((touched.email && errors.email) ? ' error' : '')}>
                            <p>Email</p>
                            <Field type= "email" name="email" placeholder = "Email"></Field>
                            {touched.email && errors.email && <p className="errorMessage">Invalid Email Address</p>}
                        </div>
                        <div className={"input" + ((touched.password && errors.password) ? ' error' : '')}>
                            <p>Password</p>
                            <Field type= "password" name = "password" placeholder = "Password"></Field>
                            {touched.password && errors.password && <p className="errorMessage">Invalid Password</p>}
                        </div>
                    {loginError ? <p style = {{color: "red"}}>You have entered an invalid email or password</p> : null}
                    </div>
                    <div>
                        <button type="submit">Login</button>
                    </div>
                </div>
            </Form>
            <div className="socialButtons">
                <a href={`${beURL}auth/facebook`}>Sign In With Facebook</a>
                <a href={`${beURL}auth/google`}>Sign In With Google</a>
            </div>
        </LoginFormWrapper>
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
        <Wrapper>
            <HeaderNoIcons history={props.history}/>
            <LoginWrapper>
                <FormikLoginForm dispatch={dispatch} history={props.history}/>
            </LoginWrapper>
        </Wrapper>
    )
}

export default FormikLoginWrapper;