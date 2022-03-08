import React from "react";
import "../App.css";

function ShowCase() {
  return (
    <section class="hero-section">
      <div class="container">
        <div class="hero-grid">
          <div class="hero-text">
            <p>
              Hi, I am Mayank,
              <br />
              Creative Web Developer
            </p>
            <p>
              I have four years of experience in software development having,
              expertise in javascript web MEAN and MERN stack development.
            </p>
            <button class="rectangle-10">Download Resume</button>
          </div>
          <div class="hero-image">
            <img id="showcase-main-image" src="/images/my-pic.png" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShowCase;
