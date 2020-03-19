import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import GeneralResults from "./GeneralResults";
import CourseResults from "./CourseResults";
import PathResults from "./PathResults";
import ResourceResults from "./ResourceResults";
import { Navigator } from "./SearchGeneralStyles";

const SearchResults = ({ props, setValues }) => {
  const [filter, setFilter] = useState("all");

  const handleBack = () => {
    props.history.push("/");
    setValues({ search: "" });
  };

  return (
    <>
      <Navigator>
        <span onClick={() => setFilter("all")}>All</span>
        <span onClick={() => setFilter("courses")}>Courses</span>
        <span onClick={() => setFilter("paths")}>Learning Paths</span>
        <span onClick={() => setFilter("resources")}>Resources</span>
      </Navigator>
      {(() => {
        switch (filter) {
          case "all":
            return <GeneralResults {...props} />;
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
