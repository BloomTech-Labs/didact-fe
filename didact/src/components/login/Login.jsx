import React, { useEffect } from "react";
import axios from "axios";
import {Form, Field, withFormik} from "formik";
import * as Yup from 'yup';
import { loginAction } from '../../store/actions';
import {useDispatch} from 'react-redux';

const LoginForm = ({errors, touched, history, status}) => {
    // const dispatch = useDispatch();
    // console.log(props);
    // console.log(history);
    useEffect(() => {
        if(status) {
            // dispatch(loginAction(history, status));
       
        }
    }, [])

    return (
        <>
            <Form>
                <Field type= "text" name = "email" placeholder = "Email"></Field>
                {touched.email && errors.email && <p>{errors.email}</p>}
                <Field type= "text" name = "password" placeholder = "Password"></Field>
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
    handleSubmit(values, {setStatus}){
       setStatus(values);
       

    },

})(LoginForm, useDispatch);

export default FormikLoginForm;