import React from "react";
import { Link } from "react-router-dom";

const Source = props => {
  const source = props.source;

  return (
    <Link to={`/sources/${source.id}`} className="source">
      <h1>{source.name}</h1>
      <p>{source.description}</p>
    </Link>
  );
};

export default Source;
