import {
    GET_SECTIONS_START,
    GET_SECTIONS_SUCCESS,
    GET_SECTIONS_FAIL,
    ADD_SECTION_START,
    ADD_SECTION_SUCCESS,
    ADD_SECTION_FAIL,
    UPDATE_SECTION_START,
    UPDATE_SECTION_SUCCESS,
    UPDATE_SECTION_FAIL,
} from '../actions'

const initialState = 
{
    isLoading: false,
    error: '',
    sections: [],
    section: {}
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
            // ADD SECTION TO COURSE
        case ADD_SECTION_START:
            return {
                ...state,
                isLoading: true,
                error: "",
            }
        case ADD_SECTION_SUCCESS:
            return {
                ...state,
                isLoading: false,
                sections: [...state.sections, action.payload],
                error: ""
            }
        case ADD_SECTION_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        // UPDATE COURSE SECTION
        case UPDATE_SECTION_START:
            return {
                ...state,
                isLoading: true,
                error: "",
            }
        case UPDATE_SECTION_SUCCESS:
            let temp = {...state}
            temp.sections.map((el, i) =>  {
                if(action.payload.id === el.id){
                    temp.sections[i] = action.payload.changes
                    temp.sections[i].id = action.payload.id
                }
            })
            temp.sections.sort((a, b) => a.order - b.order)
            return {
                ...temp,
                isLoading: false,
                error: "",
            }
        case UPDATE_SECTION_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        default:
            return state
    }
}