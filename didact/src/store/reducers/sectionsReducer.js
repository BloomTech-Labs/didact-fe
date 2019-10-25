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
    DELETE_SECTION_START,
    DELETE_SECTION_SUCCESS,
    DELETE_SECTION_FAIL,
    GET_LESSONS_START,
    GET_LESSONS_SUCCESS,
    GET_LESSONS_FAIL,
    ADD_LESSON_START,
    ADD_LESSON_SUCCESS,
    ADD_LESSON_FAIL,
    UPDATE_LESSON_START,
    UPDATE_LESSON_SUCCESS,
    UPDATE_LESSON_FAIL,
    DELETE_LESSON_START,
    DELETE_LESSON_SUCCESS,
    DELETE_LESSON_FAIL,
} from '../actions'

const initialState =
{
    isLoading: false,
    error: '',
    sections: [],
    section: {},
    lessons: [],
    lesson: {}
}

export const sectionsReducer = (state = initialState, action) => {
    switch (action.type) {
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
            let temp = { ...state }
            console.log('reducer payload', action.payload.changes)
            temp.sections.map((el, i) => {
                if (action.payload.id === el.id) {
                    temp.sections[i] = action.payload.changes
                    temp.sections[i].id = action.payload.id
                }
            })
            temp.sections.sort((a, b) => a.order - b.order)
            console.log('reducer log:', temp.sections)
            return {
                ...state,
                sections: temp.sections,
                isLoading: false,
                error: "",
            }
        case UPDATE_SECTION_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        case DELETE_SECTION_START:
            return {
                ...state,
                isLoading: true,
                error: "",
            }
        case DELETE_SECTION_SUCCESS:
            return {
                ...state,
                isLoading: false,
                sections: state.sections.filter(el => el.id !== action.payload),
                section: (state.section.id & state.section.id === action.payload) ? {} : state.section,
                error: "",
            }
        case DELETE_SECTION_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        case GET_LESSONS_START:
            return {
                ...state,
                isLoading: true,
                error: "",
            }
        case GET_LESSONS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                lessons: [...state.lessons,
                ...action.payload.lessons.courseSection],
                error: "",
            }
        case GET_LESSONS_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        case ADD_LESSON_START:
            return {
                ...state,
                isLoading: true,
                error: "",
            }
        case ADD_LESSON_SUCCESS:
            return {
                ...state,
                isLoading: false,
                lessons: [...state.lessons, action.payload],
                error: "",
            }
        case ADD_LESSON_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        case UPDATE_LESSON_START:
            return {
                ...state,
                isLoading: true,
                error: "",
            }
        case UPDATE_LESSON_SUCCESS:
            let tempLessons = [...state.lessons]
            tempLessons = tempLessons.map(el => el.id === action.payload.id ? action.payload : el)
            tempLessons.sort((a, b) => a.order - b.order)
            return {
                ...state,
                isLoading: false,
                lessons: tempLessons,
                error: "",
            }
        case UPDATE_LESSON_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        case DELETE_LESSON_START:
            return {
                ...state,
                isLoading: true,
                error: "",
            }
        case DELETE_LESSON_SUCCESS:
            return {
                ...state,
                isLoading: false,
                lessons: state.lessons.filter(el => el.id !== action.payload),
                lesson: (state.lesson.id && state.lesson.id === action.payload) ? {} : state.lesson,
                error: "",
            }
        case DELETE_LESSON_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        default:
            return state
    }
}