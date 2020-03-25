import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  editSource,
  deleteSource,
  getSourceById,
  editSourceImage
} from "../../store/actions";

import { ResourceForm } from "./AdministrationStyles";

import { DidactField, DidactInput, DidactLabel } from "../dashboard/FormStyles";

import { DidactButton, TrashCanEdit } from "../dashboard/ButtonStyles";
import DeleteModal from "../courses/DeleteModal";

const EditSource = ({ props, id }) => {
  const dispatch = useDispatch();
  const source = useSelector(state => state.sourcesReducer.source);
  const loading = useSelector(state => state.sourcesReducer.isLoadingSources);
  const [openModal, setOpenModal] = useState(false);
  const [changes, setChanges] = useState({
    image: "",
    name: "",
    description: "",
    link: ""
  });

  useEffect(() => {
    dispatch(getSourceById(id));
  }, []);

  useEffect(() => {
    loading === false &&
      source &&
      setChanges({
        image: source.image,
        name: source.name,
        description: source.description,
        link: source.link
      });
  }, [source]);

  const handleChange = e => {
    setChanges({ ...changes, [e.target.name]: e.target.value });
  };

  const handleImage = e => {
    setChanges({ ...changes, image: e.target.files[0] });
  };

  const handleImgSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", changes.image);
    dispatch(editSourceImage(id, formData)).then(() => {
      props.history.push("/sources");
    });
    alert("IMAGE SUCCESSFULLY UPLOADED");
  };

  const handleModalOpen = e => {
    setOpenModal(true);
  };

  const handleModalClose = e => {
    setOpenModal(false);
  };

  const handleDelete = e => {
    dispatch(deleteSource(source.id)).then(() => {
      props.history.push("/sources");
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(editSource(id, changes)).then(() => {
      props.history.push("/sources");
    });
  };

  return (
    <ResourceForm>
      <TrashCanEdit
        onClick={handleModalOpen}
        style={{ marginTop: "10px", fontSize: "2.6rem" }}
      ></TrashCanEdit>
      {openModal ? (
        <DeleteModal
          text={"this source"}
          open={openModal}
          handleModalClose={handleModalClose}
          handleDelete={handleDelete}
        />
      ) : null}
      <form onSubmit={handleImgSubmit} className="imgForm">
        <div>
          <label>Image</label>
          <input type="file" onChange={handleImage} name="image" />
        </div>
        <DidactButton>submit image</DidactButton>
      </form>
      <form onSubmit={handleSubmit}>
        <DidactField>
          <DidactLabel>Source Name</DidactLabel>
          <DidactInput
            type="text"
            value={changes.name}
            onChange={handleChange}
            name="name"
          />
        </DidactField>
        <DidactField>
          <DidactLabel>Source Description</DidactLabel>
          <DidactInput
            type="text"
            value={changes.description}
            onChange={handleChange}
            name="description"
          />
        </DidactField>
        <DidactField>
          <DidactLabel>Source Link</DidactLabel>
          <DidactInput
            type="text"
            value={changes.link}
            onChange={handleChange}
            name="link"
          />
        </DidactField>
        <DidactButton type="submit">Submit</DidactButton>
      </form>
    </ResourceForm>
  );
};

export default EditSource;
