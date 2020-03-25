import {
  GET_MY_PROFILE_START,
  GET_MY_PROFILE_SUCCESS,
  GET_MY_PROFILE_FAIL,
  EDIT_MY_PROFILE_START,
  EDIT_MY_PROFILE_SUCCESS,
  EDIT_MY_PROFILE_FAIL,
  ADD_MY_PROFILE_START,
  ADD_MY_PROFILE_SUCCESS,
  ADD_MY_PROFILE_FAIL,
  EDIT_MY_PIC_START,
  EDIT_MY_PIC_SUCCESS,
  EDIT_MY_PIC_FAIL
} from "../actions";

const initialState = {
  myProfile: {},
  myPIC: {},
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
    case EDIT_MY_PIC_START:
      return {
        ...state,
        isLoading: true
      };
    case EDIT_MY_PIC_SUCCESS:
      return {
        ...state,
        // myPIC: action.payload
        myProfile: state.myProfile.map(myProfile =>
          myProfile.id === action.payload.id
            ? action.payload.changesPic
            : myProfile.image
        ),
        isLoading: false
      };
    case EDIT_MY_PIC_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    default:
      return state;
  }
};
