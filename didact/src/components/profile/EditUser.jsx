import React, { useState, useEffect } from "react";
// import { Form, Field } from "react-final-form";
// import { TextField, Checkbox, Radio, Select } from "final-form-material-ui";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Checkbox from "@material-ui/core/Checkbox";
import {
  Button,
  RadioGroup,
  FormLabel,
  MenuItem,
  FormGroup,
  FormControlLabel
} from "@material-ui/core";

import {
  DidactField,
  DidactInput,
  DidactLabel,
  DidactTextArea
} from "./ProfileStyles";
import { makeStyles } from "@material-ui/core/styles";

import { getUserById, editUser } from "../../store/actions";

import { TrashCanEdit, DidactButton } from "../dashboard/ButtonStyles";
import DeleteModal from "../courses/DeleteModal";
import Card from "@material-ui/core/Card";
import { useSelector, useDispatch } from "react-redux";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  formControl: {
    margin: theme.spacing(3)
  }
}));

const EditUser = ({ props, id }) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const user = state.onboardingReducer.user;
  const person = state.usersProfilesReducer.person;
  const [openModal, setOpenModal] = useState(false);
  const classes = useStyles();
  const [changes, setChanges] = useState({
    email: person.email,
    owner: person.owner,
    admin: person.admin,
    moderator: person.moderator
  });

  useEffect(() => {
    dispatch(getUserById(id));
  }, []);

  useEffect(() => {
    setChanges({
      email: person.email,
      owner: "",
      admin: "",
      moderator: ""
    });
  }, [person]);

  const handleModalOpen = e => {
    setOpenModal(true);
  };

  const handleModalClose = e => {
    setOpenModal(false);
  };

  const handleChange = e => {
    setChanges({ ...changes, [e.target.name]: e.target.value });
  };

  //   const handleDelete = e => {
  //     dispatch(deleteArticle(id, article.title));
  //     props.history.push("/articles");
  //   };

  const handleChecked = event => {
    setChanges({ ...state, [event.target.name]: event.target.checked });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(editUser(id, changes));
    props.history.push("/users");
  };

  return (
    <div className={classes.root}>
      <FormControl
        className={classes.formControl}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="email"
          label="Email"
          type="email"
          value={changes.email}
          variant="filled"
          onChange={handleChange}
          name="email"
        />
        <div>
          <FormControlLabel
            control={
              <Checkbox
                checked={person.owner}
                value={changes.owner}
                onChange={handleChecked}
                name="owner"
              />
            }
            label="Owner"
          />
        </div>
        <div>
          <FormControlLabel
            control={
              <Checkbox
                checked={person.admin}
                value={changes.admin}
                onChange={handleChecked}
                name="admin"
              />
            }
            label="Admin"
          />
        </div>
        <div>
          <FormControlLabel
            control={
              <Checkbox
                checked={person.moderator}
                value={changes.moderator}
                onChange={handleChecked}
                name="moderator"
              />
            }
            label="Moderator"
          />
        </div>
        <div>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </div>
      </FormControl>
    </div>
    // <Card>
    //   <form onSubmit={handleSubmit}>
    //     <DidactField>
    //       <DidactLabel>Email</DidactLabel>
    //       <DidactInput
    //         value={changes.email}
    //         onChange={handleChange}
    //         name="email"
    //       />
    //     </DidactField>
    //     <DidactField
    //       style={user.owner !== true ? { display: "none" } : { display: "" }}
    //     >
    //       <DidactLabel>Owner</DidactLabel>
    //       <DidactInput
    //         value={changes.owner}
    //         onChange={handleChange}
    //         name="owner"
    //       />
    //     </DidactField>
    //     <DidactField>
    //       <DidactLabel>Admin</DidactLabel>
    //       <DidactInput
    //         value={changes.admin}
    //         onChange={handleChange}
    //         name="admin"
    //       />
    //     </DidactField>
    //     <DidactField>
    //       <DidactLabel>Moderator</DidactLabel>
    //       <DidactInput
    //         value={changes.moderator}
    //         onChange={handleChange}
    //         name="moderator"
    //       />
    //     </DidactField>
    //     <DidactButton type="submit">Submit</DidactButton>
    //   </form>
    // </Card>
  );
};

export default EditUser;
