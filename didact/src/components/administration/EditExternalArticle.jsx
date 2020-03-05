import React, { useState } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";
import beURL from "../../utils/beURL";

import {
  DidactField,
  DidactInput,
  DidactLabel,
  DidactTextArea
} from "../dashboard/FormStyles";

import { editExternalArticle } from "../../store/actions";

import { DidactButton } from "../dashboard/ButtonStyles";

import Card from "@material-ui/core/Card";

const EditExternalArticle = props => {
  const [changes, setChanges] = useState({
    title: "",
    description: "",
    topic: "",
    link: ""
  });

  const handleChange = e => {
    setChanges({ ...changes, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(editExternalArticle(id, changes));
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <DidactField>
          <DidactLabel>Article Title</DidactLabel>
          <DidactInput
            value={changes.title}
            onChange={handleChange}
            name="title"
          />
        </DidactField>
        <DidactField>
          <DidactLabel>Article Description</DidactLabel>
          <DidactTextArea
            value={changes.body}
            onChange={handleChange}
            name="description"
          />
        </DidactField>
        <DidactField>
          <DidactLabel>Article Topic</DidactLabel>
          <DidactInput
            value={changes.topic}
            onChange={handleChange}
            name="topic"
          />
        </DidactField>
        <DidactField>
          <DidactLabel>Article Link</DidactLabel>
          <DidactInput
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

export default EditExternalArticle;
