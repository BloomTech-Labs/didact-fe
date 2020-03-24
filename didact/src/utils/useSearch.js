import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  courseEndPoint,
  getLearningPaths,
  getTools,
  getSources,
  getExternalArticles,
  getArticles
} from "../store/actions";

export const useSearch = values => {
  const dispatch = useDispatch();
  const [search] = useState(values);

  dispatch(courseEndPoint(search));
  dispatch(getLearningPaths(search));
  dispatch(getTools(search));
  dispatch(getSources(search));
  dispatch(getExternalArticles(search));
  return dispatch(getArticles(search));
};
