import React, { useState, useEffect } from "react";

import { DidactField, DidactInput, DidactLabel } from "./ProfileStyles";

import { getUserById, editUser } from "../../store/actions";

import { TrashCanEdit, DidactButton } from "../dashboard/ButtonStyles";
import DeleteModal from "../courses/DeleteModal";
import Card from "@material-ui/core/Card";
import { useSelector, useDispatch } from "react-redux";

const EditUser = ({ props, id }) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const user = state.onboardingReducer.user;
  const person = state.usersProfilesReducer.person;
  const [openModal, setOpenModal] = useState(false);
  const [changes, setChanges] = useState({
    email: "",
    owner: "",
    admin: "",
    moderator: ""
  });

  useEffect(() => {
    dispatch(getUserById(id));
  }, []);

  useEffect(() => {
    setChanges({
      email: person.email,
      owner: person.owner,
      admin: person.admin,
      moderator: person.moderator
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

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(editUser(id, changes));
    props.history.push("/users");
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <DidactField>
          <DidactLabel>Email</DidactLabel>
          <DidactInput
            value={changes.email}
            onChange={handleChange}
            name="email"
          />
        </DidactField>
        <DidactField
          style={user.owner !== true ? { display: "none" } : { display: "" }}
        >
          <DidactLabel>Owner</DidactLabel>
          <DidactInput
            value={changes.owner}
            onChange={handleChange}
            name="owner"
          />
        </DidactField>
        <DidactField>
          <DidactLabel>Admin</DidactLabel>
          <DidactInput
            value={changes.admin}
            onChange={handleChange}
            name="admin"
          />
        </DidactField>
        <DidactField>
          <DidactLabel>Moderator</DidactLabel>
          <DidactInput
            value={changes.moderator}
            onChange={handleChange}
            name="moderator"
          />
        </DidactField>
        <DidactButton type="submit">Submit</DidactButton>
      </form>
    </Card>
  );
};

export default EditUser;
