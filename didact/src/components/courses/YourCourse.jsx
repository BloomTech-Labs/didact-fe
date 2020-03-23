import React, { useEffect, useState } from "react";
import { courseEndPoint } from "../../store/actions/index.js";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ArrowRightAltRoundedIcon from "@material-ui/icons/ArrowRightAltRounded";

import {
  getYourLearningPathsOwned,
  postCourseToPath
} from "../../store/actions/index";

import { AddCourseToPath, PopoverWrapper } from "./CourseStyles";
import { DidactButton } from "../dashboard/ButtonStyles";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Popover from "@material-ui/core/Popover";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import AddCoursePathPlaylist from "./AddCoursePathPlaylist";

import playlistAdd from "../../images/playlist_add_black_24x24.png";
import closeIcon from "../../images/close_black_24x24.png";

const useStyles = makeStyles(theme => ({
  buttonCourse: {
    border: "none",
    margin: "20px",
    backgroundColor: "#f2e9d4",
    outline: "none",
    padding: "10px",
    borderRadius: 15,
    width: "120px",
    fontSize: "1.3rem",
    cursor: "pointer"
  },
  buttonDiv: {
    display: "flex",
    justifyContent: "flex-end"
  },
  addButtonDiv: {
    marginTop: "40px",
    marginLeft: "20px"
  },

  card: {
    maxWidth: 540,
    width: "100%",
    margin: "40px 0 40px 0",
    borderRadius: "7px",
    boxShadow: "none",
    backgroundColor: "#ffffff",
    color: "black",
    position: "relative"
  },

  cardDashboard: {
    maxWidth: 540,
    width: "100%",
    margin: "40px 0 40px 0",
    borderRadius: "7px",
    boxShadow: "none",
    backgroundColor: "#ffffff",
    color: "black",
    position: "relative",
    paddingTop: "20px"
  },

  descriptionDiv: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    color: "#757575",
    padding: "0px"
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  root: {
    display: "flex",
    flexDirection: "row",
    opacity: "0",
    padding: "0px"
  },

  title: {
    display: "flex"
  },
  addCourse: {
    background: "none",
    border: "black",
    height: "100%",
    display: "flex",
    justifyContent: "flex-end",
    margin: "-21px -4px 15px 0",
    position: "relative",
    zIndex: 12
  },
  courseTitle: {
    maxWidth: "512px",
    color: "black"
  },
  dropArrow: {
    position: "absolute",
    color: "black",
    display: "flex",
    paddingTop: "-10px",
    top: "131px",
    left: "91%"
  },
  dropArrowDashboard: {
    position: "absolute",
    color: "black",
    display: "flex",
    paddingTop: "-10px",
    top: "129px",
    left: "87%"
  }
}));

const YourCourse = ({ course, props, tracked }) => {
  const state = useSelector(state => state);
  const classes = useStyles();
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    dispatch(courseEndPoint());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getYourLearningPathsOwned());
  }, [dispatch, state.learningPathReducer.learningPath]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <PopoverWrapper>
      <Card
        className={
          props && props.match.url === "/"
            ? classes.cardDashboard
            : classes.card
        }
      >
        <CardContent>
          <AddCoursePathPlaylist course={course} />
          <CardActions disableSpacing>
            <div
              style={{
                marginTop: "-60px",
                backgroundColor: "#ffffff",
                border: "none",
                boxShadow: "none"
              }}
            >
              <div
                onClick={handleExpandClick}
                aria-controls="panel1a-content"
                id="panel1a-header"
                style={{
                  fontSize: "2.8rem",
                  textAlign: "left",
                  paddingLeft: "6px",
                  transition: `0.25s ease`
                }}
              >
                <div
                  className="courseTitle"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    transition: `0.25s ease`
                  }}
                >
                  <h3 style={{ fontFamily: "ITC Grouch", color: "black" }}>
                    {course.title.length > 35
                      ? `${course.title.substring(0, 35)}...`
                      : course.title}
                  </h3>
                  <div
                    style={{
                      textAlign: "left",
                      width: "100%",
                      fontSize: "1.2rem",
                      marginTop: "10px",
                      paddingLeft: "2px",
                      color: "black"
                    }}
                  >
                    <span>{course.foreign_instructors}</span>
                    {!expanded ? (
                      <ExpandMoreIcon
                        className={
                          props && props.match.url === "/"
                            ? classes.dropArrowDashboard
                            : classes.dropArrow
                        }
                      />
                    ) : (
                      <ExpandLessIcon
                        className={
                          props && props.match.url === "/"
                            ? classes.dropArrowDashboard
                            : classes.dropArrow
                        }
                      />
                    )}
                    {course.description && course.description !== null ? (
                      !expanded ? (
                        <div
                          style={{
                            display: "flex",
                            alignItems: "baseline",
                            justifyContent: "space-between",
                            maxHeight: "35px",
                            transition: `max-height 1s ease`,
                            overflow: "hidden"
                          }}
                        >
                          {course.description && (
                            <p style={{ paddingRight: "42px" }}>
                              {course.description}
                            </p>
                          )}
                        </div>
                      ) : (
                        <div
                          style={{
                            display: "flex",
                            alignItems: "baseline",
                            justifyContent: "space-between",
                            maxHeight: "1000px",
                            transition: `max-height 1s ease`,
                            overflow: "visible"
                          }}
                        >
                          {course.description && (
                            <p style={{ paddingRight: "42px" }}>
                              {course.description}
                            </p>
                          )}
                        </div>
                      )
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </CardActions>
          <p>{course.topic ? `Topic: ${course.topic}` : null}</p>
        </CardContent>
        <CardActions
          className={classes.buttonDiv}
          style={{ margin: "0 30px 20px 0" }}
        >
          {tracked ? (
            <Link
              to={{
                pathname: `/courses/yours/${course.id}`,
                state: { tracked: tracked }
              }}
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "#242424",
                width: "120px"
              }}
            >
              <span
                style={{
                  fontWeight: "bold",
                  marginTop: "2%",
                  fontFamily: "Open Sans"
                }}
              >
                View Item
              </span>
              <ArrowRightAltRoundedIcon
                style={{
                  fontSize: "2em"
                }}
              />
            </Link>
          ) : (
            <Link
              to={{
                pathname: `/courses/yours/${course.id}`,
                state: { tracked: false }
              }}
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "#242424",
                width: "120px"
              }}
            >
              <span
                style={{
                  fontWeight: "bold",
                  marginTop: "2%",
                  fontFamily: "Open Sans"
                }}
              >
                View Item
              </span>
              <ArrowRightAltRoundedIcon
                style={{
                  fontSize: "2em"
                }}
              />
            </Link>
          )}
        </CardActions>
      </Card>
    </PopoverWrapper>
  );
};

export default YourCourse;
