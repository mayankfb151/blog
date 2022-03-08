import * as React from "react";
import SideMenuDrawer from "./drawer";
import TextInput from "./text-input";
import RichTextEditor from "./rich-text-editor";
import SaveButton from "./button";
import "../Admin-app.css";
import { useState } from "react";
import axios from "axios";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, Editor, convertToRaw } from "draft-js";

export default function Layout() {
  const [title, setTitle] = useState("");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  function handleCallback(draftJSData) {
    setEditorState(draftJSData);
  }

  let handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("/add-post", {
        title: title,
        body: editorState,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div class="admin-container">
      <div class="admin-content-wrapper">
        <div className="sidebar">
          <SideMenuDrawer />
        </div>

        <form onSubmit={handleSubmit} method="post">
          <div className="form">
            <h1 className="form-heading">Add an article</h1>
            <TextInput title={title} setTitle={setTitle} />
            <RichTextEditor
              parentCallback={handleCallback}
              className="rich-text-editor"
            />
            <SaveButton />
          </div>
        </form>
      </div>
    </div>
  );
}
