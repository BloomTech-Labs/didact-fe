import axios from "axios";

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const FACEBOOK_START = 'FACEBOOK_START';
export const FACEBOOK_SUCCESS = 'FACEBOOK_SUCCESS';
export const FACEBOOK_FAILURE = 'FACEBOOK_FAILURE';
export const GOOGLE_START = 'GOOGLE_START';
export const GOOGLE_SUCCESS = 'GOOGLE_SUCCESS';
export const GOOGLE_FAILURE = 'GOOGLE_FAILURE';


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

export const registerAction = (history, form) => dispatch => {
    dispatch({ type: REGISTER_START });
    axios
      .post("https://didactlms-staging.herokuapp.com/api/auth/register", form)
      .then(res => {
        console.log(res)
        dispatch({ type: REGISTER_SUCCESS, payload: res.data });
        localStorage.setItem("token", res.data.token)
      })
      .then(res => history.push("/dashboard"))
      .catch(err => dispatch({ type: REGISTER_FAILURE, payload: err }));
  };

export const registerWithFacebook = (history) => dispatch => {
    dispatch({type: FACEBOOK_START});
    axios.post(`http://didactlms-staging.herokuapp.com/api/auth/facebook`)
    .then(res => {
        console.log('facebook res: ', res)
        dispatch({type: FACEBOOK_SUCCESS, payload: res.data})
        localStorage.setItem("token", res.data.token)
    })
    .then(res => history.push("/dashboard"))
    .catch(err => dispatch({type:FACEBOOK_FAILURE, payload: err}))
}

export const registerWithGoogle = (history) => dispatch => {
    dispatch({type: GOOGLE_START});
    axios.post(`http://didactlms-staging.herokuapp.com/api/auth/google`)
    .then(res => {
        console.log('facebook res: ', res)
        dispatch({type: GOOGLE_SUCCESS, payload: res.data})
        localStorage.setItem("token", res.data.token)
    })
    .then(res => history.push("/dashboard"))
    .catch(err => dispatch({type:GOOGLE_FAILURE, payload: err}))
}
