import axiosWithAuth from "../../utils/axiosWithAuth";
import beURL from "../../utils/beURL";

export const GET_MY_PROFILE_START = "GET_MY_PROFILE_START";
export const GET_MY_PROFILE_SUCCESS = "GET_MY_PROFILE_SUCCESS";
export const GET_MY_PROFILE_FAIL = "GET_MY_PROFILE_FAIL";
export const EDIT_MY_PROFILE_START = "EDIT_MY_PROFILE_START";
export const EDIT_MY_PROFILE_SUCCESS = "EDIT_MY_PROFILE_SUCCESS";
export const EDIT_MY_PROFILE_FAIL = "EDIT_MY_PROFILE_FAIL";
export const ADD_MY_PROFILE_START = "ADD_MY_PROFILE_START";
export const ADD_MY_PROFILE_SUCCESS = "ADD_MY_PROFILE_SUCCESS";
export const ADD_MY_PROFILE_FAIL = "ADD_MY_PROFILE_FAIL";
export const EDIT_MY_PIC_START = "EDIT_MY_PIC_START";
export const EDIT_MY_PIC_SUCCESS = "EDIT_MY_PIC_SUCCESS";
export const EDIT_MY_PIC_FAIL = "EDIT_MY_PIC_FAIL";

const baseURL = `${beURL}auth/`;

export const getMyProfile = id => dispatch => {
  dispatch({ type: GET_MY_PROFILE_START });

  axiosWithAuth()
    .get(`${baseURL}profile/${id}`)
    .then(res => {
      dispatch({ type: GET_MY_PROFILE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_MY_PROFILE_FAIL, payload: err.response });
    });
};

export const addMyProfile = () => dispatch => {
  dispatch({ type: ADD_MY_PROFILE_START });

  axiosWithAuth()
    .post(`${baseURL}profile`)
    .then(res => {
      dispatch({ type: ADD_MY_PROFILE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ADD_MY_PROFILE_FAIL, payload: err.response });
    });
};

export const editMyProfile = (id, changes) => dispatch => {
  dispatch({ type: EDIT_MY_PROFILE_START });
  return axiosWithAuth()
    .put(`${baseURL}profile/${id}`, changes)
    .then(res => {
      dispatch({ type: EDIT_MY_PROFILE_SUCCESS, payload: changes });
    })
    .catch(err => {
      dispatch({ type: EDIT_MY_PROFILE_FAIL, payload: err.response });
    });
};

export const editMyPic = (id, changes) => dispatch => {
  dispatch({ type: EDIT_MY_PIC_START });
  return axiosWithAuth()
    .put(`${baseURL}${id}/upload`, changes)
    .then(res => {
      dispatch({ type: EDIT_MY_PIC_SUCCESS, payload: changes });
    })
    .catch(err => {
      dispatch({ type: EDIT_MY_PIC_FAIL, payload: err.response });
    });
};
