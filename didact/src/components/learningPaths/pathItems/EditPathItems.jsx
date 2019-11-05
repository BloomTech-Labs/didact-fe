import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updatePathItem,
  deletePathItem
} from "../../../store/actions";

import DeleteModal from "../../courses/DeleteModal";
import {ButtonDiv, FinishEdit, DeleteForm } from "../../dashboard/ButtonStyles";

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
    // marginLeft: "70%",
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

const EditPathItems = ({ course, props, handleToggleEdit }) => {
  console.log(props);
  console.log(course)
  const state = useSelector(state => state.learningPathReducer);
  const learningPath = state.learningPath;
  const dispatch = useDispatch();
  const classes = useStyles();
  const [learningPathEdit, setLearningPathEdit] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [changes, setChanges] = useState({
    name: "",
    link: "",
    description: "",
    type: ""
  });

  useEffect(() => {
    setChanges({
      ...course,
      name: course.name,
      type: course.type,
      link: course.link,
      description: course.description,
    });
  }, [course]);

  // const toggleEdit = () => {
  //   setLearningPathEdit(!learningPathEdit);
  // };

  const handlePathSubmit = event => {
    event.preventDefault();
    dispatch(updatePathItem(learningPath.id, course.id, changes));
    handleToggleEdit();
  };

  const handleChange = name => event => {
    setChanges({ ...changes, [name]: event.target.value });
  };


  const handleCancel = event => {
    event.preventDefault();
    handleToggleEdit();
  };


  const handleDelete = () => {
    dispatch(deletePathItem(props.match.params.id, course.id));
  };

  const handleModalOpen = () => {
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };
  
  
    return (
      <>
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.title} gutterBottom>
                  Learning Path Overview
                </Typography>
                <DeleteForm onClick={handleModalOpen}>X</DeleteForm>
                {openModal ? (
                  <DeleteModal
                    handleDelete={handleDelete}
                    text={"Path Item"}
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
                    label="Item Name"
                    className={classes.pathUrlField}
                    value={changes.name || ""}
                    onChange={handleChange("name")}
                    margin="normal"
                    variant="outlined"
                    placeholder="Item Name"
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
                    label="Link"
                    className={classes.pathUrlField}
                    value={changes.link || ""}
                    onChange={handleChange("link")}
                    margin="normal"
                    variant="outlined"
                    placeholder="Link"
                    InputProps={{
                      classes: {
                        underline: classes.blackUnderline,
                        input: classes.input,
                      },
                    }}
                  />
                  <CssTextField
                    id="standard-name"
                    label="Type"
                    className={classes.pathUrlField}
                    value={changes.type || ""}
                    onChange={handleChange("type")}
                    margin="normal"
                    variant="outlined"
                    placeholder="Type"
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
      </>
    );
};

export default EditPathItems;
