import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";

import { DetailedCourseWrapper } from "../DetailedCourseStyles";
import { DidactButton, TagStyles } from "../../dashboard/ButtonStyles";
import { Mixpanel } from "../../../utils/mixpanel";
import {
  getYourDetailedCourse,
  toggleCompleteCourse,
  toggleCompleteSection,
  toggleCompleteLesson
} from "../../../store/actions/index.js";

//Material UI Imports
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
//Material UI Icons
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

const useStyles = makeStyles(theme => ({
  span: {
    cursor: "pointer",
    "&:hover": {
      color: "black"
    }
  }
}));

const YourDetailedCourse = props => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const phoneSize = props.props.phoneSize;
  const id = state.onboardingReducer.user.id;
  const admin = state.onboardingReducer.user.admin;
  const owner = state.onboardingReducer.user.owner;
  const moderator = state.onboardingReducer.user.moderator;
  const user = state.onboardingReducer.user;
  const detailedCourse = state.coursesReducer.detailedCourse;
  const course = detailedCourse.course;
  const sections = detailedCourse.sections;
  const isLoadingIcon = state.coursesReducer.isLoadingIcon;
  const [expanded, setExpanded] = useState(false);
  const [lessonExpanded, setLessonExpanded] = useState(false);

  useEffect(
    _ => {
      if (props.tracked) {
        console.log("if trigger");
        Mixpanel.track("Course Result Selected");
      } else {
        console.log("else");
        return;
      }
      dispatch(getYourDetailedCourse(props.id));
    },
    [dispatch, props.id]
  );

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    setLessonExpanded(isExpanded ? panel : false);
  };

  const handleLessonExpansion = panel => (event, isExpanded) => {
    setLessonExpanded(isExpanded ? panel : false);
  };

  const handleMarkCompleteCourse = () => {
    dispatch(toggleCompleteCourse(course.id));
  };

  const handleMarkCompleteSection = sectionId => {
    dispatch(toggleCompleteSection(course.id, sectionId));
  };

  const handleMarkCompleteLesson = (sectionId, detailId) => {
    dispatch(toggleCompleteLesson(course.id, sectionId, detailId));
  };
  const handleBack = () => {
    props.props.history.push("/courses/yours");
  };
  if (!state.coursesReducer.isLoading && course && sections) {
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "-10px 10px 10px 10px",
            borderBottom: "1px solid black"
          }}
        >
          <p
            style={{
              fontWeight: "bold",
              marginLeft: "10px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <span className={classes.span} onClick={handleBack}>
              Courses
            </span>
            <ChevronRightIcon style={{ fontSize: "1.6rem" }} />
            <span>{course.title.substring(0, 25)}...</span>
          </p>
        </div>
        <DetailedCourseWrapper>
          <div className="courseWrapper">
            <div
              style={{
                backgroundColor: "white",
                display: "flex",
                alignItems: "center",
                padding: "0px",
                margin: "0px",
                justifyContent: "space-between"
              }}
            >
              <h1>{course.title}</h1>
              {isLoadingIcon ? (
                <Loader
                  type="Oval"
                  style={{
                    background: "white",
                    margin: "0",
                    padding: "0 5px 0 0",
                    width: "20px"
                  }}
                  color="black"
                  height={20}
                  width={20}
                />
              ) : course.automatically_completed ||
                course.manually_completed ? (
                <CheckCircleIcon
                  onClick={handleMarkCompleteCourse}
                  className="completeButton"
                />
              ) : (
                <CheckCircleIcon
                  onClick={handleMarkCompleteCourse}
                  className="notCompleteButton"
                />
              )}
            </div>
            <p>{course.description}</p>
            <p>{course.topic ? `Topic: ${course.topic}` : null}</p>
            <div className="courseFooter">
              <div className="tags">
                {course.tags &&
                  course.tags.map((tag, index) => {
                    return (
                      <TagStyles key={index} className="tag">
                        {tag}
                      </TagStyles>
                    );
                  })}
              </div>
              {course.creator_id === id ||
              owner === true ||
              admin === true ||
              moderator === true ? (
                !phoneSize ? (
                  <DidactButton style={{ marginLeft: "85%" }}>
                    <Link
                      style={{ textDecoration: "none", color: "inherit" }}
                      to={`/courses/yours/${course.id}/edit`}
                    >
                      Edit Course
                    </Link>
                  </DidactButton>
                ) : (
                  <DidactButton style={{ marginLeft: "70%" }}>
                    <Link
                      style={{ textDecoration: "none", color: "inherit" }}
                      to={`/courses/yours/${course.id}/edit`}
                    >
                      Edit Course
                    </Link>
                  </DidactButton>
                )
              ) : null}
            </div>
          </div>
          {sections.map((el, index) => {
            const videoLength = el.details.filter(
              detail => detail.type === "video"
            ).length;
            const readingLength = el.details.filter(
              detail => detail.type === "reading"
            ).length;
            const quizLength = el.details.filter(
              detail => detail.type === "quiz"
            ).length;
            const assignmentLength = el.details.filter(
              detail => detail.type === "assignment"
            ).length;
            return (
              <ExpansionPanel
                key={index}
                className="expansionPanel"
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
              >
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon className="expandIcon" />}
                  aria-controls={`panel${index}bh-content`}
                  id={`panel${index}bh-header`}
                  className="expansionPanelSummary"
                >
                  <div>
                    <h3>{`Section ${index + 1}: ${el.section.name}`}</h3>
                    {isLoadingIcon ? (
                      <Loader
                        type="Oval"
                        style={{
                          background: "#ffffff",
                          margin: "0",
                          padding: "0 5px 0 0",
                          width: "20px"
                        }}
                        color="black"
                        height={20}
                        width={20}
                      />
                    ) : el.section.automatically_completed ||
                      el.section.manually_completed ? (
                      <CheckCircleIcon
                        onClick={() => handleMarkCompleteSection(el.section.id)}
                        className="completeButton"
                      />
                    ) : (
                      <CheckCircleIcon
                        onClick={() => handleMarkCompleteSection(el.section.id)}
                        className="notCompleteButton"
                      />
                    )}
                  </div>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <div style={{ width: "100%" }}>
                    <p>{el.section.description}</p>
                    <ExpansionPanel
                      className="lessonExpansionPanel"
                      expanded={lessonExpanded === `lessonPanel${index}`}
                      onChange={handleLessonExpansion(`lessonPanel${index}`)}
                    >
                      <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon className="expandIcon" />}
                        aria-controls={`lessonPanel${index}bh-content`}
                        id={`lessonPanel${index}bh-header`}
                        className="expansionPanelSummary"
                      >
                        {!phoneSize ? (
                          <div className="lessonExpansionSummary">
                            <h4 style={{ textAlign: "center" }}>Lessons</h4>
                            {videoLength > 0 && (
                              <h4>{`${videoLength} Videos`}</h4>
                            )}
                            {readingLength > 0 && (
                              <h4>{`${readingLength} Readings`}</h4>
                            )}
                            {quizLength > 0 && (
                              <h4>{`${quizLength} Quizzes`}</h4>
                            )}
                            {assignmentLength > 0 && (
                              <h4>{`${assignmentLength} Assignments`}</h4>
                            )}
                          </div>
                        ) : (
                          <div
                            className="lessonExpansionSummary"
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <div>
                              <h4 style={{ textAlign: "center" }}>Lessons</h4>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                flexFlow: "row wrap",
                                justifyContent: "space-evenly"
                              }}
                            >
                              {videoLength > 0 && (
                                <h4
                                  style={{ padding: "0 5px" }}
                                >{`${videoLength} Videos`}</h4>
                              )}
                              {readingLength > 0 && (
                                <h4
                                  style={{ padding: "0 5px" }}
                                >{`${readingLength} Readings`}</h4>
                              )}
                              {quizLength > 0 && (
                                <h4
                                  style={{ padding: "0 5px" }}
                                >{`${quizLength} Quizzes`}</h4>
                              )}
                              {assignmentLength > 0 && (
                                <h4
                                  style={{ padding: "0 5px" }}
                                >{`${assignmentLength} Assignments`}</h4>
                              )}
                            </div>
                          </div>
                        )}
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails>
                        <div>
                          {el.details
                            .sort((a, b) => a.order - b.order)
                            .map((detail, i) => {
                              return (
                                <div
                                  key={i}
                                  style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between"
                                  }}
                                >
                                  <div className="lessonTitle">
                                    <a
                                      className="lessonTitleName"
                                      href={detail.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      {detail.name}
                                    </a>
                                    <p className="lessonTitleType">
                                      {detail.type}
                                    </p>
                                  </div>
                                  {isLoadingIcon ? (
                                    <Loader
                                      type="Oval"
                                      style={{
                                        background: "white",
                                        margin: "0",
                                        padding: "0 5px 0 0",
                                        width: "20px"
                                      }}
                                      color="black"
                                      height={20}
                                      width={20}
                                    />
                                  ) : detail.automatically_completed ||
                                    detail.manually_completed ? (
                                    <CheckCircleIcon
                                      onClick={() =>
                                        handleMarkCompleteLesson(
                                          el.section.id,
                                          detail.id
                                        )
                                      }
                                      className="completeButton"
                                    />
                                  ) : (
                                    <CheckCircleIcon
                                      onClick={() =>
                                        handleMarkCompleteLesson(
                                          el.section.id,
                                          detail.id
                                        )
                                      }
                                      className="notCompleteButton"
                                    />
                                  )}
                                </div>
                              );
                            })}
                        </div>
                      </ExpansionPanelDetails>
                    </ExpansionPanel>
                  </div>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            );
          })}
        </DetailedCourseWrapper>
      </>
    );
  } else {
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "-10px 10px 10px 10px",
            borderBottom: "1px solid black"
          }}
        >
          <p
            style={{
              fontWeight: "bold",
              marginLeft: "10px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <span className={classes.span} onClick={handleBack}>
              Courses
            </span>
            <ChevronRightIcon style={{ fontSize: "1.6rem" }} />
            <span>Loading...</span>
          </p>
        </div>
        <h1>Loading...</h1>
      </>
    );
  }
};

export default YourDetailedCourse;
