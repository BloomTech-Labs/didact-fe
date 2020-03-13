import axiosWithAuth from "../../utils/axiosWithAuth";
import beURL from "../../utils/beURL";

export const ARTICLE_DATA_START = "ARTICLE_DATA_START";
export const ARTICLE_DATA_SUCCESS = "ARTICLE_DATA_SUCCESS";
export const ARTICLE_DATA_FAIL = "ARTICLE_DATA_FAIL";
export const EXTERNAL_ARTICLE_DATA_START = "EXTERNAL_ARTICLE_DATA_START";
export const EXTERNAL_ARTICLE_DATA_SUCCESS = "EXTERNAL_ARTICLE_DATA_SUCCESS";
export const EXTERNAL_ARTICLE_DATA_FAIL = "EXTERNAL_ARTICLE_DATA_FAIL";
export const ARTICLE_BY_ID_START = "ARTICLE_BY_ID_START";
export const ARTICLE_BY_ID_SUCCESS = "ARTICLE_BY_ID_SUCCESS";
export const ARTICLE_BY_ID_FAIL = "ARTICLE_BY_ID_FAIL";
export const EXTERNAL_ARTICLE_BY_ID_START = "ARTICLE_BY_ID_START";
export const EXTERNAL_ARTICLE_BY_ID_SUCCESS = "EXTERNAL_ARTICLE_BY_ID_SUCCESS";
export const EXTERNAL_ARTICLE_BY_ID_FAIL = "EXTERNAL_ARTICLE_BY_ID_FAIL";
export const ADD_ARTICLE_START = "ADD_ARTICLE_START";
export const ADD_ARTICLE_SUCCESS = "ADD_ARTICLE_SUCCESS";
export const ADD_ARTICLE_FAIL = "ADD_ARTICLE_FAIL";
export const ADD_EXTERNAL_ARTICLE_START = "ADD_EXTERNAL_ARTICLE_START";
export const ADD_EXTERNAL_ARTICLE_SUCCESS = "ADD_EXTERNAL_ARTICLE_SUCCESS";
export const ADD_EXTERNAL_ARTICLE_FAIL = "ADD_EXTERNAL_ARTICLE_FAIL";
export const EDIT_ARTICLE_START = "EDIT_ARTICLE_START";
export const EDIT_ARTICLE_SUCCESS = "EDIT_ARTICLE_SUCCESS";
export const EDIT_ARTICLE_FAIL = "EDIT_ARTICLE_FAIL";
export const EDIT_EXTERNAL_ARTICLE_START = "EDIT_EXTERNAL_ARTICLE_START";
export const EDIT_EXTERNAL_ARTICLE_SUCCESS = "EDIT_EXTERNAL_ARTICLE_SUCCESS";
export const EDIT_EXTERNAL_ARTICLE_FAIL = "EDIT_EXTERNAL_ARTICLE_FAIL";
export const DELETE_ARTICLE_START = "DELETE_ARTICLE_START";
export const DELETE_ARTICLE_SUCCESS = "DELETE_ARTICLE_SUCCESS";
export const DELETE_ARTICLE_FAIL = "DELETE_ARTICLE_FAIL";
export const DELETE_EXTERNAL_ARTICLE_START = "DELETE_EXTERNAL_ARTICLE_START";
export const DELETE_EXTERNAL_ARTICLE_SUCCESS =
  "DELETE_EXTERNAL_ARTICLE_SUCCESS";
export const DELETE_EXTERNAL_ARTICLE_FAIL = "DELETE_EXTERNAL_ARTICLE_FAIL";

const baseURL = `${beURL}articles`;

export const getArticles = () => dispatch => {
  dispatch({ type: ARTICLE_DATA_START });
  axiosWithAuth()
    .get(baseURL)
    .then(result => {
      dispatch({ type: ARTICLE_DATA_SUCCESS, payload: result.data });
    })
    .catch(error => {
      dispatch({ type: ARTICLE_DATA_FAIL, payload: error.response });
    });
};

export const getExternalArticles = () => dispatch => {
  dispatch({ type: EXTERNAL_ARTICLE_DATA_START });
  axiosWithAuth()
    .get(`${baseURL}/external`)
    .then(result => {
      dispatch({ type: EXTERNAL_ARTICLE_DATA_SUCCESS, payload: result.data });
    })
    .catch(error => {
      dispatch({ type: EXTERNAL_ARTICLE_DATA_FAIL, payload: error.response });
    });
};

export const getArticleById = id => dispatch => {
  dispatch({ type: ARTICLE_BY_ID_START });
  axiosWithAuth()
    .get(`${baseURL}/${id}`)
    .then(result => {
      dispatch({ type: ARTICLE_BY_ID_SUCCESS, payload: result.data });
    })
    .catch(error => {
      dispatch({ type: ARTICLE_BY_ID_FAIL, payload: error.response });
    });
};

export const addArticle = article => dispatch => {
  dispatch({ type: ADD_ARTICLE_START });
  axiosWithAuth()
    .post(`${baseURL}`, article)
    .then(result => {
      dispatch({ type: ADD_ARTICLE_SUCCESS, payload: article });
    })
    .catch(error => {
      dispatch({ type: ADD_ARTICLE_FAIL, payload: error.response });
    });
};

export const editArticle = (id, changes) => dispatch => {
  dispatch({ type: EDIT_ARTICLE_START });
  axiosWithAuth()
    .put(`${baseURL}/${id}`, changes)
    .then(result => {
      dispatch({
        type: EDIT_ARTICLE_SUCCESS,
        payload: { id: id, changes: changes }
      });
    })
    .catch(error => {
      dispatch({ type: EDIT_ARTICLE_FAIL, payload: error.response });
    });
};

export const deleteArticle = (id, title) => dispatch => {
  dispatch({ type: DELETE_ARTICLE_START });
  axiosWithAuth()
    .delete(`${baseURL}/${id}`)
    .then(result => {
      dispatch({ type: DELETE_ARTICLE_SUCCESS, payload: title });
    })
    .catch(error => {
      dispatch({ type: DELETE_ARTICLE_FAIL, payload: error.response });
    });
};

export const getExternalArticleById = id => dispatch => {
  dispatch({ type: EXTERNAL_ARTICLE_BY_ID_START });
  axiosWithAuth()
    .get(`${baseURL}/external/${id}`)
    .then(result => {
      dispatch({ type: EXTERNAL_ARTICLE_BY_ID_SUCCESS, payload: result.data });
    })
    .catch(error => {
      dispatch({ type: EXTERNAL_ARTICLE_BY_ID_FAIL, payload: error.response });
    });
};

export const addExternalArticle = article => dispatch => {
  dispatch({ type: ADD_EXTERNAL_ARTICLE_START });
  axiosWithAuth()
    .post(`${baseURL}/external`, article)
    .then(result => {
      dispatch({ type: ADD_EXTERNAL_ARTICLE_SUCCESS, payload: article });
    })
    .catch(error => {
      dispatch({ type: ADD_EXTERNAL_ARTICLE_FAIL, payload: error.response });
    });
};

export const editExternalArticle = (id, changes) => dispatch => {
  dispatch({ type: EDIT_EXTERNAL_ARTICLE_START });
  axiosWithAuth()
    .put(`${baseURL}/external/${id}`, changes)
    .then(result => {
      dispatch({
        type: EDIT_EXTERNAL_ARTICLE_SUCCESS,
        payload: { id: id, changes: changes }
      });
    })
    .catch(error => {
      dispatch({ type: EDIT_EXTERNAL_ARTICLE_FAIL, payload: error.response });
    });
};

export const deleteExternalArticle = (id, title) => dispatch => {
  dispatch({ type: DELETE_EXTERNAL_ARTICLE_START });
  axiosWithAuth()
    .delete(`${baseURL}/external/${id}`)
    .then(result => {
      dispatch({ type: DELETE_EXTERNAL_ARTICLE_SUCCESS, payload: title });
    })
    .catch(error => {
      dispatch({ type: DELETE_EXTERNAL_ARTICLE_FAIL, payload: error.response });
    });
};
