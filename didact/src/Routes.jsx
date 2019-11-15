import React from "react";
import { Route, Switch } from "react-router-dom";
import FormikLoginForm from "./components/login/Login.jsx";
import FormikRegisterForm from "./components/register/Register.jsx";
import Auth from './auth/Auth';
import MainPage from './components/mainPage/MainPage';
import PrivateRoute from './utils/PrivateRoute'

const Routes = (props) => {

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
            <Route exact path='/courses/all' render={routeProps =>
            (
                <MainPage {...routeProps} page={'courses'} />
            )} />
            <Route exact path='/courses' render={routeProps =>
            (
                <MainPage {...routeProps} page={'yourcourses'} />
            )} />
            <Route exact path='/courses/yours' render={routeProps =>
            (
                <MainPage {...routeProps} page={'yourcourses'} />
            )} />
            <Route exact path='/courses/yours/add' render={routeProps =>
            (
                <MainPage {...routeProps} page={'addcourse'} />
            )} />
            <Route path='/courses/yours/:id/edit' render={routeProps =>
            (
                <MainPage {...routeProps} page={'editcourse'} />
            )} />
            <Route exact path='/courses/all/:id' render={routeProps =>
            (
                <MainPage {...routeProps} page={'detailedcourse'} />
            )} />
            <Route exact path='/courses/yours/:id' render={routeProps =>
            (
                <MainPage {...routeProps} page={'yourdetailedcourse'} />
            )} />
             <Route exact path='/learning-paths/add' render={routeProps =>
            (
                <MainPage {...routeProps} page={'addlearningpath'} />
            )} />
             <Route exact path='/learning-paths/:id/edit' render={routeProps =>
            (
                <MainPage {...routeProps} page={'editlearningpath'} />
            )} />
            <Route exact path='/learning-paths/join' render={routeProps =>
            (
                <MainPage {...routeProps} page={'learningpaths'} />
            )} />
            <Route exact path='/learning-paths/:id' render={routeProps =>
            (
                <MainPage {...routeProps} page={'learningpath'} />
            )} />
            <Route exact path='/learning-paths/:id/items/add' render={routeProps =>
            (
                <MainPage {...routeProps} page={'addpathitem'} />
            )} />
             <Route exact path='/learning-paths/:id/items/:item_id/edit' render={routeProps =>
            (
                <MainPage {...routeProps} page={'editpathitem'} />
            )} />
            <Route exact path='/learning-paths' render={routeProps =>
            (
                <MainPage {...routeProps} page={'yourlearningpaths'} />
            )} />
             <Route exact path='/learning-paths/:id/courses/add/:order' render={routeProps =>
            (
                <MainPage {...routeProps} page={'addcourse'} />
            )} />
            <Route exact path='/learning-paths/:pathId/courses/:id/edit' render={routeProps =>
            (
                <MainPage {...routeProps} page={'editcourse'} />
            )} />
            <Route exact path='/results' render={routeProps =>
            (
                <MainPage {...routeProps} page={'searchresults'} />
            )} />
            <Route exact path='/about' render={routeProps =>
            (
                <MainPage {...routeProps} page={'about'} />
            )} />
            <Route exact path='/contact' render={routeProps =>
            (
                <MainPage {...routeProps} page={'contact'} />
            )} />
        </Switch>
    )
};

export default Routes;