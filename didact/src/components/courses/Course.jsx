import React, { useEffect, useState } from "react";
import { courseEndPoint } from "../../store/actions/index.js";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

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
    borderRadius: "15px",
    boxShadow: "none",
    backgroundColor: "#386581",
    color: "white",
    position: "relative"
  },

  cardDashboard: {
    maxWidth: 540,
    width: "100%",
    margin: "40px 0 40px 0",
    borderRadius: "15px",
    boxShadow: "none",
    backgroundColor: "#386581",
    color: "white",
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
    color: "white"
  },
  dropArrow: {
    position: "absolute",
    color: "white",
    display: "flex",
    paddingTop: "-10px",
    top: "131px",
    left: "91%"
  },
  dropArrowDashboard: {
    position: "absolute",
    color: "white",
    display: "flex",
    paddingTop: "-10px",
    top: "129px",
    left: "87%"
  }
}));

const Course = ({ course, addingCourses, props }) => {
  const state = useSelector(state => state);
  const classes = useStyles();
  const dispatch = useDispatch();
  const learningPaths = state.learningPathReducer.yourLearningPathsOwned;
  const filteredPaths = [];
  const [expanded, setExpanded] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  useEffect(() => {
    dispatch(courseEndPoint());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getYourLearningPathsOwned());
  }, [dispatch, state.learningPathReducer.learningPath]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAddCourse = (path_id, course_id, order) => {
    dispatch(postCourseToPath(path_id, course_id, Number(order)));
    setAnchorEl(null);
  };

  learningPaths.forEach(path => {
    if (!path.courseIds.includes(course.id)) filteredPaths.push(path);
  });

  return (
    <PopoverWrapper>
      <Card
        className={
          props &&
            (props.match.url.includes("results") || props.match.url === "/")
            ? classes.cardDashboard
            : classes.card
        }
      >
        <CardContent>
          <div
            style={ {
              display: "flex",
              justifyContent: "flex-end",
              paddingTop: "20px"
            } }
          >
            { addingCourses && (
              <button className={ classes.addCourse } onClick={ handleClick }>
                <img src={ playlistAdd } alt="Add Course" />
              </button>
            ) }
          </div>
          <div>
            <Popover
              id={ id }
              open={ open }
              anchorEl={ anchorEl }
              onClose={ handleClose }
              anchorOrigin={ {
                vertical: "bottom",
                horizontal: "right"
              } }
              transformOrigin={ {
                vertical: "center",
                horizontal: "right"
              } }
            >
              {
                <AddCourseToPath>
                  {
                    <div>
                      <div
                        style={ { marginTop: "10px", paddingRight: "5px" } }
                        className="closePopover"
                      >
                        <img
                          src={ closeIcon }
                          onClick={ handleClose }
                          alt="Close"
                        />
                      </div>
                      <div className="learningPaths">
                        <h4 style={ { margin: " -5px auto" } }>
                          Add to Learning Path
                        </h4>
                        { filteredPaths.length > 0 ? (
                          filteredPaths.length > 0 &&
                          filteredPaths.map((learningPath, index) => {
                            return (
                              <div className="learningPathTitle" key={ index }>
                                <h5>{ learningPath.name }</h5>
                                <button
                                  onClick={ () =>
                                    handleAddCourse(
                                      learningPath.id,
                                      course.id,
                                      learningPath.contentLength + 1
                                    )
                                  }
                                >
                                  <img src={ playlistAdd } alt="Add Course" />
                                </button>
                              </div>
                            );
                          })
                        ) : (
                            <p>Can't Add Course To Any Learning Paths</p>
                          ) }
                      </div>
                      <div className="buttons">
                        <DidactButton onClick={ handleClose }>Done</DidactButton>
                        <a href="/learning-paths/add">Create Learning Path</a>
                      </div>
                    </div>
                  }
                </AddCourseToPath>
              }
            </Popover>
          </div>

          <CardActions disableSpacing>
            <div
              style={ {
                marginTop: "-60px",
                backgroundColor: "#386581",
                border: "none",
                boxShadow: "none"
              } }
            >
              <div
                onClick={ handleExpandClick }
                aria-controls="panel1a-content"
                id="panel1a-header"
                style={ {
                  fontSize: "2.8rem",
                  textAlign: "left",
                  paddingLeft: "6px",
                  transition: `0.25s ease`
                } }
              >
                <div
                  className="courseTitle"
                  style={ {
                    display: "flex",
                    flexDirection: "column",
                    transition: `0.25s ease`
                  } }
                >
                  <h3 style={ { fontFamily: "ITC Grouch", color: "white" } }>
                    { course.title.length > 35
                      ? `${course.title.substring(0, 35)}...`
                      : course.title }
                  </h3>
                  <div
                    style={ {
                      textAlign: "left",
                      width: "100%",
                      fontSize: "1.2rem",
                      marginTop: "10px",
                      paddingLeft: "2px",
                      color: "white"
                    } }
                  >
                    <span>{ course.foreign_instructors }</span>
                    { !expanded ? (
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
                      ) }
                    { course.description && course.description !== null ? (
                      !expanded ? (
                        <div
                          style={ {
                            display: "flex",
                            alignItems: "baseline",
                            justifyContent: "space-between",
                            maxHeight: "35px",
                            transition: `max-height 1s ease`,
                            overflow: "hidden"
                          } }
                        >
                          { course.description && (
                            <p style={ { paddingRight: "42px" } }>
                              { course.description }
                            </p>
                          ) }
                        </div>
                      ) : (
                          <div
                            style={ {
                              display: "flex",
                              alignItems: "baseline",
                              justifyContent: "space-between",
                              maxHeight: "1000px",
                              transition: `max-height 1s ease`,
                              overflow: "visible"
                            } }
                          >
                            { course.description && (
                              <p style={ { paddingRight: "42px" } }>
                                { course.description }
                              </p>
                            ) }
                          </div>
                        )
                    ) : null }
                  </div>
                </div>
              </div>
            </div>
          </CardActions>
          <p>{ course.topic ? `Topic: ${course.topic}` : null }</p>
        </CardContent>
        <CardActions
          className={ classes.buttonDiv }
          style={ { margin: "0 30px 20px 0" } }
        >
          <Link to={ `/courses/all/${course.id}` }>
            <DidactButton size="small">Go To Course</DidactButton>
          </Link>
        </CardActions>
      </Card>
    </PopoverWrapper>
  );
};

export default Course;
