import React from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
const ArticleBrief = props => {
  const article = props.article;
  const brief = article.body.slice(0, 55);
  const author = article.first_name + " " + article.last_name;

  return (
    <Card>
      <h1>{article.title}</h1>
      <h2>{article.date}</h2>
      <h2>{author}</h2>
      <p>{brief}...</p>
      <Link to={`/articles/${article.id}`}>Go To Article</Link>
    </Card>
  );
};

export default ArticleBrief;
