import {
  SOURCE_DATA_START,
  SOURCE_DATA_SUCCESS,
  SOURCE_DATA_FAIL,
  SOURCE_BY_ID_START,
  SOURCE_BY_ID_SUCCESS,
  SOURCE_BY_ID_FAIL,
  ADD_SOURCE_START,
  ADD_SOURCE_SUCCESS,
  ADD_SOURCE_FAIL,
  EDIT_SOURCE_START,
  EDIT_SOURCE_SUCCESS,
  EDIT_SOURCE_FAIL,
  DELETE_SOURCE_START,
  DELETE_SOURCE_SUCCESS,
  DELETE_SOURCE_FAIL
} from "../actions";

const initialState = {
  sources: [],
  isLoading: false,
  error: "",
  source: {}
};

export const sourcesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SOURCE_DATA_START:
      return {
        ...state,
        isLoading: true
      };
    case SOURCE_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        sources: action.payload
      };
    case SOURCE_DATA_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case SOURCE_BY_ID_START:
      return {
        ...state,
        isLoading: true
      };
    case SOURCE_BY_ID_SUCCESS:
      return {
        ...state,
        isLoading: false,
        source: action.payload
      };
    case SOURCE_BY_ID_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case ADD_SOURCE_START:
      return {
        ...state,
        isLoading: true
      };
    case ADD_SOURCE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        sources: [...state.sources, action.payload]
      };
    case ADD_SOURCE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case EDIT_SOURCE_START:
      return {
        ...state,
        isLoading: true
      };
    case EDIT_SOURCE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        source: action.payload
      };
    case EDIT_SOURCE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case DELETE_SOURCE_START:
      return {
        ...state,
        isLoading: true
      };
    case DELETE_SOURCE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        sources: state.sources.filter(el => el.id !== action.payload)
      };
    case DELETE_SOURCE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
