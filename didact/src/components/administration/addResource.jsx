import React, { useState } from "react";
import ArticleForm from "./ArticleForm";
import ToolForm from "./ToolForm";
import SourceForm from "./SourceForm";
import ExternalArticleForm from "./ExternalArticleForm";

const AddResource = ({ props }) => {
  const [contentType, setContentType] = useState("tool");

  const handleType = e => {
    e.preventDefault();
    setContentType(e.target.value);
  };

  return (
    <div>
      <select value={contentType} onChange={handleType}>
        <option value="tool">Tool</option>
        <option value="article">Article</option>
        <option value="external-article">External Article</option>
        <option value="source">Source</option>
      </select>
      {(() => {
        switch (contentType) {
          case "tool":
            return <ToolForm />;
          case "article":
            return <ArticleForm />;
          case "external-article":
            return <ExternalArticleForm />;
          case "source":
            return <SourceForm />;
          default:
            break;
        }
      })()}
    </div>
  );
};

export default AddResource;
