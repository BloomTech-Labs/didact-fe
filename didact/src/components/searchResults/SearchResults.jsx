import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import GeneralResults from "./GeneralResults";
import CourseResults from "./CourseResults";
import PathResults from "./PathResults";
import ResourceResults from "./ResourceResults";
import { Navigator } from "./SearchGeneralStyles";

import {
  courseEndPoint,
  getLearningPaths,
  getTools,
  getSources,
  getExternalArticles,
  getArticles,
  getYourLearningPaths
} from "../../store/actions";

const SearchResults = ({ props, setValues, results }) => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    dispatch(getYourLearningPaths());
    dispatch(courseEndPoint(results));
    dispatch(getLearningPaths(results));
    dispatch(getTools(results));
    dispatch(getSources(results));
    dispatch(getExternalArticles(results));
    dispatch(getArticles(results));
  }, [results]);

  return (
    <>
      {/* Filter state checks on each to determine who gets underlined */}
      <Navigator>
        <span
          style={
            filter === "all"
              ? { borderBottom: "2px solid #242424" }
              : { borderBottom: "none" }
          }
          onClick={() => setFilter("all")}
        >
          All
        </span>
        <span
          style={
            filter === "courses"
              ? { borderBottom: "2px solid #242424" }
              : { borderBottom: "none" }
          }
          onClick={() => setFilter("courses")}
        >
          Courses
        </span>
        <span
          style={
            filter === "paths"
              ? { borderBottom: "2px solid #242424" }
              : { borderBottom: "none" }
          }
          onClick={() => setFilter("paths")}
        >
          Learning Paths
        </span>
        <span
          style={
            filter === "resources"
              ? { borderBottom: "2px solid #242424" }
              : { borderBottom: "none" }
          }
          onClick={() => setFilter("resources")}
        >
          Resources
        </span>
      </Navigator>
      {(() => {
        switch (filter) {
          case "all":
            return <GeneralResults {...props} setFilter={setFilter} />;
          case "courses":
            return <CourseResults {...props} />;
          case "paths":
            return <PathResults {...props} />;
          case "resources":
            return <ResourceResults {...props} />;
          default:
            break;
        }
      })()}
    </>
  );
};

export default SearchResults;
