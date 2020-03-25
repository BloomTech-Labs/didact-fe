import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addSource } from "../../store/actions";
import { DidactField, DidactInput, DidactLabel } from "../dashboard/FormStyles";
import { DidactButton } from "../dashboard/ButtonStyles";
import { ResourceForm } from "./AdministrationStyles";

const SourceForm = ({ props }) => {
  const dispatch = useDispatch();
  const [source, setSource] = useState({
    image: "",
    name: "",
    description: "",
    link: ""
  });

  const handleChange = e => {
    setSource({ ...source, [e.target.name]: e.target.value });
  };

  const handleImage = e => {
    setSource({ ...source, image: e.target.files[0] });
    console.log("THIS IS THE CHOSEN IMAGE HANDLEIMAGE", source.image);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", source.image);
    formData.append("name", source.name);
    formData.append("description", source.description);
    formData.append("link", source.link);
    dispatch(addSource(formData)).then(() => {
      props.history.push("/sources");
    });
  };

  return (
    <ResourceForm>
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <DidactField>
          <DidactLabel>Source Image</DidactLabel>
          <DidactInput type="file" onChange={handleImage} name="image" />
        </DidactField>
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
