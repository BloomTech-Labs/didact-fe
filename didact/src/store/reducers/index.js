import { onboardingReducer } from "./onboardingReducers.js";
import { coursesReducer } from "./coursesReducers.js";
import { tagsReducer } from './tagsReducer';
import { sectionsReducer } from './sectionsReducer'
import { learningPathReducer } from './learningPathReducer'
import { combineReducers } from 'redux';
import { toolsReducer } from './toolsReducer'
import { sourcesReducer } from './sourcesReducer'
import { articlesReducer } from './articlesReducer'
import { usersProfilesReducer } from './usersProfilesReducer'


const reducer = combineReducers({
    onboardingReducer,
    coursesReducer,
    tagsReducer,
    sectionsReducer,
    learningPathReducer,
    toolsReducer,
    sourcesReducer,
    articlesReducer,
    usersProfilesReducer
});

export default reducer;