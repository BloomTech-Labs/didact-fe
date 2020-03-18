import {
  GET_MY_PROFILE_BIO_START,
  GET_MY_PROFILE_BIO_SUCCESS,
  GET_MY_PROFILE_BIO_FAIL,
  EDIT_MY_PROFILE_BIO_START,
  EDIT_MY_PROFILE_BIO_SUCCESS,
  EDIT_MY_PROFILE_BIO_FAIL
} from "../actions";

const initialState = {
  bio: [],
  isLoading: false,
  error: ""
};

export const myProfileBioReducer = (state = initialState, action) => {
  switch (action.type) {
  }
};
