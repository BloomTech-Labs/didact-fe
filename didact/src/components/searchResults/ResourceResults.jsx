import React from "react";
import { useSelector } from "react-redux";
import { TitleH2 } from "./SearchGeneralStyles";
import { ResourceGrid, ResourceWrapper } from "../resources/resourceStyles";
import Tool from "../resources/Tool";
import Source from "../resources/Source";
import { ArticleGrid } from "../resources/articleStyles";
import ExternalArticleBrief from "../resources/ExternalArticleBrief";
import ArticleBrief from "../resources/ArticleBrief";

const ResourceResults = () => {
  const state = useSelector(state => state);
  const tools = state.toolsReducer.tools;
  const sources = state.sourcesReducer.sources;
  const intArticles = state.articlesReducer.articles;
  const extArticles = state.articlesReducer.externalArticles;
  const articles = intArticles.concat(extArticles);

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
      <ResourceWrapper>
        <div className="gen-header">
          <h1>Tools</h1>
        </div>
        <ResourceGrid>
          {tools && tools.map(tool => <Tool tool={tool} key={tool.id} />)}
        </ResourceGrid>
        <div className="gen-header">
          <h1>Sources</h1>
        </div>
        <ResourceGrid>
          {sources &&
            sources.map(source => <Source source={source} key={source.id} />)}
        </ResourceGrid>
        <div className="gen-header">
          <h1>Articles</h1>
        </div>
        <ArticleGrid>
          {articles &&
            articles.map(article =>
              article.link ? (
                <ExternalArticleBrief article={article} key={article.title} />
              ) : (
                <ArticleBrief article={article} key={article.title} />
              )
            )}
        </ArticleGrid>
      </ResourceWrapper>
    </div>
  );
};

export default ResourceResults;
