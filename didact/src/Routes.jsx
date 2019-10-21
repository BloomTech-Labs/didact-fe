import React, {useState, useEffect} from "react";
import { Route, Redirect} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import { verifyToken } from './store/actions'
import PrivateRoute from "./utils/PrivateRoute";
import FormikLoginForm from "./components/login/Login.jsx";
import FormikRegisterForm from "./components/register/Register.jsx";
// import Dashboard from "../components/dashboard/dashboard.jsx";
import Auth from './auth/Auth';
import MainPage from './components/mainPage/MainPage'

const Routes = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const tokenVerified = state.onboardingReducer.tokenVerified
    const [token, setToken] = useState(localStorage.getItem('token'))
    console.log(`tokenVerified above`, tokenVerified)
    useEffect(_ =>
        {
            console.log(`tokenVerified in`, tokenVerified)
            dispatch(verifyToken())
        }, [])
    console.log(`tokenVerified below`, tokenVerified)

    return (
        <>
        
        <Route path="/login" component={FormikLoginForm} >
            {tokenVerified ? <Redirect to='/dashboard' /> : null}
        </Route>
        <PrivateRoute exact path="/dashboard" component={MainPage}>
            {tokenVerified ? null : <Redirect to='/login' />}
        </PrivateRoute>

        <Route path="/register" component={FormikRegisterForm} >
            {tokenVerified ? <Redirect to='/dashboard' /> : null}
        </Route>
        <Route path='/auth' component={Auth} />
        <PrivateRoute path='/addcourse' component={MainPage} />
        <Route exact path="/">
            {tokenVerified ? <Redirect to="/dashboard" /> : <Redirect to='/register' />}
        </Route>
        </>
    )
};

export default Routes;