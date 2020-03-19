import React from "react";
import { useSelector } from "react-redux";
import { TitleH2 } from "./SearchGeneralStyles";
import LearningPathCard from "./LearningPathCard";
const PathResults = props => {
  const state = useSelector(state => state.learningPathReducer);
  const paths = state.learningPaths;

  return (
    <>
      <div style={{ minHeight: "300px" }}>
        {!paths ? (
          <TitleH2>No Results In Paths</TitleH2>
        ) : (
          <TitleH2>Learning Paths</TitleH2>
        )}
        {paths
          ? paths.map(path => (
              <LearningPathCard
                key={path.id}
                props={props}
                learningPath={path}
              />
            ))
          : null}
      </div>
    </>
  );
};

export default PathResults;
