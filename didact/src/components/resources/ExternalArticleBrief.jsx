import React from "react";
import Card from "@material-ui/core/Card";
const ArticleBrief = props => {
  const article = props.article;

  return (
    <div className="external-article-brief">
      <h1>{article.title}</h1>
      <h2>{article.description}</h2>
      <a href={article.link}>Go To Article</a>
    </div>
  );
};

export default ArticleBrief;
