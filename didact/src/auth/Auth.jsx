import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { verifyToken } from '../store/actions';

const Auth = (props) => {
    const dispatch = useDispatch();
    const token = props.location.search.split('=')[1];
    console.log('token: ', token)
    localStorage.setItem("token", token);

    useEffect(() => {
        if(token) {
            dispatch(verifyToken(props))
        }
    }, [dispatch, props, token])

    return (
        <></>
    )
}

export default Auth;