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
  isLoadingTools: false,
  adding: false,
  updating: false,
  deleting: false,
  error: "",
  tool: {}
};

export const toolsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOOL_DATA_START:
      return {
        ...state,
        isLoadingTools: true
      };
    case TOOL_DATA_SUCCESS:
      return {
        ...state,
        tools: action.payload,
        isLoadingTools: false
      };
    case TOOL_DATA_FAIL:
      return {
        ...state,
        error: action.payload,
        isLoadingTools: false
      };
    case TOOL_BY_ID_START:
      return {
        ...state,
        isLoadingTools: true
      };
    case TOOL_BY_ID_SUCCESS:
      return {
        ...state,
        tool: action.payload,
        isLoadingTools: false
      };
    case TOOL_BY_ID_FAIL:
      return {
        ...state,
        error: action.payload,
        isLoadingTools: false
      };
    case ADD_TOOL_START:
      return {
        ...state,
        adding: true
      };
    case ADD_TOOL_SUCCESS:
      return {
        ...state,
        tools: [...state.tools, action.payload],
        adding: false
      };
    case ADD_TOOL_FAIL:
      return {
        ...state,
        error: action.payload,
        adding: false
      };
    case EDIT_TOOL_START:
      return {
        ...state,
        updating: true
      };
    case EDIT_TOOL_SUCCESS:
      return {
        ...state,
        tools: state.tools.map(tool =>
          tool.id === action.payload.id ? action.payload.changes : tool
        ),
        updating: false
      };
    case EDIT_TOOL_FAIL:
      return {
        ...state,
        error: action.payload,
        updating: false
      };
    case DELETE_TOOL_START:
      return {
        ...state,
        deleting: true
      };
    case DELETE_TOOL_SUCCESS:
      return {
        ...state,
        tools: state.tools.filter(el => el.id !== action.payload),
        deleting: false
      };
    case DELETE_TOOL_FAIL:
      return {
        ...state,
        error: action.payload,
        deleting: false
      };
    default:
      return state;
  }
};
