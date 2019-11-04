import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getLearningPath,
  updateLearningPath,
  deleteLearningPath,
  updateCourseOrder,
  updatePathItem
} from "../../store/actions";

import DeleteModal from "../courses/DeleteModal";
import {ButtonDiv, FinishEdit, DeleteForm } from "../dashboard/ButtonStyles";
import {DroppableDiv} from "./DraggableStyles.js";
import CourseLearningPath from "./CourseLearningPath";

//imports from material-ui
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Button from "@material-ui/core/Button";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

//imports for react-beautiful-dnd
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const useStyles = makeStyles(theme => ({
  button: {
    boxShadow: "none",
    borderRadius: "15px",
    background: "#EBE8E1",
    marginLeft: "70%",
  },
  card: {
    maxWidth: 600,
    borderRadius: 15,
    marginTop: "10px",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },
  pos: {
    marginBottom: 12,
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  input: {
    backgroundColor: "#F4F8FA",
    filter: "brightness(95%)",
    borderRadius: 15,
  },
  inputDescription: {
    backgroundColor: "#F4F8FA",
    filter: "brightness(95%)",
    borderRadius: 15,
    margin: "-16px -10px -16px -10px",
    padding: "10px",
  },
  titleOrInstructorFields: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "45%",
    [`& fieldset`]: {
      borderRadius: 15,
    },
  },
  descriptionField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "93%",
    [`& fieldset`]: {
      borderRadius: 15,
      margin: "3px",
    },
  },

  descriptionDiv: {
    display: "flex",
    justifyContent: "center",
  },

  pathUrlField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "93%",
    [`& fieldset`]: {
      borderRadius: 15,
    },
  },
}));

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "gray",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "gray",
      },
      "&:hover fieldset": {
        borderColor: "gray",
      },
      "&.Mui-focused fieldset": {
        border: "1px solid gray",
      },
    },
  },
})(TextField);

const EditLearningPaths = ({ id, props }) => {
  console.log(id);
  console.log(props);
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

  // changes learning path array order on drag end
  const changeArr = (starting, ending, arr) => {
    let returned = arr.map((el, i) => {
      if (`${i}` === starting) {
        let spliced = arr.splice(starting, 1)[0];
        arr.splice(ending, 0, spliced)
        return arr
      }
      return arr
    });
    returned[starting].map((el, i) => el.path_order = i)
    return returned[starting]
  };

  // function for Drag and Drop calling changeArr above
  const onDragEnd = result => {
    const { destination, source, draggableId } = result;
    console.log(result)
    if(!destination) {
        return
    }

    if(
        destination.droppableId === source.droppableId &&
        destination.index === source.index
    ) {
        return
    }
    // see instantiation of function
    setItemsCourses(changeArr(draggableId, destination.index, [...itemsCourses]))

    const coursePath = [];
    const itemPath = [];

    //splitting items and courses so actions can update the DB
    itemsCourses.map(el => {
        if(el.path_id){
            itemPath.push(el)
        } 
        else if(!el.path_id){
            coursePath.push(el)
        }
        return itemsCourses
    })

    console.log(coursePath)
    console.log(itemPath)
    dispatch(updateCourseOrder())
    dispatch(updatePathItem())
 
  };
  
  
  if (!state.isLoading) {
    return (
      <>
        <FinishEdit
          onClick={backToLearningPath}
        >{`<- BACK TO PATH`}</FinishEdit>
        <div className={classes.root}>
          {learningPathEdit ? (
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {learningPath.name}
                </Typography>
                <CardActions className={classes.descriptionDiv} disableSpacing>
                  <Typography
                    color="textSecondary"
                    className={classes.descriptionTitle}
                  >
                    {" "}
                    {learningPath.description && !expanded
                      ? `${learningPath.description.substring(0, 100)} ...`
                      : null}
                  </Typography>
                  <IconButton
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography color="textSecondary" paragraph>
                      {learningPath.description}
                    </Typography>
                  </CardContent>
                </Collapse>
                <Typography color="textSecondary">
                  {learningPath.category
                    ? `Category: ${learningPath.category}`
                    : null}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  onClick={toggleEdit}
                  style={{ marginLeft: "70.5%" }}
                  type="submit"
                  size="small"
                  variant="contained"
                  className={classes.button}
                >
                  Edit Path
                </Button>
              </CardActions>
            </Card>
          ) : (
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.title} gutterBottom>
                  Learning Path Overview
                </Typography>
                <DeleteForm onClick={handleModalOpen}>X</DeleteForm>
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
                  <CssTextField
                    id="standard-name"
                    label="Learning Path Title"
                    className={classes.titleOrInstructorFields}
                    value={changes.name || ""}
                    onChange={handleChange("name")}
                    margin="normal"
                    variant="outlined"
                    placeholder="Learning Path Title"
                    InputProps={{
                      classes: {
                        underline: classes.blackUnderline,
                        input: classes.input,
                      },
                    }}
                  />
                  <CssTextField
                    id="standard-name"
                    label="Description"
                    className={classes.descriptionField}
                    value={changes.description || ""}
                    onChange={handleChange("description")}
                    margin="normal"
                    multiline={true}
                    rows="6"
                    variant="outlined"
                    placeholder="Description"
                    InputProps={{
                      classes: { input: classes.inputDescription },
                    }}
                  />
                  <CssTextField
                    id="standard-name"
                    label="Category"
                    className={classes.pathUrlField}
                    value={changes.category || ""}
                    onChange={handleChange("category")}
                    margin="normal"
                    variant="outlined"
                    placeholder="Category"
                    InputProps={{
                      classes: {
                        underline: classes.blackUnderline,
                        input: classes.input,
                      },
                    }}
                  />
                  <ButtonDiv>
                    <Button
                      style={{ marginLeft: "10px" }}
                      onClick={handleCancel}
                      size="small"
                      variant="contained"
                      className={classes.button}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      style={{ marginRight: "4%" }}
                      size="small"
                      variant="contained"
                      className={classes.button}
                    >
                      Submit Edit
                    </Button>
                  </ButtonDiv>
                </form>
              </CardContent>
            </Card>
          )}

          <DragDropContext onDragEnd={onDragEnd}
          >
            {<div>
              <h2>Order of Learning Path</h2>
              <Droppable droppableId="column-1">
                {provided => (
                 <DroppableDiv
                    ref={provided.innerRef}
                    // innerRef={provided.innerRef}
                    {...provided.droppableProps}
                 >
                    {itemsCourses &&  
                    itemsCourses.map((order, index) => <CourseLearningPath key={index} course={order} index = {index}/>)}
                    {provided.placeholder}
                  </DroppableDiv>  
                  )
                  
                }
              </Droppable>
            </div>}
          </DragDropContext>

          {/* {addSectionChange ? (
            <div>
                    <AddButton onClick={handleSectionFormToggle} >
                        <PlusDiv>
                            <Plus>+</Plus>
                        </PlusDiv>
                        <ButtonText>Add Section</ButtonText>
                    </AddButton>
                </div>
                ) : (
                    <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
                        <AddButton onClick={handleSectionFormToggle} >
                            <PlusDiv>
                                <Plus>+</Plus>
                            </PlusDiv>
                            <ButtonText>Add Section</ButtonText>
                        </AddButton>
                    </div>
                    ) 
                    } */}
        </div>
      </>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};

export default EditLearningPaths;
