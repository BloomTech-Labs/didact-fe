import React, { useState, useEffect } from "react";
import ArticleBrief from "./ArticleBrief.jsx";
import ExternalArticleBrief from "./ExternalArticleBrief";
import { useSelector, useDispatch } from "react-redux";
import { getArticles } from "../../store/actions";
import { Link } from "react-router-dom";
import { DidactButton } from "../dashboard/ButtonStyles";
import {
  ResourceGrid,
  HeaderStyled,
  ResourceWrapper,
  MainArticleGrid
} from "./resourceStyles";
import FeatureArticle from "./FeatureArticle";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { PlusDiv, Plus } from "../dashboard/ButtonStyles";
const Articles = props => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const [mouseOver, setMouseOver] = useState(false);
  const user = state.onboardingReducer.user;
  const articles = state.articlesReducer.articles;
  const sortedArticles = articles.slice().sort((a, b) => a.date - b.date);
  const mainArticles = sortedArticles.slice(1, 5);
  const otherArticles = sortedArticles.slice(5);

  useEffect(() => {
    dispatch(getArticles());
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
          <span>Resources</span>
          <ChevronRightIcon style={{ fontSize: "1.6rem" }} />
          <span>Articles</span>
        </p>
      </HeaderStyled>

      {sortedArticles[0] ? (
        <FeatureArticle article={sortedArticles[0]} />
      ) : null}
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
        {mainArticles.map(article =>
          article.body ? (
            <ArticleBrief article={article} key={article.title} />
          ) : (
            <ExternalArticleBrief article={article} key={article.id} />
          )
        )}
      </MainArticleGrid>
      <ResourceGrid className="articles-list">
        {otherArticles.map(article =>
          article.body ? (
            <ArticleBrief article={article} key={article.title} />
          ) : (
            <ExternalArticleBrief article={article} key={article.id} />
          )
        )}
      </ResourceGrid>
    </ResourceWrapper>
  );
};

export default Articles;
