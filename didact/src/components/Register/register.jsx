import React from "react";
import {Form, Field, withFormik} from "formik";
import * as Yup from 'yup';
import { registerAction, registerWithFacebook, registerWithGoogle } from '../../store/actions';
import { useDispatch } from 'react-redux';

import { makeStyles, withStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    header: {

    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        border: "solid blue"
    },
    namePlate: {
        display: 'flex',
        justifyContent: 'space-around',
        paddingBottom: '4%',
        border: "solid",
        width: "45%",
        "& *": {
            padding: "1%",
        }
    },
    passPlate: {
        display: 'flex',
        flexDirection: 'column',
        width: "45%",
        border: 'solid red',
        "& *": {
            border: 'solid yellow'
        }
    }
  }));
  
const RegisterForm = (props) => {
    const classes = useStyles();
    const {errors, touched} = props;
   
    return (
        <>
            <div className={classes.header}>
                <h1>Signup</h1>
                <h5>Subtitle</h5>
            </div>
            <Form>
                <div className={classes.container}>
                    <div className={classes.namePlate}>
                        <Field type= "text" name = "first_name" placeholder = "First Name"></Field>
                        {touched.first_name && errors.first_name && <p>{errors.first_name}</p>}
                        <Field type= "text" name = "last_name" placeholder = "Last Name"></Field>
                        {touched.last_name && errors.last_name && <p>{errors.last_name}</p>}
                    </div>
                    <div className={classes.passPlate}>
                        <Field type= "email" name = "email" placeholder = "Email"></Field>
                        {touched.email && errors.email && <p>{errors.email}</p>}
                        <Field type= "password" name = "password" placeholder = "Password"></Field>
                        {touched.password && errors.password && <p>{errors.password}</p>}
                        <Field type= "password" name = "confirm-password" placeholder = "Confirm Password"></Field>
                        {touched.password && errors.password && <p>{errors.password}</p>}
                    </div>
                    <div>
                        <button type="submit">Sign Up</button>
                    </div>
                </div>
            </Form>
        </>
    )
}

const FormikRegisterForm = withFormik({
    mapPropsToValues({email, password, first_name, last_name}){
        return {
            email: email || "",
            password: password || "",
            first_name: first_name || "",
            last_name: last_name || ""
        }
    },

    validationSchema: Yup.object().shape({
        email: Yup.string().required("Email is required").email("Must be an Email"),
        password: Yup.string().required("Password is required" ),
        first_name: Yup.string().required("First Name is required" ),
        last_name: Yup.string().required("Last Name is required" ),
    }),
    handleSubmit(values, props){
        props.props.dispatch(registerAction(props.props.history, values))
    }

})(RegisterForm);

const FormikRegisterWrapper = ({history}) =>
{
    const dispatch = useDispatch();

   
    console.log(dispatch)
    return (
        <>
            <FormikRegisterForm dispatch={dispatch} history={history}/>
            <a href="http://didactlms-staging.herokuapp.com/api/auth/facebook">Sign Up With Facebook</a>
            <a href="http://didactlms-staging.herokuapp.com/api/auth/google">Sign Up With Google</a>

        </>
    )
}

export default FormikRegisterWrapper;