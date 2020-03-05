import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { editSource, deleteSource, getSourceById } from "../../store/actions";

import { DidactField, DidactInput, DidactLabel } from "../dashboard/FormStyles";

import { DidactButton, TrashCanEdit } from "../dashboard/ButtonStyles";

import Card from "@material-ui/core/Card";

const EditSource = props => {
  const dispatch = useDispatch();
  const source = useSelector(state => state.sourcesReducer.source);
  const [changes, setChanges] = useState({
    name: "",
    description: "",
    link: ""
  });

  useEffect(() => {
    dispatch(getSourceById(props.id));
  }, []);

  useEffect(() => {
    setChanges({
      name: source.name,
      description: source.description,
      link: source.link
    });
  }, [source]);

  const handleChange = e => {
    setChanges({ ...changes, [e.target.name]: e.target.value });
  };

  const handleDelete = e => {
    dispatch(deleteSource(source.id));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(editSource(props.id, changes));
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
