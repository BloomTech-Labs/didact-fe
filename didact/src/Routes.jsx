import React from "react";
import { Route, Switch } from "react-router-dom";
import FormikLoginForm from "./components/login/Login.jsx";
import FormikRegisterForm from "./components/register/Register.jsx";
import Auth from './auth/Auth';
import MainPage from './components/mainPage/MainPage';

const Routes = () => {

    return (
        <Switch>
            <Route path="/login" component={FormikLoginForm} >
            </Route>
            <Route path="/register" component={FormikRegisterForm} >
            </Route>
            <Route path='/auth' component={Auth} />
            <Route exact path='/' render={routeProps =>
            (
                <MainPage {...routeProps} page={'dashboard'} />
            )} />
            <Route exact path='/courses' render={routeProps =>
            (
                <MainPage {...routeProps} page={'courses'} />
            )} />
            <Route exact path='/courses/add' render={routeProps =>
            (
                <MainPage {...routeProps} page={'addcourse'} />
            )} />
            <Route path='/courses/:id/edit' render={routeProps =>
            (
                <MainPage {...routeProps} page={'editcourse'} />
            )} />
            <Route exact path='/courses/:id' render={routeProps =>
            (
                <MainPage {...routeProps} page={'detailedcourse'} />
            )} />
             <Route exact path='/learning-paths/add' render={routeProps =>
            (
                <MainPage {...routeProps} page={'addlearningpath'} />
            )} />
             <Route exact path='/learning-paths/:id/edit' render={routeProps =>
            (
                <MainPage {...routeProps} page={'editlearningpath'} />
            )} />
        </Switch>
    )
};

export default Routes;