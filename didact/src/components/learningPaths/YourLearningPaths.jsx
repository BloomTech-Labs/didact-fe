import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  getYourLearningPaths,
  quitLearningPath,
  updateYourPathOrder,
  toggleLearningPath
} from "../../store/actions/index";

import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
//Material UI Icons
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
// Styled Component Imports
import {
  YourLearningPathsWrapper,
  LearningPathCard,
  ButtonStyles
} from "./YourLearningPathsStyles";
import { ButtonDiv, DidactButton } from "../dashboard/ButtonStyles";
import { changePathOrder } from "../../utils/changePathOrder";
import { DroppableDiv } from "./DraggableStyles.js";

//imports for react-beautiful-dnd
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  cardWidth: {
    width: "100%",
    maxWidth: "650px"
    // minWidth: '600px',
    // marginRight: '40px'
  },
  openCardDiv: {
    width: "1000px"
  },
  buttonClosed: {
    marginLeft: "100px"
  },
  buttonDiv: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "220px",
    margin: "0 0 0 auto"
  },
  buttonDivMobile: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
    width: "150px",
    margin: "0 0 0 auto"
  },
  spanMobile: {
    color: "white",
    cursor: "pointer",
    marginRight: "35px"
  }
}));

const YourLearningPaths = props => {
  const [localState, setLocalState] = useState([]);
  const classes = useStyles();
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const learningPaths = state.learningPathReducer.yourLearningPaths;
  const notCompletedPaths = [];
  const completedPaths = [];

  learningPaths.forEach(el => {
    if (el.total === el.completed && el.total !== 0) {
      completedPaths.push(el);
    } else {
      notCompletedPaths.push(el);
    }
  });

  useEffect(
    _ => {
      dispatch(getYourLearningPaths());
    },
    [dispatch]
  );

  useEffect(() => {
    if (notCompletedPaths)
      setLocalState(
        [...notCompletedPaths].sort(
          (a, b) => a.user_path_order - b.user_path_order
        )
      );
  }, [learningPaths]);

  const [openModal, setOpenModal] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [modalStyle] = useState(getModalStyle);

  const handleDelete = () => {
    dispatch(quitLearningPath(currentId));
    setOpenModal(false);
  };

  const handleModalOpen = id => {
    setCurrentId(id);
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

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
    // // utils import function for updating array order and path order
    setLocalState(
      changePathOrder(draggableId, destination.index, [...localState])
    );

    dispatch(updateYourPathOrder(localState));
  };

  const handleMarkCompleteLearningPath = id => {
    dispatch(toggleLearningPath(id));
  };

  return (
    <div>
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
          <span>Learning Paths</span>
          <ChevronRightIcon style={{ fontSize: "1.6rem" }} />
          <span>Overview</span>
        </p>
      </div>
      {props.props.mediumScreenSize || props.props.phoneSize ? (
        <ButtonStyles style={{ display: "flex", justifyContent: "flex-start" }}>
          <div className="buttons">
            <Link style={{ fontSize: "1.4rem" }} to={"/learning-paths/join"}>
              Join a Learning Path
            </Link>
            <Link style={{ fontSize: "1.4rem" }} to={"/learning-paths/add"}>
              Create a New Learning Path
            </Link>
          </div>
        </ButtonStyles>
      ) : null}
      <YourLearningPathsWrapper style={{ margin: "auto" }}>
        <div
          className={!props.props.open ? "mainContentClosed" : "mainContent"}
        >
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="column-2">
              {provided => (
                <DroppableDiv
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <div
                    className={
                      !props.props.open
                        ? classes.openCardDiv
                        : "yourLearningPaths"
                    }
                  >
                    {localState.length > 0 &&
                      localState.map((learningPath, index) => {
                        return (
                          <Draggable
                            draggableId={`${index}`}
                            index={index}
                            key={index}
                          >
                            {(provided, snapshot) => (
                              <LearningPathCard
                                key={index}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                ref={provided.innerRef}
                                isdragging={
                                  snapshot.isDragging ? "true" : "false"
                                }
                                className={
                                  !props.props.open ? classes.cardWidth : null
                                }
                              >
                                <div className="title">
                                  <div className="pathHeader">
                                    <h1
                                      style={{
                                        fontFamily: "ITC Grouch",
                                        marginLeft: "33px"
                                      }}
                                    >
                                      {learningPath.title}
                                    </h1>
                                    {
                                      <CheckCircleIcon
                                        onClick={() =>
                                          handleMarkCompleteLearningPath(
                                            learningPath.id
                                          )
                                        }
                                        style={{ margin: "0 0 19px 10px" }}
                                        className="notCompleteButton"
                                      />
                                    }
                                  </div>
                                  <DragIndicatorIcon
                                    style={{
                                      color: "#242424",
                                      fontSize: "3rem"
                                    }}
                                  />
                                  <div>
                                    <div
                                      style={{
                                        display: "flex",
                                        flexDirection: "row"
                                      }}
                                    >
                                      <div
                                        style={{
                                          display: "flex",
                                          flexDirection: "column",
                                          margin: "15px 10px 0 40px",
                                          fontSize: ".8rem",
                                          color: "#242424",
                                          fontWeight: "bold",
                                          width: "100px"
                                        }}
                                      >
                                        <span>{`${learningPath.courses.length} CLASSES`}</span>
                                        <span>{`${learningPath.pathItems.length} ITEMS`}</span>
                                      </div>
                                      <div
                                        className={
                                          !props.props.phoneSize
                                            ? classes.buttonDiv
                                            : classes.buttonDivMobile
                                        }
                                      >
                                        <Link
                                          to={`/learning-paths/${learningPath.id}`}
                                        >
                                          <button>Go To Path</button>
                                        </Link>
                                        <div>
                                          <p
                                            className={
                                              props.props.phoneSize
                                                ? classes.spanMobile
                                                : null
                                            }
                                            style={{
                                              color: "white",
                                              cursor: "pointer"
                                            }}
                                            onClick={() =>
                                              handleModalOpen(learningPath.id)
                                            }
                                            id={learningPath.id}
                                          >
                                            Leave Path
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    {openModal ? (
                                      <Modal
                                        aria-labelledby="simple-modal-title"
                                        aria-describedby="simple-modal-description"
                                        open={openModal}
                                        onClose={handleModalClose}
                                      >
                                        <div
                                          style={modalStyle}
                                          className={classes.paper}
                                        >
                                          <h2
                                            style={{ textAlign: "center" }}
                                            id="simple-modal-title"
                                          >
                                            Are you sure you want to leave this
                                            Learning Path?
                                          </h2>
                                          <ButtonDiv>
                                            <DidactButton
                                              onClick={handleModalClose}
                                            >
                                              No
                                            </DidactButton>
                                            <DidactButton
                                              onClick={handleDelete}
                                            >
                                              Yes
                                            </DidactButton>
                                          </ButtonDiv>
                                        </div>
                                      </Modal>
                                    ) : null}
                                  </div>
                                </div>
                              </LearningPathCard>
                            )}
                          </Draggable>
                        );
                      })}
                  </div>
                  {provided.placeholder}
                </DroppableDiv>
              )}
            </Droppable>
          </DragDropContext>
          <div>
            {completedPaths.length > 0 && <h3>Completed</h3>}
            {completedPaths.length > 0 &&
              completedPaths.map((learningPath, index) => {
                return (
                  <LearningPathCard key={index} className="completed">
                    <div className="title">
                      <div className="pathHeader">
                        <h1 style={{ fontWeight: "bold" }}>
                          {learningPath.title}
                        </h1>
                        {
                          <CheckCircleIcon
                            onClick={() =>
                              handleMarkCompleteLearningPath(learningPath.id)
                            }
                            className="completeButton"
                          />
                        }
                      </div>
                      <div>
                        <Link to={`/learning-paths/${learningPath.id}`}>
                          <button>Go To Path</button>
                        </Link>
                        <button
                          onClick={() => handleModalOpen(learningPath.id)}
                          id={learningPath.id}
                        >
                          Leave Path
                        </button>
                        {openModal ? (
                          <Modal
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description"
                            open={openModal}
                            onClose={handleModalClose}
                          >
                            <div style={modalStyle} className={classes.paper}>
                              <h2
                                style={{ textAlign: "center" }}
                                id="simple-modal-title"
                              >
                                Are you sure you want to leave this Learning
                                Path?
                              </h2>
                              <ButtonDiv>
                                <DidactButton onClick={handleModalClose}>
                                  No
                                </DidactButton>
                                <DidactButton onClick={handleDelete}>
                                  Yes
                                </DidactButton>
                              </ButtonDiv>
                            </div>
                          </Modal>
                        ) : null}
                      </div>
                    </div>
                  </LearningPathCard>
                );
              })}
            {learningPaths.length === 0 && (
              <h1>You have not joined any learning paths</h1>
            )}
          </div>
        </div>
        {!props.props.phoneSize && !props.props.mediumScreenSize ? (
          <div className={!props.props.open ? "buttonsClosed" : "buttons"}>
            <Link style={{ fontSize: "1.4rem" }} to={"/learning-paths/join"}>
              Join a Learning Path
            </Link>
            <Link style={{ fontSize: "1.4rem" }} to={"/learning-paths/add"}>
              Create a New Learning Path
            </Link>
          </div>
        ) : null}
      </YourLearningPathsWrapper>
    </div>
  );
};

export default YourLearningPaths;
