import React, { useEffect } from "react";
import ArticleBrief from "./ArticleBrief.jsx";
import ExternalArticleBrief from "./ExternalArticleBrief";
import { useSelector, useDispatch } from "react-redux";
import { getArticles } from "../../store/actions";
import { Link } from "react-router-dom";
import { DidactButton } from "../dashboard/ButtonStyles";
import { ResourceGrid, HeaderStyled } from "./resourceStyles";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
const Articles = props => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const user = state.onboardingReducer.user;
  const articles = state.articlesReducer.articles;

  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);

  return (
    <div>
      <HeaderStyled>
        <p className="header-navs">
          <span>Resources</span>
          <ChevronRightIcon style={{ fontSize: "1.6rem" }} />
          <span>Articles</span>
        </p>
      </HeaderStyled>
      {user.owner || user.admin ? (
        <button>
          <Link to="/resource-form">Add</Link>
        </button>
      ) : null}
      <h2>Articles</h2>
      <ResourceGrid className="articles-list">
        {articles.map(article =>
          article.body ? (
            <ArticleBrief article={article} key={article.title} />
          ) : (
            <ExternalArticleBrief article={article} key={article.id} />
          )
        )}
      </ResourceGrid>
    </div>
  );
};

export default Articles;
