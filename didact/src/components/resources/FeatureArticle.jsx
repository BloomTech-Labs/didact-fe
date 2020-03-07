import React from "react";
import { FeaturedArticle } from "./resourceStyles";
import { Link } from "react-router-dom";

const FeatureArticle = props => {
  const article = props.article;
  const longDescript = article.body || article.description;
  const description = longDescript.slice(0, 275);
  const author = article.first_name + " " + article.last_name || null;
  return (
    <FeaturedArticle>
      <h2>Featured Article</h2>
      <h1>{article.title}</h1>
      {author ? <h3>{author}</h3> : null}
      <h3>{article.date}</h3>
      <p>{description}...</p>
      {author ? (
        <Link to={`/articles/${article.id}`}>Go To Article</Link>
      ) : (
        <a href={article.link}>Go To Article</a>
      )}
    </FeaturedArticle>
  );
};

export default FeatureArticle;
