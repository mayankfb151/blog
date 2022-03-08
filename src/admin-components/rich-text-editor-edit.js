import React, { Component, useState, useEffect } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "../Admin-app.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import axios from "axios";
import { convertFromRaw } from "draft-js";
import { stateToHTML } from "draft-js-export-html";
import { useParams } from "react-router-dom";

function RichTextEditor(props) {
  let [editorState, setEditorState] = useState(EditorState.createEmpty());
  const { id } = useParams();
  useEffect(() => {
    axios.get("/edit-post/" + id, {}).then(function (response) {
      //let content = JSON.parse(response);
      response.data.map((val, key, arr) => {
        let content = val.body;

        let eState = EditorState.createWithContent(
          convertFromRaw(JSON.parse(content))
        );
        setEditorState(eState);
      });
    });
  }, [setEditorState]);

  function onEditorStateChange(editorState) {
    setEditorState(editorState);
    const contentState = editorState.getCurrentContent();
    //console.log("content state", convertToRaw(contentState));
    props.parentCallback(JSON.stringify(convertToRaw(contentState)));
  }

  return (
    <div>
      <Editor
        className="rich-text-editor"
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
      />
    </div>
  );
}

export default RichTextEditor;
