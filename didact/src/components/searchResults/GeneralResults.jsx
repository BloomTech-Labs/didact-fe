import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Mixpanel } from "../../utils/mixpanel";
import {
  TitleH2,
  PathGrid,
  CourseGrid,
  ResourceGrid
} from "./SearchGeneralStyles";
import {
  ResourceCard,
  ResourceFillSmall,
  ResourceFillLarge
} from "./ResultCardStyles";

import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ArrowRightAltRoundedIcon from "@material-ui/icons/ArrowRightAltRounded";
import smallresourcefill from "../../images/smallresourcefill.png";
import coolimage from "../../images/coolimage.png";

import LearningPathCard from "./PathResultCard";
import CourseResultCard from "./CourseResultCard";

const GeneralResults = props => {
  const state = useSelector(state => state);
  //courses and paths array taking small slices to match UX specs on this page
  const courses = state.coursesReducer.courses.slice(0, 2);
  const paths = state.learningPathReducer.learningPaths.slice(0, 3);
  //Loading states from various reducers
  const coursesLoading = state.coursesReducer.isLoadingCourses;
  const pathsLoading = state.learningPathReducer.isLoadingPaths;
  const toolsLoading = state.toolsReducer.isLoadingTools;
  const sourcesLoading = state.sourcesReducer.isLoadingSources;
  const articlesLoading = state.articlesReducer.isLoadingArticles;
  //Resources arrays for resources results
  const tools = state.toolsReducer.tools;
  const sources = state.sourcesReducer.sources;
  const articles = state.articlesReducer.articles;
  const extArticles = state.articlesReducer.externalArticles;

  const resourceCount =
    tools.length + sources.length + articles.length + extArticles.length;

  const resourceArticles = articles.concat(extArticles);

  const resultCount =
    courses.length +
    paths.length +
    tools.length +
    sources.length +
    articles.length +
    extArticles.length;

  const handleTrack = () => {
    console.log("Resource tracked.");
    Mixpanel.track("Queried Resource Accessed");
  };

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
          {paths.length > 0 ? (
            <PathGrid style={{ minHeight: "45px" }}>
              {paths.map(path => (
                <LearningPathCard key={path.id} props={props} path={path} />
              ))}
            </PathGrid>
          ) : null}

          {/* Resource Results */}
          <TitleH2>
            Resources
            {resourceCount > 0 ? (
              <span
                onClick={() => props.setFilter("resources")}
                className="sub-span-results"
              >
                More Results
                <ChevronRightIcon style={{ fontSize: "1.6rem" }} />
              </span>
            ) : (
              <span className="sub-span-no-results">No Results</span>
            )}
          </TitleH2>

          {resourceCount > 0 ? (
            <ResourceGrid>
              {/* Tools Check */}
              {tools.length > 0 ? (
                <ResourceCard>
                  <div className="head-div">
                    <h1>{tools[0].name}</h1>
                  </div>
                  <div className="link-div">
                    <a
                      onClick={handleTrack}
                      href={tools[0].link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Tool
                      <ArrowRightAltRoundedIcon
                        style={{
                          fontSize: "2em"
                        }}
                      />
                    </a>
                  </div>
                </ResourceCard>
              ) : (
                <ResourceFillSmall>
                  <div className="img-div">
                    <img src={smallresourcefill} alt="" />
                  </div>
                </ResourceFillSmall>
              )}

              {/* Articles/External Articles Check */}
              {resourceArticles.length > 0 ? (
                <ResourceCard>
                  <div className="head-div">
                    <h1>{resourceArticles[0].title}</h1>
                  </div>

                  {/* If article has a link you know it's an external article and therefore uses a tag not Link component*/}
                  <div className="link-div">
                    {resourceArticles[0].link ? (
                      <a
                        onClick={handleTrack}
                        href={resourceArticles[0].link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Article
                        <ArrowRightAltRoundedIcon
                          style={{
                            fontSize: "2em"
                          }}
                        />
                      </a>
                    ) : (
                      <Link
                        onClick={handleTrack}
                        to={`/articles/${resourceArticles[0].id}`}
                      >
                        View Article
                        <ArrowRightAltRoundedIcon
                          style={{
                            fontSize: "2em"
                          }}
                        />
                      </Link>
                    )}
                  </div>
                </ResourceCard>
              ) : (
                <ResourceFillLarge>
                  <div className="circle"></div>
                  <img src={coolimage} alt="" />
                </ResourceFillLarge>
              )}

              {/* Sources Check */}
              {sources.length > 0 ? (
                <ResourceCard>
                  <div className="head-div">
                    <h1>{sources[0].name}</h1>
                  </div>
                  <div className="link-div">
                    <a
                      onClick={handleTrack}
                      href={sources[0].link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Source
                      <ArrowRightAltRoundedIcon
                        style={{
                          fontSize: "2em"
                        }}
                      />
                    </a>
                  </div>
                </ResourceCard>
              ) : (
                <ResourceFillSmall>
                  <div className="img-div">
                    <img src={smallresourcefill} alt="" />
                  </div>
                </ResourceFillSmall>
              )}
            </ResourceGrid>
          ) : null}
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default GeneralResults;
