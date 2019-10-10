import React from "react";
import axios from "axios";
import {Form, Field, withFormik} from "formik";
import * as Yup from 'yup';

const RegisterForm = ({errors, touched, status, history}) => {
    console.log(status);
    console.log(history);

    return (
        <>
            <Form>
                <Field type= "text" name = "email" placeholder = "Email"></Field>
                {touched.email && errors.email && <p>{errors.email}</p>}
                <Field type= "text" name = "password" placeholder = "Password"></Field>
                {touched.password && errors.password && <p>{errors.password}</p>}
                <Field type= "text" name = "first_name" placeholder = "First Name"></Field>
                {touched.first_name && errors.first_name && <p>{errors.first_name}</p>}
                <Field type= "text" name = "last_name" placeholder = "Last Name"></Field>
                {touched.last_name && errors.last_name && <p>{errors.last_name}</p>}
                <div>
                <button type="submit">Register</button>
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
        email: Yup.string().required("Email is required").email(),
        password: Yup.string().required("Password is required" ),
        first_name: Yup.string().required("First Name is required" ),
        last_name: Yup.string().required("Last Name is required" ),
    }),
    handleSubmit(values, {setStatus}){
        setStatus(values);
    }

})(RegisterForm);

export default FormikRegisterForm;