import React, { useState, useEffect } from "react";
import Source from "./Source.jsx";
import { useSelector, useDispatch } from "react-redux";
import { getSources } from "../../store/actions";
import { Link } from "react-router-dom";
import { ResourceGrid, HeaderStyled, ResourceWrapper } from "./resourceStyles";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { PlusDiv, Plus } from "../dashboard/ButtonStyles";

const Sources = props => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const [mouseOver, setMouseOver] = useState(false);
  const user = state.onboardingReducer.user;
  const sources = state.sourcesReducer.sources;

  useEffect(() => {
    dispatch(getSources());
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
          <span>Sources</span>
        </p>
      </HeaderStyled>
      <div className={user.owner || user.admin ? "title-admin" : "title"}>
        <h2 style={{ fontSize: "16px" }}>Sources</h2>
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
      <ResourceGrid className="sources-list">
        {sources.map(source => (
          <Source source={source} key={source.id} />
        ))}
      </ResourceGrid>
    </ResourceWrapper>
  );
};

export default Sources;
