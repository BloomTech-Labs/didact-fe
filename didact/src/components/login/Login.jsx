import React from "react";
import {Form, Field, withFormik} from "formik";
import * as Yup from 'yup';
import { loginAction } from '../../store/actions';
import {useDispatch} from 'react-redux';

import { Wrapper, LoginWrapper, LoginFormWrapper } from './LoginStyles'
import useMediaQuery from "@material-ui/core/useMediaQuery"
import HeaderNoIcons from '../header/HeaderNoIcons'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    // header: {
    //     width: '50%',
    //     margin: '0 auto',
    //     '& *': {
    //         textAlign: 'center'
    //     } //testtest
    // },
    // container: {
    //     display: 'flex',
    //     flexDirection: 'column',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     justifyContent: 'space-evenly',
    //     width: '45%',
    //     height: '10em',
    //     border: 'solid #9B9B9B 1.2px',
    //     borderRadius: '1%',
    //     margin: '0 auto'
    // },
    // email: {
    //     width: "70%",
    //     "& *": {
    //         width: '80%',
    //         border: 'solid #9B9B9B 1.2px',
    //         backgroundColor: '#F7F7F7',
    //         height:'2.5em'
    //     }
    // },
    // password: {
    //     width: "70%",
    //     "& *": {
    //         width: '80%',
    //         border: 'solid #9B9B9B 1.2px',
    //         backgroundColor: '#F7F7F7',
    //         height:'2.5em'
    //     }
    // },
    // loginButton: {
    //     width: '25%',
    //     height:'2.7em',
    //     textAlign: 'center',
    //     backgroundColor: '#5A5A5A',
    //     color: 'white',
    //     border: 'transparent',
    //     borderRadius: '5%'
    // },
    // buttonContainer: {
    //     paddingTop: '2%'
    // },
    // footer: {
    //     display: 'flex',
    //     justifyContent: 'space-between',
    //     width: '50%',
    //     height: '2.7em',
    //     margin: '0 auto',
    //     paddingTop: '2%',
    //     "& *":{
    //         height:'100%',
    //         backgroundColor: '#5A5A5A',
    //         color: 'white',
    //         border: 'transparent',
    //         borderRadius: '5%',
    //         width: '33%',
    //         textDecoration: 'none'
    //     }
    // }
  }));


const LoginForm = (props) => {
    const phoneSize = useMediaQuery("(max-width:770px)");
    const classes = useStyles();
    if(localStorage.getItem('token'))
    {
        props.history.push('/')
    }
    const {errors, touched} = props

    const baseURL = process.env.BASEURL

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
                    </div>
                    <div>
                        <button type="submit">Login</button>
                    </div>
                </div>
            </Form>
            <div className="socialButtons">
                <a href={`${baseURL}auth/facebook`}>Sign In With Facebook</a>
                <a href={`${baseURL}auth/google`}>Sign In With Google</a>
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
    const classes = useStyles();
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