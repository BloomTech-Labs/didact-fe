import axiosWithAuth from "../../utils/axiosWithAuth";
import beURL from "../../utils/beURL";

export const GET_LEARNING_PATHS_START = "GET_LEARNING_PATHS_START";
export const GET_LEARNING_PATHS_SUCCESS = "GET_LEARNING_PATHS_SUCCESS";
export const GET_LEARNING_PATHS_FAIL = "GET_LEARNING_PATHS_FAIL";
export const SEARCH_PATHS_BY_TAG_START = "SEARCH_PATHS_BY_TAG_START";
export const SEARCH_PATHS_BY_TAG_SUCCESS = "SEARCH_PATHS_BY_TAG_SUCCESS";
export const SEARCH_PATHS_BY_TAG_FAIL = "SEARCH_PATHS_BY_TAG_FAIL";
export const GET_LEARNING_PATH_START = "GET_LEARNING_PATH_START";
export const GET_LEARNING_PATH_SUCCESS = "GET_LEARNING_PATH_SUCCESS";
export const GET_LEARNING_PATH_FAIL = "GET_LEARNING_PATH_FAIL";
export const POST_LEARNING_PATH_START = "POST_LEARNING_PATH_START";
export const POST_LEARNING_PATH_SUCCESS = "POST_LEARNING_PATH_SUCCESS";
export const POST_LEARNING_PATH_FAIL = "POST_LEARNING_PATH_FAIL";
export const UPDATE_LEARNING_PATH_START = "UPDATE_LEARNING_PATH_START";
export const UPDATE_LEARNING_PATH_SUCCESS = "UPDATE_LEARNING_PATH_SUCCESS";
export const UPDATE_LEARNING_PATH_FAIL = "UPDATE_LEARNING_PATH_FAIL";
export const DELETE_LEARNING_PATH_START = "DELETE_LEARNING_PATH_START";
export const DELETE_LEARNING_PATH_SUCCESS = "DELETE_LEARNING_PATH_SUCCESS";
export const DELETE_LEARNING_PATH_FAIL = "DELETE_LEARNING_PATH_FAIL";
export const JOIN_LEARNING_PATH_START = "JOIN_LEARNING_PATH_START";
export const JOIN_LEARNING_PATH_SUCCESS = "JOIN_LEARNING_PATH_SUCCESS";
export const JOIN_LEARNING_PATH_FAIL = "JOIN_LEARNING_PATH_FAIL";
export const QUIT_LEARNING_PATH_START = "QUIT_LEARNING_PATH_START";
export const QUIT_LEARNING_PATH_SUCCESS = "QUIT_LEARNING_PATH_SUCCESS";
export const QUIT_LEARNING_PATH_FAIL = "QUIT_LEARNING_PATH_FAIL";
export const POST_TAG_TO_PATH_START = "POST_TAG_TO_PATH_START";
export const POST_TAG_TO_PATH_SUCCESS = "POST_TAG_TO_PATH_SUCCESS";
export const POST_TAG_TO_PATH_FAIL = "POST_TAG_TO_PATH_FAIL";
export const DELETE_TAG_FROM_PATH_START = "DELETE_TAG_FROM_PATH_START";
export const DELETE_TAG_FROM_PATH_SUCCESS = "DELETE_TAG_FROM_PATH_SUCCESS";
export const DELETE_TAG_FROM_PATH_FAIL = "DELETE_TAG_FROM_PATH_FAIL";
export const POST_COURSE_TO_PATH_START = "POST_COURSE_TO_PATH_START";
export const POST_COURSE_TO_PATH_SUCCESS = "POST_COURSE_TO_PATH_SUCCESS";
export const POST_COURSE_TO_PATH_FAIL = "POST_COURSE_TO_PATH_FAIL";
export const REMOVE_COURSE_FROM_PATH_START = "REMOVE_COURSE_FROM_PATH_START";
export const REMOVE_COURSE_FROM_PATH_SUCCESS =
  "REMOVE_COURSE_FROM_PATH_SUCCESS";
export const REMOVE_COURSE_FROM_PATH_FAIL = "REMOVE_COURSE_FROM_PATH_FAIL";
export const UPDATE_COURSE_ORDER_START = "UPDATE_COURSE_ORDER_START";
export const UPDATE_COURSE_ORDER_SUCCESS = "UPDATE_COURSE_ORDER_SUCCESS";
export const UPDATE_COURSE_ORDER_FAIL = "UPDATE_COURSE_ORDER_FAIL";
export const GET_YOUR_LEARNING_PATHS_START = "GET_YOUR_LEARNING_PATHS_START";
export const GET_YOUR_LEARNING_PATHS_SUCCESS =
  "GET_YOUR_LEARNING_PATHS_SUCCESS";
export const GET_YOUR_LEARNING_PATHS_FAIL = "GET_YOUR_LEARNING_PATHS_FAIL";
export const GET_YOUR_LEARNING_PATHS_OWNED_START =
  "GET_YOUR_LEARNING_PATHS_OWNED_START";
export const GET_YOUR_LEARNING_PATHS_OWNED_SUCCESS =
  "GET_YOUR_LEARNING_PATHS_OWNED_SUCCESS";
export const GET_YOUR_LEARNING_PATHS_OWNED_FAIL =
  "GET_YOUR_LEARNING_PATHS_OWNED_FAIL";
export const POST_PATH_ITEM_START = "POST_PATH_ITEM_START";
export const POST_PATH_ITEM_SUCCESS = "POST_PATH_ITEM_SUCCESS";
export const POST_PATH_ITEM_FAIL = "POST_PATH_ITEM_FAIL";
export const UPDATE_PATH_ITEM_START = "UPDATE_PATH_ITEM_START";
export const UPDATE_PATH_ITEM_SUCCESS = "UPDATE_PATH_ITEM_SUCCESS";
export const UPDATE_PATH_ITEM_FAIL = "UPDATE_PATH_ITEM_FAIL";
export const DELETE_PATH_ITEM_START = "DELETE_PATH_ITEM_START";
export const DELETE_PATH_ITEM_SUCCESS = "DELETE_PATH_ITEM_SUCCESS";
export const DELETE_PATH_ITEM_FAIL = "DELETE_PATH_ITEM_FAIL";
export const UPDATE_PATH_CONTENT_START = "UPDATE_PATH_CONTENT_START";
export const UPDATE_PATH_CONTENT_SUCCESS = "UPDATE_PATH_CONTENT_SUCCESS";
export const UPDATE_PATH_CONTENT_FAIL = "UPDATE_PATH_CONTENT_FAIL";
export const UPDATE_YOUR_PATH_ORDER_START = "UPDATE_YOUR_PATH_ORDER_START";
export const UPDATE_YOUR_PATH_ORDER_SUCCESS = "UPDATE_YOUR_PATH_ORDER_SUCCESS";
export const UPDATE_YOUR_PATH_ORDER_FAIL = "UPDATE_YOUR_PATH_ORDER_FAIL";
export const GET_YOUR_LEARNING_PATH_COMPLETION_START =
  "GET_YOUR_LEARNING_PATH_COMPLETION_START";
export const GET_YOUR_LEARNING_PATH_COMPLETION_SUCCESS =
  "GET_YOUR_LEARNING_PATH_COMPLETION_SUCCESS";
export const GET_YOUR_LEARNING_PATH_COMPLETION_FAIL =
  "GET_YOUR_LEARNING_PATH_COMPLETION_FAIL";
export const TOGGLE_LEARNING_PATH_START = "TOGGLE_LEARNING_PATH_START";
export const TOGGLE_LEARNING_PATH_SUCCESS = "TOGGLE_LEARNING_PATH_SUCCESS";
export const TOGGLE_LEARNING_PATH_FAIL = "TOGGLE_LEARNING_PATH_FAIL";
export const TOGGLE_LEARNING_PATH_ITEM_START =
  "TOGGLE_LEARNING_PATH_ITEM_START";
export const TOGGLE_LEARNING_PATH_ITEM_SUCCESS =
  "TOGGLE_LEARNING_PATH_ITEM_SUCCESS";
export const TOGGLE_LEARNING_PATH_ITEM_FAIL = "TOGGLE_LEARNING_PATH_ITEM_FAIL";

const baseURL = `${beURL}learning-paths/`;

export const getLearningPaths = results => dispatch => {
  dispatch({ type: GET_LEARNING_PATHS_START });

  axiosWithAuth()
    .get(
      `${baseURL}`,
      results
        ? {
          headers: { query: results.search, filter: results.filter }
        }
        : null
    )
    .then(res => {
      dispatch({ type: GET_LEARNING_PATHS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_LEARNING_PATHS_FAIL, payload: err });
    });

  console.log("this is getLearningPaths headers in learningPath.js", results);
};

export const searchLearningPathsByTag = (tag = "") => dispatch => {
  dispatch({ type: SEARCH_PATHS_BY_TAG_START });

  axiosWithAuth()
    .get(`${baseURL}`)
    .then(res => {
      dispatch({ type: SEARCH_PATHS_BY_TAG_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: SEARCH_PATHS_BY_TAG_FAIL, payload: err });
    });
};

export const getLearningPath = id => dispatch => {
  dispatch({ type: GET_LEARNING_PATH_START });

  axiosWithAuth()
    .get(`${baseURL}${id}`)
    .then(res => {
      dispatch({ type: GET_LEARNING_PATH_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_LEARNING_PATH_FAIL, payload: err });
    });
};

export const postLearningPath = (values, history) => dispatch => {
  dispatch({ type: POST_LEARNING_PATH_START });
  let path = {
    title: values.title,
    description: values.description || "",
    topic: values.topic || ""
  };
  let pathObj = { path, userPathOrder: values.userPathOrder };
  axiosWithAuth()
    .post(`${baseURL}`, pathObj)
    .then(res => {
      pathObj.id = res.data.id;
      dispatch({ type: POST_LEARNING_PATH_SUCCESS, payload: pathObj });
      return res.data;
    })
    .then(response => history.push(`/learning-paths/${response.id}/edit`))
    .catch(err => {
      dispatch({ type: POST_LEARNING_PATH_FAIL, payload: err });
    });
};

export const updateLearningPath = (id, changes) => dispatch => {
  dispatch({ type: UPDATE_LEARNING_PATH_START });
  //changes should be an object like { changes: {name: 'blah'} } as an example. See api docs
  axiosWithAuth()
    .put(`${baseURL}${id}`, { changes })
    .then(res => {
      dispatch({
        type: UPDATE_LEARNING_PATH_SUCCESS,
        payload: { ...changes, id: id }
      });
    })
    .catch(err => {
      dispatch({ type: UPDATE_LEARNING_PATH_FAIL, payload: err });
    });
};

export const deleteLearningPath = (id, history) => dispatch => {
  dispatch({ type: DELETE_LEARNING_PATH_START });

  axiosWithAuth()
    .delete(`${baseURL}${id}`)
    .then(res => {
      dispatch({ type: DELETE_LEARNING_PATH_SUCCESS, payload: id });
    })
    .then(() => history.push(`/`))
    .catch(err => {
      dispatch({ type: DELETE_LEARNING_PATH_FAIL, payload: err });
    });
};

export const joinLearningPath = (id, history, order) => dispatch => {
  dispatch({ type: JOIN_LEARNING_PATH_START });

  axiosWithAuth()
    .post(`${baseURL}${id}/users`, { order: order })
    .then(res => {
      dispatch({ type: JOIN_LEARNING_PATH_SUCCESS, payload: id });
    })
    .then(() => history.push(`/learning-paths/${id}`))
    .catch(err => {
      dispatch({ type: JOIN_LEARNING_PATH_FAIL, payload: err });
    });
};

export const quitLearningPath = id => dispatch => {
  dispatch({ type: QUIT_LEARNING_PATH_START });

  axiosWithAuth()
    .delete(`${baseURL}${id}/users`)
    .then(res => {
      dispatch({ type: QUIT_LEARNING_PATH_SUCCESS, payload: id });
    })
    .catch(err => {
      dispatch({ type: QUIT_LEARNING_PATH_FAIL, payload: err });
    });
};

export const postTagToPath = (tag, id) => dispatch => {
  dispatch({ type: POST_TAG_TO_PATH_START });

  axiosWithAuth()
    .post(`${baseURL}${id}/tags`, { tag })
    .then(res => {
      dispatch({ type: POST_TAG_TO_PATH_SUCCESS, payload: tag });
    })
    .catch(err => {
      dispatch({ type: POST_TAG_TO_PATH_FAIL, payload: err });
    });
};

export const deleteTagFromPath = (tag, id) => dispatch => {
  dispatch({ type: DELETE_TAG_FROM_PATH_START });

  axiosWithAuth()
    .delete(`${baseURL}${id}/tags`, { tag })
    .then(res => {
      dispatch({ type: DELETE_TAG_FROM_PATH_SUCCESS, payload: tag });
    })
    .catch(err => {
      dispatch({ type: DELETE_TAG_FROM_PATH_FAIL, payload: err });
    });
};

export const addNewCourseToLearningPath = (props, courseId) => dispatch => {
  const order = Number(props.match.params.order + 1);
  dispatch({ type: POST_COURSE_TO_PATH_START });
  const pathId = props.match.params.id;
  axiosWithAuth()
    .post(`${baseURL}${pathId}/courses/${courseId}`, { order: order })
    .then(res => {
      dispatch({
        type: POST_COURSE_TO_PATH_SUCCESS,
        payload: res.data.pathCourses
      });
    })
    .then(() =>
      props.history.push(
        `/learning-paths/${props.match.params.id}/courses/${courseId}/edit`
      )
    )
    .catch(err => {
      dispatch({ type: POST_COURSE_TO_PATH_FAIL, payload: err });
    });
};

export const postCourseToPath = (pathId, courseId, order) => dispatch => {
  dispatch({ type: POST_COURSE_TO_PATH_START });
  axiosWithAuth()
    .post(`${baseURL}${pathId}/courses/${courseId}`, { order })
    .then(res => {
      dispatch({
        type: POST_COURSE_TO_PATH_SUCCESS,
        payload: res.data.pathCourses
      });
    })
    .catch(err => {
      dispatch({ type: POST_COURSE_TO_PATH_FAIL, payload: err });
    });
};

export const removeCourseFromPath = (pathId, courseId) => dispatch => {
  dispatch({ type: REMOVE_COURSE_FROM_PATH_START });

  axiosWithAuth()
    .delete(`${baseURL}${pathId}/courses/${courseId}`)
    .then(res => {
      dispatch({
        type: REMOVE_COURSE_FROM_PATH_SUCCESS,
        payload: res.data.pathCourses
      });
    })
    .catch(err => {
      dispatch({ type: REMOVE_COURSE_FROM_PATH_FAIL, payload: err });
    });
};

export const updateCourseOrder = (pathId, courseId, order) => dispatch => {
  dispatch({ type: UPDATE_COURSE_ORDER_START });

  axiosWithAuth()
    .post(`${baseURL}${pathId}/courses/${courseId}`, { order })
    .then(res => {
      dispatch({
        type: UPDATE_COURSE_ORDER_SUCCESS,
        payload: { pathId, courseId, order }
      });
    })
    .catch(err => {
      dispatch({ type: UPDATE_COURSE_ORDER_FAIL, payload: err });
    });
};

export const getYourLearningPaths = (getYours, results) => dispatch => {
  dispatch({ type: GET_YOUR_LEARNING_PATHS_START });
  axiosWithAuth()
    .get(
      `${baseURL}yours`,
      results
        ? {
          headers: { query: results.search, filter: results.filter }
        }
        : null
    )
    .then(res => {
      dispatch({ type: GET_YOUR_LEARNING_PATHS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_YOUR_LEARNING_PATHS_FAIL, payload: err });
    });
  console.log(
    "this is getYourLearningPaths headers in learningPath.js",
    results
  );
};

export const getYourLearningPathsOwned = getYours => dispatch => {
  dispatch({ type: GET_YOUR_LEARNING_PATHS_OWNED_START });
  axiosWithAuth()
    .get(`${baseURL}yours-owned`)
    .then(res => {
      dispatch({
        type: GET_YOUR_LEARNING_PATHS_OWNED_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: GET_YOUR_LEARNING_PATHS_OWNED_FAIL, payload: err });
    });
};

export const postPathItem = (pathId, item, history) => dispatch => {
  dispatch({ type: POST_PATH_ITEM_START });

  axiosWithAuth()
    .post(`${baseURL}${pathId}/path-items`, item)
    .then(res => {
      dispatch({
        type: POST_PATH_ITEM_SUCCESS,
        payload: { ...item, id: res.data.id }
      });
    })
    .then(response => {
      history.push(`/learning-paths/${pathId}/edit`);
    })
    .catch(err => {
      dispatch({ type: POST_PATH_ITEM_FAIL, payload: err });
    });
};

export const updatePathItem = (pathId, itemId, changes) => dispatch => {
  dispatch({ type: UPDATE_PATH_ITEM_START });
  //changes should be an object of form: {name: "blah", order: 7}
  axiosWithAuth()
    .put(`${baseURL}${pathId}/path-items/${itemId}`, changes)
    .then(res => {
      dispatch({
        type: UPDATE_PATH_ITEM_SUCCESS,
        payload: { ...changes, id: itemId }
      });
    })
    .catch(err => {
      dispatch({ type: UPDATE_PATH_ITEM_FAIL, payload: err });
    });
};

export const deletePathItem = (pathId, itemId) => dispatch => {
  dispatch({ type: DELETE_PATH_ITEM_START });

  axiosWithAuth()
    .delete(`${baseURL}${pathId}/path-items/${itemId}`)
    .then(res => {
      dispatch({ type: DELETE_PATH_ITEM_SUCCESS, payload: itemId });
    })
    .catch(err => {
      dispatch({ type: DELETE_PATH_ITEM_FAIL, payload: err });
    });
};

export const updateLearningPathContentOrder = (
  learningPathContent,
  path_id
) => dispatch => {
  dispatch({ type: UPDATE_PATH_CONTENT_START });
  axiosWithAuth()
    .put(`${baseURL}${path_id}/order`, {
      learningPathContent: learningPathContent
    })
    .then(res => {
      dispatch({
        type: UPDATE_PATH_CONTENT_SUCCESS,
        payload: { learningPathContent }
      });
    })
    .catch(err => {
      dispatch({ type: UPDATE_PATH_CONTENT_FAIL, payload: err.message });
    });
};

export const updateYourPathOrder = pathArray => dispatch => {
  let reqObj = [];
  reqObj = pathArray.map(el => {
    return { pathId: el.id, userPathOrder: el.user_path_order };
  });
  dispatch({ type: UPDATE_YOUR_PATH_ORDER_START });
  axiosWithAuth()
    .put(`${baseURL}`, { pathOrderArray: reqObj })
    .then(res => {
      dispatch({ type: UPDATE_YOUR_PATH_ORDER_SUCCESS, payload: pathArray });
    })
    .catch(err => {
      dispatch({ type: UPDATE_YOUR_PATH_ORDER_FAIL, payload: err });
    });
};

//Get Your Learning Path By Id With Completion
export const findForUserId = learningPathId => dispatch => {
  dispatch({ type: GET_YOUR_LEARNING_PATH_COMPLETION_START });
  axiosWithAuth()
    .get(`${baseURL}${learningPathId}/yours`)
    .then(res => {
      dispatch({
        type: GET_YOUR_LEARNING_PATH_COMPLETION_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: GET_YOUR_LEARNING_PATH_COMPLETION_FAIL, payload: err });
    });
};

//Toggle Learning Path Complete
export const toggleLearningPath = learningPathId => dispatch => {
  dispatch({ type: TOGGLE_LEARNING_PATH_START });
  axiosWithAuth()
    .put(`${baseURL}${learningPathId}/yours`)
    .then(res => {
      dispatch({ type: TOGGLE_LEARNING_PATH_SUCCESS, payload: res.data });
    })
    .then(res => {
      dispatch(getYourLearningPaths());
    })
    .catch(err => {
      dispatch({ type: TOGGLE_LEARNING_PATH_FAIL, payload: err });
    });
};

//Toggle Learning Path ITEM Complete
export const toggleLearningPathItem = (learningPathId, itemId) => dispatch => {
  dispatch({ type: TOGGLE_LEARNING_PATH_ITEM_START });
  axiosWithAuth()
    .put(`${baseURL}${learningPathId}/path-items/${itemId}/yours`)
    .then(res => {
      dispatch({ type: TOGGLE_LEARNING_PATH_ITEM_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: TOGGLE_LEARNING_PATH_ITEM_FAIL, payload: err });
    });
};
