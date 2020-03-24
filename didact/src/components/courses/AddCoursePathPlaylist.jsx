import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { postCourseToPath } from "../../store/actions/index";

import { DidactButton } from "../dashboard/ButtonStyles";

import playlistAdd from "../../images/playlist_add_black_24x24.png";
import closeIcon from "../../images/close_black_24x24.png";

import { AddCourseToPath, PopoverWrapper } from "./CourseStyles";
import Popover from "@material-ui/core/Popover";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  addCourse: {
    background: "none",
    border: "#242424",
    display: "flex"
  }
}));

const AddCoursePathPlaylist = ({ props, course }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const learningPaths = useSelector(
    state => state.learningPathReducer.yourLearningPathsOwned
  );
  const filteredPaths = [];
  learningPaths.forEach(path => {
    if (!path.courseIds.includes(course.id)) filteredPaths.push(path);
  });

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

  return (
    <PopoverWrapper>
      <div>
        <button className={classes.addCourse} onClick={handleClick}>
          <img src={playlistAdd} alt="Add Course" />
        </button>
      </div>
      <div>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right"
          }}
          transformOrigin={{
            vertical: "center",
            horizontal: "right"
          }}
        >
          {
            <AddCourseToPath>
              {
                <div>
                  <div
                    style={{ marginTop: "10px", paddingRight: "5px" }}
                    className="closePopover"
                  >
                    <img src={closeIcon} onClick={handleClose} alt="Close" />
                  </div>
                  <div className="learningPaths">
                    <h4 style={{ margin: " -5px auto" }}>
                      Add to Learning Path
                    </h4>
                    {filteredPaths.length > 0 ? (
                      filteredPaths.length > 0 &&
                      filteredPaths.map((learningPath, index) => {
                        return (
                          <div className="learningPathTitle" key={index}>
                            <h5>{learningPath.title}</h5>
                            <button
                              onClick={() =>
                                handleAddCourse(
                                  learningPath.id,
                                  course.id,
                                  learningPath.contentLength + 1
                                )
                              }
                            >
                              <img src={playlistAdd} alt="Add Course" />
                            </button>
                          </div>
                        );
                      })
                    ) : (
                      <p>Can't Add Course To Any Learning Paths</p>
                    )}
                  </div>
                  <div className="buttons">
                    <DidactButton onClick={handleClose}>Done</DidactButton>
                    <a href="/learning-paths/add">Create Learning Path</a>
                  </div>
                </div>
              }
            </AddCourseToPath>
          }
        </Popover>
      </div>
    </PopoverWrapper>
  );
};

export default AddCoursePathPlaylist;
