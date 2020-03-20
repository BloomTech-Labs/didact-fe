import React from "react";
import { useSelector } from "react-redux";
import { TitleH2, PathGrid } from "./SearchGeneralStyles";
import LearningPathCard from "./PathResultCard";
const PathResults = props => {
  const paths = useSelector(state => state.learningPathReducer.learningPaths);
  const resultCount = paths.length;
  return (
    <>
      <div style={{ minHeight: "300px" }}>
        <TitleH2>
          SEARCH RESULTS
          {resultCount === 1 ? (
            <span>{resultCount} RESULT FOUND</span>
          ) : (
            <span>{resultCount} RESULTS FOUND</span>
          )}
        </TitleH2>
        <PathGrid>
          {paths.map(path => (
            <LearningPathCard
              key={path.id}
              props={props}
              path={path}
              style={{ marginBottom: "30px", height: "200px" }}
            />
          ))}
        </PathGrid>
      </div>
    </>
  );
};

export default PathResults;
