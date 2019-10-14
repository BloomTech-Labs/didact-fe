import React from "react";
import { Route, Redirect } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import FormikLoginForm from "../components/login/Login.jsx";
import FormikRegisterForm from "../components/Register/register.jsx";
import Dashboard from "../components/Dashboard/dashboard.jsx";
import Auth from '../auth/Auth';

const Routes = () => {
    return (
        <>
        <Route path="/login" component={FormikLoginForm} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Route path="/register" component={FormikRegisterForm} />
        <Route path='/auth' component={Auth} />
        </>
    )
};

export default Routes;