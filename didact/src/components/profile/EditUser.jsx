import React, { useState, useEffect } from "react";
import { DidactField, DidactInput, DidactLabel } from "./ProfileStyles";
import { getUserById, editUser, getUsersProfiles } from "../../store/actions";
import { TrashCanEdit, DidactButton } from "../dashboard/ButtonStyles";
import DeleteModal from "../courses/DeleteModal";
import Card from "@material-ui/core/Card";
import { useSelector, useDispatch } from "react-redux";
// import axios from "axios";
import axiosWithAuth from "../../utils/axiosWithAuth";
const EditUser = ({ props, id }) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const user = state.onboardingReducer.user;
  const person = state.usersProfilesReducer.person;
  const pImage = state.usersProfilesReducer.person.image;
  const [openModal, setOpenModal] = useState(false);
  console.log("xxxxxxxxxxxxxxxxx", pImage);
  const [changes, setChanges] = useState({
    image: pImage,
    email: "",
    owner: "",
    admin: "",
    moderator: ""
  });
  // delete later
  const token = localStorage.getItem("token");
  useEffect(() => {
    dispatch(getUserById(id));
  }, []);
  useEffect(() => {
    setChanges({
      image: person.image,
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
  const handleImage = e => {
    setChanges({ ...changes, image: e.target.files[0] });
    console.log("THIS IS THE CHOSEN IMAGE HANDLEIMAGE", changes.image);
  };
  //EditUser handleSubmit
  const handleSubmit = e => {
    console.log("CHANGES!!!!!!!!!!!!!!!!", changes);
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", changes.image);
    formData.append("email", changes.email);
    formData.append("owner", changes.owner);
    formData.append("admin", changes.admin);
    formData.append("moderator", changes.moderator);
    dispatch(editUser(id, formData));
    dispatch(getUsersProfiles());
    props.history.push("/users");
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <DidactField>
          <DidactLabel>Image</DidactLabel>
          <DidactInput type="file" onChange={handleImage} name="image" />
        </DidactField>
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
