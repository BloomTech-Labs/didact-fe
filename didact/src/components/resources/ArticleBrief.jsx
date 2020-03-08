import React from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import { useSelector } from "react-redux";
import { ArticleWrapper } from "./articleStyles";
const ArticleBrief = props => {
  const article = props.article;
  const user = useSelector(state => state.onboardingReducer.user);
  const brief = article.body.slice(0, 75);
  const author = article.first_name + " " + article.last_name;

  return (
    <ArticleWrapper>
      {user.owner || user.admin ? (
        <div className="article-header">
          <h1>{article.title}</h1>
          <Link to={`/articles/${article.id}/edit`}>Edit</Link>
        </div>
      ) : (
        <h1>{article.title}</h1>
      )}
      <h2>{article.date}</h2>
      <div className="body-div">
        <p>{brief}...</p>
      </div>
      <div className="link-div">
        <Link to={`/articles/${article.id}`}>Go To Article</Link>
      </div>
    </ArticleWrapper>
  );
};

export default ArticleBrief;
