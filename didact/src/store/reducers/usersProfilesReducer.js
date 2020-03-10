import {
    GET_USER_DATA_START,
    GET_USER_DATA_SUCCESS,
    GET_USER_DATA_FAIL,
    EDIT_USER_START,
    EDIT_USER_SUCCESS,
    EDIT_USER_FAIL,

} from "../actions";

const initialState = {
    users: [],
    user: {},
    isLoading: false,
    error: "",
    source: {}
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
                sources: action.payload
            };
        case GET_USER_DATA_FAIL:
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
                source: action.payload
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
