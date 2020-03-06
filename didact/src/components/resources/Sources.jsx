import React, { useEffect } from "react";
import Source from "./Source.jsx";
import { useSelector, useDispatch } from "react-redux";
import { getSources } from "../../store/actions";
import { Link } from "react-router-dom";
import { ResourceGrid, HeaderStyled } from "./resourceStyles";
import { DidactButton } from "../dashboard/ButtonStyles";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
const Sources = props => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const user = state.onboardingReducer.user;
  const sources = state.sourcesReducer.sources;

  useEffect(() => {
    dispatch(getSources());
  }, [dispatch]);

  return (
    <div>
      <HeaderStyled>
        <p className="header-navs">
          <span>Resources</span>
          <ChevronRightIcon style={{ fontSize: "1.6rem" }} />
          <span>Sources</span>
        </p>
      </HeaderStyled>
      {user.owner || user.admin ? (
        <DidactButton>
          <Link to="/resource-form">Add</Link>
        </DidactButton>
      ) : null}
      <h2>Sources</h2>
      <ResourceGrid className="sources-list">
        {sources.map(source => (
          <Source source={source} key={source.id} />
        ))}
      </ResourceGrid>
    </div>
  );
};

export default Sources;
