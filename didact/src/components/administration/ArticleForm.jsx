import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DidactField,
  DidactInput,
  DidactLabel,
  DidactTextArea
} from "../dashboard/FormStyles";

import { addArticle } from "../../store/actions";

import { DidactButton } from "../dashboard/ButtonStyles";

import { ResourceForm } from "./AdministrationStyles";

const ArticleForm = ({ props }) => {
  const user = useSelector(state => state.onboardingReducer.user);
  const dispatch = useDispatch();
  const freshDate = new Date();
  const [article, setArticle] = useState({
    date: freshDate.toLocaleDateString("en-US"),
    title: "",
    body: "",
    topic: ""
  });

  const handleChange = e => {
    setArticle({ ...article, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addArticle(article)).then(() => {
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
          <DidactLabel>Article Body</DidactLabel>
          <DidactTextArea
            value={article.body}
            onChange={handleChange}
            name="body"
            rows="12"
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
        <DidactButton type="submit" style={{ marginBottom: "15px" }}>
          Submit
        </DidactButton>
      </form>
    </ResourceForm>
  );
};

export default ArticleForm;
