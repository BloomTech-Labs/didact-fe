import { TEST_DATA_START, TEST_DATA_SUCCESS, TEST_DATA_FAILURE, LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions'

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
        default:
            return state;
    }
}

export default reducer;