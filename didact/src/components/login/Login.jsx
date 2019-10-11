import React from "react";
import {Form, Field, withFormik} from "formik";
import * as Yup from 'yup';
import { loginAction } from '../../store/actions';
import {useDispatch} from 'react-redux';



const LoginForm = (props) => {
    const {errors, touched} = props
    return (
        <>
            <Form>
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
        </>
    )
}

export default FormikLoginWrapper;