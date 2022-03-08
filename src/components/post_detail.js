import React from "react";
import "../App.css";
import Footer from "../components/footer";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { convertFromRaw } from "draft-js";
import { EditorState } from "draft-js";
import { stateToHTML } from "draft-js-export-html";
import { Link } from "react-router-dom";

let moment = require("moment");

function createMarkup(html) {
  return { __html: html };
}

function Tags(props) {
  const numbers = props.tags;

  if (numbers != null) {
    const listItems = numbers.map((number) => (
      <li>
        <Link onClick={() => props.changeLink(number)} to={`/tag/${number}`}>
          {number}
        </Link>
      </li>
    ));
    return listItems;
  }
  return <></>;
}

function PostDetail(props) {
  var [post, setPost] = useState();
  var postItem;
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("/post/" + id, {})
      .then(function (response) {
        postItem = response.data.map((val, key, arr) => {
          let body = val.body;
          let tags = null;
          if (val.tags != undefined) {
            tags = JSON.parse(val.tags);
          }
          return (
            <>
              <text className="title">{val.title}</text>
              <div class="post-tags">
                <p>
                  <Tags tags={tags} />
                </p>
              </div>
              <div class="time-details">
                <div class="year">
                  <p class="year-text">
                    {moment(val.date).utc().format("DD MMM YYYY HH:mm")}
                  </p>
                </div>
              </div>
              <div></div>
              {
                <div
                  class="content"
                  dangerouslySetInnerHTML={createMarkup(body)}
                />
              }
            </>
          );
        });

        setPost(postItem);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [setPost]);

  return (
    <>
      <div className="post-detail">{post}</div>
      <Footer />
    </>
  );
}

export default PostDetail;
