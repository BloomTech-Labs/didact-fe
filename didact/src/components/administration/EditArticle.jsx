import React, { useState, useEffect } from "react";

import {
  DidactField,
  DidactInput,
  DidactLabel,
  DidactTextArea
} from "../dashboard/FormStyles";

import { ResourceForm } from "./AdministrationStyles";

import {
  editArticle,
  deleteArticle,
  getArticleById
} from "../../store/actions";

import { TrashCanEdit, DidactButton } from "../dashboard/ButtonStyles";
import DeleteModal from "../courses/DeleteModal";

import { useSelector, useDispatch } from "react-redux";

const EditArticle = ({ props, id }) => {
  const dispatch = useDispatch();
  const article = useSelector(state => state.articlesReducer.article);
  const loading = useSelector(state => state.articlesReducer.isLoadingArticles);
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
    loading === false &&
      article &&
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
    dispatch(deleteArticle(id, article.title)).then(() => {
      props.history.push("/articles");
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(editArticle(id, changes)).then(() => {
      props.history.push("/articles");
    });
  };

  return (
    <ResourceForm>
      <TrashCanEdit
        onClick={handleModalOpen}
        style={{ marginTop: "10px", fontSize: "2.6rem" }}
      ></TrashCanEdit>
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
    </ResourceForm>
  );
};

export default EditArticle;
