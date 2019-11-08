import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updatePathItem,
  deletePathItem
} from "../../../store/actions";

import DeleteModal from "../../courses/DeleteModal";
import { ButtonDiv, DeleteForm } from "../../dashboard/ButtonStyles";
import { DidactField, DidactInput, DidactLabel, DidactTextArea } from '../../dashboard/FormStyles'

//imports from material-ui
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";


const useStyles = makeStyles(theme => ({
  button: {
    boxShadow: "none",
    borderRadius: "15px",
    background: "#EBE8E1",
    // marginLeft: "70%",
  },
  card: {
    maxWidth: 540,
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
  const state = useSelector(state => state.learningPathReducer);
  const learningPath = state.learningPath;
  const dispatch = useDispatch();
  const classes = useStyles();
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
            <DidactField>
              <DidactLabel for='title'>Item Name</DidactLabel>
              <DidactInput id='title' type='text' value={changes.name || ""} onChange={handleChange('name')} placeholder='Item Name' />
            </DidactField>
            <DidactField>
              <DidactLabel for='description'>Description</DidactLabel>
              <DidactTextArea rows="8" id='description' value={changes.description || ""} onChange={handleChange('description')} placeholder='Description' />
            </DidactField>
            <DidactField>
              <DidactLabel for='link'>Url Link</DidactLabel>
              <DidactInput id='link' type='text' value={changes.link || ""} onChange={handleChange('link')} placeholder='Url Link' />
            </DidactField>
            <DidactField>
              <DidactLabel for='type'>Type</DidactLabel>
              <DidactInput id='type' type='text' value={changes.type || ""} onChange={handleChange('type')} placeholder='Type' />
            </DidactField>
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
