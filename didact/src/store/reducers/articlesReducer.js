import {
  ARTICLE_DATA_START,
  ARTICLE_DATA_SUCCESS,
  ARTICLE_DATA_FAIL,
  ARTICLE_BY_ID_START,
  ARTICLE_BY_ID_SUCCESS,
  ARTICLE_BY_ID_FAIL,
  EXTERNAL_ARTICLE_BY_ID_START,
  EXTERNAL_ARTICLE_BY_ID_SUCCESS,
  EXTERNAL_ARTICLE_BY_ID_FAIL,
  ADD_EXTERNAL_ARTICLE_START,
  ADD_EXTERNAL_ARTICLE_SUCCESS,
  ADD_EXTERNAL_ARTICLE_FAIL,
  ADD_ARTICLE_START,
  ADD_ARTICLE_SUCCESS,
  ADD_ARTICLE_FAIL,
  EDIT_EXTERNAL_ARTICLE_START,
  EDIT_EXTERNAL_ARTICLE_SUCCESS,
  EDIT_EXTERNAL_ARTICLE_FAIL,
  EDIT_ARTICLE_START,
  EDIT_ARTICLE_SUCCESS,
  EDIT_ARTICLE_FAIL,
  DELETE_EXTERNAL_ARTICLE_START,
  DELETE_EXTERNAL_ARTICLE_SUCCESS,
  DELETE_EXTERNAL_ARTICLE_FAIL,
  DELETE_ARTICLE_START,
  DELETE_ARTICLE_SUCCESS,
  DELETE_ARTICLE_FAIL
} from "../actions";

const initialState = {
  articles: [],
  isLoadingArticles: false,
  error: "",
  article: {},
  externalArticle: {}
};

export const articlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ARTICLE_DATA_START:
      return {
        ...state,
        isLoadingArticles: true
      };
    case ARTICLE_DATA_SUCCESS:
      return {
        ...state,
        isLoadingArticles: false,
        articles: action.payload
      };
    case ARTICLE_DATA_FAIL:
      return {
        ...state,
        isLoadingArticles: false,
        error: action.payload
      };
    case ARTICLE_BY_ID_START:
      return {
        ...state,
        isLoadingArticles: true
      };
    case ARTICLE_BY_ID_SUCCESS:
      return {
        ...state,
        isLoadingArticles: false,
        article: action.payload
      };
    case ARTICLE_BY_ID_FAIL:
      return {
        ...state,
        isLoadingArticles: false,
        error: action.payload
      };
    case EXTERNAL_ARTICLE_BY_ID_START:
      return {
        ...state,
        isLoadingArticles: true
      };
    case EXTERNAL_ARTICLE_BY_ID_SUCCESS:
      return {
        ...state,
        isLoadingArticles: false,
        externalArticle: action.payload
      };
    case EXTERNAL_ARTICLE_BY_ID_FAIL:
      return {
        ...state,
        isLoadingArticles: false,
        error: action.payload
      };
    case ADD_ARTICLE_START:
      return {
        ...state,
        isLoadingArticles: true
      };
    case ADD_ARTICLE_SUCCESS:
      return {
        ...state,
        isLoadingArticles: false,
        articles: [...state.articles, action.payload]
      };
    case ADD_ARTICLE_FAIL:
      return {
        ...state,
        isLoadingArticles: false,
        error: action.payload
      };
    case ADD_EXTERNAL_ARTICLE_START:
      return {
        ...state,
        isLoadingArticles: true
      };
    case ADD_EXTERNAL_ARTICLE_SUCCESS:
      return {
        ...state,
        isLoadingArticles: false,
        articles: [...state.articles, action.payload]
      };
    case ADD_EXTERNAL_ARTICLE_FAIL:
      return {
        ...state,
        isLoadingArticles: false,
        error: action.payload
      };
    case EDIT_ARTICLE_START:
      return {
        ...state,
        isLoadingArticles: true
      };
    case EDIT_ARTICLE_SUCCESS:
      return {
        ...state,
        isLoadingArticles: false,
        article: action.payload
      };
    case EDIT_ARTICLE_FAIL:
      return {
        ...state,
        isLoadingArticles: false,
        error: action.payload
      };
    case EDIT_EXTERNAL_ARTICLE_START:
      return {
        ...state,
        isLoadingArticles: true
      };
    case EDIT_EXTERNAL_ARTICLE_SUCCESS:
      return {
        ...state,
        isLoadingArticles: false,
        externalArticle: action.payload
      };
    case EDIT_EXTERNAL_ARTICLE_FAIL:
      return {
        ...state,
        isLoadingArticles: false,
        error: action.payload
      };
    case DELETE_ARTICLE_START:
      return {
        ...state,
        isLoadingArticles: true
      };
    case DELETE_ARTICLE_SUCCESS:
      return {
        ...state,
        isLoadingArticles: false,
        articles: state.articles.filter(el => el.id !== action.payload)
      };
    case DELETE_ARTICLE_FAIL:
      return {
        ...state,
        isLoadingArticles: false,
        error: action.payload
      };
    case DELETE_EXTERNAL_ARTICLE_START:
      return {
        ...state,
        isLoadingArticles: true
      };
    case DELETE_EXTERNAL_ARTICLE_SUCCESS:
      return {
        ...state,
        isLoadingArticles: false,
        articles: state.articles.filter(el => el.title !== action.payload)
      };
    case DELETE_EXTERNAL_ARTICLE_FAIL:
      return {
        ...state,
        isLoadingArticles: false,
        error: action.payload
      };
    default:
      return state;
  }
};
