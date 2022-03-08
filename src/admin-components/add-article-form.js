import React from "react";
import TextInput from "./text-input";
import RichTextEditor from "./rich-text-editor";
import ChipInput from "./chip";
import SaveButton from "./button";
import "../App.css";

function AddArticleForm() {
  return (
    <div className="form">
      <h1 className="form-heading">Add an article</h1>
      <TextInput />
      <ChipInput />
      <RichTextEditor className="rich-text-editor" />
      <SaveButton />
    </div>
  );
}

export default AddArticleForm;
