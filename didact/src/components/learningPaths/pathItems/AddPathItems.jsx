import React, { useState } from "react";
import { postPathItem } from "../../../store/actions";
import { useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {
  DidactField,
  DidactInput,
  DidactLabel,
  DidactTextArea
} from "../../dashboard/FormStyles";
import { DidactButton } from "../../dashboard/ButtonStyles";

//Material UI Icons
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const useStyles = makeStyles(theme => ({
  button: {
    boxShadow: "none",
    borderRadius: "15px",
    background: "#EBE8E1",
    marginLeft: "70%"
  },
  card: {
    maxWidth: 500,
    borderRadius: "7px"
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
  span: {
    cursor: "pointer",
    "&:hover": {
      color: "white"
    }
  }
}));

const AddPathItems = ({ props }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    name: "",
    link: "",
    type: "",
    description: ""
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(postPathItem(props.match.params.id, values, props.history));
  };

  const handleBack = () => {
    props.history.push("/learning-paths");
  };

  const backToLearningPath = () => {
    props.history.push(`/learning-paths/${props.match.params.id}/edit`);
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
          <span className={classes.span} onClick={backToLearningPath}>
            Edit
          </span>
          <ChevronRightIcon style={{ fontSize: "1.6rem" }} />
          <span>Add Path Item</span>
        </p>
      </div>
      <Card className={classes.card}>
        <CardContent>
          <p className={classes.title}>Learning Path Item Overview</p>
          <form
            onSubmit={handleSubmit}
            className={classes.container}
            noValidate
            autoComplete="off"
          >
            <DidactField>
              <DidactLabel htmlFor="name">Item Name</DidactLabel>
              <DidactInput
                id="name"
                type="text"
                value={values.name || ""}
                onChange={handleChange("name")}
                placeholder="Item Name"
              />
            </DidactField>
            <DidactField>
              <DidactLabel htmlFor="description">Description</DidactLabel>
              <DidactTextArea
                rows="8"
                id="description"
                value={values.description || ""}
                onChange={handleChange("description")}
                placeholder="Description"
              />
            </DidactField>
            <DidactField>
              <DidactLabel htmlFor="link">Url Link</DidactLabel>
              <DidactInput
                id="link"
                type="text"
                value={values.link || ""}
                onChange={handleChange("link")}
                placeholder="Url Link"
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
            <DidactButton type="submit" size="small" variant="contained">
              Create Item
            </DidactButton>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default AddPathItems;
