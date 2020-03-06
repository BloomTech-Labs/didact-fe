import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DidactButton } from "../dashboard/ButtonStyles";
import { getToolById } from "../../store/actions";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
const Tool = props => {
  const dispatch = useDispatch();
  const tool = props.tool;
  const [expanded, setExpanded] = useState(false);
  const state = useSelector(state => state);
  const user = state.onboardingReducer.user;

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className="tool">
      {user.owner || user.admin ? (
        <DidactButton>
          <Link to={`/tools/${tool.id}/edit`}>Edit</Link>
        </DidactButton>
      ) : null}
      <h1>{tool.name}</h1>
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
          {tool.description && <p>{tool.description}</p>}
          {tool.link && <a href={tool.link}>Visit Tool</a>}
        </div>
      )}
    </Card>
  );
};

export default Tool;
