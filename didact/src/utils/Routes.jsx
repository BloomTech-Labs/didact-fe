import React from "react";
import { Route} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import FormikLoginForm from "../components/login/Login.jsx";
import FormikRegisterForm from "../components/Register/register.jsx";
import Dashboard from "../components/Dashboard/dashboard.jsx"

const Routes = () => {
    return (
        <>
        <Route path="/login" component ={FormikLoginForm} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Route path="/register" component ={FormikRegisterForm} />
        </>
    )
};

export default Routes;