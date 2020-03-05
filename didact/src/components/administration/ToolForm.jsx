import React, { useState } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";
import beURL from "../../utils/beURL";
import { useDispatch } from "react-redux";
import { addTool } from "../../store/actions";

import { DidactField, DidactInput, DidactLabel } from "../dashboard/FormStyles";

import { DidactButton } from "../dashboard/ButtonStyles";

import Card from "@material-ui/core/Card";

const ToolForm = props => {
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
    dispatch(addTool(tool));
  };

  return (
    <Card>
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
        <DidactButton type="submit">Submit</DidactButton>
      </form>
    </Card>
  );
};

export default ToolForm;
