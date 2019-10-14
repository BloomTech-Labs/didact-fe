import { 
    LOGIN_START, 
    LOGIN_SUCCESS, 
    LOGIN_FAILURE, 
    REGISTER_START, 
    REGISTER_SUCCESS, 
    REGISTER_FAILURE,
    VERIFY_START,
    VERIFY_SUCCESS,
    VERIFY_FAILURE } from '../actions'

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
                error: ""
                };
        case VERIFY_FAILURE:
            return {
                ...state,
                error: action.payload
                };

        default:
            return state;
    }
}

// export default onboardingReducer;