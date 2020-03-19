import React from "react";
import { useSelector } from "react-redux";
import { TitleH2 } from "./SearchGeneralStyles";
const ResourceResults = () => {
  const state = useSelector(state => state);
  const tools = state.toolsReducer.tools;
  const sources = state.sourcesReducer.sources;
  const articles = state.articlesReducer.articles;

  const resultCount = tools.length + sources.length + articles.length;
  return (
    <div>
      <TitleH2>
        SEARCH RESULTS
        {resultCount === 1 ? (
          <span>{resultCount} RESULT FOUND</span>
        ) : (
          <span>{resultCount} RESULTS FOUND</span>
        )}
      </TitleH2>
    </div>
  );
};

export default ResourceResults;
