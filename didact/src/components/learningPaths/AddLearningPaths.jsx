import React, { useState, useEffect } from "react";
import { postLearningPath, getYourLearningPaths } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";

//Material UI Imports
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
//Material UI Icons
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

//Styled Component Imports
import {
  DidactField,
  DidactInput,
  DidactLabel,
  DidactTextArea,
  FormTitle
} from "../dashboard/FormStyles";
import { DidactButton } from "../dashboard/ButtonStyles";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 540,
    borderRadius: "7px",
    boxShadow: "none"
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  span: {
    cursor: "pointer",
    "&:hover": {
      color: "white"
    }
  }
}));

const AddLearningPaths = ({ props }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const yourPaths = state.learningPathReducer.yourLearningPaths;

  const [values, setValues] = useState({
    title: "",
    topic: "",
    description: "",
    userPathOrder: `${yourPaths.length + 1}`
  });

  useEffect(() => {
    dispatch(getYourLearningPaths());
  }, [dispatch]);

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(postLearningPath(values, props.history));
  };

  const handleBack = () => {
    props.history.push("/courses");
  };

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
          <span>Add New Path</span>
        </p>
      </div>
      <Card className={classes.card}>
        <CardContent>
          <form
            onSubmit={handleSubmit}
            className={classes.container}
            noValidate
            autoComplete="off"
          >
            <FormTitle>Learning Path Overview</FormTitle>
            <DidactField>
              <DidactLabel htmlFor="title">Title</DidactLabel>
              <DidactInput
                id="title"
                type="text"
                value={values.title || ""}
                onChange={handleChange("title")}
                placeholder="Learning Path Title"
              />
            </DidactField>
            <DidactField>
              <DidactLabel htmlFor="description">Description</DidactLabel>
              <DidactTextArea
                id="description"
                value={values.description || ""}
                onChange={handleChange("description")}
                placeholder="Description"
                rows="8"
              />
            </DidactField>
            <DidactField>
              <DidactLabel htmlFor="topic">Topic</DidactLabel>
              <DidactInput
                id="topic"
                type="text"
                value={values.topic || ""}
                onChange={handleChange("topic")}
                placeholder="Topic"
              />
            </DidactField>
            <DidactButton style={{ marginLeft: "72%" }} type="submit">
              Create Path
            </DidactButton>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default AddLearningPaths;
