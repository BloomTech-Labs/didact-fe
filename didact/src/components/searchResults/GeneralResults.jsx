import React from "react";
import { useSelector } from "react-redux";
import {
  TitleH2,
  PathGrid,
  CourseGrid,
  ResourceGrid
} from "./SearchGeneralStyles";
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
  const articlesLoading = state.articlesReducer.isLoadingArticles;

  const resultCount =
    courses.length +
    paths.length +
    tools.length +
    sources.length +
    articles.length;

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
          {/* Paths Results */}
          <PathGrid style={{ minHeight: "300px" }}>
            {!paths ? (
              <TitleH2>No Results In Paths</TitleH2>
            ) : (
              <TitleH2>Learning Paths</TitleH2>
            )}
            {paths &&
              paths.map(path => (
                <LearningPathCard
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
          <ResourceGrid>{/* Resource Results */}</ResourceGrid>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default GeneralResults;
