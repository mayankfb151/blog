import React from "react";
import Footer from "./footer";
import "../App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { convertFromRaw } from "draft-js";
import { EditorState } from "draft-js";
import { stateToHTML } from "draft-js-export-html";
import { useParams } from "react-router-dom";
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

function TagList() {
  let blogs = [];
  var [listItems, setItems] = useState();
  var [link, setLink] = useState(useParams("id").id);
  let name = useParams("id");

  function changeLink(link) {
    setLink(link);
  }

  const reloadData = useEffect(() => {
    console.log(link + "xxx");
    axios
      .get("/tag/" + name.id, {})
      .then(function (response) {
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
                    <Tags changeLink={changeLink} tags={tags} />
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
  }, [setItems, link]);

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

export default TagList;
