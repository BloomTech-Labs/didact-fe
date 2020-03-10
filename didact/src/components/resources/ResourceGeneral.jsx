import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ResourceWrapper, ResourceGrid } from "./resourceStyles";
import { GeneralArticleGrid, StylishBlock } from "./articleStyles";
import Tool from "./Tool";
import Source from "./Source";
import ArticleBrief from "./ArticleBrief";
import ExternalArticleBrief from "./ExternalArticleBrief";
import { getTools, getSources, getArticles } from "../../store/actions";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import coolimage from "../../images/coolimage.png";

const ResourceGeneral = () => {
  const dispatch = useDispatch();
  const toolsGen = useSelector(state => state.toolsReducer.tools.slice(0, 3));
  const sourcesGen = useSelector(state =>
    state.sourcesReducer.sources.slice(0, 3)
  );
  const articlesGen = useSelector(state =>
    state.articlesReducer.articles.slice(0, 2)
  );

  useEffect(() => {
    dispatch(getTools());
    dispatch(getSources());
    dispatch(getArticles());
  }, [dispatch]);

  return (
    <ResourceWrapper>
      <div className="gen-header">
        <h1>Tools</h1>
        <Link to="/tools">
          More Tools
          <ChevronRightIcon style={{ fontSize: "2rem" }} />
        </Link>
      </div>
      <ResourceGrid>
        {toolsGen && toolsGen.map(tool => <Tool tool={tool} key={tool.id} />)}
      </ResourceGrid>
      <div className="gen-header">
        <h1>Sources</h1>
        <Link to="/sources">
          More Sources
          <ChevronRightIcon style={{ fontSize: "2rem" }} />
        </Link>
      </div>
      <ResourceGrid>
        {" "}
        {sourcesGen &&
          sourcesGen.map(source => <Source source={source} key={source.id} />)}
      </ResourceGrid>
      <div className="gen-header">
        <h1>Articles</h1>
        <Link to="/articles">
          More Articles
          <ChevronRightIcon style={{ fontSize: "2rem" }} />
        </Link>
      </div>
      <GeneralArticleGrid>
        {articlesGen &&
          articlesGen.map(article =>
            article.link ? (
              <ExternalArticleBrief article={article} key={article.title} />
            ) : (
              <ArticleBrief article={article} key={article.title} />
            )
          )}
        <StylishBlock className="single-block-fill-article">
          <div className="circle"></div>
          <img src={coolimage} />
        </StylishBlock>
      </GeneralArticleGrid>
    </ResourceWrapper>
  );
};

export default ResourceGeneral;
