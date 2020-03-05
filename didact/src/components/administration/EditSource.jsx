import React, { useState } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";
import beURL from "../../utils/beURL";

import { editSource } from "../../store/actions";

import { DidactField, DidactInput, DidactLabel } from "../dashboard/FormStyles";

import { DidactButton, TrashCanEdit } from "../dashboard/ButtonStyles";

import Card from "@material-ui/core/Card";

const EditSource = props => {
  const [changes, setChanges] = useState({
    name: "",
    description: "",
    link: ""
  });

  const handleChange = e => {
    setChanges({ ...changes, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(editSource(id, changes));
  };

  return (
    <Card>
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
    </Card>
  );
};

export default EditSource;
