import axiosWithAuth from '../../utils/axiosWithAuth'

export const GET_SECTIONS_START = "GET_SECTIONS_START"
export const GET_SECTIONS_SUCCESS = "GET_SECTIONS_SUCCESS"
export const GET_SECTIONS_FAIL = "GET_SECTIONS_FAIL"
export const GET_SECTION_DETAILS_START = "GET_SECTION_DETAILS_START"
export const GET_SECTION_DETAILS_SUCCESS = "GET_SECTION_DETAILS_SUCCESS"
export const GET_SECTION_DETAILS_FAIL = "GET_SECTION_DETAILS_FAIL"

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

// export const courseEndPoint =() => dispatch => {
//     dispatch({type: COURSE_DATA_START})
//     axiosWithAuth()
//     .get(`https://didactlms-staging.herokuapp.com/api/courses`)
//     .then(res => {
//         // console.log('all courses api response: ', res)
//         dispatch({type: COURSE_DATA_SUCCESS, payload: res.data})
//     })
//     .catch(err => {
//         dispatch({type: COURSE_DATA_FAILURE, payload: err})
//     })
// }