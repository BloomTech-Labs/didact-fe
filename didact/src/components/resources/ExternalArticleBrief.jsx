import React from "react";
import Card from "@material-ui/core/Card";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ExternalArticleWrapper } from "./articleStyles";
import ArrowRightAltRoundedIcon from "@material-ui/icons/ArrowRightAltRounded";
import { Mixpanel } from "../../utils/mixpanel";
const ArticleBrief = props => {
  const article = props.article;
  const user = useSelector(state => state.onboardingReducer.user);
  const description = article.description.slice(0, 75);
  const title =
    article.title.length > 35 ? article.title.slice(0, 35) : article.title;

  const handleTrack = () => {
    if (props.queried) {
      Mixpanel.track("Queried External Article Accessed");
    }
  };

  return (
    <ExternalArticleWrapper className="external-article-brief">
      {user.owner || user.admin ? (
        <div className="article-header">
          <h1>{title}...</h1>
          <Link to={`/external-articles/${article.id}/edit`}>Edit</Link>
        </div>
      ) : (
        <h1>{title}...</h1>
      )}
      <h2>{article.date}</h2>
      <p>{description}...</p>
      <div className="link-div">
        <a
          onClick={handleTrack}
          target="_blank"
          className="link-anchor"
          rel="noopener noreferrer"
          href={article.link}
        >
          <span>Go To Article</span>
          <ArrowRightAltRoundedIcon
            style={{
              fontSize: "2em"
            }}
          />
        </a>
      </div>
    </ExternalArticleWrapper>
  );
};

export default ArticleBrief;
