import { onboardingReducer } from "./onboardingReducers.js";
import { coursesReducer } from "./coursesReducers.js";
// import { sectionsReducer } from './sectionsReducer'
import {combineReducers} from 'redux';

const reducer = combineReducers({
    onboardingReducer,
    coursesReducer,
    // sectionsReducer
});

export default reducer;