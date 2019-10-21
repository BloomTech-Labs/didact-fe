import {
    GET_SECTIONS_START,
    GET_SECTIONS_SUCCESS,
    GET_SECTIONS_FAIL,
    GET_SECTION_DETAILS_START,
    GET_SECTION_DETAILS_SUCCESS,
    GET_SECTION_DETAILS_FAIL,
} from '../actions'

const initialState = 
{
    isLoading: false,
    error: '',
    sections: []
}

export const sectionsReducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        case GET_SECTIONS_START:
            return {
                ...state,
                isLoading: true,
                error: "",
            }
        case GET_SECTIONS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                sections: action.payload.sections,
                error: "",
            }
        case GET_SECTIONS_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        default:
            return state
    }
}