import React, { useEffect } from "react";
import ArticleBrief from "./ArticleBrief.jsx";
import { useSelector, useDispatch } from "react-redux";
import { getArticles } from "../../store/actions";
import { Link } from "react-router-dom";

const Articles = props => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const user = state.onboardingReducer.user;
  const articles = state.articlesReducer.articles;

  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);

  return (
    <div className="articles-list">
      {user.owner || user.admin ? <Link to="/resource-form">Add</Link> : null}
      {articles.map(article => (
        <ArticleBrief article={article} key={article.id} />
      ))}
    </div>
  );
};

export default Articles;
