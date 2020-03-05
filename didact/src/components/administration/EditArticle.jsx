import React, { useState, useEffect } from "react";

import {
  DidactField,
  DidactInput,
  DidactLabel,
  DidactTextArea
} from "../dashboard/FormStyles";

import {
  editArticle,
  deleteArticle,
  getArticleById
} from "../../store/actions";

import { DidactButton } from "../dashboard/ButtonStyles";

import Card from "@material-ui/core/Card";
import { useSelector } from "react-redux";

const EditArticle = props => {
  const dispatch = useDispatch();
  const article = useSelector(state => state.articlesReducer.article);
  const freshDate = new Date();
  const [changes, setChanges] = useState({
    date: freshDate.toLocaleDateString("en-US"),
    title: "",
    body: "",
    topic: ""
  });

  useEffect(() => {
    dispatch(getArticleById(props.id));
  }, []);

  useEffect(() => {
    setChanges({
      name: article.name,
      description: article.description,
      link: article.link
    });
  }, [article]);

  const handleChange = e => {
    setChanges({ ...changes, [e.target.name]: e.target.value });
  };

  const handleDelete = e => {
    dispatch(deleteArticle(article.id, article.title));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(editArticle(id, changes));
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <DidactField>
          <DidactLabel>Article Title</DidactLabel>
          <DidactInput
            value={changes.title}
            onChange={handleChange}
            name="title"
          />
        </DidactField>
        <DidactField>
          <DidactLabel>Article Body</DidactLabel>
          <DidactTextArea
            value={changes.body}
            onChange={handleChange}
            name="body"
          />
        </DidactField>
        <DidactField>
          <DidactLabel>Article Topic</DidactLabel>
          <DidactInput
            value={changes.topic}
            onChange={handleChange}
            name="topic"
          />
        </DidactField>
        <DidactButton type="submit">Submit</DidactButton>
      </form>
    </Card>
  );
};

export default EditArticle;
