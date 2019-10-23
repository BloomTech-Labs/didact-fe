import React from "react";
import { Route, Redirect} from "react-router-dom";
import FormikLoginForm from "./components/login/Login.jsx";
import FormikRegisterForm from "./components/register/Register.jsx";
import Auth from './auth/Auth';
import MainPage from './components/mainPage/MainPage';

const Routes = () => {

    return (
        <>
            <Route path="/login" component={FormikLoginForm} >
                {localStorage.getItem('token') ? <Redirect to='/dashboard' /> : null}
            </Route>
            <Route path="/register" component={FormikRegisterForm} >
                {localStorage.getItem('token') ? <Redirect to='/dashboard' /> : null}
            </Route>
            <Route path='/auth' component={Auth} />
            <Route path='/dashboard' render={routeProps =>
            (
                <MainPage {...routeProps} page={'dashboard'} />
            )} />
            <Route exact path='/' render={routeProps =>
            (
                <MainPage {...routeProps} page={'dashboard'} />
            )} />
            <Route path='/addcourse' render={routeProps =>
            (
                <MainPage {...routeProps} page={'addcourse'} />
            )} />
            <Route path='/editcourse/:id' render={routeProps =>
            (
                <MainPage {...routeProps} page={'editcourse'} />
            )} />
            <Route path='/courses/:id' render={routeProps =>
            (
                <MainPage {...routeProps} page={'courses'} />
            )} />
        </>
    )
};

export default Routes;