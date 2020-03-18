import axiosWithAuth from "../../utils/axiosWithAuth";
import beURL from "../../utils/beURL";

export const GET_MY_PROFILE_BIO_START = "GET_MY_PROFILE_BIO_START";
export const GET_MY_PROFILE_BIO_SUCCESS = "GET_MY_PROFILE_BIO_SUCCESS";
export const GET_MY_PROFILE_BIO_FAIL = "GET_MY_PROFILE_BIO_FAIL";
export const EDIT_MY_PROFILE_BIO_START = "EDIT_MY_PROFILE_BIO_START";
export const EDIT_MY_PROFILE_BIO_SUCCESS = "EDIT_MY_PROFILE_BIO_SUCCESS";
export const EDIT_MY_PROFILE_BIO_FAIL = "EDIT_MY_PROFILE_BIO_FAIL";

const baseURL = `${beURL}auth/`;

export const getMyProfileBio = () => dispatch => {
  dispatch({ type: GET_MY_PROFILE_BIO_START });

  axiosWithAuth()
    .get(`${baseURL}my-profile`)
    .then(res => {
      dispatch({ type: GET_MY_PROFILE_BIO_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_MY_PROFILE_BIO_FAIL, payload: err.response });
    });
};

export const editMyProfileBio = changes => dispatch => {
  dispatch({ type: EDIT_MY_PROFILE_BIO_START });
  axiosWithAuth()
    .put(`${baseURL}my-profile`, changes)
    .then(res => {
      dispatch({ type: EDIT_MY_PROFILE_BIO_SUCCESS, payload: res.changes });
    })
    .catch(err => {
      dispatch({ type: EDIT_MY_PROFILE_BIO_FAIL, payload: err.response });
    });
};
