import React, { useState, useEffect } from "react";
import Tool from "./Tool.jsx";
import { useSelector, useDispatch } from "react-redux";
import { getTools } from "../../store/actions";
import { Link } from "react-router-dom";
import Icon from "@material-ui/core/Icon";
import { ResourceGrid, HeaderStyled, ResourceWrapper } from "./resourceStyles";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { PlusDiv, Plus } from "../dashboard/ButtonStyles";
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
          <span>Resources</span>
          <ChevronRightIcon style={{ fontSize: "1.6rem" }} />
          <span>Tools</span>
        </p>
      </HeaderStyled>
      <div className={user.owner || user.admin ? "title-admin" : "title"}>
        <h2 style={{ fontSize: "16px" }}>Tools</h2>
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
      </ResourceGrid>
    </ResourceWrapper>
  );
};

export default Tools;
