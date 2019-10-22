import { 
    COURSE_DATA_START,
    COURSE_DATA_SUCCESS,
    COURSE_DATA_FAILURE,
    SINGLE_COURSE_DATA_START,
    SINGLE_COURSE_DATA_SUCCESS,
    SINGLE_COURSE_DATA_FAILURE,
    ADD_COURSE_DATA_START,
    ADD_COURSE_DATA_SUCCESS,
    ADD_COURSE_DATA_FAILURE,
    EDIT_COURSE_DATA_START,
    EDIT_COURSE_DATA_SUCCESS,
    EDIT_COURSE_DATA_FAILURE,
    DELETE_COURSE_DATA_START,
    DELETE_COURSE_DATA_SUCCESS,
    DELETE_COURSE_DATA_FAILURE,
    GET_DETAILED_COURSE_START,
    GET_DETAILED_COURSE_SUCCESS,
    GET_DETAILED_COURSE_FAIL,
    ADD_TAG_TO_COURSE_START,
    ADD_TAG_TO_COURSE_SUCCESS,
    ADD_TAG_TO_COURSE_FAIL,
    ADD_SECTION_START,
    ADD_SECTION_SUCCESS,
    ADD_SECTION_FAIL,
  } from '../actions'

const initialState = {
    courses: [],
    isLoading: false,
    error: '',
    detailedCourse: {}
}

export const coursesReducer = (state = initialState, action) => {
    switch(action.type) {

        // GET ALL COURSES
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

        // GET SINGLE COURSE BY ID
        case SINGLE_COURSE_DATA_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case SINGLE_COURSE_DATA_SUCCESS:
            return {
                ...state,
                courses: action.payload,
                isLoading: false,
                error: ""
        };
        case SINGLE_COURSE_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };

        // ADD COURSE 
        case ADD_COURSE_DATA_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case ADD_COURSE_DATA_SUCCESS:
            return {
                ...state,
                courses: action.payload,
                isLoading: false,
                error: ""
        };
        case ADD_COURSE_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };

        //  EDIT COURSE BY ID 
        case EDIT_COURSE_DATA_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case EDIT_COURSE_DATA_SUCCESS:
            return {
                ...state,
                courses: action.payload,
                isLoading: false,
                error: ""
        };
        case EDIT_COURSE_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };

        // DELETE COURSE BY ID  
        case DELETE_COURSE_DATA_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case DELETE_COURSE_DATA_SUCCESS:
            return {
                ...state,
                courses: action.payload,
                isLoading: false,
                error: ""
        };
        case DELETE_COURSE_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        // GET DETAILED COURSE
        case GET_DETAILED_COURSE_START:
            return {
                ...state,
                isLoading: true,
                error: "",
            }
        case GET_DETAILED_COURSE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                detailedCourse: action.payload,
                error: "",
            }
        case GET_DETAILED_COURSE_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        // ADD TAG TO COURSE
        case ADD_TAG_TO_COURSE_START:
            return {
                ...state,
                isLoading: true,
                error: "",
            }
        case ADD_TAG_TO_COURSE_SUCCESS:
            return {
                ...state,
                isLoading: false,
        
                error: "",
            }
        case ADD_TAG_TO_COURSE_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}

// export default coursesReducer;