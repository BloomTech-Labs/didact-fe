import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { editSource, deleteSource, getSourceById } from "../../store/actions";

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
        name: source.name,
        description: source.description,
        link: source.link
      });
  }, [source]);

  const handleChange = e => {
    setChanges({ ...changes, [e.target.name]: e.target.value });
  };

  const handleModalOpen = e => {
    setOpenModal(true);
  };

  const handleModalClose = e => {
    setOpenModal(false);
  };

  const handleDelete = e => {
    dispatch(deleteSource(source.id));
    props.history.push("/sources");
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(editSource(id, changes));
    props.history.push("/sources");
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
