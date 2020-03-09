import React, { useState } from "react";

import { useDispatch } from "react-redux";

import { Mixpanel } from "../../utils/mixpanel";
import { addLessonToSection } from "../../store/actions";
import { ButtonDiv, DidactButton } from "../dashboard/ButtonStyles";
import { DidactField, DidactInput, DidactLabel } from "../dashboard/FormStyles";

import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles(theme => ({
  root: {
    background: "white",
    borderRadius: "0px 0px 15px 15px",
    margin: "10px -5px -5px -5px"
  },
  card: {
    width: "50vw",
    maxWidth: 500,
    borderRadius: "7px",
    margin: "10px 0",
    boxShadow: "none"
  },
  title: {
    fontSize: "1.4rem",
    fontWeight: "bold",
    color: "black"
  },
  pos: {
    marginBottom: 12
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
  input: {
    backgroundColor: "#F4F8FA",
    filter: "brightness(95%)",
    borderRadius: "7px"
  },

  descriptionDiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  descriptionTitle: {
    marginBottom: "0px"
  }
}));

const initalValues = {
  name: "",
  description: "",
  order: "",
  link: "",
  type: ""
};

const AddLesson = props => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [values, setValues] = useState(initalValues);

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    Mixpanel.track("Lesson Added.");
    dispatch(
      addLessonToSection(props.props.match.params.id, props.section.id, values)
    );
    props.setAddLessonChange(false);
  };

  const handleCancel = event => {
    event.preventDefault();
    props.setAddLessonChange(false);
    setValues(initalValues);
  };

  return (
    <>
      <div className={classes.root}>
        <CardContent>
          <p className={classes.title}>Add Lesson</p>
          <form
            onSubmit={handleSubmit}
            className={classes.container}
            noValidate
            autoComplete="off"
          >
            <DidactField>
              <DidactLabel htmlFor="title">Lesson Name</DidactLabel>
              <DidactInput
                id="title"
                type="text"
                value={values.name || ""}
                onChange={handleChange("name")}
                placeholder="Lesson Name"
              />
            </DidactField>
            <DidactField>
              <DidactLabel htmlFor="link">URL Link</DidactLabel>
              <DidactInput
                id="link"
                type="text"
                value={values.link || ""}
                onChange={handleChange("link")}
                placeholder="URL Link"
              />
            </DidactField>
            <DidactField>
              <DidactLabel htmlFor="order">Order</DidactLabel>
              <DidactInput
                id="order"
                type="text"
                value={values.order || ""}
                onChange={handleChange("order")}
                placeholder="Order"
              />
            </DidactField>
            <DidactField>
              <DidactLabel htmlFor="type">Type</DidactLabel>
              <DidactInput
                id="type"
                type="text"
                value={values.type || ""}
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
                Submit Lesson
              </DidactButton>
            </ButtonDiv>
          </form>
        </CardContent>
      </div>
    </>
  );
};

export default AddLesson;
