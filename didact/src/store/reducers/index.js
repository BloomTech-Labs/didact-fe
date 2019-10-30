import { onboardingReducer } from "./onboardingReducers.js";
import { coursesReducer } from "./coursesReducers.js";
import {tagsReducer} from './tagsReducer';
import { sectionsReducer } from './sectionsReducer'
import {learningPathReducer} from './learningPathReducer'
import {combineReducers} from 'redux';


const reducer = combineReducers({
    onboardingReducer,
    coursesReducer,
    tagsReducer,
    sectionsReducer,
    learningPathReducer
});

export default reducer;