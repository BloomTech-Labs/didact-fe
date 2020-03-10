import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { DetailedCourseWrapper } from "./DetailedCourseStyles";
import { DidactButton, TagStyles } from "../dashboard/ButtonStyles";

import { getDetailedCourse } from "../../store/actions/index.js";
import { Mixpanel } from "../../utils/mixpanel";
//Material UI Imports
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
//Material UI Icons
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(theme => ({
  span: {
    cursor: "pointer",
    "&:hover": {
      color: "black"
    }
  }
}));

const DetailedCourse = props => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const phoneSize = props.props.phoneSize;
  const detailedCourse = state.coursesReducer.detailedCourse;
  const id = state.onboardingReducer.user.id;
  const owner = state.onboardingReducer.user.owner;
  const admin = state.onboardingReducer.user.admin;
  const moderator = state.onboardingReducer.user.moderator;
  const course = detailedCourse.course;
  const sections = detailedCourse.sections;
  const [expanded, setExpanded] = useState(false);
  const [lessonExpanded, setLessonExpanded] = useState(false);

  useEffect(() => {
    dispatch(getDetailedCourse(props.id));
    if (props.location.state.tracked) {
      console.log("yarg");
      Mixpanel.track("Course Result Clicked");
    } else {
      console.log("arg");
      return;
    }
  }, [dispatch, props.id]);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    setLessonExpanded(isExpanded ? panel : false);
  };

  const handleLessonExpansion = panel => (event, isExpanded) => {
    setLessonExpanded(isExpanded ? panel : false);
  };

  const handleBack = () => {
    props.props.history.push("/courses");
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
                backgroundColor: "#ffffff",
                display: "flex",
                alignItems: "center",
                padding: "0px",
                margin: "0px",
                color: "black",
                justifyContent: "space-between"
              }}
            >
              <h1>{course.title}</h1>
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
            </div>
            {/* //replace code below with restrictions when working */}

            {course.creator_id === id ||
            owner === true ||
            admin === true ||
            moderator === true ? (
              !phoneSize ? (
                <DidactButton style={{ marginLeft: "85%" }}>
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to={`/courses/all/${course.id}/edit`}
                  >
                    Edit Course
                  </Link>
                </DidactButton>
              ) : (
                <DidactButton style={{ marginLeft: "70%" }}>
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to={`/courses/all/${course.id}/edit`}
                  >
                    Edit Course
                  </Link>
                </DidactButton>
              )
            ) : null}
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
                            <h4 style={{ textAlign: "center" }}>Lessons:</h4>
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
                              <h4 style={{ textAlign: "center" }}>Lessons:</h4>
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
            borderTop: "1px solid black"
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

export default DetailedCourse;
