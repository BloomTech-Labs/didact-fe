import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Mixpanel } from "../../utils/mixpanel";
import { joinLearningPath, quitLearningPath } from "../../store/actions/index";
import ArrowRightAltRoundedIcon from "@material-ui/icons/ArrowRightAltRounded";
import { PathCard } from "./ResultCardStyles";
import { Link } from "react-router-dom";
import pathfiller from "../../images/pathfiller.png";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

const PathResultCard = props => {
  const path = props.path;
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const yourLearningPaths = state.learningPathReducer.yourLearningPaths;
  //a quick check to see if this path is already in yourLearningPaths to set our default ?joined value
  const alreadyJoined = yourLearningPaths.some(item => item.id === path.id);

  const [joined, setJoined] = useState(alreadyJoined);

  const joinPath = () => {
    dispatch(
      joinLearningPath(path.id, props.history, yourLearningPaths.length + 1)
    );
    setJoined(!joined);
    Mixpanel.track("Path Result Joined");
  };

  const quitPath = () => {
    dispatch(quitLearningPath(path.id));
    setJoined(!joined);
  };

  return (
    <PathCard>
      {joined ? (
        <h3>
          Joined
          <CheckCircleIcon onClick={quitPath} className="completeButton" />
        </h3>
      ) : (
        <h3>
          Join
          <CheckCircleIcon onClick={joinPath} className="notCompleteButton" />
        </h3>
      )}
      <div className="img-div">
        <img src={pathfiller} alt="" />
      </div>
      <h1>
        {path.title.length > 20 ? `${path.title.slice(0, 20)}..` : path.title}
      </h1>
      <div className="low-div">
        <div>
          <span>Classes</span>
          <span>Items</span>
        </div>
        <Link
          to={{
            pathname: `/learning-paths/${path.id}`,
            //passing state through the location object allows us to
            //reference it later in the route, in this case to
            //use a mixpanel.track() to see if user accessed route through search results.
            state: { queried: true }
          }}
        >
          View Path
          <ArrowRightAltRoundedIcon
            style={{
              fontSize: "2em"
            }}
          />
        </Link>
      </div>
    </PathCard>
  );
};

export default PathResultCard;
