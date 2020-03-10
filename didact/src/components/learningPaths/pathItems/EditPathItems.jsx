import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updatePathItem, deletePathItem } from "../../../store/actions";

import DeleteModal from "../../courses/DeleteModal";
import {
  ButtonDiv,
  TrashCanEdit,
  DidactButton
} from "../../dashboard/ButtonStyles";
import {
  DidactField,
  DidactInput,
  DidactLabel,
  DidactTextArea
} from "../../dashboard/FormStyles";

//imports from material-ui
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles(theme => ({
  button: {
    boxShadow: "none",
    borderRadius: "15px",
    background: "#EBE8E1"
    // marginLeft: "70%",
  },
  card: {
    maxWidth: 540,
    borderRadius: "7px",
    marginTop: "10px"
  },
  title: {
    fontSize: 14,
    fontWeight: "bold"
  },
  pos: {
    marginBottom: 12
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },

  descriptionDiv: {
    display: "flex",
    justifyContent: "center"
  }
}));

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
      description: course.description
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
          <p className={classes.title}>Learning Path Overview</p>
          <TrashCanEdit
            style={{ fontSize: "2.6rem" }}
            onClick={handleModalOpen}
          ></TrashCanEdit>
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
              <DidactLabel htmlFor="title">Item Name</DidactLabel>
              <DidactInput
                id="title"
                type="text"
                value={changes.name || ""}
                onChange={handleChange("name")}
                placeholder="Item Name"
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
              <DidactLabel htmlFor="link">Url Link</DidactLabel>
              <DidactInput
                id="link"
                type="text"
                value={changes.link || ""}
                onChange={handleChange("link")}
                placeholder="Url Link"
              />
            </DidactField>
            <DidactField>
              <DidactLabel htmlFor="type">Type</DidactLabel>
              <DidactInput
                id="type"
                type="text"
                value={changes.type || ""}
                onChange={handleChange("type")}
                placeholder="Type"
              />
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
    </>
  );
};

export default EditPathItems;
