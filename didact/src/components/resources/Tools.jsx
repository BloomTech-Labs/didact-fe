import React, { useState, useEffect } from "react";
import Tool from "./Tool.jsx";
import { useSelector, useDispatch } from "react-redux";
import { getTools } from "../../store/actions";
import { Link } from "react-router-dom";
import Icon from "@material-ui/core/Icon";
import { ResourceGrid, HeaderStyled, ResourceWrapper } from "./resourceStyles";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { PlusDiv, Plus } from "../dashboard/ButtonStyles";
import coolimage from "../../images/coolimage.png";
const Tools = props => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const [mouseOver, setMouseOver] = useState(false);
  const user = state.onboardingReducer.user;
  const tools = state.toolsReducer.tools;

  useEffect(() => {
    dispatch(getTools());
  }, [dispatch]);

  const handleIn = () => {
    setMouseOver(true);
  };

  const handleOut = () => {
    setMouseOver(false);
  };

  return (
    <ResourceWrapper>
      <HeaderStyled>
        <p className="header-navs">
          <Link to="/resources">Resources</Link>
          <ChevronRightIcon style={{ fontSize: "1.6rem" }} />
          <Link to="/tools">Tools</Link>
        </p>
      </HeaderStyled>
      <div className={user.owner || user.admin ? "title-admin" : "title"}>
        <h2 style={{ fontSize: "16px" }}>Some Tools You May Find Useful:</h2>
        {user.owner || user.admin ? (
          <h2>
            <Link to="/resource-form">
              <PlusDiv
                onMouseEnter={handleIn}
                onMouseLeave={handleOut}
                style={
                  !mouseOver
                    ? { backgroundColor: "#242424" }
                    : { backgroundColor: "#FFFFFF" }
                }
              >
                <Plus
                  style={
                    !mouseOver ? { color: "#FFFFFF" } : { color: "#242424" }
                  }
                >
                  +
                </Plus>
              </PlusDiv>
            </Link>
          </h2>
        ) : null}
      </div>
      <ResourceGrid>
        {tools.map(tool => (
          <Tool tool={tool} key={tool.id} />
        ))}
        {/* This Div Will Fill Up One Space */}
        {tools.length === 2 ||
        tools.length === 5 ||
        tools.length === 8 ||
        tools.length === 11 ? (
          <div className="single-block-fill-tool">
            <div className="circle"></div>
            <img src={coolimage} />
          </div>
        ) : null}
        {/* This Div Will Fill Up Two Spaces */}
        {tools.length === 1 ||
        tools.length === 4 ||
        tools.length === 7 ||
        tools.length === 10 ? (
          <div className="double-block-fill-tool">
            <div className="circle"></div>
            <img src={coolimage} />
          </div>
        ) : null}
      </ResourceGrid>
    </ResourceWrapper>
  );
};

export default Tools;
