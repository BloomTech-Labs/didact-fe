import axiosWithAuth from '../../utils/axiosWithAuth'

export const GET_SECTIONS_START = "GET_SECTIONS_START"
export const GET_SECTIONS_SUCCESS = "GET_SECTIONS_SUCCESS"
export const GET_SECTIONS_FAIL = "GET_SECTIONS_FAIL"
export const GET_SECTION_DETAILS_START = "GET_SECTION_DETAILS_START"
export const GET_SECTION_DETAILS_SUCCESS = "GET_SECTION_DETAILS_SUCCESS"
export const GET_SECTION_DETAILS_FAIL = "GET_SECTION_DETAILS_FAIL"

export const GET_DETAILED_COURSE_START = "GET_DETAILED_COURSE_START"
export const GET_DETAILED_COURSE_SUCCESS = "GET_DETAILED_COURSE_SUCCESS"
export const GET_DETAILED_COURSE_FAIL = "GET_DETAILED_COURSE_FAIL"

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

export const getDetailedCourse = (id) => dispatch =>
{
    dispatch({ type: GET_DETAILED_COURSE_START })
    let sections = []
    let course
    axiosWithAuth()
    .get(`${baseURL}${id}`)
    .then(res =>
    {
        course = res.data
        axiosWithAuth()
        .get(`${baseURL}${id}/sections`)
        .then(res =>
        {
            res.data.sections.forEach(el =>
            {
                axiosWithAuth()
                .get(`${baseURL}${id}/sections/${el.id}`)
                .then(details =>
                {
                    sections.push({
                        section: el,
                        details: details.data.courseSection
                    })
                })
            })
            
        })
        .then(blah =>
        {
            let detailedCourse = 
            {
                course,
                sections
            }
            console.log('detailedCourse', detailedCourse)
            dispatch({ type: GET_DETAILED_COURSE_SUCCESS, payload: detailedCourse })
        })
    })
    .catch(err =>
    {
        console.log(`err from get detailed course`, err)
        dispatch({ type: GET_DETAILED_COURSE_FAIL, payload: err })
    })
}