import React from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
const Tool = props => {
  const tool = props.tool;

  return (
    <Link to={`/tools/${tool.id}`} className="tool">
      <h1>{tool.name}</h1>
      <p>{tool.description}</p>
    </Link>
  );
};

export default Tool;
