import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Mixpanel } from "../../utils/mixpanel";
import { joinLearningPath, quitLearningPath } from "../../store/actions/index";
import ArrowRightAltRoundedIcon from "@material-ui/icons/ArrowRightAltRounded";
import { PathCard } from "./ResultCardStyles";
import { Link } from "react-router-dom";
import pathfiller from "../../images/pathfiller.png";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

class PathResultCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      altered: false,
      joined: this.alreadyJoined
    };
    this.joinPath = this.joinPath.bind(this);
    this.quitPath = this.quitPath.bind(this);
  }
  //a quick check to see if this path is already in yourLearningPaths to set our default joined value
  alreadyJoined = this.props.yourPaths.some(
    item => item.id === this.props.path.id
  );
  //if yourPaths has at least one item, then in the case that we join this new path
  //our order will = the existing length plus one. if no items in yourPaths then we need
  //the pathOrder to be 1 so in the case of joining, it will not error out (and will make it the first path in your list)
  pathOrder =
    this.props.yourPaths.length > 0 ? this.props.yourPaths.length + 1 : 1;

  joinPath(e) {
    e.preventDefault();
    this.setState({ altered: true, joined: true });
    Mixpanel.track("Path Result Joined");
  }

  quitPath(e) {
    e.preventDefault();
    this.setState({ altered: true, joined: false });
  }
  //if you were wondering why we used a class component here, this is your answer
  //this method allows us to send our network request to join/leave a learning path
  //right before the component unmounts. if we do it while the component is mounted
  //it will change the state (paths, yourPaths) in the Redux store and trigger
  //a hideous re-render on the searchresults page
  componentWillUnmount() {
    if (this.state.altered === true) {
      if (this.state.joined === true) {
        this.props.dispatch(
          joinLearningPath(
            this.props.path.id,
            this.props.history,
            this.pathOrder
          )
        );
      } else if (this.state.joined === false) {
        this.props.dispatch(quitLearningPath(this.props.path.id));
      }
    } else return;
  }

  render() {
    return (
      <PathCard>
        {this.state.joined ? (
          <h3>
            Joined
            <CheckCircleIcon
              onClick={this.quitPath}
              className="completeButton"
            />
          </h3>
        ) : (
          <h3>
            Join
            <CheckCircleIcon
              onClick={this.joinPath}
              className="notCompleteButton"
            />
          </h3>
        )}
        <div className="img-div">
          <img src={pathfiller} alt="" />
        </div>
        <h1>
          {this.props.path.title.length > 20
            ? `${this.props.path.title.slice(0, 20)}..`
            : this.props.path.title}
        </h1>
        <div className="low-div">
          <div>
            <span>
              {this.props.path.courses ? this.props.path.courses.length : "0"}{" "}
              Classes
            </span>
            <span>
              {this.props.path.items ? this.props.path.items.length : "0"} Items
            </span>
          </div>
          <Link
            to={{
              pathname: `/learning-paths/${this.props.path.id}`,
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
  }
}

export default PathResultCard;
