import {
  ARTICLE_DATA_START,
  ARTICLE_DATA_SUCCESS,
  ARTICLE_DATA_FAIL,
  EXTERNAL_ARTICLE_DATA_START,
  EXTERNAL_ARTICLE_DATA_SUCCESS,
  EXTERNAL_ARTICLE_DATA_FAIL,
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
  externalArticles: [],
  articles: [],
  isLoadingArticles: false,
  adding: false,
  updating: false,
  deleting: false,
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
        articles: action.payload,
        isLoadingArticles: false
      };
    case ARTICLE_DATA_FAIL:
      return {
        ...state,
        error: action.payload,
        isLoadingArticles: false
      };
    case EXTERNAL_ARTICLE_DATA_START:
      return {
        ...state,
        isLoadingArticles: true
      };
    case EXTERNAL_ARTICLE_DATA_SUCCESS:
      return {
        ...state,
        externalArticles: action.payload,
        isLoadingArticles: false
      };
    case EXTERNAL_ARTICLE_DATA_FAIL:
      return {
        ...state,
        error: action.payload,
        isLoadingArticles: false
      };
    case ARTICLE_BY_ID_START:
      return {
        ...state,
        isLoadingArticles: true
      };
    case ARTICLE_BY_ID_SUCCESS:
      return {
        ...state,
        article: action.payload,
        isLoadingArticles: false
      };
    case ARTICLE_BY_ID_FAIL:
      return {
        ...state,
        error: action.payload,
        isLoadingArticles: false
      };
    case EXTERNAL_ARTICLE_BY_ID_START:
      return {
        ...state,
        isLoadingArticles: true
      };
    case EXTERNAL_ARTICLE_BY_ID_SUCCESS:
      return {
        ...state,
        externalArticle: action.payload,
        isLoadingArticles: false
      };
    case EXTERNAL_ARTICLE_BY_ID_FAIL:
      return {
        ...state,
        error: action.payload,
        isLoadingArticles: false
      };
    case ADD_ARTICLE_START:
      return {
        ...state,
        adding: true
      };
    case ADD_ARTICLE_SUCCESS:
      return {
        ...state,
        articles: [...state.articles, action.payload],
        adding: false
      };
    case ADD_ARTICLE_FAIL:
      return {
        ...state,
        error: action.payload,
        adding: false
      };
    case ADD_EXTERNAL_ARTICLE_START:
      return {
        ...state,
        adding: true
      };
    case ADD_EXTERNAL_ARTICLE_SUCCESS:
      return {
        ...state,
        articles: [...state.articles, action.payload],
        adding: false
      };
    case ADD_EXTERNAL_ARTICLE_FAIL:
      return {
        ...state,
        error: action.payload,
        adding: false
      };
    case EDIT_ARTICLE_START:
      return {
        ...state,
        updating: true
      };
    case EDIT_ARTICLE_SUCCESS:
      return {
        ...state,
        articles: state.articles.map(article =>
          article.id === action.payload.id ? action.payload.changes : article
        ),
        updating: false
      };
    case EDIT_ARTICLE_FAIL:
      return {
        ...state,
        error: action.payload,
        updating: false
      };
    case EDIT_EXTERNAL_ARTICLE_START:
      return {
        ...state,
        updating: true
      };
    case EDIT_EXTERNAL_ARTICLE_SUCCESS:
      return {
        ...state,
        externalArticles: state.externalArticles.map(article =>
          article.id === action.payload.id ? action.payload.changes : article
        ),
        updating: false
      };
    case EDIT_EXTERNAL_ARTICLE_FAIL:
      return {
        ...state,
        error: action.payload,
        updating: false
      };
    case DELETE_ARTICLE_START:
      return {
        ...state,
        deleting: true
      };
    case DELETE_ARTICLE_SUCCESS:
      return {
        ...state,
        articles: state.articles.filter(el => el.id !== action.payload),
        deleting: false
      };
    case DELETE_ARTICLE_FAIL:
      return {
        ...state,
        error: action.payload,
        deleting: false
      };
    case DELETE_EXTERNAL_ARTICLE_START:
      return {
        ...state,
        deleting: true
      };
    case DELETE_EXTERNAL_ARTICLE_SUCCESS:
      return {
        ...state,
        articles: state.articles.filter(el => el.title !== action.payload),
        deleting: false
      };
    case DELETE_EXTERNAL_ARTICLE_FAIL:
      return {
        ...state,
        error: action.payload,
        deleting: false
      };
    default:
      return state;
  }
};
