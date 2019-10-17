import React from "react";
import { Route} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import FormikLoginForm from "../components/login/Login.jsx";
import FormikRegisterForm from "../components/register/Register.jsx";
// import Dashboard from "../components/dashboard/dashboard.jsx";
import Auth from '../auth/Auth';
import MainPage from '../components/mainPage/MainPage'

const Routes = () => {
    return (
        <>
        <Route path="/login" component={FormikLoginForm} />
        <PrivateRoute exact path="/" component={MainPage} />
        <Route path="/register" component={FormikRegisterForm} />
        <Route path='/auth' component={Auth} />
        </>
    )
};

export default Routes;