import React from "react";
import { useSelector } from "react-redux";
import {
  TitleH2,
  PathGrid,
  CourseGrid,
  ResourceGrid
} from "./SearchGeneralStyles";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import LearningPathCard from "./PathResultCard";
import CourseResultCard from "./CourseResultCard";

const GeneralResults = props => {
  //wew thats a lotta state
  const state = useSelector(state => state);
  const courses = state.coursesReducer.courses.slice(0, 2);
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
            SEARCH RESULTS
            {resultCount === 1 ? (
              <span>{resultCount} RESULT FOUND</span>
            ) : (
              <span>{resultCount} RESULTS FOUND</span>
            )}
          </TitleH2>

          {/* Courses Results */}
          <TitleH2>
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
          {courses.length > 0 ? (
            <CourseGrid style={{ minHeight: "45px" }}>
              {courses.map(course => (
                <CourseResultCard
                  props={props}
                  course={course}
                  key={course.title}
                />
              ))}
            </CourseGrid>
          ) : null}

          {/* Paths Results */}
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
          {paths ? (
            <PathGrid style={{ minHeight: "45px" }}>
              {paths.map(path => (
                <LearningPathCard key={path.id} props={props} path={path} />
              ))}
            </PathGrid>
          ) : null}

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
