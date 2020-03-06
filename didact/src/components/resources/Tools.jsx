import React, { useEffect } from "react";
import Tool from "./Tool.jsx";
import { useSelector, useDispatch } from "react-redux";
import { getTools } from "../../store/actions";
import { Link } from "react-router-dom";
import { ResourceGrid, HeaderStyled, ResourceWrapper } from "./resourceStyles";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const Tools = props => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const user = state.onboardingReducer.user;
  const tools = state.toolsReducer.tools;

  useEffect(() => {
    dispatch(getTools());
  }, [dispatch]);

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
        <h2>Tools</h2>
        {user.owner || user.admin ? (
          <button>
            <Link to="/resource-form">Add</Link>
          </button>
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
