import axios from "axios";
import beURL from '../../utils/beURL'
import axiosWithAuth from "../../utils/axiosWithAuth";
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const VERIFY_START = 'VERIFY_START';
export const VERIFY_SUCCESS = 'VERIFY_SUCCESS';
export const VERIFY_FAILURE = 'VERIFY_FAILURE';
export const SEND_CONTACT_MESSAGE_START = "SEND_CONTACT_MESSAGE_START"
export const SEND_CONTACT_MESSAGE_SUCCESS = "SEND_CONTACT_MESSAGE_SUCCESS"
export const SEND_CONTACT_MESSAGE_FAIL = "SEND_CONTACT_MESSAGE_FAIL"

const baseURL = `${beURL}auth/`



export const loginAction = (history, form) => dispatch => {
    dispatch({ type: LOGIN_START })
    axios
        .post(`${baseURL}login`, form)
        .then(res => {
            localStorage.setItem("token", res.data.token)
            dispatch({ type: LOGIN_SUCCESS, payload: res.data })
        })
        .then(() => history.push("/"))
        .catch(err => {
            dispatch({ type: LOGIN_FAILURE, payload: err })
        })
}

export const registerAction = (history, form) => dispatch => {
    dispatch({ type: REGISTER_START });
    axios
        .post(`${baseURL}register`, form)
        .then(res => {
            dispatch({ type: REGISTER_SUCCESS, payload: res.data });
            localStorage.setItem("token", res.data.token)
        })
        .then(res => history.push("/"))
        .catch(err => {
            dispatch({ type: REGISTER_FAILURE, payload: err })
        });
};

export const verifyToken = (history) => dispatch => {
    const token = localStorage.getItem('token')
    dispatch({ type: VERIFY_START })
    axios.post(`${baseURL}`, { 'token': token })
        .then(res => {
            dispatch({ type: VERIFY_SUCCESS, payload: res.data })
        })
        .catch(async (err) => {
            await localStorage.removeItem('token')
            await dispatch({ type: VERIFY_FAILURE, payload: err.response })
            await history.push('/landing')
        })
}

export const verifySocial = (props) => dispatch => {
    const token = localStorage.getItem('token')
    dispatch({ type: VERIFY_START })
    axios.post(`${baseURL}`, { 'token': token })
        .then(res => {
            dispatch({ type: VERIFY_SUCCESS, payload: res.data })
        })
        .then(props.history.push('/'))
        .catch(err => dispatch({ type: VERIFY_FAILURE, payload: err }))
}

export const sendContactMessage = (values) => dispatch => {
    dispatch({ type: SEND_CONTACT_MESSAGE_START })

    axiosWithAuth()
        .post(`${baseURL}contactmessage`, values)
        .then(res => {
            dispatch({ type: SEND_CONTACT_MESSAGE_SUCCESS })
        })
        .catch(err => {
            dispatch({ type: SEND_CONTACT_MESSAGE_FAIL })
        })
}