import React from "react";
import { CourseCard } from "./ResultCardStyles";
import { Link } from "react-router-dom";
import coursefiller from "../../images/coursefiller.png";
import ArrowRightAltRoundedIcon from "@material-ui/icons/ArrowRightAltRounded";
import AddCoursePathPlaylist from "../courses/AddCoursePathPlaylist";
import { PopoverWrapper } from "../courses/CourseStyles";

const CourseResultCard = props => {
  const course = props.course;

  return (
    <CourseCard>
      <div className="img-div">
        <img src={coursefiller} alt="" />
      </div>
      <div className="right-div">
        <PopoverWrapper>
          <AddCoursePathPlaylist course={course} />
        </PopoverWrapper>
        <h1>
          {course.title.length > 23
            ? `${course.title.slice(0, 23)}..`
            : course.title}
        </h1>
        <Link
          to={{
            pathname: `/courses/all/${course.id}`,
            state: { tracked: true }
          }}
        >
          View Course
          <ArrowRightAltRoundedIcon
            style={{
              fontSize: "2em"
            }}
          />
        </Link>
      </div>
    </CourseCard>
  );
};

export default CourseResultCard;
