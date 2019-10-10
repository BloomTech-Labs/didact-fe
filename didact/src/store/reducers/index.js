import { 
    TEST_DATA_START, 
    TEST_DATA_SUCCESS, 
    TEST_DATA_FAILURE, 
    LOGIN_START, 
    LOGIN_SUCCESS, 
    LOGIN_FAILURE, 
    REGISTER_START, 
    REGISTER_SUCCESS, 
    REGISTER_FAILURE } from '../actions'

const initialState = {
    test: [],
    isLoading: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case TEST_DATA_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case TEST_DATA_SUCCESS:
            return {
                ...state,
                test: action.payload,
                isLoading: false,
                error: ""
        };
        case TEST_DATA_FAILURE:
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