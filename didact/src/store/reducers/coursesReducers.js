import { 
    COURSE_DATA_START,
    COURSE_DATA_SUCCESS,
    COURSE_DATA_FAIL,
    SINGLE_COURSE_DATA_START,
    SINGLE_COURSE_DATA_SUCCESS,
    SINGLE_COURSE_DATA_FAIL,
    ADD_COURSE_DATA_START,
    ADD_COURSE_DATA_SUCCESS,
    ADD_COURSE_DATA_FAIL,
    EDIT_COURSE_DATA_START,
    EDIT_COURSE_DATA_SUCCESS,
    EDIT_COURSE_DATA_FAIL,
    DELETE_COURSE_DATA_START,
    DELETE_COURSE_DATA_SUCCESS,
    DELETE_COURSE_DATA_FAIL,
    ADD_TAG_TO_COURSE_START,
    ADD_TAG_TO_COURSE_SUCCESS,
    ADD_TAG_TO_COURSE_FAIL,
    GET_DETAILED_COURSE_START,
    GET_DETAILED_COURSE_SUCCESS,
    GET_DETAILED_COURSE_FAIL,
    DELETE_TAGS_SUCCESS,
    TOGGLE_COMPLETE_COURSE_START,
    TOGGLE_COMPLETE_COURSE_SUCCESS,
    TOGGLE_COMPLETE_COURSE_FAIL,
    GET_USER_COMPLETION_COURSE_START,
    GET_USER_COMPLETION_COURSE_SUCCESS,
    GET_USER_COMPLETION_COURSE_FAIL
} from '../actions'

const initialState = {
    courses: [],
    isLoading: false,
    error: '',
    course: {},
    courseCompletion: {},
    detailedCourse: {},
    sections: []
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
        case COURSE_DATA_FAIL:
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
                course: action.payload,
                isLoading: false,
                error: ""
        };
        case SINGLE_COURSE_DATA_FAIL:
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
                courses: [...state.courses, action.payload],
                isLoading: false,
                error: ""
        };
        case ADD_COURSE_DATA_FAIL:
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
                course: {
                    ...state.course, 
                    ...action.payload
                },
                // course: action.payload,
                isLoading: false,
                error: ""
        };
        case EDIT_COURSE_DATA_FAIL:
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
                courses: state.courses.filter(el => el.id !== action.payload),
                isLoading: false,
                error: ""
        };
        case DELETE_COURSE_DATA_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }; 
        // case UPDATE_TAGS:
        //     return {
        //         ...state,
        //         isLoading: false,
        //         course: { ...state.course, 
        //             tags: [...state.course.tags, action.payload.tag]
        //         },
        //         error: ""
        //     };
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
                course: { ...state.course, 
                    tags: [...state.course.tags, action.payload.tag]
                },
                error: ""
            };
        case ADD_TAG_TO_COURSE_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }


        //Update State after Tag Delete of Course
        case DELETE_TAGS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                course: { ...state.course,
                    tags: state.course.tags.filter(el => el !== action.payload)
                },
                error: "",
            }

        //Toggle Complete 
        case TOGGLE_COMPLETE_COURSE_START:
            return {
                ...state,
                isLoading: false,
                error: ''
            } 
        case TOGGLE_COMPLETE_COURSE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                course: action.payload,
                error: ""
            };
        case TOGGLE_COMPLETE_COURSE_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }

        //FIND COURSE COMPLETION BY ID
        case GET_USER_COMPLETION_COURSE_START:
            return {
                ...state,
                isLoading: false,
                error: ''
            } 
        case GET_USER_COMPLETION_COURSE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                courseCompletion: action.payload,
                error: ""
            };
        case GET_USER_COMPLETION_COURSE_FAIL:
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