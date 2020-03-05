import React, { useState } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";
import beURL from "../../utils/beURL";
import { useDispatch } from "react-redux";
import {
  DidactField,
  DidactInput,
  DidactLabel,
  DidactTextArea
} from "../dashboard/FormStyles";

import { addArticle } from "../../store/actions";

import { DidactButton } from "../dashboard/ButtonStyles";

import Card from "@material-ui/core/Card";

const ArticleForm = props => {
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
    dispatch(addArticle(article));
  };

  return (
    <Card>
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
        <DidactButton type="submit">Submit</DidactButton>
      </form>
    </Card>
  );
};

export default ArticleForm;
