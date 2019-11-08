import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getLearningPath,
  updateLearningPath,
  deleteLearningPath,
  updateLearningPathContentOrder,
  updateYourPathOrder
} from "../../store/actions";

// import components
import DeleteModal from "../courses/DeleteModal";
import CourseLearningPath from "./CourseLearningPath";
import AddToLearningPath from './addToLearningPath/AddToLearningPath'
import { changePathOrder } from '../../utils/changePathOrder'

// imports for Styled Components
import { DidactField, DidactInput, DidactLabel, DidactTextArea } from '../dashboard/FormStyles'
import {ButtonDiv, FinishEdit, DidactButton, TrashCanEdit } from "../dashboard/ButtonStyles";
import {DroppableDiv, PathInstructions} from "./DraggableStyles.js";

//imports from material-ui
import { makeStyles} from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";


//imports for react-beautiful-dnd
import { DragDropContext, Droppable } from "react-beautiful-dnd";


const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 540,
    borderRadius: 15,
    marginTop: "10px",
    boxShadow: 'none',
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  descriptionDiv: {
    width: "100%",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: "space-between",
    fontSize: '1.4rem',
    padding: '0px'
  },
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
    name: "",
    category: "",
    description: "",
  });
 
  // console.log(learningPath)
  useEffect(() => {
    dispatch(getLearningPath(id));
  }, [id, dispatch]);

  useEffect(() => {
    setChanges({
      name: learningPath.name,
      category: learningPath.category,
      description: learningPath.description,
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
        ([...learningPath.pathItems, ...learningPath.courses].sort(
          (a, b) => a.path_order - b.path_order
        ))
      );
    }
  }, [learningPath.pathItems, learningPath.courses])

  // function for Drag and Drop calling changeArr above
  const onDragEnd = result => {
    const { destination, source, draggableId } = result;
    if(!destination) {
        return
    }
    if(
        destination.droppableId === source.droppableId &&
        destination.index === source.index
    ) {
        return
    }
    // utils import function for updating array order and path order
    setItemsCourses(changePathOrder(draggableId, destination.index, [...itemsCourses]))
  
    dispatch(updateLearningPathContentOrder(itemsCourses, props.match.params.id))

  };
  
  
  if (!state.isLoading) {
    return (
      <>
        <FinishEdit
          onClick={backToLearningPath}
          style={{ fontSize: '1.4rem' }}
        >{`<- BACK TO PATH`}</FinishEdit>
        <div className={classes.root}>
          {learningPathEdit ? (
            <Card className={classes.card} style={{ background: '#386581', color: 'white' }}>
              <CardContent>
                <h2>{learningPath.name}</h2>
                <CardActions className={classes.descriptionDiv} disableSpacing>
                  <p className={classes.descriptionTitle}>
                    {" "}
                    {learningPath.description && !expanded
                      ? (`${learningPath.description.substring(0, 100)} ...`)
                      : null}
                  </p>
                  <IconButton
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    style={{ color: 'white'}}
                  >
                    <ExpandMoreIcon style={{ fontSize: '2.6rem' }}/>
                  </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <p>{learningPath.description}</p>
                  </CardContent>
                </Collapse>
                <p color="textSecondary">
                  {learningPath.category
                    ? `Category: ${learningPath.category}`
                    : null}
                </p>
              </CardContent>
              <CardActions>
                <DidactButton
                  onClick={toggleEdit}
                  style={{ marginLeft: "70%", width: "100%" }}
                  type="submit"
                  size="small"
                  variant="contained"
                >
                  Edit Description
                </DidactButton>
              </CardActions>
            </Card>
          ) : (
            <Card className={classes.card}>
              <CardContent>
                <p className={classes.title} gutterBottom>
                  Learning Path Overview
                </p>
                <TrashCanEdit style={{fontSize: '2.6rem'}} onClick={handleModalOpen}></TrashCanEdit>
                {openModal ? (
                  <DeleteModal
                    handleDelete={handleDelete}
                    text={"Learning Path"}
                    open={openModal}
                    handleModalClose={handleModalClose}
                  />
                ) : null}
                <form onSubmit={handlePathSubmit} className={classes.container} noValidate autoComplete="off">
                <DidactField>
                  <DidactLabel for='title'>Learning Path Title</DidactLabel>
                  <DidactInput id='title' type='text' value={changes.name || ""} onChange={handleChange('name')} placeholder='Learning Path Title' />  
                </DidactField>
                <DidactField>
                  <DidactLabel for='description'>Description</DidactLabel>
                  <DidactTextArea rows="8" id='description' value={changes.description || ""} onChange={handleChange('description')} placeholder='Description' />  
                </DidactField>
                <DidactField>
                  <DidactLabel for='category'>Category</DidactLabel>
                  <DidactInput id='category' type='text' value={changes.category || ""} onChange={handleChange('category')} placeholder='Category' />  
                </DidactField>
                  <ButtonDiv>
                    <DidactButton
                      style={{ marginLeft: "10px" }}
                      onClick={handleCancel}
                      size="small"
                      variant="contained"
                    >
                      Cancel
                    </DidactButton>
                    <DidactButton
                      type="submit"
                      style={{ marginRight: "4%" }}
                      size="small"
                      variant="contained"
                    >
                      Submit Edit
                    </DidactButton>
                  </ButtonDiv>
                </form>
              </CardContent>
            </Card>
          )}
          <AddToLearningPath props = {props} itemsCourses = {itemsCourses}/>

          <PathInstructions>Drag to Change Learning Path Order</PathInstructions>
          <DragDropContext onDragEnd={onDragEnd}>
            {<div>
              <Droppable droppableId="column-1">
                {provided => (
                 <DroppableDiv
                    ref={provided.innerRef}
                    // innerRef={provided.innerRef}
                    {...provided.droppableProps}
                 >
                    {itemsCourses &&  
                    itemsCourses.map((order, index) => <CourseLearningPath props = {props} key={index} course={order} index = {index}/>)}
                    {provided.placeholder}
                  </DroppableDiv>  
                  )
                  
                }
              </Droppable>
            </div>}
          </DragDropContext>

        </div>
      </>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};

export default EditLearningPaths;
