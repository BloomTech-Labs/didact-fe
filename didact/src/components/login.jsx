import React from "react";
import axios from "axios";
import {Form, Field, withFormik} from "formik";
import * as Yup from 'yup';

const LoginForm = ({errors, touched}) => {
    const classes = useStyles();
    return (
        <>
            <Form className = {classes.MainForm}>
                <Field type= "text" name = "email" placeholder = "Email"></Field>
                {touched.email && errors.email && <p>{errors.email}</p>}
                <Field type= "text" name = "password" placeholder = "Password"></Field>
                {touched.password && errors.password && <p>{errors.password}</p>}
                <div>
                <button className = {classes.Button} type="submit">Login</button>
                </div>
            </Form>
        </>
    )
}

const FormikLoginForm = withFormik({
    mapPropsToValues({email, password}{
        return {
            email: email || "",
            password: password || ""
        }
    },

    validationSchema: Yup.object().shape({
        email: Yup.string().required("Email is required").email(),
        password: Yup.string().required("Password is required" ),
    }),
    handleSubmit(values){
        axios
            .post("http://localhost:3333/example", values)
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err))
        resetForm()
    }

})(LoginForm);

export default FormikLoginForm;