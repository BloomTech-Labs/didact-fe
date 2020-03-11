import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  findForUserId,
  getLearningPath,
  toggleCompleteCourse,
  toggleLearningPathItem
} from "../../store/actions/index.js";
import { Link } from "react-router-dom";
import PathFirstItem from "./PathFirstItem";

import { LearningPathWrapper } from "./LearningPathStyles";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import AddToLearningPath from "./addToLearningPath/AddToLearningPath";

//Material UI Imports
import { makeStyles } from "@material-ui/core/styles";
//Material UI Icons
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ArrowRightAltRoundedIcon from "@material-ui/icons/ArrowRightAltRounded";

const useStyles = makeStyles(theme => ({
  span: {
    cursor: "pointer",
    "&:hover": {
      color: "white"
    }
  }
}));

const LearningPath = ({ id, props }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const owner = state.onboardingReducer.user.owner;
  const admin = state.onboardingReducer.user.admin;
  const moderator = state.onboardingReducer.user.moderator;
  const learningPath = state.learningPathReducer.learningPath;
  const learningPathCompletion =
    state.learningPathReducer.learningPathCompletion;
  const [completionItemsCourses, setCompletionItemsCourses] = useState([]);
  const isLoadingCourseToggle = state.coursesReducer.isLoading;
  const isLoadingLearningPathToggle = state.learningPathReducer.isLoading;
  const user = state.onboardingReducer.user;

  useEffect(
    _ => {
      dispatch(getLearningPath(id));
      dispatch(findForUserId(id));
    },
    [dispatch, id]
  );
  useEffect(() => {
    if (learningPathCompletion.pathItems) {
      setCompletionItemsCourses(
        [
          ...learningPathCompletion.pathItems,
          ...learningPathCompletion.courses
        ].sort((a, b) => a.path_order - b.path_order)
      );
    }
  }, [learningPathCompletion.pathItems, learningPathCompletion.courses]);

  const notCompletedItemsCourses = [];
  const completedItemsCourses = [];

  completionItemsCourses.forEach((el, index) => {
    if (el.automatically_completed || el.manually_completed) {
      completedItemsCourses.push(el);
    } else {
      notCompletedItemsCourses.push(el);
    }
  });

  const firstItemCourse = notCompletedItemsCourses[0];
  const upcomingItemsCourses = [];

  notCompletedItemsCourses.forEach((el, index) => {
    if (!(index === 0)) {
      upcomingItemsCourses.push(el);
    }
    console.log("element to the current", el);
  });

  const handleMarkCompleteCourse = courseId => {
    dispatch(toggleCompleteCourse(courseId));
    setTimeout(function() {
      if (
        !isLoadingCourseToggle ||
        state.learningPathReducer.learningPathCompletion ===
          learningPathCompletion
      ) {
        dispatch(findForUserId(id));
      }
    }, 100);
  };

  const handleMarkCompleteItem = itemId => {
    dispatch(toggleLearningPathItem(id, itemId));
    setTimeout(function() {
      if (
        !isLoadingLearningPathToggle ||
        state.learningPathReducer.learningPathCompletion ===
          learningPathCompletion
      ) {
        dispatch(findForUserId(id));
      }
    }, 100);
  };

  const progress =
    firstItemCourse &&
    ((firstItemCourse.completed / firstItemCourse.total) * 100).toString();
  const progressPercentage = progress && Number(progress.substring(0, 4));

  const handleBack = () => {
    props.history.push("/learning-paths");
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "-10px 10px 10px 10px",
          borderTop: "1px solid black"
        }}
      >
        <p
          style={{
            fontWeight: "bold",
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <span className={classes.span} onClick={handleBack}>
            Learning Paths
          </span>
          <ChevronRightIcon style={{ fontSize: "1.6rem" }} />
          <span>
            {learningPath.title
              ? learningPath.title.substring(0, 20)
              : "Loading"}
            ...
          </span>
        </p>
      </div>
      {!firstItemCourse &&
      (learningPath.creatorId === user.id ||
        owner === true ||
        admin === true ||
        moderator === true) ? (
        <>
          <div className="currentTitle">
            {
              <div className="currentTitle">
                <div
                  style={{
                    width: "100%",
                    textAlign: "right",
                    marginTop: "10px"
                  }}
                >
                  <Link
                    style={{
                      color: "black",
                      textDecoration: "none",
                      fontWeight: "bold",
                      paddingRight: "10px",
                      cursor: "none"
                    }}
                    to={`/learning-paths/${id}/edit`}
                  >
                    Edit
                  </Link>
                </div>
              </div>
            }
          </div>
          <AddToLearningPath
            props={props}
            itemsCourses={completionItemsCourses}
          />
        </>
      ) : !firstItemCourse && learningPath.creatorId !== user.id ? (
        <>
          <h3>Sorry, the owner hasn't added any Courses or Items</h3>
          <h4>Check back Soon!</h4>
        </>
      ) : (
        <LearningPathWrapper>
          {firstItemCourse && (
            <div
              className={
                "learningPathCourseWrappers current" +
                (firstItemCourse.path_id
                  ? " item"
                  : "" +
                    (upcomingItemsCourses.length % 2 !== 0 ||
                    upcomingItemsCourses.length === 1
                      ? " long"
                      : ""))
              }
            >
              <div className="currentTitle">
                <h3>Current</h3>
                {(learningPathCompletion.creatorId ===
                  state.onboardingReducer.user.id ||
                  owner === true ||
                  admin === true ||
                  moderator === true) && (
                  <div className="editLearningButton">
                    <Link to={`/learning-paths/${id}/edit`}>Edit</Link>
                  </div>
                )}
              </div>
              <PathFirstItem
                firstItemCourse={firstItemCourse}
                handleMarkCompleteItem={handleMarkCompleteItem}
                handleMarkCompleteCourse={handleMarkCompleteCourse}
                progressPercentage={progressPercentage}
              />
            </div>
          )}

          <div className="learningPathCards">
            {upcomingItemsCourses.length > 0 && <h3>NEXT</h3>}
            <div className="upcomingCards">
              {upcomingItemsCourses.map((itemCourse, index) => {
                return (
                  <div
                    key={index}
                    className={
                      upcomingItemsCourses.length % 2 !== 0 ||
                      upcomingItemsCourses.length === 1
                        ? "long"
                        : ""
                    }
                  >
                    <div
                      className={
                        "learningPathCourseWrappers upcoming" +
                        (itemCourse.path_id ? " item" : "")
                      }
                      key={index}
                    >
                      <div className="learningPathCard">
                        <div>
                          <h2>{itemCourse.title || itemCourse.name}</h2>
                          {!itemCourse.path_id ? (
                            <div>
                              <span>Progress</span>
                              <span>{`${
                                itemCourse && itemCourse.total > 1
                                  ? (
                                      (itemCourse.completed /
                                        itemCourse.total) *
                                      100
                                    )
                                      .toString()
                                      .substring(0, 4)
                                  : 0
                              } %`}</span>
                            </div>
                          ) : null}
                          <p>{itemCourse.description}</p>
                        </div>
                        <div className="goToCourse">
                          <h4>
                            {itemCourse.link !== null
                              ? itemCourse.link.includes("Udemy")
                                ? "udemy"
                                : itemCourse.link.includes("coursera")
                                ? "Coursera"
                                : itemCourse.link.includes("youtube")
                                ? "Youtube"
                                : null
                              : null}
                          </h4>
                          {itemCourse.type ? (
                            <a
                              style={{ cursor: "pointer" }}
                              href={itemCourse.link}
                            >
                              Go To
                              {itemCourse.type.charAt(0).toUpperCase() +
                                itemCourse.type.slice(1)}
                              <div style={{ margin: "0 auto" }}>
                                <ArrowRightAltRoundedIcon
                                  style={{
                                    fontSize: "2em",
                                    marginLeft: "90%"
                                  }}
                                />
                              </div>
                            </a>
                          ) : (
                            <Link
                              className="yours-link-two"
                              to={{
                                pathname: `/courses/yours/${itemCourse.id}`
                                // state: { tracked: tracked }
                              }}
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                color: "#242424",
                                width: "120px",
                                margin: "9% 0% 0% 0%"
                              }}
                            >
                              <span
                                style={{
                                  fontWeight: "bold",
                                  marginTop: "2%",
                                  fontFamily: "Open Sans"
                                }}
                              >
                                View Course
                              </span>
                              <ArrowRightAltRoundedIcon
                                style={{
                                  fontSize: "2em"
                                }}
                              />
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {completedItemsCourses.length > 0 && <h3>COMPLETED</h3>}
            <div className="completedCards">
              {completedItemsCourses.map((itemCourse, index) => {
                return (
                  <div
                    key={index}
                    className={
                      completedItemsCourses.length % 3 === 0 ||
                      completedItemsCourses.length === 1
                        ? " long"
                        : ""
                    }
                  >
                    <div
                      className={
                        "learningPathCourseWrappers" +
                        (itemCourse.path_id ? " item" : "")
                      }
                      key={index}
                    >
                      <div className="learningPathCard completed">
                        <div>
                          <h2>{itemCourse.title}</h2>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              width: "80%"
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                textAlign: "left",
                                margin: "10px 0 -10px 0"
                              }}
                            >
                              <span>Progress</span>
                              <span>{`100%`}</span>
                            </div>
                          </div>
                          <p>{itemCourse.description}</p>
                        </div>
                        <div className="goToCourse">
                          <div>
                            {itemCourse.path_id &&
                              (itemCourse.automatically_completed ||
                              itemCourse.manually_completed ? (
                                <CheckCircleIcon
                                  onClick={() =>
                                    handleMarkCompleteItem(itemCourse.id)
                                  }
                                  className="completeButton"
                                />
                              ) : (
                                <CheckCircleIcon
                                  onClick={() =>
                                    handleMarkCompleteItem(itemCourse.id)
                                  }
                                  className="notCompleteButton"
                                />
                              ))}
                            {!itemCourse.path_id &&
                              (itemCourse.automatically_completed ||
                              itemCourse.manually_completed ? (
                                <CheckCircleIcon
                                  onClick={() =>
                                    handleMarkCompleteCourse(itemCourse.id)
                                  }
                                  className="completeButton"
                                />
                              ) : (
                                <CheckCircleIcon
                                  onClick={() =>
                                    handleMarkCompleteCourse(itemCourse.id)
                                  }
                                  className="notCompleteButton"
                                />
                              ))}
                            <h4>
                              {itemCourse.link !== null
                                ? itemCourse.link.includes("Udemy")
                                  ? "udemy"
                                  : itemCourse.link.includes("coursera")
                                  ? "Coursera"
                                  : itemCourse.link.includes("youtube")
                                  ? "Youtube"
                                  : null
                                : null}
                            </h4>
                          </div>
                          {itemCourse.path_id ? (
                            <a href={itemCourse.link}>
                              Go To{" "}
                              {itemCourse.type.charAt(0).toUpperCase() +
                                itemCourse.type.slice(1)}
                            </a>
                          ) : (
                            <a href={`/courses/yours/${itemCourse.id}`}>
                              Go To Course
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </LearningPathWrapper>
      )}
    </>
  );
};

export default LearningPath;
