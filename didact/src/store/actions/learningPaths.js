import axiosWithAuth from '../../utils/axiosWithAuth'
import baseURL from '../../utils/beURL'

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

export const getLearningPaths = () => dispatch =>
{
    dispatch({ type: GET_LEARNING_PATHS_START })

    axiosWithAuth().get(`${baseURL}learning-paths`)
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
    dispatch({ type: SEARCH_BY_TAG_PATHS_START })

    axiosWithAuth().get(`${baseURL}learning-paths`)
    .then(res =>
    {
        console.log('res from search learning paths by tag', res)
        dispatch({ type: SEARCH_BY_TAG_PATHS_SUCCESS, payload: res.data })
    })
    .catch(err =>
    {
        console.log('err from search learning paths by tag', err)
        dispatch({ type: SEARCH_BY_TAG_PATHS_FAIL, payload: err })
    })
}

export const getLearningPath = (id) => dispatch
{
    dispatch({ type: GET_LEARNING_PATH_START })

    axiosWithAuth().get(`${baseURL}learning-paths/${id}`)
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

export const postLearningPath = (pathObj) => dispatch
{
    dispatch({ type: POST_LEARNING_PATH_START })

    axiosWithAuth().post(`${baseURL}learning-paths/`, pathObj)
    .then(res =>
    {
        console.log('res from post learning path', res)
        pathObj.id = res.data.id
        dispatch({ type: POST_LEARNING_PATH_SUCCESS, payload: pathObj })
    })
    .catch(err =>
    {
        console.log('err from post learning path', err)
        dispatch({ type: POST_LEARNING_PATH_FAIL, payload: err })
    })
}

export const updateLearningPath = (changes, id) => dispatch
{
    dispatch({ type: UPDATE_LEARNING_PATH_START })
    //changes should be an object like { changes: {name: 'blah'} } as an example. See api docs
    axiosWithAuth().put(`${baseURL}learning-paths/${id}`, changes)
    .then(res =>
    {
        console.log('res from update learning path', res)
        dispatch({ type: UPDATE_LEARNING_PATH_SUCCESS, payload: {changes, id} })
    })
    .catch(err =>
    {
        console.log('err from update learning path', err)
        dispatch({ type: UPDATE_LEARNING_PATH_FAIL, payload: err })
    })
}