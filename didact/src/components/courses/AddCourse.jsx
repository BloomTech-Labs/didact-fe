import React, { useState } from "react";
import { addCourse, addApiCourse, checkDatabase } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { Mixpanel } from "../../utils/mixpanel";
import AddUdemyCourse from "./AddUdemyCourse";

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
    boxShadow: "none",
    marginLeft: "5px"
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  span: {
    cursor: "pointer",
    "&:hover": {
      color: "black"
    }
  }
}));

export default function AddCourse({ props }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const inDB = state.coursesReducer.inDB;
  const [values, setValues] = useState({
    title: "",
    topic: "",
    foreign_instructors: "",
    foreign_rating: "",
    link: "",
    description: ""
  });

  const handleBack = () => {
    props.history.push("/courses/yours");
  };

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    Mixpanel.track("Course Added.");
    dispatch(addCourse(values, props));
  };

  const handleSubmitUdemy = event => {
    event.preventDefault();
    Mixpanel.track("Course Check.");
    if (values.link.includes("udemy.com"))
      dispatch(addApiCourse(values.link, props));
    else dispatch(checkDatabase(values.link, props));
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between"
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
            Courses
          </span>
          <ChevronRightIcon style={{ fontSize: "1.6rem" }} />
          <span>Add New Course</span>
        </p>
      </div>
      {inDB === 0 ? (
        <AddUdemyCourse
          props={props}
          values={values}
          setValues={setValues}
          handleSubmitUdemy={handleSubmitUdemy}
        />
      ) : inDB < 0 ? (
        <Card className={classes.card}>
          <CardContent>
            <p>{`${values.link} is not in the database, add course below`}</p>
            <form
              onSubmit={handleSubmit}
              className={classes.container}
              noValidate
              autoComplete="off"
            >
              <FormTitle>Course Overview</FormTitle>

              <DidactField>
                <DidactLabel for="url">Course Url</DidactLabel>
                <DidactInput
                  id="url"
                  type="text"
                  value={values.link || ""}
                  onChange={handleChange("link")}
                  placeholder="Course Url"
                />
              </DidactField>
              <DidactField>
                <DidactLabel for="title">Course Title</DidactLabel>
                <DidactInput
                  id="title"
                  type="text"
                  value={values.title || ""}
                  onChange={handleChange("title")}
                  placeholder="Course Title"
                />
              </DidactField>
              <DidactField>
                <DidactLabel for="instructors">Instructors</DidactLabel>
                <DidactInput
                  id="instructors"
                  type="text"
                  value={values.foreign_instructors || ""}
                  onChange={handleChange("foreign_instructors")}
                  placeholder="Instructors"
                />
              </DidactField>
              <DidactField>
                <DidactLabel for="description">Description</DidactLabel>
                <DidactTextArea
                  rows="8"
                  id="description"
                  value={values.description || ""}
                  onChange={handleChange("description")}
                  placeholder="Description"
                />
              </DidactField>
              <DidactField>
                <DidactLabel for="topic">Topic</DidactLabel>
                <DidactInput
                  id="topic"
                  type="text"
                  value={values.topic || ""}
                  onChange={handleChange("topic")}
                  placeholder="Topic"
                />
              </DidactField>
              <DidactButton type="submit" style={{ marginLeft: "72%" }}>
                Add Course
              </DidactButton>
            </form>
          </CardContent>
        </Card>
      ) : (
        props.history.push(`/courses/all/${inDB}`)
      )}
    </>
  );
}
