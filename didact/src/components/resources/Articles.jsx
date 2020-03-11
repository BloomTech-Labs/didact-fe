import React, { useState, useEffect } from "react";
import ArticleBrief from "./ArticleBrief.jsx";
import ExternalArticleBrief from "./ExternalArticleBrief";
import { useSelector, useDispatch } from "react-redux";
import { getArticles, getExternalArticles } from "../../store/actions";
import { Link } from "react-router-dom";
import { DidactButton } from "../dashboard/ButtonStyles";
import {
  ArticleGrid,
  MainArticleGrid,
  SecondaryArticleGrid,
  StylishBlock,
  StylishBlockDub,
  StylishBlockMainDub
} from "./articleStyles";
import coolimage from "../../images/coolimage.png";
import { HeaderStyled, ResourceWrapper } from "./resourceStyles";
import FeatureArticle from "./FeatureArticle";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { PlusDiv, Plus } from "../dashboard/ButtonStyles";
const Articles = props => {
  const dispatch = useDispatch();
  const articlesReducer = useSelector(state => state.articlesReducer);
  const [mouseOver, setMouseOver] = useState(false);
  const user = useSelector(state => state.onboardingReducer.user);
  const internalArticles = articlesReducer.articles;
  const externalArticles = articlesReducer.externalArticles;
  const loading = articlesReducer.isLoadingArticles;
  const updating = articlesReducer.updating;
  const deleting = articlesReducer.deleting;
  const adding = articlesReducer.adding;
  //god have mercy on my soul
  const articles = internalArticles.concat(externalArticles);
  const sortedArticles = articles
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  const mainArticles = sortedArticles.slice(1, 3);
  const secondaryArticles = sortedArticles.slice(3, 5);
  const otherArticles = sortedArticles.slice(5);

  useEffect(() => {
    dispatch(getArticles());
    dispatch(getExternalArticles());
  }, [dispatch]);

  const handleIn = () => {
    setMouseOver(true);
  };

  const handleOut = () => {
    setMouseOver(false);
  };

  return (
    <ResourceWrapper>
      <HeaderStyled>
        <p className="header-navs">
          <Link to="/resources">Resources</Link>
          <ChevronRightIcon style={{ fontSize: "1.6rem" }} />
          <Link to="/articles">Articles</Link>
        </p>
      </HeaderStyled>
      {!loading && !updating && !deleting && !adding && articles ? (
        <>
          {sortedArticles[0] && <FeatureArticle article={sortedArticles[0]} />}
          <div className={user.owner || user.admin ? "title-admin" : "title"}>
            <h2 style={{ fontSize: "16px" }}>Articles</h2>
            {user.owner || user.admin ? (
              <h2>
                <Link to="/resource-form">
                  <PlusDiv
                    onMouseEnter={handleIn}
                    onMouseLeave={handleOut}
                    style={
                      !mouseOver
                        ? { backgroundColor: "#242424" }
                        : { backgroundColor: "#FFFFFF" }
                    }
                  >
                    <Plus
                      style={
                        !mouseOver ? { color: "#FFFFFF" } : { color: "#242424" }
                      }
                    >
                      +
                    </Plus>
                  </PlusDiv>
                </Link>
              </h2>
            ) : null}
          </div>
          <MainArticleGrid>
            {mainArticles &&
              mainArticles.map(article =>
                article.body ? (
                  <ArticleBrief article={article} key={article.title} />
                ) : (
                  <ExternalArticleBrief article={article} key={article.id} />
                )
              )}
            {mainArticles.length === 1 && (
              <StylishBlockMainDub>
                <div className="circle"></div>
                <img src={coolimage} />
              </StylishBlockMainDub>
            )}
          </MainArticleGrid>
          <SecondaryArticleGrid>
            {secondaryArticles &&
              secondaryArticles.map(article =>
                article.body ? (
                  <ArticleBrief article={article} key={article.title} />
                ) : (
                  <ExternalArticleBrief article={article} key={article.id} />
                )
              )}
            {secondaryArticles.length === 2 && (
              <StylishBlock>
                <div className="circle"></div>
                <img src={coolimage} />
              </StylishBlock>
            )}
            {secondaryArticles.length === 1 && (
              <StylishBlockDub>
                <div className="circle"></div>
                <img src={coolimage} />
              </StylishBlockDub>
            )}
          </SecondaryArticleGrid>

          <ArticleGrid className="articles-list">
            {otherArticles &&
              otherArticles.map(article =>
                article.body ? (
                  <ArticleBrief article={article} key={article.title} />
                ) : (
                  <ExternalArticleBrief article={article} key={article.id} />
                )
              )}
            {/* This Div Will Fill Up One Space */}
            {otherArticles.length === 2 ||
            otherArticles.length === 5 ||
            otherArticles.length === 8 ||
            otherArticles.length === 11 ? (
              <div className="single-block-fill-article">
                <div className="circle"></div>
                <img src={coolimage} />
              </div>
            ) : null}
            {/* This Div Will Fill Up Two Spaces */}
            {otherArticles.length === 1 ||
            otherArticles.length === 4 ||
            otherArticles.length === 7 ||
            otherArticles.length === 10 ? (
              <div className="double-block-fill-article">
                <div className="circle"></div>
                <img src={coolimage} />
              </div>
            ) : null}
          </ArticleGrid>
        </>
      ) : (
        <h1>I'm Loading Here!</h1>
      )}
    </ResourceWrapper>
  );
};

export default Articles;
