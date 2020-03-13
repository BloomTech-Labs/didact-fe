import React, { useState, useEffect } from "react";

import {
  DidactField,
  DidactInput,
  DidactLabel,
  DidactTextArea
} from "../dashboard/FormStyles";

import { ResourceForm } from "./AdministrationStyles";

import {
  getExternalArticleById,
  editExternalArticle,
  deleteExternalArticle
} from "../../store/actions";
import DeleteModal from "../courses/DeleteModal";
import { TrashCanEdit, DidactButton } from "../dashboard/ButtonStyles";

import { useDispatch, useSelector } from "react-redux";

const EditExternalArticle = ({ props, id }) => {
  const dispatch = useDispatch();
  const article = useSelector(state => state.articlesReducer.externalArticle);
  const loading = useSelector(state => state.articlesReducer.isLoadingArticles);
  const [openModal, setOpenModal] = useState(false);
  const [changes, setChanges] = useState({
    date: "",
    title: "",
    description: "",
    topic: "",
    link: ""
  });

  useEffect(() => {
    dispatch(getExternalArticleById(id));
  }, []);

  useEffect(() => {
    loading === false &&
      article &&
      setChanges({
        date: article.date,
        title: article.title,
        description: article.description,
        topic: article.topic,
        link: article.link
      });
  }, [article]);

  const handleChange = e => {
    setChanges({ ...changes, [e.target.name]: e.target.value });
  };

  const handleModalOpen = e => {
    setOpenModal(true);
  };

  const handleModalClose = e => {
    setOpenModal(false);
  };

  const handleDelete = e => {
    dispatch(deleteExternalArticle(id)).then(() => {
      props.history.push("/articles");
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(editExternalArticle(id, changes)).then(() => {
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
            value={changes.date || ""}
            onChange={handleChange}
            name="date"
          />
        </DidactField>
        <DidactField>
          <DidactLabel>Article Title</DidactLabel>
          <DidactInput
            value={changes.title || ""}
            onChange={handleChange}
            name="title"
          />
        </DidactField>
        <DidactField>
          <DidactLabel>Article Description</DidactLabel>
          <DidactTextArea
            value={changes.description || ""}
            onChange={handleChange}
            name="description"
          />
        </DidactField>
        <DidactField>
          <DidactLabel>Article Topic</DidactLabel>
          <DidactInput
            value={changes.topic || ""}
            onChange={handleChange}
            name="topic"
          />
        </DidactField>
        <DidactField>
          <DidactLabel>Article Link</DidactLabel>
          <DidactInput
            value={changes.link || ""}
            onChange={handleChange}
            name="link"
          />
        </DidactField>
        <DidactButton type="submit">Submit</DidactButton>
      </form>
    </ResourceForm>
  );
};

export default EditExternalArticle;
