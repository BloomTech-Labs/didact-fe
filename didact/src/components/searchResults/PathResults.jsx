import React from "react";
import { useSelector } from "react-redux";

const PathResults = () => {
  const state = useSelector(state => state.learningPathReducer);
  const loading = state.isLoadingPaths;
  const paths = state.learningPaths;

  return (
    <>
      {!loading && paths && (
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
      )}
    </>
  );
};
