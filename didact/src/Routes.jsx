import React, {useState, useEffect} from "react";
import { Route, Redirect} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import { verifyToken } from './store/actions';
import FormikLoginForm from "./components/login/Login.jsx";
import FormikRegisterForm from "./components/register/Register.jsx";
// import Dashboard from "../components/dashboard/dashboard.jsx";
import Auth from './auth/Auth';
import MainPage from './components/mainPage/MainPage';
import EditCourse from './components/courses/EditCourse';

const Routes = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const tokenVerified = state.onboardingReducer.tokenVerified
    useEffect(_ =>
        {
            dispatch(verifyToken())
        }, [])
    return (
        <>
        <Route path="/login" component={FormikLoginForm} >
            {tokenVerified ? <Redirect to='/dashboard' /> : null}
        </Route>
        <Route exact path="/dashboard" component={MainPage}>
            {tokenVerified ? null : <Redirect to='/login' />}
        </Route>
        <Route path="/register" component={FormikRegisterForm} >
            {tokenVerified ? <Redirect to='/dashboard' /> : null}
        </Route>
        <Route path='/auth' component={Auth} />
        <Route path='/addcourse' component={MainPage} >
            {/* {tokenVerified ? null : <Redirect to='/login' />} */}
        </Route>
        <Route exact path="/">
            {tokenVerified ? <Redirect to="/dashboard" /> : <Redirect to='/login' />}
        </Route>
        <Route path='/editcourse/:id' component={MainPage} >
            {/* {tokenVerified ? null : <Redirect to='/login' />} */}
        </Route>
        </>
    )
};

export default Routes;