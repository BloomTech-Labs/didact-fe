import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import {
  updateSection,
  getLessonsBySectionId,
  deleteSection
} from "../../store/actions";
import Lessons from "./Lessons";
import AddLessons from "./AddLessons";
import DeleteModal from "./DeleteModal";
import EditIcon from "@material-ui/icons/Edit";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import {
  AddButtonInSection,
  ButtonTextInSection,
  ButtonDiv,
  DidactButton,
  TrashCanEdit
} from "../dashboard/ButtonStyles";
import {
  DidactField,
  DidactInput,
  DidactLabel,
  DidactTextArea,
  FormTitle
} from "../dashboard/FormStyles";

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
    minWidth: 220,
    borderRadius: "7px",
    margin: "10px 0",
    padding: "5px",
    boxShadow: "none"
  },
  expand: {
    transform: "rotate(0deg)",
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
  },
  descriptionDiv: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    fontSize: 12,
    color: "#757575",
    textAlign: "left"
  },
  descriptionTitle: {
    marginBottom: "0px"
  },
  iconCircle: {
    color: "black",
    fontSize: "2rem"
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

const Section = ({ course, section, props }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const lessons = useSelector(state => state.sectionsReducer.lessons);
  const [sectionEdit, setSectionEdit] = useState(false);
  const [addLessonChange, setAddLessonChange] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [changes, setChanges] = useState({
    name: "",
    description: "",
    order: "",
    link: ""
  });
  useEffect(() => {
    setChanges({
      name: section.name,
      order: section.order,
      link: section.link,
      description: section.description
    });
  }, [section]);

  useEffect(() => {
    dispatch(getLessonsBySectionId(props.match.params.id, section.id));
  }, [dispatch, props.match.params.id, section.id]);

  const toggleEdit = () => {
    setSectionEdit(!sectionEdit);
  };

  const handleChange = name => event => {
    setChanges({ ...changes, [name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(updateSection(props.match.params.id, section.id, changes));
    setSectionEdit(true);
    props.history.push(`/courses/all/${props.match.params.id}`);
  };

  const handleLessonFormToggle = () => {
    setAddLessonChange(true);
  };

  const handleCancel = event => {
    event.preventDefault();
    setSectionEdit(false);
  };

  const handleDelete = () => {
    dispatch(deleteSection(course.id, section.id));
  };

  const handleModalOpen = () => {
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  return (
    <>
      {!sectionEdit ? (
        <Card className={classes.card}>
          <CardContent style={{ textAlign: "left", color: "#414D55" }}>
            <h3 style={{ marginLeft: "15px" }}>{section.name}</h3>
            <CardActions className={classes.descriptionDiv} disableSpacing>
              <p className={classes.descriptionTitle}>{section.description}</p>
            </CardActions>
            <a
              style={{ color: "#414D55", marginLeft: "15px" }}
              href={section.link}
              alt="section link"
            >
              {section.link}
            </a>
            <CardActions style={{ borderBottom: "grey solid 1px" }}>
              <button
                className={classes.button}
                style={{ marginLeft: "75%" }}
                onClick={toggleEdit}
                type="submit"
              >
                {!props.phoneSize ? (
                  "Edit Section"
                ) : (
                  <EditIcon style={{ fontSize: "1.6rem" }} />
                )}
              </button>
            </CardActions>
            {lessons ? (
              <Lessons
                course={course}
                section={section}
                props={props}
                lessons={lessons}
              />
            ) : null}
            <AddButtonInSection
              style={{ marginBottom: "-10px" }}
              onClick={handleLessonFormToggle}
            >
              <AddCircleIcon className={classes.iconCircle} />
              <ButtonTextInSection>Add Lesson</ButtonTextInSection>
            </AddButtonInSection>
          </CardContent>
          {addLessonChange ? (
            <AddLessons
              props={props}
              section={section}
              setAddLessonChange={setAddLessonChange}
            />
          ) : null}
        </Card>
      ) : (
        <Card className={classes.card}>
          <CardContent>
            <TrashCanEdit
              style={{ fontSize: "2.6rem" }}
              onClick={handleModalOpen}
            ></TrashCanEdit>
            {openModal ? (
              <DeleteModal
                handleDelete={handleDelete}
                text={"this section"}
                open={openModal}
                handleModalClose={handleModalClose}
              />
            ) : null}
            <form
              onSubmit={handleSubmit}
              className={classes.container}
              noValidate
              autoComplete="off"
            >
              <FormTitle>Edit Section</FormTitle>
              <DidactField>
                <DidactLabel htmlFor="title">Lesson Name</DidactLabel>
                <DidactInput
                  id="title"
                  type="text"
                  value={changes.name || ""}
                  onChange={handleChange("name")}
                  placeholder="Lesson Name"
                />
              </DidactField>
              <DidactField>
                <DidactLabel htmlFor="order">Section Order</DidactLabel>
                <DidactInput
                  id="order"
                  type="text"
                  value={changes.order || ""}
                  onChange={handleChange("order")}
                  placeholder="Section Order"
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
                <DidactLabel htmlFor="link">URL Link</DidactLabel>
                <DidactInput
                  id="link"
                  type="text"
                  value={changes.link || ""}
                  onChange={handleChange("link")}
                  placeholder="URL Link"
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
      )}
    </>
  );
};

export default Section;
