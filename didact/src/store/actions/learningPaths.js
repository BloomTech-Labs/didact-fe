import axiosWithAuth from '../../utils/axiosWithAuth'
import beURL from '../../utils/beURL'

export const GET_LEARNING_PATHS_START = "GET_LEARNING_PATHS_START"
export const GET_LEARNING_PATHS_SUCCESS = "GET_LEARNING_PATHS_SUCCESS"
export const GET_LEARNING_PATHS_FAIL = "GET_LEARNING_PATHS_FAIL"
export const SEARCH_PATHS_BY_TAG_START = "SEARCH_PATHS_BY_TAG_START"
export const SEARCH_PATHS_BY_TAG_SUCCESS = "SEARCH_PATHS_BY_TAG_SUCCESS"
export const SEARCH_PATHS_BY_TAG_FAIL = "SEARCH_PATHS_BY_TAG_FAIL"
export const GET_LEARNING_PATH_START = "GET_LEARNING_PATH_START"
export const GET_LEARNING_PATH_SUCCESS = "GET_LEARNING_PATH_SUCCESS"
export const GET_LEARNING_PATH_FAIL = "GET_LEARNING_PATH_FAIL"
export const POST_LEARNING_PATH_START = "POST_LEARNING_PATH_START"
export const POST_LEARNING_PATH_SUCCESS = "POST_LEARNING_PATH_SUCCESS"
export const POST_LEARNING_PATH_FAIL = "POST_LEARNING_PATH_FAIL"
export const UPDATE_LEARNING_PATH_START = "UPDATE_LEARNING_PATH_START"
export const UPDATE_LEARNING_PATH_SUCCESS = "UPDATE_LEARNING_PATH_SUCCESS"
export const UPDATE_LEARNING_PATH_FAIL = "UPDATE_LEARNING_PATH_FAIL"
export const DELETE_LEARNING_PATH_START = "DELETE_LEARNING_PATH_START"
export const DELETE_LEARNING_PATH_SUCCESS = "DELETE_LEARNING_PATH_SUCCESS"
export const DELETE_LEARNING_PATH_FAIL = "DELETE_LEARNING_PATH_FAIL"
export const JOIN_LEARNING_PATH_START = "JOIN_LEARNING_PATH_START"
export const JOIN_LEARNING_PATH_SUCCESS = "JOIN_LEARNING_PATH_SUCCESS"
export const JOIN_LEARNING_PATH_FAIL = "JOIN_LEARNING_PATH_FAIL"
export const QUIT_LEARNING_PATH_START = "QUIT_LEARNING_PATH_START"
export const QUIT_LEARNING_PATH_SUCCESS = "QUIT_LEARNING_PATH_SUCCESS"
export const QUIT_LEARNING_PATH_FAIL = "QUIT_LEARNING_PATH_FAIL"
export const POST_TAG_TO_PATH_START = "POST_TAG_TO_PATH_START"
export const POST_TAG_TO_PATH_SUCCESS = "POST_TAG_TO_PATH_SUCCESS"
export const POST_TAG_TO_PATH_FAIL = "POST_TAG_TO_PATH_FAIL"
export const DELETE_TAG_FROM_PATH_START = "DELETE_TAG_FROM_PATH_START"
export const DELETE_TAG_FROM_PATH_SUCCESS = "DELETE_TAG_FROM_PATH_SUCCESS"
export const DELETE_TAG_FROM_PATH_FAIL = "DELETE_TAG_FROM_PATH_FAIL"
export const POST_COURSE_TO_PATH_START = "POST_COURSE_TO_PATH_START"
export const POST_COURSE_TO_PATH_SUCCESS = "POST_COURSE_TO_PATH_SUCCESS"
export const POST_COURSE_TO_PATH_FAIL = "POST_COURSE_TO_PATH_FAIL"
export const REMOVE_COURSE_FROM_PATH_START = "REMOVE_COURSE_FROM_PATH_START"
export const REMOVE_COURSE_FROM_PATH_SUCCESS = "REMOVE_COURSE_FROM_PATH_SUCCESS"
export const REMOVE_COURSE_FROM_PATH_FAIL = "REMOVE_COURSE_FROM_PATH_FAIL"
export const UPDATE_COURSE_ORDER_START = "UPDATE_COURSE_ORDER_START"
export const UPDATE_COURSE_ORDER_SUCCESS = "UPDATE_COURSE_ORDER_SUCCESS"
export const UPDATE_COURSE_ORDER_FAIL = "UPDATE_COURSE_ORDER_FAIL"
export const GET_YOUR_LEARNING_PATHS_START = "GET_YOUR_LEARNING_PATHS_START"
export const GET_YOUR_LEARNING_PATHS_SUCCESS = "GET_YOUR_LEARNING_PATHS_SUCCESS"
export const GET_YOUR_LEARNING_PATHS_FAIL = "GET_YOUR_LEARNING_PATHS_FAIL"

const baseURL = `${beURL}learning-paths/`

export const getLearningPaths = () => dispatch =>
{
    dispatch({ type: GET_LEARNING_PATHS_START })

    axiosWithAuth().get(`${baseURL}`)
    .then(res =>
    {
        console.log('res from get learning paths', res)
        dispatch({ type: GET_LEARNING_PATHS_SUCCESS, payload: res.data })
    })
    .catch(err =>
    {
        console.log('err from get learning paths', err)
        dispatch({ type: GET_LEARNING_PATHS_FAIL, payload: err })
    })
}

export const searchLearningPathsByTag = (tag="") => dispatch =>
{
    dispatch({ type: SEARCH_PATHS_BY_TAG_START })

    axiosWithAuth().get(`${baseURL}`)
    .then(res =>
    {
        console.log('res from search learning paths by tag', res)
        dispatch({ type: SEARCH_PATHS_BY_TAG_SUCCESS, payload: res.data })
    })
    .catch(err =>
    {
        console.log('err from search learning paths by tag', err)
        dispatch({ type: SEARCH_PATHS_BY_TAG_FAIL, payload: err })
    })
}

export const getLearningPath = (id) => dispatch =>
{
    dispatch({ type: GET_LEARNING_PATH_START })

    axiosWithAuth().get(`${baseURL}${id}`)
    .then(res =>
    {
        console.log('res from get learning path (singular)', res)
        dispatch({ type: GET_LEARNING_PATH_SUCCESS, payload: res.data })
    })
    .catch(err =>
    {
        console.log('err from get learning path (singular)', err)
        dispatch({ type: GET_LEARNING_PATH_FAIL, payload: err })
    })
}

export const postLearningPath = (pathObj, history) => dispatch =>
{
    dispatch({ type: POST_LEARNING_PATH_START })

    axiosWithAuth().post(`${baseURL}`, pathObj)
    .then(res =>
    {
        console.log('res from post learning path', res)
        pathObj.id = res.data.id
        dispatch({ type: POST_LEARNING_PATH_SUCCESS, payload: pathObj })
        return res.data
    })
    .then(response => history.push(`/learning-paths/${response.id}/edit`))
    .catch(err =>
    {
        console.log('err from post learning path', err)
        dispatch({ type: POST_LEARNING_PATH_FAIL, payload: err })
    })
}

export const updateLearningPath = (id, changes) => dispatch =>
{
    dispatch({ type: UPDATE_LEARNING_PATH_START })
    // console.log(changes)
    //changes should be an object like { changes: {name: 'blah'} } as an example. See api docs
    axiosWithAuth().put(`${baseURL}${id}`, {changes})
    .then(res =>
    {
        console.log('res from update learning path', res)
        dispatch({ type: UPDATE_LEARNING_PATH_SUCCESS, payload: {...changes, id: id} })
    })
    .catch(err =>
    {
        console.log('err from update learning path', err)
        dispatch({ type: UPDATE_LEARNING_PATH_FAIL, payload: err })
    })
}

export const deleteLearningPath = (id, history) => dispatch =>
{
    dispatch({ type: DELETE_LEARNING_PATH_START })

    axiosWithAuth().delete(`${baseURL}${id}`)
    .then(res =>
    {
        console.log('res from delete learning path', res)
        dispatch({ type: DELETE_LEARNING_PATH_SUCCESS, payload: id })
    })
    .then(() => history.push(`/`))
    .catch(err =>
    {
        console.log('err from delete learning path', err)
        dispatch({ type: DELETE_LEARNING_PATH_FAIL, payload: err })
    })
}

export const joinLearningPath = id => dispatch =>
{
    dispatch({ type: JOIN_LEARNING_PATH_START })

    axiosWithAuth().post(`${baseURL}${id}/user`)
    .then(res =>
    {
        console.log("res from joinLearningPath:", res)
        dispatch({ type: JOIN_LEARNING_PATH_SUCCESS, payload: id })
    })
    .catch(err =>
    {
        console.log("err from joinLearningPath:", err)
        dispatch({ type: JOIN_LEARNING_PATH_FAIL, payload: err })
    })
}

export const quitLearningPath = id => dispatch =>
{
    dispatch({ type: QUIT_LEARNING_PATH_START })

    axiosWithAuth().delete(`${baseURL}${id}/user`)
    .then(res =>
    {
        console.log("res from quitLearningPath:", res)
        dispatch({ type: QUIT_LEARNING_PATH_SUCCESS, payload: id })
    })
    .catch(err =>
    {
        console.log("err from quitLearningPath:", err)
        dispatch({ type: QUIT_LEARNING_PATH_FAIL, payload: err })
    })
}

export const postTagToPath = (tag, id) => dispatch =>
{
    dispatch({ type: POST_TAG_TO_PATH_START })

    axiosWithAuth().post(`${baseURL}${id}/tags`, {tag})
    .then(res =>
    {
        console.log("res from postTagToPath:", res)
        dispatch({ type: POST_TAG_TO_PATH_SUCCESS, payload: tag })
    })
    .catch(err =>
    {
        console.log("err from postTagToPath:", err)
        dispatch({ type: POST_TAG_TO_PATH_FAIL, payload: err })
    })
}

export const deleteTagFromPath = (tag, id) => dispatch =>
{
    dispatch({ type: DELETE_TAG_FROM_PATH_START })

    axiosWithAuth().delete(`${baseURL}${id}/tags`, {tag})
    .then(res =>
    {
        console.log("res from deleteTagFromPath:", res)
        dispatch({ type: DELETE_TAG_FROM_PATH_SUCCESS, payload: tag })
    })
    .catch(err =>
    {
        console.log("err from deleteTagFromPath:", err)
        dispatch({ type: DELETE_TAG_FROM_PATH_FAIL, payload: err })
    })
}

export const postCourseToPath = (pathId, courseId, order) => dispatch =>
{
    dispatch({ type: POST_COURSE_TO_PATH_START })

    axiosWithAuth().post(`${baseURL}${pathId}/course/${courseId}`, {order})
    .then(res =>
    {
        console.log("res from postCourseToPath:", res)
        dispatch({ type: POST_COURSE_TO_PATH_SUCCESS, payload: res.data.pathCourses })
    })
    .catch(err =>
    {
        console.log("err from postCourseToPath:", err)
        dispatch({ type: POST_COURSE_TO_PATH_FAIL, payload: err })
    })
}

export const removeCourseFromPath = (pathId, courseId) => dispatch =>
{
    dispatch({ type: REMOVE_COURSE_FROM_PATH_START })

    axiosWithAuth().delete(`${baseURL}${pathId}/course/${courseId}`)
    .then(res =>
    {
        console.log("res from removeCourseFromPath:", res)
        dispatch({ type: REMOVE_COURSE_FROM_PATH_SUCCESS, payload: res.data.pathCourses })
    })
    .catch(err =>
    {
        console.log("err from removeCourseFromPath:", err)
        dispatch({ type: REMOVE_COURSE_FROM_PATH_FAIL, payload: err })
    })
}

export const updateCourseOrder = (pathId, courseId, order) => dispatch =>
{
    dispatch({ type: UPDATE_COURSE_ORDER_START })

    axiosWithAuth().post(`${baseURL}${pathId}/course/${courseId}`, {order})
    .then(res =>
    {
        console.log("res from updateCourseOrder:", res)
        dispatch({ type: UPDATE_COURSE_ORDER_SUCCESS, payload: {pathId, courseId, order} })
    })
    .catch(err =>
    {
        console.log("err from updateCourseOrder:", err)
        dispatch({ type: UPDATE_COURSE_ORDER_FAIL, payload: err })
    })
}

export const getYourLearningPaths = (userId) => dispatch =>
{
    dispatch({ type: GET_YOUR_LEARNING_PATHS_START })

    axiosWithAuth().get(`${baseURL}`, {userId})
    .then(res =>
    {
        console.log('res from get your learning paths', res)
        dispatch({ type: GET_YOUR_LEARNING_PATHS_SUCCESS, payload: res.data })
    })
    .catch(err =>
    {
        console.log('err from get your learning paths', err)
        dispatch({ type: GET_YOUR_LEARNING_PATHS_FAIL, payload: err })
    })
}