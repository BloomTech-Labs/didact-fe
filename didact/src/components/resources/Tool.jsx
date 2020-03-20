import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { ToolWrapper } from "./toolStyles";
import slack from "../../images/slack.png";
import ArrowRightAltRoundedIcon from "@material-ui/icons/ArrowRightAltRounded";
const Tool = props => {
  const tool = props.tool;
  const [expanded, setExpanded] = useState(false);
  const state = useSelector(state => state);
  const user = state.onboardingReducer.user;

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <ToolWrapper>
      <div
        className={
          user.owner || user.admin
            ? !expanded
              ? "tool-admin"
              : "tool-admin-plus"
            : !expanded
            ? "tool"
            : "tool-plus"
        }
      >
        {user.owner || user.admin ? (
          <div className="edit-div">
            <h1>{tool.name}</h1>
            <Link to={`/tools/${tool.id}/edit`}>Edit</Link>
          </div>
        ) : (
          <div className="no-edit">
            <h1>{tool.name}</h1>
          </div>
        )}
        <div className="img-div">
          <div>
            <img src={slack} />
          </div>
        </div>
        {/* This will be hidden by dropdown */}
        {!expanded ? (
          <ExpandMoreIcon onClick={handleExpand} />
        ) : (
          <ExpandLessIcon onClick={handleExpand} />
        )}
        {!expanded ? null : (
          <div
            className="drop"
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
            {tool.link && (
              <a
                target="_blank"
                className="link-anchor"
                rel="noopener noreferrer"
                href={tool.link}
              >
                <span>Visit Tool</span>
                <ArrowRightAltRoundedIcon
                  style={{
                    fontSize: "2em"
                  }}
                />
              </a>
            )}
          </div>
        )}
      </div>
    </ToolWrapper>
  );
};

export default Tool;
