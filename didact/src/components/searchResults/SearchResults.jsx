import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import Course from "../courses/Course";
import LearningPathResults from "./LearningPathResults";

import {
  TitleH2,
  PathGrid,
  CouresGrid,
  ResourceGrid
} from "./SearchGeneralStyles";

const SearchResults = ({ props, setValues }) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const courses = state.coursesReducer.courses.slice(0, 3);
  const coursesLoading = state.coursesReducer.isLoadingCourses;
  const paths = state.learningPathReducer.learningPaths.slice(0, 3);
  const pathsLoading = state.learningPathReducer.isLoadingPaths;
  const tools = state.toolsReducer.tools;
  const toolsLoading = state.toolsReducer.isLoadingTools;
  const sources = state.sourcesReducer.sources;
  const sourcesLoading = state.sourcesReducer.isLoadingSources;
  const articles = state.articlesReducer.articles;
  const articlesLoading = state.articlesReducer.isLoadingArticles;

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
      {!pathsLoading &&
      !coursesLoading &&
      !toolsLoading &&
      !sourcesLoading &&
      !articlesLoading ? (
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
          {/* Paths Results */}
          <PathGrid style={{ minHeight: "300px" }}>
            {!paths ? (
              <TitleH2>No Results In Paths</TitleH2>
            ) : (
              <TitleH2>Learning Paths</TitleH2>
            )}
            {paths &&
              paths.map(path => (
                <LearningPathResults
                  key={path.id}
                  props={props}
                  learningPath={path}
                />
              ))}
          </PathGrid>
          {/* Courses Results */}
          <CourseGrid>
            {!courses ? (
              <TitleH2 style={{ marginBottom: "-30px" }}>
                No Results In Courses
              </TitleH2>
            ) : (
              <TitleH2 style={{ marginBottom: "-30px" }}>Courses</TitleH2>
            )}
            {courses &&
              courses.map(course => (
                <Course
                  props={props}
                  tracked={true}
                  course={course}
                  key={course.title}
                />
              ))}
          </CourseGrid>
          <ResourceGrid>
            {/* Resource Results */}
            {tools && articles && sources && <div></div>}
          </ResourceGrid>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default SearchResults;
