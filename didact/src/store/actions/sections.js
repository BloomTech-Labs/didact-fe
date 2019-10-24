import axiosWithAuth from '../../utils/axiosWithAuth'

export const ADD_SECTION_START = "ADD_SECTION_START"
export const ADD_SECTION_SUCCESS = "ADD_SECTION_SUCCESS"
export const ADD_SECTION_FAIL = "ADD_SECTION_FAIL"
export const UPDATE_SECTION_START = "UPDATE_SECTION_START"
export const UPDATE_SECTION_SUCCESS = "UPDATE_SECTION_SUCCESS"
export const UPDATE_SECTION_FAIL = "UPDATE_SECTION_FAIL"
export const GET_SECTIONS_START = "GET_SECTIONS_START"
export const GET_SECTIONS_SUCCESS = "GET_SECTIONS_SUCCESS"
export const GET_SECTIONS_FAIL = "GET_SECTIONS_FAIL"

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




