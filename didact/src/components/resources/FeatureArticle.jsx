import React from "react";
import { FeaturedArticle } from "./articleStyles";
import { Link } from "react-router-dom";
import ArrowRightAltRoundedIcon from "@material-ui/icons/ArrowRightAltRounded";
import { useSelector } from "react-redux";
const FeatureArticle = props => {
  const user = useSelector(state => state.onboardingReducer.user);
  const article = props.article;
  const longDescript = article.body || article.description;
  const description = longDescript.slice(0, 275);
  const author = article.first_name + " " + article.last_name;
  return (
    <FeaturedArticle>
      {user.owner || user.admin ? (
        <div className="admin-header">
          <h2>Featured Article</h2>{" "}
          <Link to={`/articles/${article.id}/edit`}>Edit</Link>
        </div>
      ) : (
        <h2>Featured Article</h2>
      )}

      <h1>{article.title}</h1>
      {!author === undefined ? <h3>{author}</h3> : null}
      <h3>{article.date}</h3>
      <p>{description}...</p>
      {!article.link ? (
        <Link className="link-anchor" to={`/articles/${article.id}`}>
          <span>Go To Article</span>
          <ArrowRightAltRoundedIcon
            style={{
              fontSize: "2em"
            }}
          />
        </Link>
      ) : (
        <a target="_blank" className="link-anchor" href={article.link}>
          <span>Go To Article</span>
          <ArrowRightAltRoundedIcon
            style={{
              fontSize: "2em"
            }}
          />
        </a>
      )}
    </FeaturedArticle>
  );
};

export default FeatureArticle;
