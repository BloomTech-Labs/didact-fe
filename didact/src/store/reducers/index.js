import { onboardingReducer } from "./onboardingReducers.js";
import { coursesReducer } from "./coursesReducers.js";
import { sectionsReducer } from './sectionsReducer';
import {tagsReducer} from './tagsReducer';
import {combineReducers} from 'redux';


const reducer = combineReducers({
    onboardingReducer,
    coursesReducer,
    sectionsReducer,
    tagsReducer
});

export default reducer;