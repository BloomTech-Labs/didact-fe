import axiosWithAuth from '../../utils/axiosWithAuth';
import beURL from '../../utils/beURL'
import {addNewCourseToLearningPath} from '../actions/index.js'

export const COURSE_DATA_START = 'COURSE_DATA_START';
export const COURSE_DATA_SUCCESS = 'COURSE_DATA_SUCCESS';
export const COURSE_DATA_FAIL = 'COURSE_DATA_FAIL';
export const SINGLE_COURSE_DATA_START = 'SINGLE_COURSE_DATA_START';
export const SINGLE_COURSE_DATA_SUCCESS = 'SINGLE_COURSE_DATA_SUCCESS';
export const SINGLE_COURSE_DATA_FAIL = 'SINGLE_COURSE_DATA_FAIL';
export const ADD_COURSE_DATA_START = 'ADD_COURSE_DATA_START';
export const ADD_COURSE_DATA_SUCCESS = 'ADD_COURSE_DATA_SUCCESS';
export const ADD_COURSE_DATA_FAIL = 'ADD_COURSE_DATA_FAIL';
export const EDIT_COURSE_DATA_START = 'EDIT_COURSE_DATA_START';
export const EDIT_COURSE_DATA_SUCCESS = 'EDIT_COURSE_DATA_SUCCESS';
export const EDIT_COURSE_DATA_FAIL = 'EDIT_COURSE_DATA_FAIL'; 
export const DELETE_COURSE_DATA_START = 'DELETE_COURSE_DATA_START';
export const DELETE_COURSE_DATA_SUCCESS = 'DELETE_COURSE_DATA_SUCCESS';
export const DELETE_TAGS_SUCCESS = 'DELETE_TAGS_SUCCESS';
export const DELETE_COURSE_DATA_FAIL = 'DELETE_COURSE_DATA_FAIL';
export const ADD_TAG_TO_COURSE_START = "ADD_TAG_TO_COURSE_START"
export const ADD_TAG_TO_COURSE_SUCCESS = "ADD_TAG_TO_COURSE_SUCCESS"
export const ADD_TAG_TO_COURSE_FAIL = "ADD_TAG_TO_COURSE_FAIL"
export const GET_DETAILED_COURSE_START = "GET_DETAILED_COURSE_START"
export const GET_DETAILED_COURSE_SUCCESS = "GET_DETAILED_COURSE_SUCCESS"
export const GET_DETAILED_COURSE_FAIL = "GET_DETAILED_COURSE_FAIL"
export const TOGGLE_COMPLETE_COURSE_START = "TOGGLE_COMPLETE_COURSE_START"
export const TOGGLE_COMPLETE_COURSE_SUCCESS = "TOGGLE_COMPLETE_COURSE_SUCCESS"
export const TOGGLE_COMPLETE_COURSE_FAIL = "TOGGLE_COMPLETE_COURSE_FAIL"
export const GET_USER_COMPLETION_COURSE_START = "GET_USER_COMPLETION_COURSE_START"
export const GET_USER_COMPLETION_COURSE_SUCCESS = "GET_USER_COMPLETION_COURSE_SUCCESS"
export const GET_USER_COMPLETION_COURSE_FAIL = "GET_USER_COMPLETION_COURSE_FAIL"

const baseURL = `${beURL}courses/`

export const courseEndPoint =() => dispatch => {
    dispatch({type: COURSE_DATA_START})
    axiosWithAuth()
    .get(`${baseURL}`)
    .then(res => {
        dispatch({type: COURSE_DATA_SUCCESS, payload: res.data})
    })
    .catch(err => {
        dispatch({type: COURSE_DATA_FAIL, payload: err})
    })
}

export const getCourseById =(id) => dispatch => {
    dispatch({type: SINGLE_COURSE_DATA_START})
    axiosWithAuth()
    .get(`${baseURL}${id}`)
    .then(res => { 
        dispatch({type: SINGLE_COURSE_DATA_SUCCESS, payload: res.data})
    })
    .catch(err => {
        dispatch({type: SINGLE_COURSE_DATA_FAIL, payload: err})
    })
}

export const addCourse =(values, props) => dispatch => {
    dispatch({type: ADD_COURSE_DATA_START})
    axiosWithAuth()
    .post(`${baseURL}`, values)
    .then(res => {
        dispatch({type: ADD_COURSE_DATA_SUCCESS, payload: {...values, id: res.data} })
        return res.data
    })
    .then(response => props.match.params.id ? (dispatch(addNewCourseToLearningPath(props, response.id))) : props.history.push(`/courses/${response.id}/edit`))
    .catch(err => {
        dispatch({type: ADD_COURSE_DATA_FAIL, payload: err})
    })
}

export const editCourse =(id, changes) => dispatch => {
    dispatch({type: EDIT_COURSE_DATA_START})
    axiosWithAuth()
    .put(`${baseURL}${id}`, {changes})
    .then(res => {
        dispatch({type: EDIT_COURSE_DATA_SUCCESS, payload: changes})
    })
    .catch(err => {
        dispatch({type: EDIT_COURSE_DATA_FAIL, payload: err})
    })
}


export const deleteCourse =(id, history) => dispatch => {
    dispatch({type: DELETE_COURSE_DATA_START})
    axiosWithAuth()
    .delete(`${baseURL}${id}`)
    .then(res => {
        dispatch({type: DELETE_COURSE_DATA_SUCCESS, payload: id})
    })
    .then(() => history.push('/'))
    .catch(err => {
        dispatch({type: DELETE_COURSE_DATA_FAIL, payload: err})
    })
}

export const addTagToCourse = (id, tag) => dispatch =>
{
    dispatch({ type: ADD_TAG_TO_COURSE_START })
    axiosWithAuth()
    .post(`${baseURL}${id}/tags`, tag)
    .then(res => 
        {
            dispatch({ type: ADD_TAG_TO_COURSE_SUCCESS })
        })
    .catch(err => {
        dispatch({ type: ADD_TAG_TO_COURSE_FAIL, payload: err })
    })
}

export const getYourDetailedCourse = (id) => async dispatch =>
{
    dispatch({ type: GET_DETAILED_COURSE_START })
    let sections = []
    let course
    try
    {
        let courseRes = await axiosWithAuth().get(`${baseURL}${id}/yours`)
        console.log("CourseRes", courseRes)
        course = courseRes.data
        // let sectionsRes = await axiosWithAuth().get(`${baseURL}${id}/sections`)
        let sectionsRes = await axiosWithAuth().get(`${baseURL}${id}/yoursections`)
        let sectionData = sectionsRes.data.sections
    
        for(let i=0; i<sectionData.length; i++)
        {
            // let detailsRes = await axiosWithAuth().get(`${baseURL}${id}/sections/${sectionData[i].id}`)
            let detailsRes = await axiosWithAuth().get(`${baseURL}${id}/yoursections/${sectionData[i].id}`)
            sections.push({
                section: sectionData[i],
                details: detailsRes.data.courseSection
            })
        }
    
        let detailedCourse = 
        {
            course,
            sections
        }
    
        await dispatch({ type: GET_DETAILED_COURSE_SUCCESS, payload: detailedCourse })
    }
    catch(err)
    {
        dispatch({ type: GET_DETAILED_COURSE_FAIL, payload: err })
    }
}

export const getDetailedCourse = (id) => async dispatch =>
{
    dispatch({ type: GET_DETAILED_COURSE_START })
    let sections = []
    let course
    try
    {
        let courseRes = await axiosWithAuth().get(`${baseURL}${id}`)
        course = courseRes.data
        let sectionsRes = await axiosWithAuth().get(`${baseURL}${id}/sections`)
        let sectionData = sectionsRes.data.sections
    
        for(let i=0; i<sectionData.length; i++)
        {
            let detailsRes = await axiosWithAuth().get(`${baseURL}${id}/sections/${sectionData[i].id}`)
            sections.push({
                section: sectionData[i],
                details: detailsRes.data.courseSection
            })
        }
    
        let detailedCourse = 
        {
            course,
            sections
        }
    
        await dispatch({ type: GET_DETAILED_COURSE_SUCCESS, payload: detailedCourse })
    }
    catch(err)
    {
        dispatch({ type: GET_DETAILED_COURSE_FAIL, payload: err })
    }
}

// Mark Complete
export const toggleCompleteCourse =(id) => dispatch => {
    dispatch({type: TOGGLE_COMPLETE_COURSE_START})
    axiosWithAuth()
    .put(`${baseURL}${id}/togglecomplete`)
    .then(res => {
        console.log(res)
        dispatch({type: TOGGLE_COMPLETE_COURSE_SUCCESS, payload: res.data})
        return id
    })
    .then(resId => dispatch(getDetailedCourse(resId)))
    .catch(err => {
        console.log(err)
        dispatch({type: TOGGLE_COMPLETE_COURSE_FAIL, payload: err})
    })
}

// User show Course completion
export const findYoursById =(id) => dispatch => {
    dispatch({type: GET_USER_COMPLETION_COURSE_START})
    axiosWithAuth()
    .get(`${baseURL}${id}/yours`)
    .then(res => {
        console.log(res)
        dispatch({type: GET_USER_COMPLETION_COURSE_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log(err)
        dispatch({type: GET_USER_COMPLETION_COURSE_FAIL, payload: err})
    })
}
