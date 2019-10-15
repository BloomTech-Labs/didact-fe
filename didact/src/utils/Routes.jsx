import React from "react";
import { Route} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import FormikLoginForm from "../components/login/Login.jsx";
import FormikRegisterForm from "../components/Register/register.jsx";
import Dashboard from "../components/Dashboard/dashboard.jsx";
import HomePage from '../components/Dashboard/HomePage.jsx';
import Auth from '../auth/Auth';
import AddCourse from "../components/Dashboard/courses/AddCourse";

const Routes = () => {
    return (
        <>
        <Route path="/login" component={FormikLoginForm} />
        <PrivateRoute exact path="/dashboard" component={HomePage} />
        <Route path="/register" component={FormikRegisterForm} />
        <Route path='/auth' component={Auth} />
        <PrivateRoute path='/addcourse' component={HomePage} />
        </>
    )
};

export default Routes;