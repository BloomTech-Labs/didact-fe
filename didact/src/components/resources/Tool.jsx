import React from "react";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DidactButton } from "../dashboard/ButtonStyles";
import { getToolById } from "../../store/actions";
const Tool = props => {
  const dispatch = useDispatch();
  const tool = props.tool;
  const state = useSelector(state => state);
  const user = state.onboardingReducer.user;

  return (
    <Card className="tool">
      {user.owner || user.admin ? <DidactButton>Edit</DidactButton> : null}
      <h1>{tool.name}</h1>
      {/* This will be hidden by dropdown */}
      <p>{tool.description}</p>
      <a href={tool.link}>Visit Tool</a>
    </Card>
  );
};

export default Tool;
