import axiosWithAuth from '../../utils/axiosWithAuth'
import beURL from '../../utils/beURL'
export const GET_SECTIONS_START = "GET_SECTIONS_START"
export const GET_SECTIONS_SUCCESS = "GET_SECTIONS_SUCCESS"
export const GET_SECTIONS_FAIL = "GET_SECTIONS_FAIL"
export const ADD_SECTION_START = "ADD_SECTION_START"
export const ADD_SECTION_SUCCESS = "ADD_SECTION_SUCCESS"
export const ADD_SECTION_FAIL = "ADD_SECTION_FAIL"
export const UPDATE_SECTION_START = "UPDATE_SECTION_START"
export const UPDATE_SECTION_SUCCESS = "UPDATE_SECTION_SUCCESS"
export const UPDATE_SECTION_FAIL = "UPDATE_SECTION_FAIL"
export const DELETE_SECTION_START = "DELETE_SECTION_START"
export const DELETE_SECTION_SUCCESS = "DELETE_SECTION_SUCCESS"
export const DELETE_SECTION_FAIL = "DELETE_SECTION_FAIL"
export const GET_LESSONS_START = "GET_LESSONS_START"
export const GET_LESSONS_SUCCESS = "GET_LESSONS_SUCCESS"
export const GET_LESSONS_FAIL = "GET_LESSONS_FAIL"
export const ADD_LESSON_START = "ADD_LESSON_START"
export const ADD_LESSON_SUCCESS = "ADD_LESSON_SUCCESS"
export const ADD_LESSON_FAIL = "ADD_LESSON_FAIL"
export const UPDATE_LESSON_START = "UPDATE_LESSON_START"
export const UPDATE_LESSON_SUCCESS = "UPDATE_LESSON_SUCCESS"
export const UPDATE_LESSON_FAIL = "UPDATE_LESSON_FAIL"
export const DELETE_LESSON_START = "DELETE_LESSON_START"
export const DELETE_LESSON_SUCCESS = "DELETE_LESSON_SUCCESS"
export const DELETE_LESSON_FAIL = "DELETE_LESSON_FAIL"
export const TOGGLE_COMPLETE_SECTION_START = "TOGGLE_COMPLETE_SECTION_START"
export const TOGGLE_COMPLETE_SECTION_SUCCESS = "TOGGLE_COMPLETE_SECTION_SUCCESS"
export const TOGGLE_COMPLETE_SECTION_FAIL = "TOGGLE_COMPLETE_SECTION_FAIL"
export const TOGGLE_COMPLETE_LESSON_START = 'TOGGLE_COMPLETE_LESSON_START'
export const TOGGLE_COMPLETE_LESSON_SUCCESS = 'TOGGLE_COMPLETE_LESSON_SUCCESS'
export const TOGGLE_COMPLETE_LESSON_FAIL = 'TOGGLE_COMPLETE_LESSON_FAIL'

const baseURL = `${beURL}courses/`

export const getSectionsByCourseId = (id) => dispatch =>
{
    dispatch({ type: GET_SECTIONS_START })
    axiosWithAuth()
    .get(`${baseURL}${id}/sections`)
    .then(res =>
        {
            dispatch({ type: GET_SECTIONS_SUCCESS, payload: res.data })
        })
    .catch(err =>
        {
            dispatch({ type: GET_SECTIONS_FAIL, payload: err })
        })
}

export const addSectionToCourse = (id, section) => dispatch =>
{
    dispatch({ type: ADD_SECTION_START })
    axiosWithAuth()
    
    .post(`${baseURL}${id}/sections`, {section})
    .then(res => 
        {
            section.id = res.data.id[0]
            dispatch({ type: ADD_SECTION_SUCCESS, payload: section  })
        })
    .catch(err => {
        dispatch({ type: ADD_SECTION_FAIL, payload: err })
    })
}

export const updateSection = (courseId, sectionId, changes) => dispatch =>
{
    dispatch({ type: UPDATE_SECTION_START })
    axiosWithAuth()
    .put(`${baseURL}${courseId}/sections/${sectionId}`, {changes})
    .then(res => 
        {
            dispatch({ type: UPDATE_SECTION_SUCCESS, payload: {changes:changes, id: sectionId}})
        })
    .catch(err => {
        dispatch({ type: UPDATE_SECTION_FAIL, payload: err })
    })
}

export const deleteSection = (courseId, sectionId) => dispatch =>
{
    dispatch({ type: DELETE_SECTION_START })

    axiosWithAuth()
    .delete(`${baseURL}${courseId}/sections/${sectionId}`)
    .then(res =>
        {
            dispatch({ type: DELETE_SECTION_SUCCESS, payload: sectionId })
        })
    .catch(err =>
        {
            dispatch({ type: DELETE_SECTION_FAIL, payload: err })
        })
}

export const getLessonsBySectionId = (courseId, sectionId) => dispatch =>
{
    dispatch({ type: GET_LESSONS_START })
    axiosWithAuth()
    .get(`${baseURL}${courseId}/sections/${sectionId}`)
    .then(res =>
        {
            dispatch({ type: GET_LESSONS_SUCCESS, payload: {lessons: res.data} })
        })
    .catch(err =>
        {
            dispatch({ type: GET_LESSONS_FAIL, payload: err })
        })
}

export const addLessonToSection = (courseId, sectionId, details) => dispatch =>
{
    dispatch({ type: ADD_LESSON_START })
    
    axiosWithAuth()
    .post(`${baseURL}${courseId}/sections/${sectionId}`, {details})
    .then(res => 
        {
            details.id = res.data.id[0]
            dispatch({ type: ADD_LESSON_SUCCESS, payload: {...details, course_sections_id: sectionId }})
        })
    .catch(err => 
        {
        dispatch({ type: ADD_LESSON_FAIL, payload: err })
        })
}

export const updateLesson = (courseId, sectionId, lessonId, changes) => dispatch =>
{
    dispatch({ type: UPDATE_LESSON_START })
    axiosWithAuth()
    .put(`${baseURL}${courseId}/sections/${sectionId}/details/${lessonId}`, {changes})
    .then(res => 
        {
            dispatch({ type: UPDATE_LESSON_SUCCESS, payload: {...changes, id: lessonId, course_sections_id: sectionId}})
        })
    .catch(err => {
        dispatch({ type: UPDATE_LESSON_FAIL, payload: err })
    })
}

export const deleteLesson = (courseId, sectionId, lessonId) => dispatch =>
{
    dispatch({ type: DELETE_LESSON_START })

    axiosWithAuth()
    .delete(`${baseURL}${courseId}/sections/${sectionId}/details/${lessonId}`)
    .then(res =>
        {
            dispatch({ type: DELETE_LESSON_SUCCESS, payload: lessonId })
        })
    .catch(err =>
        {
            dispatch({ type: DELETE_LESSON_FAIL, payload: err })
        })
}

// Mark Complete Section
export const toggleCompleteSection =(courseId, sectionId) => dispatch => {
    dispatch({type: TOGGLE_COMPLETE_SECTION_START})
    axiosWithAuth()
    .put(`${baseURL}${courseId}/sections/${sectionId}/togglecomplete`)
    .then(res => {
        console.log(res)
        dispatch({type: TOGGLE_COMPLETE_SECTION_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log(err)
        dispatch({type: TOGGLE_COMPLETE_SECTION_FAIL, payload: err})
    })
}

// Mark Complete Lesson
export const toggleCompleteLesson =(courseId, sectionId, detailId) => dispatch => {
    dispatch({type: TOGGLE_COMPLETE_LESSON_START})
    axiosWithAuth()
    .put(`${baseURL}${courseId}/sections/${sectionId}/details/${detailId}/togglecomplete`)
    .then(res => {
        console.log(res)
        dispatch({type: TOGGLE_COMPLETE_LESSON_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log(err)
        dispatch({type: TOGGLE_COMPLETE_LESSON_FAIL, payload: err})
    })
}