import React from "react";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
const Source = props => {
  const state = useSelector(state => state);
  const user = state.onboardingReducer.user;
  const source = props.source;

  return (
    <Card className="source">
      {user.owner || user.admin ? (
        <Link to={`/sources/${source.id}/edit`}>Edit</Link>
      ) : null}
      <h1>{source.name}</h1>
      {/* This will be hidden by dropdown */}
      <p>{source.description}</p>
      <a href={source.link}>Visit Source</a>
    </Card>
  );
};

export default Source;
