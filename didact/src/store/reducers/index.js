import { 
    COURSE_DATA_START, 
    COURSE_DATA_SUCCESS,
    COURSE_DATA_FAILURE, 
    LOGIN_START, 
    LOGIN_SUCCESS, 
    LOGIN_FAILURE, 
    REGISTER_START, 
    REGISTER_SUCCESS, 
    REGISTER_FAILURE } from '../actions'

const initialState = {
    courses: [],
    isLoading: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case COURSE_DATA_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case COURSE_DATA_SUCCESS:
            return {
                ...state,
                courses: action.payload,
                isLoading: false,
                error: ""
        };
        case COURSE_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
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
        default:
            return state;
    }
}

export default reducer;