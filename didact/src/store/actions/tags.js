import axiosWithAuth from '../../utils/axiosWithAuth'

import {ADD_TAG_TO_COURSE_SUCCESS, DELETE_TAGS_SUCCESS} from './index'

export const TAGS_DATA_START = "TAGS_DATA_START"
export const TAGS_DATA_SUCCESS = "TAGS_DATA_SUCCESS"
export const TAGS_DATA_FAILURE = "TAGS_DATA_FAILURE"
export const ADD_TAGS_START = "ADD_TAGS_START"
export const ADD_TAGS_SUCCESS = "ADD_TAGS_SUCCESS"
export const ADD_TAGS_FAILURE = "ADD_TAGS_FAILURE"
export const DELETE_TAGS_START = "DELETE_TAGS_START"
// export const DELETE_TAGS_SUCCESS = "ADD_TAGS_SUCCESS"
export const DELETE_TAGS_FAILURE = "DELETE_TAGS_FAILURE"

const baseURL = `${process.env.BASEURL}`

export const getTags = () => dispatch => {
    dispatch({type: TAGS_DATA_START})
    axiosWithAuth()
        .get(`${baseURL}tags`)
        .then(res =>  dispatch({type: TAGS_DATA_SUCCESS, payload: res.data}))
        .catch(err => dispatch({type: TAGS_DATA_FAILURE, payload: err}))
} 


export const addTag = (id, tag) => dispatch => {
    dispatch({type: ADD_TAGS_START})
    console.log('form shape: ', tag)
    axiosWithAuth()
        .post(`${baseURL}courses/${id}/tags`,tag)
        .then(res => dispatch({type: ADD_TAG_TO_COURSE_SUCCESS, payload: tag}))
        .catch(err => {
            console.log('error: ', err.message)
            dispatch({type: ADD_TAGS_FAILURE, payload: err})
        })
}

export const deleteTag =(courseId, tag) => dispatch => {
    console.log({tag: tag})
    
    dispatch({type: DELETE_TAGS_START})
    axiosWithAuth()
    .delete(`${baseURL}courses/${courseId}/tags`, { data: {tag: tag} })
    .then(res => {
        // console.log('edit course api response: ', res)
        dispatch({type: DELETE_TAGS_SUCCESS, payload: tag})
    })
    .catch(err => {
        dispatch({type: DELETE_TAGS_FAILURE, payload: err})
    })
}
