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

import { TrashCanEdit, DidactButton } from "../dashboard/ButtonStyles";
import DeleteModal from "../courses/DeleteModal";
import Card from "@material-ui/core/Card";
import { useSelector, useDispatch } from "react-redux";

const EditArticle = ({ props, id }) => {
  const dispatch = useDispatch();
  const article = useSelector(state => state.articlesReducer.article);
  const [openModal, setOpenModal] = useState(false);
  const [changes, setChanges] = useState({
    date: "",
    title: "",
    body: "",
    topic: ""
  });

  useEffect(() => {
    dispatch(getArticleById(id));
  }, []);

  useEffect(() => {
    setChanges({
      date: article.date,
      title: article.title,
      body: article.body,
      topic: article.topic
    });
  }, [article]);

  const handleModalOpen = e => {
    setOpenModal(true);
  };

  const handleModalClose = e => {
    setOpenModal(false);
  };

  const handleChange = e => {
    setChanges({ ...changes, [e.target.name]: e.target.value });
  };

  const handleDelete = e => {
    dispatch(deleteArticle(id, article.title));
    props.history.push("/articles");
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(editArticle(id, changes));
    props.history.push("/articles");
  };

  return (
    <Card>
      <TrashCanEdit onClick={handleModalOpen}></TrashCanEdit>
      {openModal ? (
        <DeleteModal
          text={"this article"}
          open={openModal}
          handleModalClose={handleModalClose}
          handleDelete={handleDelete}
        />
      ) : null}
      <form onSubmit={handleSubmit}>
        <DidactField>
          <DidactLabel>Article Date</DidactLabel>
          <DidactInput
            value={changes.date}
            onChange={handleChange}
            name="date"
          />
        </DidactField>
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
