// import axios from 'axios';

// export const TEST_DATA_START = 'TEST_DATA_START';
// export const TEST_DATA_SUCCESS = 'TEST_DATA_SUCCESS';
// export const TEST_DATA_FAILURE = 'TEST_DATA_FAILURE';
// export const LOGIN_START = 'LOGIN_START';
// export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
// export const LOGIN_FAILURE = 'LOGIN_FAILURE';
// // export const REGISTER_START = 'REGISTER_START';
// // export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
// // export const REGISTER_FAILURE = 'REGISTER_FAILURE';

// export const testEndPoint = form => dispatch => {
//     dispatch({type: TEST_DATA_START})
//     axios.get(``)
//     .then(res => {
//         console.log(res)
//         dispatch({type: TEST_DATA_SUCCESS, payload: res})
//     })
//     .catch(err => {
//         dispatch({type: TEST_DATA_FAILURE, payload: err})
//     })
// }

// export const loginAction = (history, form) => dispatch => {
//     console.log('form', form)
//     console.log(`history: ${history}`)
//     dispatch({type: LOGIN_START})
//     axios.post(`http://localhost:5000/api/auth/login`, form)
//     .then(res => 
//         {
//             console.log(`first res from login:`, res)
//             localStorage.setItem("token", res.data.access_token)
//         })
//     .then(res => {
//         console.log(`second res from login: ${res}`)
//         dispatch({type: LOGIN_SUCCESS, payload: res})
//     })
//     .then(res => history.push("/dashboard"))
//     .catch(err => {
//         dispatch({type: LOGIN_FAILURE, payload: err})
//     })
// }

export {
    TEST_DATA_START,
    TEST_DATA_SUCCESS,
    TEST_DATA_FAILURE,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    loginAction,
    testEndPoint
} from './onboardingActions'