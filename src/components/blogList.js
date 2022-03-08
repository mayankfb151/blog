import React from "react";
import Footer from "./footer";
import "../App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { convertFromRaw } from "draft-js";
import { EditorState } from "draft-js";
import { stateToHTML } from "draft-js-export-html";
let moment = require("moment");

function createMarkup(html) {
  return { __html: html };
}

function TagList(props) {
  const numbers = props.tags;
  if (numbers != null) {
    const listItems = numbers.map((number) => (
      <li>
        <Link to={`/tag/${number}`}>{number} </Link>
      </li>
    ));
    return listItems;
  }
  return <></>;
}

function BlogList() {
  let blogs = [];
  var [listItems, setItems] = useState();

  useEffect(() => {
    axios
      .get("/posts", {})
      .then(function (response) {
        const regex = /(<([^>]+)>)/gi;

        listItems = response.data.map((val, key, arr) => {
          let body = val.body;
          let tags = null;
          if (val.tags != undefined) {
            tags = JSON.parse(val.tags);
          }
          return (
            <div class="blog-post-grid">
              <p>
                <Link to={"/post/" + val._id}>{val.title}</Link>
              </p>

              <div class="post-date">
                {moment(val.date).utc().format("DD MMM YYYY HH:mm")}{" "}
                <span class="post-detail-tags">
                  <ul>
                    <TagList tags={tags} />
                  </ul>
                </span>
              </div>

              <text class="post-content-minified"></text>
            </div>
          );
        });
        setItems(listItems);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [setItems]);

  return (
    <>
      <section class="blog-list">
        <div class="container">
          <h1>Code Blog</h1>
          <div class="blog-posts-grid">
            <ul>{listItems}</ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default BlogList;
