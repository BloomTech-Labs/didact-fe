import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  editTool,
  deleteTool,
  getToolById,
  editToolImage
} from "../../store/actions";

import { DidactField, DidactInput, DidactLabel } from "../dashboard/FormStyles";
import DeleteModal from "../courses/DeleteModal";
import { TrashCanEdit, DidactButton } from "../dashboard/ButtonStyles";

import { ResourceForm } from "./AdministrationStyles";

const EditTool = ({ props, id }) => {
  const dispatch = useDispatch();
  const tool = useSelector(state => state.toolsReducer.tool);
  const loading = useSelector(state => state.toolsReducer.isLoadingTools);
  const [openModal, setOpenModal] = useState(false);
  const [changes, setChanges] = useState({
    image: "",
    name: "",
    description: "",
    link: ""
  });

  useEffect(() => {
    dispatch(getToolById(id));
  }, []);

  useEffect(() => {
    loading === false &&
      tool &&
      setChanges({
        image: "",
        name: tool.name,
        description: tool.description,
        link: tool.link
      });
  }, [tool]);

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
    dispatch(editToolImage(id, formData)).then(() => {
      props.history.push("/tools");
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
    dispatch(deleteTool(id)).then(() => {
      props.history.push("/tools");
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(editTool(id, changes)).then(() => {
      props.history.push("/tools");
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
          text={"this tool"}
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
      <form onSubmit={handleSubmit}></form>
      <form onSubmit={handleSubmit}>
        <DidactField>
          <DidactLabel>Tool Name</DidactLabel>
          <DidactInput
            type="text"
            value={changes.name || ""}
            onChange={handleChange}
            name="name"
          />
        </DidactField>
        <DidactField>
          <DidactLabel>Tool Description</DidactLabel>
          <DidactInput
            type="text"
            value={changes.description || ""}
            onChange={handleChange}
            name="description"
          />
        </DidactField>
        <DidactField>
          <DidactLabel>Tool Link</DidactLabel>
          <DidactInput
            type="text"
            value={changes.link || ""}
            onChange={handleChange}
            name="link"
          />
        </DidactField>
        <DidactButton type="submit">Submit</DidactButton>
      </form>
    </ResourceForm>
  );
};

export default EditTool;
