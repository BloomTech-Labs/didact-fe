import axiosWithAuth from '../../utils/axiosWithAuth';

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
export const DELETE_COURSE_DATA_FAIL = 'DELETE_COURSE_DATA_FAIL';
export const ADD_TAG_TO_COURSE_START = "ADD_TAG_TO_COURSE_START"
export const ADD_TAG_TO_COURSE_SUCCESS = "ADD_TAG_TO_COURSE_SUCCESS"
export const ADD_TAG_TO_COURSE_FAIL = "ADD_TAG_TO_COURSE_FAIL"
export const ADD_SECTION_START = "ADD_SECTION_START"
export const ADD_SECTION_SUCCESS = "ADD_SECTION_SUCCESS"
export const ADD_SECTION_FAIL = "ADD_SECTION_FAIL"
export const UPDATE_SECTION_START = "UPDATE_SECTION_START"
export const UPDATE_SECTION_SUCCESS = "UPDATE_SECTION_SUCCESS"
export const UPDATE_SECTION_FAIL = "UPDATE_SECTION_FAIL"
export const GET_SECTIONS_START = "GET_SECTIONS_START"
export const GET_SECTIONS_SUCCESS = "GET_SECTIONS_SUCCESS"
export const GET_SECTIONS_FAIL = "GET_SECTIONS_FAIL"
export const GET_DETAILED_COURSE_START = "GET_DETAILED_COURSE_START"
export const GET_DETAILED_COURSE_SUCCESS = "GET_DETAILED_COURSE_SUCCESS"
export const GET_DETAILED_COURSE_FAIL = "GET_DETAILED_COURSE_FAIL"

const baseURL = 'https://didactlms-staging.herokuapp.com/api/courses/'

export const courseEndPoint =() => dispatch => {
    dispatch({type: COURSE_DATA_START})
    axiosWithAuth()
    .get(`${baseURL}`)
    .then(res => {
        // console.log('all courses api response: ', res)
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
        // console.log('single course api response: ', res)
        dispatch({type: SINGLE_COURSE_DATA_SUCCESS, payload: res.data})
    })
    .catch(err => {
        dispatch({type: SINGLE_COURSE_DATA_FAIL, payload: err})
    })
}

export const addCourse =(values) => dispatch => {
    dispatch({type: ADD_COURSE_DATA_START})
    axiosWithAuth()
    .post(`${baseURL}`, values)
    .then(res => {
        // console.log('add course api response: ', res)
        dispatch({type: ADD_COURSE_DATA_SUCCESS, payload: res.data})
    })
    .catch(err => {
        dispatch({type: ADD_COURSE_DATA_FAIL, payload: err})
    })
}

export const editCourse =(id, values) => dispatch => {
    dispatch({type: EDIT_COURSE_DATA_START})
    axiosWithAuth()
    .put(`${baseURL}${id}`, values)
    .then(res => {
        // console.log('edit course api response: ', res)
        dispatch({type: EDIT_COURSE_DATA_SUCCESS, payload: res.data})
    })
    .catch(err => {
        dispatch({type: EDIT_COURSE_DATA_FAIL, payload: err})
    })
}

export const deleteCourse =(id) => dispatch => {
    dispatch({type: DELETE_COURSE_DATA_START})
    axiosWithAuth()
    .delete(`${baseURL}${id}`)
    .then(res => {
        // console.log('edit course api response: ', res)
        dispatch({type: DELETE_COURSE_DATA_SUCCESS, payload: res.data})
    })
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
            console.log('res from add tag to course', res)
            dispatch({ type: ADD_TAG_TO_COURSE_SUCCESS })
        })
    .catch(err => {
        dispatch({ type: ADD_TAG_TO_COURSE_FAIL, payload: err })
    })
}

export const getSectionsByCourseId = (id) => dispatch =>
{
    dispatch({ type: GET_SECTIONS_START })
    axiosWithAuth()
    .get(`${baseURL}${id}/sections`)
    .then(res =>
        {
            console.log(`res from getSectionsByCourseId`, res)
            dispatch({ type: GET_SECTIONS_SUCCESS, payload: res.data })
        })
    .catch(err =>
        {
            console.log(`err from getSectionsByCourseId`, err)
        })
}

export const addSectionToCourse = (id, sectionObj) => dispatch =>
{
    dispatch({ type: ADD_SECTION_START })
    axiosWithAuth()
    .post(`${baseURL}${id}/sections`, sectionObj)
    .then(res => 
        {
            console.log('res from add section to course', res)
            dispatch({ type: ADD_SECTION_SUCCESS })
        })
    .catch(err => {
        dispatch({ type: ADD_SECTION_FAIL, payload: err })
    })
}

export const updateSection = (courseId, sectionId, changes) => dispatch =>
{
    dispatch({ type: UPDATE_SECTION_START })
    axiosWithAuth()
    .put(`${baseURL}${courseId}/sections/${sectionId}`, changes)
    .then(res => 
        {
            console.log('res from updateSection', res)
            dispatch({ type: UPDATE_SECTION_SUCCESS })
        })
    .catch(err => {
        dispatch({ type: UPDATE_SECTION_FAIL, payload: err })
    })
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
    
        console.log('detailedCourse', detailedCourse)
        await dispatch({ type: GET_DETAILED_COURSE_SUCCESS, payload: detailedCourse })
    }
    catch(err)
    {
        console.log(`err from get detailed course`, err)
        dispatch({ type: GET_DETAILED_COURSE_FAIL, payload: err })
    }
}
