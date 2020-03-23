import {
  GET_USER_DATA_START,
  GET_USER_DATA_SUCCESS,
  GET_USER_DATA_FAIL,
  GET_SPECIFIC_USER_START,
  GET_SPECIFIC_USER_SUCCESS,
  GET_SPECIFIC_USER_FAIL,
  EDIT_USER_START,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAIL
} from "../actions";

const initialState = {
  users: [],
  person: {},
  isLoading: false,
  error: ""
};

export const usersProfilesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_DATA_START:
      return {
        ...state,
        isLoading: true
      };
    case GET_USER_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: action.payload
      };
    case GET_USER_DATA_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case GET_SPECIFIC_USER_START:
      return {
        ...state,
        isLoading: true
      };
    case GET_SPECIFIC_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        person: action.payload
      };
    case GET_SPECIFIC_USER_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case EDIT_USER_START:
      return {
        ...state,
        isLoading: true
      };
    case EDIT_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        person: action.payload
      };
    case EDIT_USER_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    default:
      return state;
  }
};
