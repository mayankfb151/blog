import * as React from "react";
import SideMenuDrawer from "./drawer";
import TextInput from "./text-input";
import RichTextEditor from "./rich-text-editor";
import SaveButton from "./button";
import "../Admin-app.css";
import { useState } from "react";
import axios from "axios";
import TagsInput from "./tags-input";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function AddPost() {
  const [title, setTitle] = useState("");
  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script: "sub" }, { script: "super" }],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
      ["link", "image", "video"],
      ["clean"],
    ],
  };
  const [value, setValue] = useState("");
  const [tags, setTags] = React.useState([]);

  function handleSelecetedTags(items) {
    setTags(JSON.stringify(items));
  }

  let handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("/add-post", {
        title: title,
        body: value,
        tags: tags,
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
            <TagsInput
              selectedTags={handleSelecetedTags}
              fullWidth
              variant="outlined"
              id="tags"
              name="tags"
              placeholder="add Tags"
              label="tags"
            />
            <ReactQuill
              modules={modules}
              onChange={setValue}
              theme="snow"
              placeholder="Content goes here..."
            />
            <SaveButton />
          </div>
        </form>
      </div>
    </div>
  );
}
