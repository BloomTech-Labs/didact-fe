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
          {course.title.length > 27
            ? `${course.title.slice(0, 27)}..`
            : course.title}
        </h1>
        <Link
          to={{
            pathname: `/courses/all/${course.id}`,
            //passing state through the location object allows us to
            //reference it later in the route, in this case to
            //use a mixpanel.track() to see if user accessed route through search results.
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
