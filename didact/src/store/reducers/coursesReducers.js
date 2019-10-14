import { 
    COURSE_DATA_START, 
    COURSE_DATA_SUCCESS,
    COURSE_DATA_FAILURE
  } from '../actions'

const initialState = {
    courses: [],
    isLoading: false,
    error: ''
}

export const coursesReducer = (state = initialState, action) => {
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
        default:
            return state;
    }
}

// export default coursesReducer;