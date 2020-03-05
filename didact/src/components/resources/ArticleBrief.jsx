import React from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import { DidactButton } from "../dashboard/ButtonStyles";
import { useSelector } from "react-redux";
const ArticleBrief = props => {
  const article = props.article;
  const user = useSelector(state => state.onboardingReducer.user);
  const brief = article.body.slice(0, 55);
  const author = article.first_name + " " + article.last_name;

  return (
    <Card>
      {user.owner || user.admin ? (
        <DidactButton>
          <Link to={`/articles/${article.id}/edit`}>Edit</Link>
        </DidactButton>
      ) : null}
      <h1>{article.title}</h1>
      <h2>{article.date}</h2>
      <h2>{author}</h2>
      <p>{brief}...</p>
      <Link to={`/articles/${article.id}`}>Go To Article</Link>
    </Card>
  );
};

export default ArticleBrief;
