import { onboardingReducer } from "./onboardingReducers.js";
import { coursesReducer } from "./coursesReducers.js";
import { tagsReducer } from "./tagsReducer";
import { sectionsReducer } from "./sectionsReducer";
import { learningPathReducer } from "./learningPathReducer";
import { combineReducers } from "redux";
import { toolsReducer } from "./toolsReducer";
import { sourcesReducer } from "./sourcesReducer";
import { articlesReducer } from "./articlesReducer";
import { usersProfilesReducer } from "./usersProfilesReducer";
import { myProfileReducer } from "./myProfileReducer";

const reducer = combineReducers({
  onboardingReducer,
  coursesReducer,
  tagsReducer,
  sectionsReducer,
  learningPathReducer,
  toolsReducer,
  sourcesReducer,
  articlesReducer,
  usersProfilesReducer,
  myProfileReducer
});

export default reducer;
