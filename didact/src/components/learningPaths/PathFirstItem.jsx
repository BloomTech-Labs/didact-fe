import React from "react";
import { LearningPathWrapper } from "./LearningPathStyles";
import { Link } from "react-router-dom";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ArrowRightAltRoundedIcon from "@material-ui/icons/ArrowRightAltRounded";

const PathFirstItem = ({
  props,
  firstItemCourse,
  handleMarkCompleteItem,
  handleMarkCompleteCourse,
  progressPercentage
}) => {
  return (
    <div className="currentPath">
      <div className="learningPathCard">
        <div className="currentTitle">
          <h1>{firstItemCourse.title || firstItemCourse.name}</h1>
          {firstItemCourse.path_id &&
            (firstItemCourse.automatically_completed ||
            firstItemCourse.manually_completed ? (
              <CheckCircleIcon
                onClick={() => handleMarkCompleteItem(firstItemCourse.id)}
                className="completeButton"
              />
            ) : (
              <CheckCircleIcon
                onClick={() => handleMarkCompleteItem(firstItemCourse.id)}
                className="notCompleteButton"
              />
            ))}

          {!firstItemCourse.path_id &&
            (firstItemCourse.automatically_completed ||
            firstItemCourse.manually_completed ? (
              <CheckCircleIcon
                onClick={() => handleMarkCompleteCourse(firstItemCourse.id)}
                className="completeButton"
              />
            ) : (
              <CheckCircleIcon
                onClick={() => handleMarkCompleteCourse(firstItemCourse.id)}
                className="notCompleteButton"
              />
            ))}
        </div>

        {!firstItemCourse.path_id ? (
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

              <span>{`${
                firstItemCourse && firstItemCourse.total > 1
                  ? progressPercentage
                  : 0
              } %`}</span>
            </div>
          </div>
        ) : null}
        <p>{firstItemCourse.description}</p>
        <div className="goToCourse">
          <h4>
            {firstItemCourse.link !== null
              ? firstItemCourse.link.includes("Udemy")
                ? "udemy"
                : firstItemCourse.link.includes("coursera")
                ? "Coursera"
                : firstItemCourse.link.includes("youtube")
                ? "Youtube"
                : null
              : null}
          </h4>
          {firstItemCourse.type ? (
            <a href={firstItemCourse.link}>
              Go To
              {firstItemCourse.type.charAt(0).toUpperCase() +
                firstItemCourse.type.slice(1)}
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
              to={{
                pathname: `/courses/yours/${firstItemCourse.id}`
              }}
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "#242424",
                width: "120px",
                marginLeft: "72%"
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
  );
};

export default PathFirstItem;
