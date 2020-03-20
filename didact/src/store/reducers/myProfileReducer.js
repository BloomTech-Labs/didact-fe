import {
  GET_MY_PROFILE_START,
  GET_MY_PROFILE_SUCCESS,
  GET_MY_PROFILE_FAIL,
  EDIT_MY_PROFILE_START,
  EDIT_MY_PROFILE_SUCCESS,
  EDIT_MY_PROFILE_FAIL,
  ADD_MY_PROFILE_START,
  ADD_MY_PROFILE_SUCCESS,
  ADD_MY_PROFILE_FAIL
} from "../actions";

const initialState = {
  myProfile: {},
  isLoading: false,
  error: ""
};

export const myProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MY_PROFILE_START:
      return {
        ...state,
        isLoading: true
      };
    case GET_MY_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        myProfile: action.payload
      };
    case GET_MY_PROFILE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case EDIT_MY_PROFILE_START:
      return {
        ...state,
        isLoading: true
      };
    case EDIT_MY_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        myProfile: action.payload
      };
    case EDIT_MY_PROFILE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case ADD_MY_PROFILE_START:
      return {
        ...state,
        isLoading: true
      };
    case ADD_MY_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        myProfile: action.payload
      };
    case ADD_MY_PROFILE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    default:
      return state;
  }
};
