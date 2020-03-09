import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getLearningPath,
  updateLearningPath,
  deleteLearningPath,
  updateLearningPathContentOrder
} from "../../store/actions";

// import components
import AddToLearningPath from "./addToLearningPath/AddToLearningPath";
import DeleteModal from "../courses/DeleteModal";
import CourseLearningPath from "./CourseLearningPath";
import { changePathOrder } from "../../utils/changePathOrder";

// imports for Styled Components
import {
  DidactField,
  DidactInput,
  DidactLabel,
  DidactTextArea
} from "../dashboard/FormStyles";
import {
  ButtonDiv,
  DidactButton,
  TrashCanEdit
} from "../dashboard/ButtonStyles";
import { DroppableDiv, PathInstructions } from "./DraggableStyles.js";

//imports from material-ui
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
//Material UI Icons
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import EditIcon from "@material-ui/icons/Edit";

//imports for react-beautiful-dnd
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 540,
    width: "100%",
    margin: "40px 0 40px 0",
    borderRadius: "15px",
    boxShadow: "none",
    position: "relative"
  },
  title: {
    fontSize: 14,
    fontWeight: "bold"
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  descriptionDiv: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    fontSize: "1.4rem",
    padding: "0px"
  },
  span: {
    cursor: "pointer",
    "&:hover": {
      color: "white"
    }
  },
  dropArrow: {
    position: "absolute",
    color: "white",
    display: "flex",
    paddingTop: "-10px",
    top: "131px",
    left: "91%"
  },
  button: {
    backgroundColor: "#EBE8E1",
    color: "black",
    borderRadius: 12,
    height: "35px",
    width: "123px",
    border: "none",
    cursor: "pointer"
  }
}));

const EditLearningPaths = ({ id, props }) => {
  const state = useSelector(state => state.learningPathReducer);
  const learningPath = state.learningPath;
  const dispatch = useDispatch();
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [learningPathEdit, setLearningPathEdit] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [itemsCourses, setItemsCourses] = useState([]);

  const [changes, setChanges] = useState({
    title: "",
    topic: "",
    description: ""
  });

  useEffect(() => {
    dispatch(getLearningPath(id));
  }, [id, dispatch]);

  useEffect(() => {
    setChanges({
      title: learningPath.title,
      topic: learningPath.topic,
      description: learningPath.description
    });
  }, [learningPath]);

  const toggleEdit = () => {
    setLearningPathEdit(!learningPathEdit);
  };

  const handlePathSubmit = event => {
    event.preventDefault();
    dispatch(updateLearningPath(learningPath.id, changes));
    toggleEdit();
  };

  const handleChange = name => event => {
    setChanges({ ...changes, [name]: event.target.value });
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleCancel = event => {
    event.preventDefault();
    toggleEdit();
  };

  const backToLearningPath = () => {
    props.history.push(`/learning-paths/${id}`);
  };

  const handleBack = () => {
    props.history.push("/courses");
  };

  const handleDelete = () => {
    dispatch(deleteLearningPath(id, props.history));
  };

  const handleModalOpen = () => {
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  // Combines items and courses into a single array
  useEffect(() => {
    if (learningPath.pathItems) {
      setItemsCourses(
        [...learningPath.pathItems, ...learningPath.courses].sort(
          (a, b) => a.path_order - b.path_order
        )
      );
    }
  }, [learningPath.pathItems, learningPath.courses]);

  // function for Drag and Drop calling changeArr above
  const onDragEnd = result => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    // utils import function for updating array order and path order
    setItemsCourses(
      changePathOrder(draggableId, destination.index, [...itemsCourses])
    );

    dispatch(
      updateLearningPathContentOrder(itemsCourses, props.match.params.id)
    );
  };

  if (!state.isLoading) {
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
              Learning Paths
            </span>
            <ChevronRightIcon style={{ fontSize: "1.6rem" }} />
            <span className={classes.span} onClick={backToLearningPath}>
              {learningPath.title && learningPath.title.substring(0, 15)}...
            </span>
            <ChevronRightIcon style={{ fontSize: "1.6rem" }} />
            <span>Edit</span>
          </p>
        </div>
        <div>
          {learningPathEdit ? (
            <Card
              className={classes.card}
              style={{ background: "#ffffff", color: "black" }}
            >
              <CardContent>
                <CardActions disableSpacing>
                  <div
                    style={{
                      backgroundColor: "#ffffff",
                      border: "none",
                      boxShadow: "none",
                      color: "black"
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
                        <h3
                          style={{ fontFamily: "ITC Grouch", color: "white" }}
                        >
                          {learningPath.title && learningPath.title.length > 35
                            ? `${learningPath.title.substring(0, 35)}...`
                            : learningPath.title}
                        </h3>
                        <div
                          style={{
                            textAlign: "left",
                            width: "100%",
                            fontSize: "1.2rem",
                            paddingLeft: "2px",
                            marginTop: "-10px",
                            color: "white"
                          }}
                        >
                          {learningPath.topic ? (
                            <span>Topic: {learningPath.topic}</span>
                          ) : null}
                          {learningPath.description &&
                          learningPath.description.length > 55 ? (
                            <>
                              {!expanded ? (
                                <>
                                  <ExpandMoreIcon
                                    className={classes.dropArrow}
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
                                    {learningPath.description && (
                                      <p style={{ paddingRight: "42px" }}>
                                        {learningPath.description}
                                      </p>
                                    )}
                                  </div>
                                </>
                              ) : (
                                <>
                                  <ExpandLessIcon
                                    className={classes.dropArrow}
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
                                    {learningPath.description && (
                                      <p style={{ paddingRight: "42px" }}>
                                        {learningPath.description}
                                      </p>
                                    )}
                                  </div>
                                </>
                              )}
                              )
                            </>
                          ) : learningPath.description &&
                            learningPath.description.length <= 55 ? (
                            learningPath.description && (
                              <p style={{ paddingRight: "42px" }}>
                                {learningPath.description}
                              </p>
                            )
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardActions>
              </CardContent>
              <CardActions>
                <button
                  className={classes.button}
                  onClick={toggleEdit}
                  style={{ margin: "0 20px 15px 70%", width: "100%" }}
                  type="submit"
                >
                  {!props.phoneSize ? (
                    "Edit Description"
                  ) : (
                    <EditIcon style={{ fontSize: "1.8rem" }} />
                  )}
                </button>
              </CardActions>
            </Card>
          ) : (
            <Card className={classes.card}>
              <CardContent>
                <p className={classes.title}>Learning Path Overview</p>
                <TrashCanEdit
                  style={{ fontSize: "2.6rem" }}
                  onClick={handleModalOpen}
                ></TrashCanEdit>
                {openModal ? (
                  <DeleteModal
                    handleDelete={handleDelete}
                    text={"Learning Path"}
                    open={openModal}
                    handleModalClose={handleModalClose}
                  />
                ) : null}
                <form
                  onSubmit={handlePathSubmit}
                  className={classes.container}
                  noValidate
                  autoComplete="off"
                >
                  <DidactField>
                    <DidactLabel htmlFor="title">
                      Learning Path Title
                    </DidactLabel>
                    <DidactInput
                      id="title"
                      type="text"
                      value={changes.title || ""}
                      onChange={handleChange("title")}
                      placeholder="Learning Path Title"
                    />
                  </DidactField>
                  <DidactField>
                    <DidactLabel htmlFor="description">Description</DidactLabel>
                    <DidactTextArea
                      rows="8"
                      id="description"
                      value={changes.description || ""}
                      onChange={handleChange("description")}
                      placeholder="Description"
                    />
                  </DidactField>
                  <DidactField>
                    <DidactLabel htmlFor="topic">Topic</DidactLabel>
                    <DidactInput
                      id="topic"
                      type="text"
                      value={changes.topic || ""}
                      onChange={handleChange("topic")}
                      placeholder="Topic"
                    />
                  </DidactField>
                  <ButtonDiv>
                    <DidactButton
                      style={{ marginLeft: "10px" }}
                      onClick={handleCancel}
                    >
                      Cancel
                    </DidactButton>
                    <DidactButton type="submit" style={{ marginRight: "4%" }}>
                      Submit Edit
                    </DidactButton>
                  </ButtonDiv>
                </form>
              </CardContent>
            </Card>
          )}
          <AddToLearningPath props={props} itemsCourses={itemsCourses} />

          <PathInstructions>
            Drag to Change Learning Path Order
          </PathInstructions>
          <DragDropContext onDragEnd={onDragEnd}>
            {
              <div>
                <Droppable droppableId="column-1">
                  {provided => (
                    <DroppableDiv
                      ref={provided.innerRef}
                      // innerRef={provided.innerRef}
                      {...provided.droppableProps}
                    >
                      {itemsCourses
                        ? itemsCourses.map((course, index) => (
                            <CourseLearningPath
                              props={props}
                              key={index}
                              course={course}
                              index={index}
                            />
                          ))
                        : null}
                      {provided.placeholder}
                    </DroppableDiv>
                  )}
                </Droppable>
              </div>
            }
          </DragDropContext>
        </div>
      </>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};

export default EditLearningPaths;
