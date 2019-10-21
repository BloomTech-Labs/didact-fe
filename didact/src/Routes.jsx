import React, {useState} from "react";
import { Route, Redirect} from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import FormikLoginForm from "./components/login/Login.jsx";
import FormikRegisterForm from "./components/register/Register.jsx";
// import Dashboard from "../components/dashboard/dashboard.jsx";
import Auth from './auth/Auth';
import MainPage from './components/mainPage/MainPage'

const Routes = () => {
    const [token, setToken] = useState(localStorage.getItem('token'))

    return (
        <>
        
        <Route path="/login" component={FormikLoginForm} >
            {token ? <Redirect to='/' /> : null}
        </Route>
        <PrivateRoute exact path="/" component={MainPage} />
        <Route path="/register" component={FormikRegisterForm} >
            {token ? <Redirect to='/' /> : null}
        </Route>
        <Route path='/auth' component={Auth} />
        <PrivateRoute path='/addcourse' component={MainPage} />
        <Route exact path="/">
            {token ? <Redirect to="/" /> : <Redirect to='/register' />}
        </Route>
        </>
    )
};

export default Routes;