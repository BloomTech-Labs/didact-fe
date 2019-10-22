// import axiosWithAuth from '../../utils/axiosWithAuth'

// export const GET_SECTIONS_START = "GET_SECTIONS_START"
// export const GET_SECTIONS_SUCCESS = "GET_SECTIONS_SUCCESS"
// export const GET_SECTIONS_FAIL = "GET_SECTIONS_FAIL"
// export const GET_DETAILED_COURSE_START = "GET_DETAILED_COURSE_START"
// export const GET_DETAILED_COURSE_SUCCESS = "GET_DETAILED_COURSE_SUCCESS"
// export const GET_DETAILED_COURSE_FAIL = "GET_DETAILED_COURSE_FAIL"

// const baseURL = "https://didactlms-staging.herokuapp.com/api/courses/"

// export const getSectionsByCourseId = (id) => dispatch =>
// {
//     dispatch({ type: GET_SECTIONS_START })
//     axiosWithAuth()
//     .get(`${baseURL}${id}/sections`)
//     .then(res =>
//         {
//             console.log(`res from getSectionsByCourseId`, res)
//             dispatch({ type: GET_SECTIONS_SUCCESS, payload: res.data })
//         })
//     .catch(err =>
//         {
//             console.log(`err from getSectionsByCourseId`, err)
//         })
// }

// export const getDetailedCourse = (id) => async dispatch =>
// {
//     dispatch({ type: GET_DETAILED_COURSE_START })
//     let sections = []
//     let course
//     try
//     {
//         let courseRes = await axiosWithAuth().get(`${baseURL}${id}`)
//         course = courseRes.data
//         let sectionsRes = await axiosWithAuth().get(`${baseURL}${id}/sections`)
//         let sectionData = sectionsRes.data.sections
    
//         for(let i=0; i<sectionData.length; i++)
//         {
//             let detailsRes = await axiosWithAuth().get(`${baseURL}${id}/sections/${sectionData[i].id}`)
//             sections.push({
//                 section: sectionData[i],
//                 details: detailsRes.data.courseSection
//             })
//         }
    
//         let detailedCourse = 
//         {
//             course,
//             sections
//         }
    
//         console.log('detailedCourse', detailedCourse)
//         await dispatch({ type: GET_DETAILED_COURSE_SUCCESS, payload: detailedCourse })
//     }
//     catch(err)
//     {
//         console.log(`err from get detailed course`, err)
//         dispatch({ type: GET_DETAILED_COURSE_FAIL, payload: err })
//     }
// }
