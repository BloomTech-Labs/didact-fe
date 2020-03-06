import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
const Source = props => {
  const state = useSelector(state => state);
  const [expanded, setExpanded] = useState(false);
  const user = state.onboardingReducer.user;
  const source = props.source;

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className="source">
      {user.owner || user.admin ? (
        <button>
          <Link to={`/sources/${source.id}/edit`}>Edit</Link>
        </button>
      ) : null}
      <h1>{source.name}</h1>
      {/* This will be hidden by dropdown */}
      {!expanded ? (
        <ExpandMoreIcon onClick={handleExpand} />
      ) : (
        <ExpandLessIcon onClick={handleExpand} />
      )}
      {!expanded ? null : (
        <div
          style={{
            display: "flex",
            flexFlow: "column wrap",
            alignItems: "center",
            justifyContent: "space-between",
            maxHeight: "1000px",
            transition: `max-height 1s ease`,
            overflow: "visible"
          }}
        >
          {source.description && <p>{source.description}</p>}
          {source.link && <a href={source.link}>Visit Source</a>}
        </div>
      )}
    </Card>
  );
};

export default Source;
