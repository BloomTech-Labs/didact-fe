import axiosWithAuth from '../../utils/axiosWithAuth';
import axios from "axios";

export const TEST_DATA_START = 'TEST_DATA_START';
export const TEST_DATA_SUCCESS = 'TEST_DATA_SUCCESS';
export const TEST_DATA_FAILURE = 'TEST_DATA_FAILURE';
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const testEndPoint = form => dispatch => {
    dispatch({type: TEST_DATA_START})
    axiosWithAuth()
    .get(`https://didactlms-staging.herokuapp.com/api/courses`)
    .then(res => {
        console.log(res)
        dispatch({type: TEST_DATA_SUCCESS, payload: res})
    })
    .catch(err => {
        dispatch({type: TEST_DATA_FAILURE, payload: err})
    })
}

export const loginAction = (history, form) => dispatch => {

    dispatch({type: LOGIN_START})

    axios.post(`https://didactlms-staging.herokuapp.com/api/auth/login`, form)
        .then(res => 
            {
                console.log(`first res from login:`, res)
                localStorage.setItem("token", res.data.token)
                dispatch({type: LOGIN_SUCCESS, payload: res})
            })
        .then(res => history.push("/dashboard"))
        .catch(err => 
            {
                console.log(`err from login:`, err)
                dispatch({type: LOGIN_FAILURE, payload: err})
            })
}

export const registerAction = props => dispatch => {
    dispatch({ type: REGISTER_START });
    axios
      .post("https://didactlms-staging.herokuapp.com/api/auth/register", props)
      .then(res => {
        console.log(res)
        dispatch({ type: REGISTER_SUCCESS, payload: res.data });
      })
      .catch(err => dispatch({ type: REGISTER_FAILURE, payload: err }));
  };