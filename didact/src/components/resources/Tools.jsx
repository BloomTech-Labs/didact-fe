import React, { useEffect } from "react";
import Tool from "./Tool.jsx";
import { useSelector, useDispatch } from "react-redux";
import { getTools } from "../../store/actions";
import { Link } from "react-router-dom";
import { DidactButton } from "../dashboard/ButtonStyles";
import { ResourceGrid, HeaderStyled } from "./resourceStyles";
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
    <div>
      <HeaderStyled>
        <p className="header-navs">
          <span>Resources</span>
          <ChevronRightIcon style={{ fontSize: "1.6rem" }} />
          <span>Tools</span>
        </p>
      </HeaderStyled>
      {user.owner || user.admin ? (
        <DidactButton>
          <Link to="/resource-form">Add</Link>
        </DidactButton>
      ) : null}
      <h2>Tools</h2>
      <ResourceGrid>
        {tools.map(tool => (
          <Tool tool={tool} key={tool.id} />
        ))}
      </ResourceGrid>
    </div>
  );
};

export default Tools;
