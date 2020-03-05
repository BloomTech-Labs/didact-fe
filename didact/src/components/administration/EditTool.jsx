import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { editTool, deleteTool, getToolById } from "../../store/actions";

import { DidactField, DidactInput, DidactLabel } from "../dashboard/FormStyles";
import DeleteModal from "../courses/DeleteModal";
import { TrashCanEdit, DidactButton } from "../dashboard/ButtonStyles";

import Card from "@material-ui/core/Card";

const EditTool = ({ props, id }) => {
  const dispatch = useDispatch();
  const tool = useSelector(state => state.toolsReducer.tool);
  const [openModal, setOpenModal] = useState(false);
  const [changes, setChanges] = useState({
    name: "",
    description: "",
    link: ""
  });

  useEffect(() => {
    dispatch(getToolById(id));
  }, []);

  useEffect(() => {
    setChanges({
      name: tool.name,
      description: tool.description,
      link: tool.link
    });
  }, [tool]);

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
    dispatch(deleteTool(id));
    props.history.push("/tools");
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(editTool(id, changes));
    props.history.push("/tools");
  };

  return (
    <Card>
      <TrashCanEdit onClick={handleModalOpen}></TrashCanEdit>
      {openModal ? (
        <DeleteModal
          text={"this tool"}
          open={openModal}
          handleModalClose={handleModalClose}
          handleDelete={handleDelete}
        />
      ) : null}
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
    </Card>
  );
};

export default EditTool;
