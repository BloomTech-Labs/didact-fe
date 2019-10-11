import React from "react";
import {Form, Field, withFormik} from "formik";
import * as Yup from 'yup';
import { registerAction } from '../../store/actions';
import {useDispatch} from 'react-redux';

const RegisterForm = (props) => {
    const {errors, touched, status, history} = props;
   
    return (
        <>
            <Form>
                <Field type= "email" name = "email" placeholder = "Email"></Field>
                {touched.email && errors.email && <p>{errors.email}</p>}
                <Field type= "password" name = "password" placeholder = "Password"></Field>
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
        email: Yup.string().required("Email is required").email("Must be an Email"),
        password: Yup.string().required("Password is required" ),
        first_name: Yup.string().required("First Name is required" ),
        last_name: Yup.string().required("Last Name is required" ),
    }),
    handleSubmit(values, props){
        console.log(props.props.history)
        props.props.dispatch(registerAction(props.props.history, values))
    }

})(RegisterForm);

const FormikRegisterWrapper = props =>
{
    const dispatch = useDispatch();
    console.log(dispatch)
    return (
        <>
            <FormikRegisterForm dispatch={dispatch} history={props.history}/>
        </>
    )
}

export default FormikRegisterWrapper;