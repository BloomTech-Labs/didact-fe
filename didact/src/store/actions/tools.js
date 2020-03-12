import axiosWithAuth from "../../utils/axiosWithAuth";
import beURL from "../../utils/beURL";

export const TOOL_DATA_START = "TOOL_DATA_START";
export const TOOL_DATA_SUCCESS = "TOOL_DATA_SUCCESS";
export const TOOL_DATA_FAIL = "TOOL_DATA_FAIL";
export const TOOL_BY_ID_START = "TOOL_BY_ID_START";
export const TOOL_BY_ID_SUCCESS = "TOOL_BY_ID_SUCCESS";
export const TOOL_BY_ID_FAIL = "TOOL_BY_ID_FAIL";
export const ADD_TOOL_START = "ADD_TOOL_START";
export const ADD_TOOL_SUCCESS = "ADD_TOOL_SUCCESS";
export const ADD_TOOL_FAIL = "ADD_TOOL_FAIL";
export const EDIT_TOOL_START = "EDIT_TOOL_START";
export const EDIT_TOOL_SUCCESS = "EDIT_TOOL_SUCCESS";
export const EDIT_TOOL_FAIL = "EDIT_TOOL_FAIL";
export const DELETE_TOOL_START = "DELETE_TOOL_START";
export const DELETE_TOOL_SUCCESS = "DELETE_TOOL_SUCCESS";
export const DELETE_TOOL_FAIL = "DELETE_TOOL_FAIL";

const baseURL = `${beURL}tools`;

export const getTools = () => dispatch => {
  dispatch({ type: TOOL_DATA_START });
  axiosWithAuth()
    .get(baseURL)
    .then(result => {
      dispatch({ type: TOOL_DATA_SUCCESS, payload: result.data });
    })
    .catch(error => {
      dispatch({ type: TOOL_DATA_FAIL, payload: error.response });
    });
};

export const getToolById = id => dispatch => {
  dispatch({ type: TOOL_BY_ID_START });
  axiosWithAuth()
    .get(`${baseURL}/${id}`)
    .then(result => {
      dispatch({ type: TOOL_BY_ID_SUCCESS, payload: result.data });
    })
    .catch(error => {
      dispatch({ type: TOOL_BY_ID_FAIL, payload: error.response });
    });
};

export const addTool = tool => dispatch => {
  dispatch({ type: ADD_TOOL_START });
  axiosWithAuth()
    .post(`${baseURL}`, tool)
    .then(result => {
      dispatch({ type: ADD_TOOL_SUCCESS, payload: tool });
    })
    .catch(error => {
      dispatch({ type: ADD_TOOL_FAIL, payload: error.response });
    });
};

export const editTool = (id, changes) => dispatch => {
  dispatch({ type: EDIT_TOOL_START });
  axiosWithAuth()
    .put(`${baseURL}/${id}`, changes)
    .then(result => {
      dispatch({
        type: EDIT_TOOL_SUCCESS,
        payload: { id: id, changes: changes }
      });
    })
    .catch(error => {
      dispatch({ type: EDIT_TOOL_FAIL, payload: error.response });
    });
};

export const deleteTool = id => dispatch => {
  dispatch({ type: DELETE_TOOL_START });
  axiosWithAuth()
    .delete(`${baseURL}/${id}`)
    .then(result => {
      dispatch({ type: DELETE_TOOL_SUCCESS, payload: id });
    })
    .catch(error => {
      dispatch({ type: DELETE_TOOL_FAIL, payload: error.response });
    });
};
