import {
    TAGS_DATA_START,
    TAGS_DATA_SUCCESS,
    TAGS_DATA_FAILURE,
    ADD_TAGS_START,
    ADD_TAGS_SUCCESS,
    ADD_TAGS_FAILURE,
    DELETE_TAGS_START,
    DELETE_TAGS_SUCCESS,
    DELETE_TAGS_FAILURE
} from '../actions'

const initialState = {
    tags: [],
    isLoading: false,
    error: '',
    courseTags: []
}

export const tagsReducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        case TAGS_DATA_START:
            return {
                ...state,
                isLoading: true,
                error: "",
            }
        case TAGS_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                tags: action.payload,
                error: "",
            }
        case TAGS_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            } 
        case ADD_TAGS_START:
            return {
                ...state,
                isLoading: true,
                error: "",
            }
        case ADD_TAGS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                courseTags: [...state.courseTags, action.payload],
                error: "",
            }
        case ADD_TAGS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            } 
        case DELETE_TAGS_START:
            return {
                ...state,
                isLoading: true,
                error: "", 
            }
        case DELETE_TAGS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                courseTags: state.courseTags.filter(el => el !== action.payload),
                error: "",
            }
        case DELETE_TAGS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        default:
            return state
    }
}