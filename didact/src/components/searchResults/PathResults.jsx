import React from "react";
import { useSelector } from "react-redux";
import { TitleH2 } from "./SearchGeneralStyles";
import LearningPathCard from "./LearningPathCard";
const PathResults = props => {
  const paths = useSelector(state => state.learningPathReducer.learningPaths);
  const resultCount = paths.length;
  return (
    <>
      <div style={{ minHeight: "300px" }}>
        <TitleH2>
          SEARCH RESULTS <span>{resultCount} RESULTS FOUND</span>
        </TitleH2>
        {paths.map(path => (
          <LearningPathCard key={path.id} props={props} learningPath={path} />
        ))}
      </div>
    </>
  );
};

export default PathResults;
