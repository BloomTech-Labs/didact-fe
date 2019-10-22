import axiosWithAuth from '../../utils/axiosWithAuth'

export const TAGS_DATA_START = "TAGS_DATA_START"
export const TAGS_DATA_SUCCESS = "TAGS_DATA_SUCCESS"
export const TAGS_DATA_FAILURE = "TAGS_DATA_FAILURE"
export const ADD_TAGS_START = "ADD_TAGS_START"
export const ADD_TAGS_SUCCESS = "ADD_TAGS_SUCCESS"
export const ADD_TAGS_FAILURE = "ADD_TAGS_FAILURE"
export const DELETE_TAGS_START = "ADD_TAGS_START"
export const DELETE_TAGS_SUCCESS = "ADD_TAGS_SUCCESS"
export const DELETE_TAGS_FAILURE = "ADD_TAGS_FAILURE"



export const getTags = () => dispatch => {
    dispatch({type: TAGS_DATA_START})
    axiosWithAuth()
        .get(`https://didactlms-staging.herokuapp.com/api/tags`)
        .then(res => dispatch({type: TAGS_DATA_SUCCESS, payload: res.data}))
        .catch(err => dispatch({type: TAGS_DATA_FAILURE, payload: err}))
}


export const addTag = (id, form) => dispatch => {
    dispatch({type: ADD_TAGS_START})
    axiosWithAuth()
        .post(`https://didactlms-staging.herokuapp.com/api/courses/${id}/tags`, form)
        .then(res => dispatch({type: ADD_TAGS_SUCCESS, payload: res.data}))
        .catch(err => dispatch({type: ADD_TAGS_FAILURE, payload: err}))
}