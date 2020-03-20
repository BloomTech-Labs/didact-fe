import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DidactField,
  DidactInput,
  DidactLabel,
  DidactTextArea
} from "../dashboard/FormStyles";

import { addExternalArticle } from "../../store/actions";

import { DidactButton } from "../dashboard/ButtonStyles";

import { ResourceForm } from "./AdministrationStyles";

const ExternalArticleForm = ({ props, id }) => {
  const dispatch = useDispatch();
  const freshDate = new Date();
  const [article, setArticle] = useState({
    date: freshDate.toLocaleDateString("en-US"),
    title: "",
    description: "",
    topic: "",
    link: ""
  });

  const handleChange = e => {
    setArticle({ ...article, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addExternalArticle(article)).then(() => {
      props.history.push("/articles");
    });
  };

  return (
    <ResourceForm>
      <form onSubmit={handleSubmit}>
        <DidactField>
          <DidactLabel>Article Title</DidactLabel>
          <DidactInput
            value={article.title}
            onChange={handleChange}
            name="title"
          />
        </DidactField>
        <DidactField>
          <DidactLabel>Article Description</DidactLabel>
          <DidactTextArea
            value={article.description}
            onChange={handleChange}
            name="description"
          />
        </DidactField>
        <DidactField>
          <DidactLabel>Article Topic</DidactLabel>
          <DidactInput
            value={article.topic}
            onChange={handleChange}
            name="topic"
          />
        </DidactField>
        <DidactField>
          <DidactLabel>Article Link</DidactLabel>
          <DidactInput
            value={article.link}
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

export default ExternalArticleForm;
