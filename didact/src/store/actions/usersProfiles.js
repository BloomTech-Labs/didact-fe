import axiosWithAuth from "../../utils/axiosWithAuth";
import beURL from "../../utils/beURL";

export const GET_USER_DATA_START = "GET_USER_DATA_START";
export const GET_USER_DATA_SUCCESS = "GET_USER_DATA_SUCCESS";
export const GET_USER_DATA_FAIL = "GET_USER_DATA_FAIL";
export const GET_SPECIFIC_USER_START = "GET_SPECIFIC_USER_START";
export const GET_SPECIFIC_USER_SUCCESS = "GET_SPECIFIC_USER_SUCCESS";
export const GET_SPECIFIC_USER_FAIL = "GET_SPECIFIC_USER_FAIL";
export const EDIT_USER_START = "EDIT_USER_START";
export const EDIT_USER_SUCCESS = "EDIT_USER_SUCCESS";
export const EDIT_USER_FAIL = "EDIT_USER_FAIL";

const baseURL = `${beURL}auth/`;

export const getUsersProfiles = () => dispatch => {
  dispatch({ type: GET_USER_DATA_START });

  axiosWithAuth()
    .get(`${baseURL}users`)
    .then(res => {
      dispatch({ type: GET_USER_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_USER_DATA_FAIL, payload: err.response });
    });
};

export const getUserById = id => dispatch => {
  dispatch({ type: GET_SPECIFIC_USER_START });

  axiosWithAuth()
    .get(`${baseURL}users/${id}`)
    .then(res => {
      dispatch({ type: GET_SPECIFIC_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_SPECIFIC_USER_FAIL, payload: err.response });
    });
};

export const editUser = (id, changes) => dispatch => {
  dispatch({ type: EDIT_USER_START });
  axiosWithAuth()
    .put(`${baseURL}${id}`, changes)
    .then(res => {
      dispatch({ type: EDIT_USER_SUCCESS, payload: changes });
    })
    .catch(err => {
      dispatch({ type: EDIT_USER_FAIL, payload: err.response });
    });
};
