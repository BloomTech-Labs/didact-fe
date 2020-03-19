import React from "react";
import { useSelector } from "react-redux";
import {
  TitleH2,
  PathGrid,
  CourseGrid,
  ResourceGrid
} from "./SearchGeneralStyles";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import LearningPathCard from "./LearningPathCard";
import Course from "../courses/Course";

const GeneralResults = props => {
  //wew thats a lotta state
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
  const extArticles = state.articlesReducer.externalArticles;
  const articlesLoading = state.articlesReducer.isLoadingArticles;

  const resultCount =
    courses.length +
    paths.length +
    tools.length +
    sources.length +
    articles.length +
    extArticles.length;

  return (
    <>
      {/* Checking If State Is Still Loading In Store */}
      {!pathsLoading &&
      !coursesLoading &&
      !toolsLoading &&
      !sourcesLoading &&
      !articlesLoading ? (
        <>
          <TitleH2>
            SEARCH RESULTS <span>{resultCount} RESULTS FOUND</span>
          </TitleH2>
          {/* Courses Results */}
          <CourseGrid style={{ minHeight: "45px" }}>
            <TitleH2 style={{ marginBottom: "-30px" }}>
              Courses
              {courses.length > 0 ? (
                <span
                  onClick={() => props.setFilter("courses")}
                  className="sub-span-results"
                >
                  More Results
                  <ChevronRightIcon style={{ fontSize: "1.6rem" }} />
                </span>
              ) : (
                <span className="sub-span-no-results">No Results</span>
              )}
            </TitleH2>
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

          {/* Paths Results */}
          <PathGrid style={{ minHeight: "45px" }}>
            <TitleH2>
              Learning Paths
              {paths.length > 0 ? (
                <span
                  onClick={() => props.setFilter("paths")}
                  className="sub-span-results"
                >
                  More Results
                  <ChevronRightIcon style={{ fontSize: "1.6rem" }} />
                </span>
              ) : (
                <span className="sub-span-no-results">No Results</span>
              )}
            </TitleH2>
            {paths &&
              paths.map(path => (
                <LearningPathCard
                  key={path.id}
                  props={props}
                  learningPath={path}
                />
              ))}
          </PathGrid>
          {/* Resource Results */}
          <ResourceGrid>
            {/* {tools.length > 0 && <Tool />}
            {articles.length > 0 && <Article />}
            {sources.length > 0 && <Source />} */}
          </ResourceGrid>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default GeneralResults;
