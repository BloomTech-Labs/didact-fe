import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import FormikLoginForm from "../components/login/Login.jsx";
import FormikRegisterForm from "../components/Register/register.jsx";
import Dashboard from "../components/Dashboard/dashboard.jsx";
import HomePage from '../components/Dashboard/HomePage.jsx';
import Auth from '../auth/Auth';
import AddCourse from "../components/Dashboard/courses/AddCourse";

const Routes = () => {
    const [token, setToken] = useState(localStorage.getItem('token'))
   
    return (
        <>
        
        <Route path="/login" component={FormikLoginForm} >
            {token ? <Redirect to='/dashboard' /> : null}
        </Route>
        <PrivateRoute exact path="/dashboard" component={HomePage} />
        <Route path="/register" component={FormikRegisterForm} >
            {token ? <Redirect to='/dashboard' /> : null}
        </Route>
        <Route path='/auth' component={Auth} />
        <PrivateRoute path='/addcourse' component={HomePage} />
        <Route exact path="/">
            {token ? <Redirect to="/dashboard" /> : <Redirect to='/register' />}
        </Route>
        </>
    )
};

export default Routes;