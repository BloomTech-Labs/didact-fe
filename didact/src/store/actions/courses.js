import axiosWithAuth from '../../utils/axiosWithAuth';

export const COURSE_DATA_START = 'COURSE_DATA_START';
export const COURSE_DATA_SUCCESS = 'COURSE_DATA_SUCCESS';
export const COURSE_DATA_FAILURE = 'COURSE_DATA_FAILURE';


export const courseEndPoint =() => dispatch => {
    dispatch({type: COURSE_DATA_START})
    axiosWithAuth()
    .get(`https://didactlms-staging.herokuapp.com/api/courses`)
    .then(res => {
        // console.log('course api response: ', res)
        dispatch({type: COURSE_DATA_SUCCESS, payload: res.data})
    })
    .catch(err => {
        dispatch({type: COURSE_DATA_FAILURE, payload: err})
    })
}