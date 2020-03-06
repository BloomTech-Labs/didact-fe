import React from "react";
import Card from "@material-ui/core/Card";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const ArticleBrief = props => {
  const article = props.article;
  const user = useSelector(state => state.onboardingReducer.user);

  return (
    <Card className="external-article-brief">
      {user.owner || user.admin ? (
        <button>
          <Link to={`/external-articles/${article.id}/edit`}>Edit</Link>
        </button>
      ) : null}
      <h1>{article.title}</h1>
      {/* This will be hidden by dropdown */}
      <h2>{article.description}</h2>
      <a href={article.link}>Go To Article</a>
    </Card>
  );
};

export default ArticleBrief;
