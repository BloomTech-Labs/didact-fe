import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  VERIFY_START,
  VERIFY_SUCCESS,
  VERIFY_FAILURE,
  SEND_CONTACT_MESSAGE_START,
  SEND_CONTACT_MESSAGE_SUCCESS,
  SEND_CONTACT_MESSAGE_FAIL
} from "../actions";

const initialState = {
  isLoading: false,
  error: "",
  tokenVerified: false,
  user: {},
  loginError: false,
  registerError: false
};

export const onboardingReducer = (state = initialState, action) => {
  switch (action.type) {
    //   Native Login Reducers
    case LOGIN_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        tokenVerified: true,
        error: ""
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        loginError: true
      };

    //  Register Reducers
    case REGISTER_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
        error: ""
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        error: action.payload,
        registerError: true
      };

    //  Facebook Login/Register
    case VERIFY_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case VERIFY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: "",
        tokenVerified: true,
        user: action.payload
      };
    case VERIFY_FAILURE:
      return {
        ...state,
        error: action.payload,
        tokenVerified: false
      };
    case SEND_CONTACT_MESSAGE_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case SEND_CONTACT_MESSAGE_SUCCESS:
      return {
        ...state,
        isLoading: false,

        error: ""
      };
    case SEND_CONTACT_MESSAGE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

// export default onboardingReducer;
