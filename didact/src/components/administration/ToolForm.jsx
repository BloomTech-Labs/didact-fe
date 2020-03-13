import React, { useState } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";
import beURL from "../../utils/beURL";
import { useDispatch } from "react-redux";
import { addTool } from "../../store/actions";

import { DidactField, DidactInput, DidactLabel } from "../dashboard/FormStyles";

import { DidactButton } from "../dashboard/ButtonStyles";

import { ResourceForm } from "./AdministrationStyles";

const ToolForm = ({ props }) => {
  const dispatch = useDispatch();
  const [tool, setTool] = useState({
    name: "",
    description: "",
    link: ""
  });

  const handleChange = e => {
    setTool({ ...tool, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addTool(tool)).then(() => {
      props.history.push("/tools");
    });
  };

  return (
    <ResourceForm>
      <form onSubmit={handleSubmit}>
        <DidactField>
          <DidactLabel>Tool Name</DidactLabel>
          <DidactInput
            type="text"
            value={tool.name}
            onChange={handleChange}
            name="name"
          />
        </DidactField>
        <DidactField>
          <DidactLabel>Tool Description</DidactLabel>
          <DidactInput
            type="text"
            value={tool.description}
            onChange={handleChange}
            name="description"
          />
        </DidactField>
        <DidactField>
          <DidactLabel>Tool Link</DidactLabel>
          <DidactInput
            type="text"
            value={tool.link}
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

export default ToolForm;
