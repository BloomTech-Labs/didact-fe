import {
  GET_LEARNING_PATHS_START,
  GET_LEARNING_PATHS_SUCCESS,
  GET_LEARNING_PATHS_FAIL,
  SEARCH_PATHS_BY_TAG_START,
  SEARCH_PATHS_BY_TAG_SUCCESS,
  SEARCH_PATHS_BY_TAG_FAIL,
  GET_LEARNING_PATH_START,
  GET_LEARNING_PATH_SUCCESS,
  GET_LEARNING_PATH_FAIL,
  POST_LEARNING_PATH_START,
  POST_LEARNING_PATH_SUCCESS,
  POST_LEARNING_PATH_FAIL,
  UPDATE_LEARNING_PATH_START,
  UPDATE_LEARNING_PATH_SUCCESS,
  UPDATE_LEARNING_PATH_FAIL,
  DELETE_LEARNING_PATH_START,
  DELETE_LEARNING_PATH_SUCCESS,
  DELETE_LEARNING_PATH_FAIL,
  JOIN_LEARNING_PATH_START,
  JOIN_LEARNING_PATH_SUCCESS,
  JOIN_LEARNING_PATH_FAIL,
  QUIT_LEARNING_PATH_START,
  QUIT_LEARNING_PATH_SUCCESS,
  QUIT_LEARNING_PATH_FAIL,
  POST_TAG_TO_PATH_START,
  POST_TAG_TO_PATH_SUCCESS,
  POST_TAG_TO_PATH_FAIL,
  DELETE_TAG_FROM_PATH_START,
  DELETE_TAG_FROM_PATH_SUCCESS,
  DELETE_TAG_FROM_PATH_FAIL,
  POST_COURSE_TO_PATH_START,
  POST_COURSE_TO_PATH_SUCCESS,
  POST_COURSE_TO_PATH_FAIL,
  REMOVE_COURSE_FROM_PATH_START,
  REMOVE_COURSE_FROM_PATH_SUCCESS,
  REMOVE_COURSE_FROM_PATH_FAIL,
  UPDATE_COURSE_ORDER_START,
  UPDATE_COURSE_ORDER_SUCCESS,
  UPDATE_COURSE_ORDER_FAIL,
  GET_YOUR_LEARNING_PATHS_START,
  GET_YOUR_LEARNING_PATHS_SUCCESS,
  GET_YOUR_LEARNING_PATHS_FAIL,
  GET_YOUR_LEARNING_PATHS_OWNED_START,
  GET_YOUR_LEARNING_PATHS_OWNED_SUCCESS,
  GET_YOUR_LEARNING_PATHS_OWNED_FAIL,
  POST_PATH_ITEM_START,
  POST_PATH_ITEM_SUCCESS,
  POST_PATH_ITEM_FAIL,
  UPDATE_PATH_ITEM_START,
  UPDATE_PATH_ITEM_SUCCESS,
  UPDATE_PATH_ITEM_FAIL,
  DELETE_PATH_ITEM_START,
  DELETE_PATH_ITEM_SUCCESS,
  DELETE_PATH_ITEM_FAIL,
  UPDATE_YOUR_PATH_ORDER_START,
  UPDATE_YOUR_PATH_ORDER_SUCCESS,
  UPDATE_YOUR_PATH_ORDER_FAIL,
  GET_YOUR_LEARNING_PATH_COMPLETION_START,
  GET_YOUR_LEARNING_PATH_COMPLETION_SUCCESS,
  GET_YOUR_LEARNING_PATH_COMPLETION_FAIL,
  TOGGLE_LEARNING_PATH_START,
  TOGGLE_LEARNING_PATH_SUCCESS,
  TOGGLE_LEARNING_PATH_FAIL,
  TOGGLE_LEARNING_PATH_ITEM_START,
  TOGGLE_LEARNING_PATH_ITEM_SUCCESS,
  TOGGLE_LEARNING_PATH_ITEM_FAIL
} from "../actions";

const initialState = {
  isLoadingPaths: false,
  joiningPath: false,
  quittingPath: false,
  error: "",
  learningPaths: [],
  learningPath: {},
  yourLearningPaths: [],
  yourLearningPathsOwned: [],
  learningPathCompletion: [],
  learningPathToggle: {},
  pathItemToggle: {}
};

export const learningPathReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LEARNING_PATHS_START:
      return {
        ...state,
        isLoadingPaths: true,
        error: ""
      };
    case GET_LEARNING_PATHS_SUCCESS:
      return {
        ...state,
        isLoadingPaths: false,
        learningPaths: action.payload,
        error: ""
      };
    case GET_LEARNING_PATHS_FAIL:
      return {
        ...state,
        isLoadingPaths: false,
        error: action.payload
      };
    case SEARCH_PATHS_BY_TAG_START:
      return {
        ...state,
        isLoadingPaths: true,
        error: ""
      };
    case SEARCH_PATHS_BY_TAG_SUCCESS:
      return {
        ...state,
        isLoadingPaths: false,
        learningPaths: action.payload,
        error: ""
      };
    case SEARCH_PATHS_BY_TAG_FAIL:
      return {
        ...state,
        isLoadingPaths: false,
        error: action.payload
      };
    case GET_LEARNING_PATH_START:
      return {
        ...state,
        isLoadingPaths: true,
        error: ""
      };
    case GET_LEARNING_PATH_SUCCESS:
      return {
        ...state,
        isLoadingPaths: false,
        learningPath: action.payload,
        error: ""
      };
    case GET_LEARNING_PATH_FAIL:
      return {
        ...state,
        isLoadingPaths: false,
        error: action.payload
      };
    case POST_LEARNING_PATH_START:
      return {
        ...state,
        isLoadingPaths: true,
        error: ""
      };
    case POST_LEARNING_PATH_SUCCESS:
      return {
        ...state,
        isLoadingPaths: false,
        learningPaths: [...state.learningPaths, action.payload],
        learningPath: action.payload,
        yourLearningPaths: [...state.yourLearningPaths, action.payload],
        error: ""
      };
    case POST_LEARNING_PATH_FAIL:
      return {
        ...state,
        isLoadingPaths: false,
        error: action.payload
      };
    case UPDATE_LEARNING_PATH_START:
      return {
        ...state,
        isLoadingPaths: true,
        error: ""
      };
    case UPDATE_LEARNING_PATH_SUCCESS:
      return {
        ...state,
        isLoadingPaths: false,
        learningPath: action.payload,
        error: ""
      };
    case UPDATE_LEARNING_PATH_FAIL:
      return {
        ...state,
        isLoadingPaths: false,
        error: action.payload
      };
    case DELETE_LEARNING_PATH_START:
      return {
        ...state,
        isLoadingPaths: true,
        error: ""
      };
    case DELETE_LEARNING_PATH_SUCCESS:
      return {
        ...state,
        isLoadingPaths: false,
        learningPaths: state.learningPaths.filter(
          el => el.id !== action.payload
        ),
        learningPath: {},
        error: ""
      };
    case DELETE_LEARNING_PATH_FAIL:
      return {
        ...state,
        isLoadingPaths: false,
        error: action.payload
      };
    case QUIT_LEARNING_PATH_START:
      return {
        ...state,
        quittingPath: true,
        error: ""
      };
    case QUIT_LEARNING_PATH_SUCCESS:
      return {
        ...state,
        quittingPath: false,
        yourLearningPaths: state.yourLearningPaths.filter(
          el => el.id !== Number(action.payload)
        ),
        error: ""
      };
    case QUIT_LEARNING_PATH_FAIL:
      return {
        ...state,
        quittingPath: false,
        error: action.payload
      };
    case JOIN_LEARNING_PATH_START:
      return {
        ...state,
        joiningPath: true,
        error: ""
      };
    case JOIN_LEARNING_PATH_SUCCESS:
      return {
        ...state,
        joiningPath: false,
        yourLearningPaths: [...state.yourLearningPaths, action.payload],
        error: ""
      };
    case JOIN_LEARNING_PATH_FAIL:
      return {
        ...state,
        joiningPath: false,
        error: action.payload
      };
    case POST_TAG_TO_PATH_START:
      return {
        ...state,
        isLoadingPaths: true,
        error: ""
      };
    case POST_TAG_TO_PATH_SUCCESS:
      let tempTags;
      if (state.learningPath.tags) {
        tempTags = [...state.learningPath.tags, action.payload];
      } else tempTags = action.payload;
      return {
        ...state,
        isLoadingPaths: false,
        learningPath: { ...state.learningPath, tags: tempTags },
        error: ""
      };
    case POST_TAG_TO_PATH_FAIL:
      return {
        ...state,
        isLoadingPaths: false,
        error: action.payload
      };
    case DELETE_TAG_FROM_PATH_START:
      return {
        ...state,
        isLoadingPaths: true,
        error: ""
      };
    case DELETE_TAG_FROM_PATH_SUCCESS:
      let returnTags;
      if (state.learningPath.tags) {
        returnTags = state.learningPath.tags;
        returnTags = returnTags.filter(el => el !== action.payload);
      } else returnTags = [];
      return {
        ...state,
        isLoadingPaths: false,
        learningPath: { ...state.learningPath, tags: returnTags },
        error: ""
      };
    case DELETE_TAG_FROM_PATH_FAIL:
      return {
        ...state,
        isLoadingPaths: false,
        error: action.payload
      };
    case POST_COURSE_TO_PATH_START:
      return {
        ...state,
        isLoadingPaths: true,
        error: ""
      };
    case POST_COURSE_TO_PATH_SUCCESS:
      return {
        ...state,
        isLoadingPaths: false,
        learningPath: { ...state.learningPath, courses: action.payload },
        error: ""
      };
    case POST_COURSE_TO_PATH_FAIL:
      return {
        ...state,
        isLoadingPaths: false,
        error: action.payload
      };
    case REMOVE_COURSE_FROM_PATH_START:
      return {
        ...state,
        // isLoadingPaths: true,
        error: ""
      };
    case REMOVE_COURSE_FROM_PATH_SUCCESS:
      return {
        ...state,
        isLoadingPaths: false,
        learningPath: { ...state.learningPath, courses: action.payload },
        error: ""
      };
    case REMOVE_COURSE_FROM_PATH_FAIL:
      return {
        ...state,
        isLoadingPaths: false,
        error: action.payload
      };
    case UPDATE_COURSE_ORDER_START:
      return {
        ...state,
        isLoadingPaths: true,
        error: ""
      };
    case UPDATE_COURSE_ORDER_SUCCESS:
      let tempCourses = [...state.learningPath.courses];
      tempCourses = tempCourses.map(el =>
        el.id === action.payload.courseId
          ? { ...el, order: action.payload.order }
          : el
      );
      return {
        ...state,
        isLoadingPaths: false,
        learningPath: { ...state.learningPath, courses: tempCourses },
        error: ""
      };
    case UPDATE_COURSE_ORDER_FAIL:
      return {
        ...state,
        isLoadingPaths: false,
        error: action.payload
      };
    case GET_YOUR_LEARNING_PATHS_START:
      return {
        ...state,
        isLoadingPaths: true,
        error: ""
      };
    case GET_YOUR_LEARNING_PATHS_SUCCESS:
      return {
        ...state,
        isLoadingPaths: false,
        yourLearningPaths: action.payload,
        error: ""
      };
    case GET_YOUR_LEARNING_PATHS_FAIL:
      return {
        ...state,
        isLoadingPaths: false,
        error: action.payload
      };
    case GET_YOUR_LEARNING_PATHS_OWNED_START:
      return {
        ...state,
        isLoadingPaths: true,
        error: ""
      };
    case GET_YOUR_LEARNING_PATHS_OWNED_SUCCESS:
      return {
        ...state,
        isLoadingPaths: false,
        yourLearningPathsOwned: action.payload,
        error: ""
      };
    case GET_YOUR_LEARNING_PATHS_OWNED_FAIL:
      return {
        ...state,
        isLoadingPaths: false,
        error: action.payload
      };
    case POST_PATH_ITEM_START:
      return {
        ...state,
        isLoadingPaths: true,
        error: ""
      };
    case POST_PATH_ITEM_SUCCESS:
      return {
        ...state,
        isLoadingPaths: false,
        // learningPath: {...state.learningPath, pathItems: [...state.learningPath.pathItems, action.payload]},
        error: ""
      };
    case POST_PATH_ITEM_FAIL:
      return {
        ...state,
        isLoadingPaths: false,
        error: action.payload
      };
    case UPDATE_PATH_ITEM_START:
      return {
        ...state,
        // isLoadingPaths: true,
        error: ""
      };
    case UPDATE_PATH_ITEM_SUCCESS:
      return {
        ...state,
        isLoadingPaths: false,
        learningPath: {
          ...state.learningPath,
          pathItems: state.learningPath.pathItems.map(el =>
            el.id === action.payload.id ? action.payload : el
          )
        },
        error: ""
      };
    case UPDATE_PATH_ITEM_FAIL:
      return {
        ...state,
        isLoadingPaths: false,
        error: action.payload
      };
    case DELETE_PATH_ITEM_START:
      return {
        ...state,
        // isLoadingPaths: true,
        error: ""
      };
    case DELETE_PATH_ITEM_SUCCESS:
      return {
        ...state,
        isLoadingPaths: false,
        learningPath: {
          ...state.learningPath,
          pathItems: state.learningPath.pathItems.filter(
            el => el.id !== action.payload
          )
        },
        error: ""
      };
    case DELETE_PATH_ITEM_FAIL:
      return {
        ...state,
        isLoadingPaths: false,
        error: action.payload
      };
    case UPDATE_YOUR_PATH_ORDER_START:
      return {
        ...state,
        error: ""
      };
    case UPDATE_YOUR_PATH_ORDER_SUCCESS:
      return {
        ...state,
        yourLearningPaths: action.payload,
        isLoadingPaths: false,
        error: ""
      };
    case UPDATE_YOUR_PATH_ORDER_FAIL:
      return {
        ...state,
        isLoadingPaths: false,
        error: action.payload
      };
    // GET YOUR LEARNING PATH BY ID WITH COMPLETION
    case GET_YOUR_LEARNING_PATH_COMPLETION_START:
      return {
        ...state,
        isLoadingPaths: true,
        error: ""
      };
    case GET_YOUR_LEARNING_PATH_COMPLETION_SUCCESS:
      return {
        ...state,
        isLoadingPaths: false,
        learningPathCompletion: action.payload,
        error: ""
      };
    case GET_YOUR_LEARNING_PATH_COMPLETION_FAIL:
      return {
        ...state,
        isLoadingPaths: false,
        error: action.payload
      };
    // TOGGLE LEARNING PATH
    case TOGGLE_LEARNING_PATH_START:
      return {
        ...state,
        isLoadingPaths: true,
        error: ""
      };
    case TOGGLE_LEARNING_PATH_SUCCESS:
      return {
        ...state,
        isLoadingPaths: false,
        learningPathToggle: action.payload,
        error: ""
      };
    case TOGGLE_LEARNING_PATH_FAIL:
      return {
        ...state,
        isLoadingPaths: false,
        error: action.payload
      };
    // TOGGLE LEARNING PATH ITEM
    case TOGGLE_LEARNING_PATH_ITEM_START:
      return {
        ...state,
        isLoadingPaths: true,
        error: ""
      };
    case TOGGLE_LEARNING_PATH_ITEM_SUCCESS:
      return {
        ...state,
        isLoadingPaths: false,
        pathItemToggle: action.payload,
        error: ""
      };
    case TOGGLE_LEARNING_PATH_ITEM_FAIL:
      return {
        ...state,
        isLoadingPaths: false,
        error: action.payload
      };
    default:
      return state;
  }
};
