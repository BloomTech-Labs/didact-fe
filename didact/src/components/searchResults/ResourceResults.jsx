import React from "react";
import { useSelector } from "react-redux";
import { TitleH2 } from "./SearchGeneralStyles";
import { ResourceGrid } from "../resources/resourceStyles";
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
      {/* Tools Section */}
      <TitleH2>
        Tools
        {tools.length > 0 ? null : (
          <span className="sub-span-no-results">No Results</span>
        )}
      </TitleH2>
      {tools.length > 0 && (
        <ResourceGrid>
          {tools.map(tool => (
            <Tool tool={tool} key={tool.id} queried={true} />
          ))}
        </ResourceGrid>
      )}
      {/* Sources Section */}
      <TitleH2>
        Sources
        {sources.length > 0 ? null : (
          <span className="sub-span-no-results">No Results</span>
        )}
      </TitleH2>
      {sources.length > 0 && (
        <ResourceGrid>
          {sources.map(source => (
            <Source source={source} key={source.link} queried={true} />
          ))}
        </ResourceGrid>
      )}

      {/* Articles Section */}
      <TitleH2>
        Articles
        {articles.length > 0 ? null : (
          <span className="sub-span-no-results">No Results</span>
        )}
      </TitleH2>
      {articles.length > 0 && (
        <ArticleGrid>
          {articles.map(article =>
            article.link ? (
              <ExternalArticleBrief
                article={article}
                key={article.title}
                queried={true}
              />
            ) : (
              <ArticleBrief
                article={article}
                key={article.title}
                queried={true}
              />
            )
          )}
        </ArticleGrid>
      )}
    </div>
  );
};

export default ResourceResults;
