import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { verifySocial } from '../store/actions';

const Auth = (props) => {
    const dispatch = useDispatch();
    const token = props.location.search.split('=')[1];
    localStorage.setItem("token", token);

    useEffect(() => {
        if(token) {
            dispatch(verifySocial(props));
        }
    }, [dispatch, props, token])

    return (
        <></>
    )
}

export default Auth;