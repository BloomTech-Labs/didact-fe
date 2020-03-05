import React from "react";

import { editTool } from "../../store/actions";

import { DidactField, DidactInput, DidactLabel } from "../dashboard/FormStyles";

import Card from "@material-ui/core/Card";

const EditTool = () => {
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
    dispatch(editTool(id, changes));
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <DidactField>
          <DidactLabel>Name</DidactLabel>
          <DidactInput
            type="text"
            value={changes.name || ""}
            onChange={handleChange}
            name="name"
          />
        </DidactField>
        <DidactField>
          <DidactLabel>Description</DidactLabel>
          <DidactInput
            type="text"
            value={changes.description || ""}
            onChange={handleChange}
            name="description"
          />
        </DidactField>
        <DidactField>
          <DidactLabel>Link</DidactLabel>
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
