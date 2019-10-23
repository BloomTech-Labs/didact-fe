import { onboardingReducer } from "./onboardingReducers.js";
import { coursesReducer } from "./coursesReducers.js";
import {tagsReducer} from './tagsReducer';
// import { sectionsReducer } from './sectionsReducer'
import {combineReducers} from 'redux';


const reducer = combineReducers({
    onboardingReducer,
    coursesReducer,
    tagsReducer
    // sectionsReducer
});

export default reducer;