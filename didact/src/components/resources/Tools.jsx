import React, { useEffect } from "react";
import Tool from "./Tool.jsx";
import { useSelector, useDispatch } from "react-redux";
import { getTools } from "../../store/actions";
import { Link } from "react-router-dom";

const Tools = props => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const user = state.onboardingReducer.user;
  const tools = state.toolsReducer.tools;

  useEffect(() => {
    dispatch(getTools());
  }, [dispatch]);

  return (
    <div className="tools-list">
      {user.owner || user.admin ? <Link to="/resource-form">Add</Link> : null}
      {tools.map(tool => (
        <Tool tool={tool} key={tool.id} />
      ))}
    </div>
  );
};

export default Tools;
