import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ArticleWrapper } from "./articleStyles";
import ArrowRightAltRoundedIcon from "@material-ui/icons/ArrowRightAltRounded";
import { Mixpanel } from "../../utils/mixpanel";
const ArticleBrief = props => {
  const article = props.article;
  const user = useSelector(state => state.onboardingReducer.user);
  const brief = article.body.slice(0, 75);
  const title =
    article.title.length > 35
      ? `${article.title.slice(0, 35)}...`
      : article.title;

  const handleTrack = () => {
    if (props.queried) {
      Mixpanel.track("Queried Article Accessed");
    }
  };

  return (
    <ArticleWrapper>
      {user.owner || user.admin ? (
        <div className="article-header">
          <h1>{title}</h1>
          <Link to={`/articles/${article.id}/edit`}>Edit</Link>
        </div>
      ) : (
        <h1>{title}</h1>
      )}
      <h2>{article.date}</h2>
      <div className="body-div">
        <p>{brief}...</p>
      </div>
      <div className="link-div">
        <Link
          onClick={handleTrack}
          className="link-anchor"
          to={`/articles/${article.id}`}
        >
          <span>Go To Article</span>
          <ArrowRightAltRoundedIcon
            style={{
              fontSize: "2em"
            }}
          />
        </Link>
      </div>
    </ArticleWrapper>
  );
};

export default ArticleBrief;
