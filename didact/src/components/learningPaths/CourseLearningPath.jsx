import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import {
  removeCourseFromPath,
  deletePathItem
} from "../../store/actions/index";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import DeleteModal from "../courses/DeleteModal";
import { TrashCanEdit } from "../dashboard/ButtonStyles";
import { DraggableDiv } from "./DraggableStyles.js";
import EditPathItems from "./pathItems/EditPathItems";

import EditIcon from "@material-ui/icons/Edit";

import { Draggable } from "react-beautiful-dnd";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start"
  },
  card: {
    width: "100%",
    maxWidth: 540,
    borderRadius: "7px",
    margin: "10px 0",
    boxShadow: "none",
    position: "relative",
    color: course => (course.type ? "black" : "white"),
    backgroundColor: course => (course.type ? "#adc8d9" : "#386581")
  },
  title: {
    fontSize: 14,
    fontWeight: "bold"
  },
  pos: {
    marginBottom: 12
  },
  expand: {
    transform: "rotate(0deg)",
    // marginLeft: 'auto',
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
    // margin: '10px',
  },

  descriptionDiv: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    fontSize: 12
  },
  descriptionTitle: {
    marginBottom: "0px"
  },
  dropArrow: {
    position: "absolute",
    color: "white",
    display: "flex",
    paddingTop: "-10px",
    top: "30px",
    left: "91%"
  },
  dropArrowItem: {
    position: "absolute",
    color: "white",
    display: "flex",
    paddingTop: "-10px",
    top: "14px",
    left: "91%"
  },
  button: {
    backgroundColor: "rgba(36, 36, 36, 1)",
    color: "white",
    borderRadius: 12,
    height: "35px",
    width: "123px",
    border: "none",
    cursor: "pointer"
  }
}));

const CourseLearningPath = ({ course, index, props }) => {
  const dispatch = useDispatch();
  const classes = useStyles(course);
  const [expanded, setExpanded] = useState(false);
  const [toggleEdit, setToggleEdit] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [modalText, setModalText] = useState("");

  useEffect(() => {
    if (course.type) {
      setModalText(" item from this learning path");
    } else {
      setModalText(" course from this learning path");
    }
  }, [course.type]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleToggleEdit = () => {
    setToggleEdit(!toggleEdit);
  };

  const handleDelete = course => {
    if (!course.type) {
      dispatch(removeCourseFromPath(props.match.params.id, course.id));
      setOpenModal(false);
    } else {
      dispatch(deletePathItem(props.match.params.id, course.id));
      setOpenModal(false);
    }
  };

  const handleModalOpen = () => {
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  return (
    <Draggable draggableId={`${index}`} index={index} className={classes.root}>
      {(provided, snapshot) =>
        !toggleEdit ? (
          <DraggableDiv
            className={classes.card}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isdragging={snapshot.isDragging ? "true" : "false"}
          >
            <CardContent>
              <div
                style={{
                  border: "none",
                  boxShadow: "none",
                  paddingTop: "0",
                  paddingLeft: "10px",
                  display: "flex"
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
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      transition: `0.25s ease`
                    }}
                  >

                    <h3 style={{ fontFamily: "Open Sans", color: "#242424" }}>
                      {course.title
                        ? course.title.length > 35
                          ? `${course.title.substring(0, 35)}...`
                          : course.title
                        : course.name.length > 35
                        ? `${course.name.substring(0, 35)}...`
                        : course.name}

                    </h3>
                    <div
                      style={{
                        textAlign: "left",
                        width: "90%",
                        fontSize: "1.2rem",
                        marginTop: "10px",
                        paddingLeft: "2px",
                        color: "#242424",
                        position: "relative"
                      }}
                    >
                      {course.foreign_instructors &&
                      course.foreign_instructors.length >= 43 ? (
                        <span>
                          {course.foreign_instructors.substring(0, 43)}...
                        </span>
                      ) : course.foreign_instructors &&
                        course.foreign_instructors.length <= 43 ? (
                        <span>{course.foreign_instructors}</span>
                      ) : null}
                      {course.description && course.description.length > 55 ? (
                        <>
                          {!expanded ? (
                            <>
                              <ExpandMoreIcon
                                className={
                                  course.foreign_instructors
                                    ? classes.dropArrow
                                    : classes.dropArrowItem
                                }
                              />
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
                            </>
                          ) : (
                            <>
                              <ExpandLessIcon
                                className={
                                  course.foreign_instructors
                                    ? classes.dropArrow
                                    : classes.dropArrowItem
                                }
                              />
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
                            </>
                          )}
                        </>
                      ) : course.description &&
                        course.description.length <= 55 ? (
                        course.description && (
                          <p style={{ paddingRight: "42px" }}>
                            {course.description}
                          </p>
                        )
                      ) : null}
                      {course.topic ? (
                        <p style={{ color: "white" }}>Topic: {course.topic}</p>
                      ) : null}
                      {course.type ? (
                        <p style={{ color: "white" }}>{course.type}</p>
                      ) : null}
                    </div>
                  </div>
                </div>
                {!props.phoneSize ? (
                  <TrashCanEdit
                    style={{
                      fontSize: "2.6rem",
                      position: "absolute",
                      marginLeft: "88%"
                    }}
                    onClick={handleModalOpen}
                  ></TrashCanEdit>
                ) : (
                  <TrashCanEdit
                    style={{
                      fontSize: "2.6rem",
                      position: "absolute",
                      marginLeft: "82%"
                    }}
                    onClick={handleModalOpen}
                  ></TrashCanEdit>
                )}
                {openModal ? (
                  <DeleteModal
                    handleDelete={() => handleDelete(course)}
                    text={modalText}
                    open={openModal}
                    handleModalClose={handleModalClose}
                  />
                ) : null}
              </div>
              {/* {course.topic ? (`Topic: ${course.topic}`) : (null)} */}
              {/* {course.type ? (course.type) : (null)} */}
            </CardContent>
            <CardActions>
              {/* <Button style={{marginLeft: '70.5%'}} type='submit' size="small" variant="contained" className={classes.button} >Edit Course</Button> */}
              {course.path_id ? (
                <button
                  className={classes.button}
                  onClick={handleToggleEdit}
                  style={{ margin: "0 20px 15px 70%", width: "100%" }}
                  type="submit"
                >
                  {!props.phoneSize ? (
                    "Edit Item"
                  ) : (
                    <EditIcon style={{ fontSize: "1.8rem" }} />
                  )}
                </button>
              ) : null}
            </CardActions>
          </DraggableDiv>
        ) : course.path_id ? (
          <EditPathItems
            course={course}
            props={props}
            handleToggleEdit={handleToggleEdit}
          />
        ) : null
      }
    </Draggable>
  );
};

export default CourseLearningPath;
