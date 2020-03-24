import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Mixpanel } from "../../utils/mixpanel";
import { joinLearningPath } from "../../store/actions/index";
import ArrowRightAltRoundedIcon from "@material-ui/icons/ArrowRightAltRounded";
import { PathCard } from "./ResultCardStyles";
import { Link } from "react-router-dom";
import pathfiller from "../../images/pathfiller.png";

const PathResultCard = props => {
  const dispatch = useDispatch();
  const path = props.path;
  const state = useSelector(state => state);
  const yourLearningPaths = state.learningPathReducer.yourLearningPaths;
  const joined = yourLearningPaths.some(item => item.id === path.id);
  const joinPath = (id, order) => {
    dispatch(joinLearningPath(id, props.history, order));
    Mixpanel.track("Path Result Joined");
  };
  return (
    <PathCard>
      {joined ? <h3>Joined</h3> : <h3>Join</h3>}
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
