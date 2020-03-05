import React from "react";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Tool = props => {
  const tool = props.tool;
  const state = useSelector(state => state);
  const user = state.onboardingUser.user;

  return (
    <Card className="tool">
      {user.owner || user.admin ? (
        <Link to={`/tools/${tool.id}/edit`}>Edit</Link>
      ) : null}
      <h1>{tool.name}</h1>
      {/* This will be hidden by dropdown */}
      <p>{tool.description}</p>
      <a href={tool.link}>Visit Tool</a>
    </Card>
  );
};

export default Tool;
