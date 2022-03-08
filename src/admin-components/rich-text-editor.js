import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "../Admin-app.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
/* point check */
class RichTextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    };
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
    const contentState = editorState.getCurrentContent();
    //console.log("content state", convertToRaw(contentState));
    this.props.parentCallback(JSON.stringify(convertToRaw(contentState)));
  };

  render() {
    return (
      <div>
        <Editor
          className="rich-text-editor"
          editorState={this.state.editorState}
          onEditorStateChange={this.onEditorStateChange}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
        />
      </div>
    );
  }
}

export default RichTextEditor;
