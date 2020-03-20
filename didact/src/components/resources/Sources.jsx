import React, { useState, useEffect } from "react";
import Source from "./Source.jsx";
import { useSelector, useDispatch } from "react-redux";
import { getSources } from "../../store/actions";
import { Link } from "react-router-dom";
import { ResourceGrid, HeaderStyled, ResourceWrapper } from "./resourceStyles";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { PlusDiv, Plus } from "../dashboard/ButtonStyles";
import coolimage from "../../images/coolimage.png";
const Sources = props => {
  const dispatch = useDispatch();
  const sourcesReducer = useSelector(state => state.sourcesReducer);
  const user = useSelector(state => state.onboardingReducer.user);
  const [mouseOver, setMouseOver] = useState(false);
  const sources = sourcesReducer.sources;
  const loading = sourcesReducer.isLoadingSources;
  const updating = sourcesReducer.updating;
  const adding = sourcesReducer.adding;
  const deleting = sourcesReducer.deleting;

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
      {!loading && !updating && !deleting && !adding && sources ? (
        <>
          <HeaderStyled>
            <p className="header-navs">
              <Link to="resources">Resources</Link>
              <ChevronRightIcon style={{ fontSize: "1.6rem" }} />
              <Link to="/sources">Sources</Link>
            </p>
          </HeaderStyled>
          <div className={user.owner || user.admin ? "title-admin" : "title"}>
            <h2 style={{ fontSize: "16px" }}>
              Learning Sources You May Find Useful:
            </h2>
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
            {/* This Div Will Fill Up One Space */}
            {sources.length === 2 ||
            sources.length === 5 ||
            sources.length === 8 ||
            sources.length === 11 ? (
              <div className="single-block-fill-source">
                <div className="circle"></div>
                <img src={coolimage} alt="" />
              </div>
            ) : null}
            {/* This Div Will Fill Up Two Spaces */}
            {sources.length === 1 ||
            sources.length === 4 ||
            sources.length === 7 ||
            sources.length === 10 ? (
              <div className="double-block-fill-source">
                <div className="circle"></div>
                <img src={coolimage} alt="" />
              </div>
            ) : null}
          </ResourceGrid>
        </>
      ) : (
        <h1>I'm Loading Here!</h1>
      )}
    </ResourceWrapper>
  );
};

export default Sources;
