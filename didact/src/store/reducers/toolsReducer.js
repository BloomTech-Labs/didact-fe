import {
  TOOL_DATA_START,
  TOOL_DATA_SUCCESS,
  TOOL_DATA_FAIL,
  TOOL_BY_ID_START,
  TOOL_BY_ID_SUCCESS,
  TOOL_BY_ID_FAIL,
  ADD_TOOL_START,
  ADD_TOOL_SUCCESS,
  ADD_TOOL_FAIL,
  EDIT_TOOL_START,
  EDIT_TOOL_SUCCESS,
  EDIT_TOOL_FAIL,
  DELETE_TOOL_START,
  DELETE_TOOL_SUCCESS,
  DELETE_TOOL_FAIL
} from "../actions";

const initialState = {
  tools: [],
  isLoading: false,
  error: "",
  tool: {}
};

export const toolsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOOL_DATA_START:
      return {
        ...state,
        isLoading: true
      };
    case TOOL_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        tools: action.payload
      };
    case TOOL_DATA_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case TOOL_BY_ID_START:
      return {
        ...state,
        isLoading: true
      };
    case TOOL_BY_ID_SUCCESS:
      return {
        ...state,
        isLoading: false,
        tool: action.payload
      };
    case TOOL_BY_ID_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case ADD_TOOL_START:
      return {
        ...state,
        isLoading: true
      };
    case ADD_TOOL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        tools: [...state.tools, action.payload]
      };
    case ADD_TOOL_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case EDIT_TOOL_START:
      return {
        ...state,
        isLoading: true
      };
    case EDIT_TOOL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        tool: action.payload
      };
    case EDIT_TOOL_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case DELETE_TOOL_START:
      return {
        ...state,
        isLoading: true
      };
    case DELETE_TOOL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        tools: state.tools.filter(el => el.id !== action.payload)
      };
    case DELETE_TOOL_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
