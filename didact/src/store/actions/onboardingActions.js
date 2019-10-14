
import axios from "axios";
import axiosWithAuth from '../../utils/axiosWithAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const VERIFY_START = 'VERIFY_START';
export const VERIFY_SUCCESS = 'VERIFY_SUCCESS';
export const VERIFY_FAILURE = 'VERIFY_FAILURE';


export const loginAction = (history, form) => dispatch => {

    dispatch({type: LOGIN_START})

    axios.post(`https://didactlms-staging.herokuapp.com/api/auth/login`, form)
        .then(res => 
            {
                localStorage.setItem("token", res.data.token)
                dispatch({type: LOGIN_SUCCESS, payload: res})
            })
        .then(res => history.push("/dashboard"))
        .catch(err => 
            {
                dispatch({type: LOGIN_FAILURE, payload: err})
            })
}

export const registerAction = (history, form) => dispatch => {
    dispatch({ type: REGISTER_START });
    axios
      .post("https://didactlms-staging.herokuapp.com/api/auth/register", form)
      .then(res => {
        dispatch({ type: REGISTER_SUCCESS, payload: res.data });
        localStorage.setItem("token", res.data.token)
      })
      .then(res => history.push("/dashboard"))
      .catch(err => dispatch({ type: REGISTER_FAILURE, payload: err }));
  };

export const verifyToken = (props) => dispatch => {
    console.log('props in action: ', props)
    dispatch({type: VERIFY_START})
    axiosWithAuth().get(`https://didactlms-staging.herokuapp.com/api/auth`)
    .then(res => {
        dispatch({type: VERIFY_SUCCESS, payload: res.data})
    })
    .then(props.history.push('/dashboard'))
    .catch(err => dispatch({type: VERIFY_FAILURE, payload: err}))
}
