import { onboardingReducer } from "./onboardingReducers.js";
import { coursesReducer } from "./coursesReducers.js";
import {combineReducers} from 'redux';

const reducer = combineReducers({
    onboardingReducer,
    coursesReducer
});

export default reducer;