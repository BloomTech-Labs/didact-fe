import React, { useState } from "react";
import ArticleForm from "./ArticleForm";
import ToolForm from "./ToolForm";
import SourceForm from "./SourceForm";
import ExternalArticleForm from "./ExternalArticleForm";
import NativeSelect from "@material-ui/core/NativeSelect";
const AddResource = ({ props }) => {
  const [contentType, setContentType] = useState("tool");

  const handleType = e => {
    e.preventDefault();
    setContentType(e.target.value);
  };

  return (
    <div>
      <NativeSelect
        style={{
          backgoundColor: "#EEEEEE",
          marginBottom: "20px",
          fontSize: "16px",
          border: "1px black solid",
          borderRadius: "3px"
        }}
        children={{ padding: "10px" }}
        value={contentType}
        onChange={handleType}
      >
        <option name="tool" value="tool">
          Tool
        </option>
        <option name="article" value="article">
          Article
        </option>
        <option name="external-article" value="external-article">
          External Article
        </option>
        <option name="source" value="source">
          Source
        </option>
      </NativeSelect>
      {(() => {
        switch (contentType) {
          case "tool":
            return <ToolForm props={props} />;
          case "article":
            return <ArticleForm props={props} />;
          case "external-article":
            return <ExternalArticleForm props={props} />;
          case "source":
            return <SourceForm props={props} />;
          default:
            break;
        }
      })()}
    </div>
  );
};

export default AddResource;
