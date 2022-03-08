import React from "react";
import "../App.css";

function Posts() {
  return (
    <section class="posts">
      <div class="container">
        <div class="recent-posts-links">
          <p>Recent posts</p>
          <p>View all</p>
        </div>
        <div class="posts-grid">
          <div class="post-grid">
            <p>Making a design system from scratch</p>
            <div class="post-date">
              12 Feb 2020 <span>|</span> Design, Pattern
            </div>
            <div class="post-text">
              <text id="post-area-text">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </text>
            </div>
          </div>
          <div class="post-grid">
            <p>Making a design system from scratch</p>
            <div class="post-date">
              12 Feb 2020 <span>|</span> Design, Pattern
            </div>

            <div class="post-text">
              <text id="post-area-text">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </text>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Posts;
