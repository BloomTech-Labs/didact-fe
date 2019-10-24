import axiosWithAuth from '../../utils/axiosWithAuth'
import { red } from '@material-ui/core/colors'

export const ADD_SECTION_START = "ADD_SECTION_START"
export const ADD_SECTION_SUCCESS = "ADD_SECTION_SUCCESS"
export const ADD_SECTION_FAIL = "ADD_SECTION_FAIL"
export const UPDATE_SECTION_START = "UPDATE_SECTION_START"
export const UPDATE_SECTION_SUCCESS = "UPDATE_SECTION_SUCCESS"
export const UPDATE_SECTION_FAIL = "UPDATE_SECTION_FAIL"
export const GET_SECTIONS_START = "GET_SECTIONS_START"
export const GET_SECTIONS_SUCCESS = "GET_SECTIONS_SUCCESS"
export const GET_SECTIONS_FAIL = "GET_SECTIONS_FAIL"
export const GET_LESSONS_START = "GET_LESSONS_START"
export const GET_LESSONS_SUCCESS = "GET_LESSONS_SUCCESS"
export const GET_LESSONS_FAIL = "GET_LESSONS_FAIL"
export const ADD_LESSON_START = "ADD_LESSON_START"
export const ADD_LESSON_SUCCESS = "ADD_LESSON_SUCCESS"
export const ADD_LESSON_FAIL = "ADD_LESSON_FAIL"
export const UPDATE_LESSON_START = "UPDATE_LESSON_START"
export const UPDATE_LESSON_SUCCESS = "UPDATE_LESSON_SUCCESS"
export const UPDATE_LESSON_FAIL = "UPDATE_LESSON_FAIL"

const baseURL = "https://didactlms-staging.herokuapp.com/api/courses/"

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
            dispatch({ type: GET_SECTIONS_FAIL, payload: err })
        })
}

export const addSectionToCourse = (id, section) => dispatch =>
{
    dispatch({ type: ADD_SECTION_START })
    console.log('Sections form shape ', section)
    axiosWithAuth()
    
    .post(`${baseURL}${id}/sections`, {section})
    .then(res => 
        {
            console.log('res from add section to course', res)
            section.id = res.data.id
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
            console.log('res from updateSection', res)
            dispatch({ type: UPDATE_SECTION_SUCCESS, payload: {changes:changes, id: sectionId}})
        })
    .catch(err => {
        dispatch({ type: UPDATE_SECTION_FAIL, payload: err })
    })
}

export const getLessonsBySectionId = (courseId, sectionId) => dispatch =>
{
    dispatch({ type: GET_LESSONS_START })
    axiosWithAuth()
    .get(`${baseURL}${courseId}/sections/${sectionId}`)
    .then(res =>
        {
            console.log(`res from getLessonsBySectionId`, res)
            dispatch({ type: GET_LESSONS_SUCCESS, payload: res.data })
        })
    .catch(err =>
        {
            console.log(`err from getLessonsBySectionId`, err)
            dispatch({ type: GET_LESSONS_FAIL, payload: err })
        })
}

export const addLessonToSection = (courseId, sectionId, lesson) => dispatch =>
{
    dispatch({ type: ADD_LESSON_START })

    axiosWithAuth()
    .post(`${baseURL}${courseId}/sections/${sectionId}`, {lesson})
    .then(res => 
        {
            console.log('res from add lesson to section', res)
            lesson.id = res.data.id
            dispatch({ type: ADD_LESSON_SUCCESS, payload: lesson  })
        })
    .catch(err => 
        {
        console.log('err from add lesson to section', err)
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
            console.log('res from updateLesson', res)
            dispatch({ type: UPDATE_LESSON_SUCCESS, payload: {changes:changes, id: lessonId}})
        })
    .catch(err => {
        dispatch({ type: UPDATE_LESSON_FAIL, payload: err })
    })
}