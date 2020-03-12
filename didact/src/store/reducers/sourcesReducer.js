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
  isLoadingSources: false,
  adding: false,
  updating: false,
  deleting: false,
  error: "",
  source: {}
};

export const sourcesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SOURCE_DATA_START:
      return {
        ...state,
        isLoadingSources: true
      };
    case SOURCE_DATA_SUCCESS:
      return {
        ...state,
        sources: action.payload,
        isLoadingSources: false
      };
    case SOURCE_DATA_FAIL:
      return {
        ...state,
        error: action.payload,
        isLoadingSources: false
      };
    case SOURCE_BY_ID_START:
      return {
        ...state,
        isLoadingSources: true
      };
    case SOURCE_BY_ID_SUCCESS:
      return {
        ...state,
        source: action.payload,
        isLoadingSources: false
      };
    case SOURCE_BY_ID_FAIL:
      return {
        ...state,
        error: action.payload,
        isLoadingSources: false
      };
    case ADD_SOURCE_START:
      return {
        ...state,
        adding: true
      };
    case ADD_SOURCE_SUCCESS:
      return {
        ...state,
        sources: [...state.sources, action.payload],
        adding: false
      };
    case ADD_SOURCE_FAIL:
      return {
        ...state,
        error: action.payload,
        adding: false
      };
    case EDIT_SOURCE_START:
      return {
        ...state,
        updating: true
      };
    case EDIT_SOURCE_SUCCESS:
      return {
        ...state,
        sources: state.sources.map(source =>
          source.id === action.payload.id ? action.payload.changes : source
        ),
        updating: false
      };
    case EDIT_SOURCE_FAIL:
      return {
        ...state,
        error: action.payload,
        updating: false
      };
    case DELETE_SOURCE_START:
      return {
        ...state,
        deleting: true
      };
    case DELETE_SOURCE_SUCCESS:
      return {
        ...state,
        sources: state.sources.filter(el => el.id !== action.payload),
        deleting: false
      };
    case DELETE_SOURCE_FAIL:
      return {
        ...state,
        error: action.payload,
        deleting: false
      };
    default:
      return state;
  }
};
