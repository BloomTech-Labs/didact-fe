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
