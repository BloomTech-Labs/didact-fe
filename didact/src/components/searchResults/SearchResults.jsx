import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import Course from "../courses/Course";
import LearningPathResults from "./LearningPathResults";

import { TitleH2 } from "./SearchStyles";

const SearchResults = ({ props, setValues }) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const courses = state.coursesReducer.courses.slice(0, 3);
  const coursesLoading = useSelector(
    state => state.coursesReducer.isLoadingCourses
  );
  const pathsLoading = useSelector(
    state => state.learningPathReducer.isLoadingPaths
  );
  const learningPaths = state.learningPathReducer.learningPaths.slice(0, 3);
  const resultCount = "placeholder";

  // useEffect(() => {

  // }, [results]);

  const handleBack = () => {
    props.history.push("/");
    setValues({ search: "" });
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "-10px 10px 10px 10px",
          borderBottom: "1px solid black"
        }}
      >
        <p style={{ fontWeight: "bold", marginLeft: "10px" }}>Search Results</p>
        <p
          onClick={handleBack}
          style={{ cursor: "pointer" }}
        >{`<${" "} Back To Dashboard`}</p>
      </div>
      {/* Checking If State Is Still Loading In Store */}
      {!pathsLoading && !coursesLoading ? (
        <>
          <div>
            <Link>All</Link>
            <Link>Courses</Link>
            <Link>Learning Paths</Link>
            <Link>Resources</Link>
          </div>
          <TitleH2>
            SEARCH RESULTS <span>{resultCount} RESULTS FOUND</span>
          </TitleH2>
          <div style={{ minHeight: "300px" }}>
            {learningPaths.length === 0 ? (
              <TitleH2>No Results In Paths</TitleH2>
            ) : (
              <TitleH2>Learning Paths</TitleH2>
            )}
            {learningPaths.length > 0
              ? learningPaths.map(path => (
                  <LearningPathResults
                    key={path.id}
                    props={props}
                    learningPath={path}
                  />
                ))
              : null}
          </div>
          {/* Courses Results */}
          <div>
            {courses.length === 0 ? (
              <TitleH2 style={{ marginBottom: "-30px" }}>
                No Results In Courses
              </TitleH2>
            ) : (
              <TitleH2 style={{ marginBottom: "-30px" }}>Courses</TitleH2>
            )}
            {courses.length > 0
              ? courses.map(course => (
                  <Course
                    props={props}
                    tracked={true}
                    course={course}
                    key={course.title}
                  />
                ))
              : null}
          </div>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default SearchResults;
