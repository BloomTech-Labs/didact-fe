import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTool } from "../../store/actions";
import { DidactField, DidactInput, DidactLabel } from "../dashboard/FormStyles";
import { DidactButton } from "../dashboard/ButtonStyles";
import { ResourceForm } from "./AdministrationStyles";

const ToolForm = ({ props }) => {
  const dispatch = useDispatch();
  const [tool, setTool] = useState({
    image: "",
    name: "",
    description: "",
    link: ""
  });

  const handleChange = e => {
    setTool({ ...tool, [e.target.name]: e.target.value });
  };

  const handleImage = e => {
    setTool({ ...tool, image: e.target.files[0] });
    console.log("THIS IS THE CHOSEN IMAGE HANDLEIMAGE", tool.image);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", tool.image);
    formData.append("name", tool.name);
    formData.append("description", tool.description);
    formData.append("link", tool.link);
    dispatch(addTool(formData)).then(() => {
      props.history.push("/tools");
    });
  };

  return (
    <ResourceForm>
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <DidactField>
          <DidactLabel>Tool Image</DidactLabel>
          <DidactInput type="file" onChange={handleImage} name="image" />
        </DidactField>
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
