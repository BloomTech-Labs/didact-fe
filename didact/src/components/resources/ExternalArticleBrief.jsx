import React from "react";
import Card from "@material-ui/core/Card";
const ArticleBrief = props => {
  const article = props.article;

  return (
    <Card className="external-article-brief">
      <h1>{article.title}</h1>
      {/* This will be hidden by dropdown */}
      <h2>{article.description}</h2>
      <a href={article.link}>Go To Article</a>
    </Card>
  );
};

export default ArticleBrief;
