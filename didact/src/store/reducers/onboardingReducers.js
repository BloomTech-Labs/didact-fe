import { 
    LOGIN_START, 
    LOGIN_SUCCESS, 
    LOGIN_FAILURE, 
    REGISTER_START, 
    REGISTER_SUCCESS, 
    REGISTER_FAILURE,
    FACEBOOK_START,
    FACEBOOK_SUCCESS,
    FACEBOOK_FAILURE,
    GOOGLE_START,
    GOOGLE_SUCCESS,
    GOOGLE_FAILURE } from '../actions'

const initialState = {
    isLoading: false,
    error: ''
}

export const onboardingReducer = (state = initialState, action) => {
    switch(action.type) {

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
                isLoading: false,
                error: ""
                };
        case LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload
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
                error: ""
                };
        case REGISTER_FAILURE:
            return {
                ...state,
                error: action.payload
                };

    //  Facebook Login/Register
        case FACEBOOK_START:
            return {
                ...state,
                isLoading: true,
                error: ""
                };
        case FACEBOOK_SUCCESS: 
            return {
                ...state,
                isLoading: false,
                error: ""
                };
        case FACEBOOK_FAILURE:
            return {
                ...state,
                error: action.payload
                };

    //  Google Login/Register
        case GOOGLE_START:
            return {
                ...state,
                isLoading: true,
                error: ""
                };
        case GOOGLE_SUCCESS: 
            return {
                ...state,
                isLoading: false,
                error: ""
                };
        case GOOGLE_FAILURE:
            return {
                ...state,
                error: action.payload
                };
        default:
            return state;
    }
}

// export default onboardingReducer;