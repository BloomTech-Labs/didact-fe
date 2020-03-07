import React from "react";
import Card from "@material-ui/core/Card";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ExternalArticleWrapper } from "./resourceStyles";
const ArticleBrief = props => {
  const article = props.article;
  const user = useSelector(state => state.onboardingReducer.user);

  return (
    <ExternalArticleWrapper className="external-article-brief">
      {user.owner || user.admin ? (
        <div className="article-header">
          <h1>{article.title}</h1>
          <Link to={`/external-articles/${article.id}/edit`}>Edit</Link>
        </div>
      ) : (
        <h1>{article.title}</h1>
      )}
      <h2>{article.date}</h2>
      <p>{article.description}</p>
      <div className="link-div">
        <a href={article.link}>Go To Article</a>
      </div>
    </ExternalArticleWrapper>
  );
};

export default ArticleBrief;
