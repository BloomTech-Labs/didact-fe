import React, { useState } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";
import beURL from "../../utils/beURL";
import { useDispatch } from "react-redux";
import { addSource } from "../../store/actions";

import { DidactField, DidactInput, DidactLabel } from "../dashboard/FormStyles";

import { DidactButton } from "../dashboard/ButtonStyles";

import { ResourceForm } from "./AdministrationStyles";

const SourceForm = ({ props }) => {
  const dispatch = useDispatch();
  const [source, setSource] = useState({
    name: "",
    description: "",
    link: ""
  });

  const handleChange = e => {
    setSource({ ...source, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addSource(source)).then(() => {
      props.history.push("/sources");
    });
  };

  return (
    <ResourceForm>
      <form onSubmit={handleSubmit}>
        <DidactField>
          <DidactLabel>Source Name</DidactLabel>
          <DidactInput
            type="text"
            value={source.name}
            onChange={handleChange}
            name="name"
          />
        </DidactField>
        <DidactField>
          <DidactLabel>Source Description</DidactLabel>
          <DidactInput
            type="text"
            value={source.description}
            onChange={handleChange}
            name="description"
          />
        </DidactField>
        <DidactField>
          <DidactLabel>Source Link</DidactLabel>
          <DidactInput
            type="text"
            value={source.link}
            onChange={handleChange}
            name="link"
          />
        </DidactField>
        <DidactButton type="submit" style={{ marginBottom: "15px" }}>
          Submit
        </DidactButton>
      </form>
    </ResourceForm>
  );
};

export default SourceForm;
