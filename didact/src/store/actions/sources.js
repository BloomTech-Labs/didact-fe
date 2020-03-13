import axiosWithAuth from "../../utils/axiosWithAuth";
import beURL from "../../utils/beURL";

export const SOURCE_DATA_START = "SOURCE_DATA_START";
export const SOURCE_DATA_SUCCESS = "SOURCE_DATA_SUCCESS";
export const SOURCE_DATA_FAIL = "SOURCE_DATA_FAIL";
export const SOURCE_BY_ID_START = "SOURCE_BY_ID_START";
export const SOURCE_BY_ID_SUCCESS = "SOURCE_BY_ID_SUCCESS";
export const SOURCE_BY_ID_FAIL = "SOURCE_BY_ID_FAIL";
export const ADD_SOURCE_START = "ADD_SOURCE_START";
export const ADD_SOURCE_SUCCESS = "ADD_SOURCE_SUCCESS";
export const ADD_SOURCE_FAIL = "ADD_SOURCE_FAIL";
export const EDIT_SOURCE_START = "EDIT_SOURCE_START";
export const EDIT_SOURCE_SUCCESS = "EDIT_SOURCE_SUCCESS";
export const EDIT_SOURCE_FAIL = "EDIT_SOURCE_FAIL";
export const DELETE_SOURCE_START = "DELETE_SOURCE_START";
export const DELETE_SOURCE_SUCCESS = "DELETE_SOURCE_SUCCESS";
export const DELETE_SOURCE_FAIL = "DELETE_SOURCE_FAIL";

const baseURL = `${beURL}sources`;

export const getSources = () => dispatch => {
  dispatch({ type: SOURCE_DATA_START });
  axiosWithAuth()
    .get(baseURL)
    .then(result => {
      dispatch({ type: SOURCE_DATA_SUCCESS, payload: result.data });
    })
    .catch(error => {
      dispatch({ type: SOURCE_DATA_FAIL, payload: error.response });
    });
};

export const addSource = source => dispatch => {
  dispatch({ type: ADD_SOURCE_START });
  return axiosWithAuth()
    .post(baseURL, source)
    .then(result => {
      dispatch({ type: ADD_SOURCE_SUCCESS, payload: source });
    })
    .catch(error => {
      dispatch({ type: ADD_SOURCE_FAIL, payload: error.response });
    });
};

export const getSourceById = id => dispatch => {
  dispatch({ type: SOURCE_BY_ID_START });
  axiosWithAuth()
    .get(`${baseURL}/${id}`)
    .then(result => {
      dispatch({ type: SOURCE_BY_ID_SUCCESS, payload: result.data });
    })
    .catch(error => {
      dispatch({ type: SOURCE_BY_ID_FAIL, payload: error.response });
    });
};

export const editSource = (id, changes) => dispatch => {
  dispatch({ type: EDIT_SOURCE_START });
  return axiosWithAuth()
    .put(`${baseURL}/${id}`, changes)
    .then(result => {
      dispatch({
        type: EDIT_SOURCE_SUCCESS,
        payload: { id: id, changes: changes }
      });
    })
    .catch(error => {
      dispatch({ type: EDIT_SOURCE_FAIL, payload: error.response });
    });
};

export const deleteSource = id => dispatch => {
  dispatch({ type: DELETE_SOURCE_START });
  return axiosWithAuth()
    .delete(`${baseURL}/${id}`)
    .then(result => {
      dispatch({ type: DELETE_SOURCE_SUCCESS, payload: id });
    })
    .catch(error => {
      dispatch({ type: DELETE_SOURCE_FAIL, payload: error.response });
    });
};
