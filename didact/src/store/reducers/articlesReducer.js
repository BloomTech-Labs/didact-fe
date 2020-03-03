import {
  ARTICLE_DATA_START,
  ARTICLE_DATA_SUCCESS,
  ARTICLE_DATA_FAIL,
  ARTICLE_BY_ID_START,
  ARTICLE_BY_ID_SUCCESS, 
  ARTICLE_BY_ID_FAIL,
  ADD_ARTICLE_START,
  ADD_ARTICLE_SUCCESS,
  ADD_ARTICLE_FAIL,
  EDIT_ARTICLE_START,
  EDIT_ARTICLE_SUCCESS,
  EDIT_ARTICLE_FAIL,
  DELETE_ARTICLE_START,
  DELETE_ARTICLE_SUCCESS,
  DELETE_ARTICLE_FAIL
} from "../actions";

const initialState = {
  articles: [],
  isLoading: false,
  error: "",
  article: {}
};

export const articlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ARTICLE_DATA_START:
      return {
        ...state,
        isLoading: true
      };
    case ARTICLE_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        articles: action.payload
      };
    case ARTICLE_DATA_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case ARTICLE_BY_ID_START:
      return {
        ...state,
        isLoading: true
      };
    case ARTICLE_BY_ID_SUCCESS:
      return {
        ...state,
        isLoading: false,
        article: action.payload
      };
    case ARTICLE_BY_ID_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case ADD_ARTICLE_START:
      return {
        ...state,
        isLoading: true
      };
    case ADD_ARTICLE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        articles: [...state.articles, action.payload]
      };
    case ADD_ARTICLE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case EDIT_ARTICLE_START:
      return {
        ...state,
        isLoading: true
      };
    case EDIT_ARTICLE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        article: action.payload
      };
    case EDIT_ARTICLE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case DELETE_ARTICLE_START:
      return {
        ...state,
        isLoading: true
      };
    case DELETE_ARTICLE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        articles: state.articles.filter(el => el.id !== action.payload)
      };
    case DELETE_ARTICLE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
