import * as React from "react";
import SideMenuDrawer from "./drawer";
import TextInput from "./text-input";
import RichTextEditor from "./rich-text-editor-edit";
import SaveButton from "./button";
import "../Admin-app.css";
import { useState, useEffect } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useParams } from "react-router-dom";
import ChipsArray from "./chip";
import Button from "@mui/material/Button";
import TagsInput from "./tags-input";
const { useRef } = React;

export default function AddPost() {
  const [title, setTitle] = useState("");
  const { id } = useParams();
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

  function handleSelecetedTags(items) {
    setTags(JSON.stringify(items));
  }

  const [body, setBody] = useState("");
  const [tags, setTags] = React.useState(["hello", "world"]);

  const childRef = useRef();

  useEffect(() => {
    axios.get("/edit-post/" + id, {}).then(function (response) {
      response.data.map((val, key, arr) => {
        let content = val.title;
        setTitle(content);
        handleBody(val.body);
        setTags(JSON.parse(val.tags));
        childRef.current.getAlert(JSON.parse(val.tags));
      });
    });
  }, [setTitle, setBody]);

  const handleBody = (e) => {
    setBody(e);
  };

  let handleSubmit = async (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
    e.preventDefault();
    axios
      .post("/update-post/" + id, {
        title: title,
        body: body,
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

        <form
          method="post"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
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
              ref={childRef}
            />
            <ReactQuill
              modules={modules}
              onChange={handleBody}
              theme="snow"
              placeholder="Content goes here..."
              value={body}
            />
            <Button type="submit" onClick={handleSubmit} variant="contained">
              Save Article
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
