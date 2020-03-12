import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import sourceimg from "../../images/sourceimg.png";
import { SourceWrapper } from "./sourceStyles";
import ArrowRightAltRoundedIcon from "@material-ui/icons/ArrowRightAltRounded";
const Source = props => {
  const state = useSelector(state => state);
  const [expanded, setExpanded] = useState(false);
  const user = state.onboardingReducer.user;
  const source = props.source;

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <SourceWrapper className="source">
      <div
        className={
          user.owner || user.admin
            ? !expanded
              ? "source-admin"
              : "source-admin-plus"
            : !expanded
            ? "source"
            : "source-plus"
        }
      >
        {user.owner || user.admin ? (
          <div className="edit-div">
            <h1>{source.name}</h1>
            <Link to={`/sources/${source.id}/edit`}>Edit</Link>
          </div>
        ) : (
          <div className="no-edit">
            <h1>{source.name}</h1>
          </div>
        )}
        <div className="img-div">
          <div>
            <img src={sourceimg} />
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
            {source.description && <p>{source.description}</p>}
            {source.link && (
              <a target="_blank" className="link-anchor" href={source.link}>
                <span>Visit Source</span>
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
    </SourceWrapper>
  );
};

export default Source;
