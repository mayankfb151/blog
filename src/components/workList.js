import React from "react";
import Footer from "./footer";
import "../App.css";

function WorkList() {
  return (
    <>
      <section class="work-list">
        <div class="container">
          <h1>Works</h1>
          <div class="flex-works-list">
            <div class="works-div">
              <div class="work-grid">
                <div class="work-image"></div>
                <div class="work-description">
                  <a href="/post-detail">
                    <p>Designing Dashboards</p>
                  </a>

                  <div class="work-year">
                    <div class="t20-wrapper">
                      <span class="work-year-2020">2020</span>
                    </div>
                    <text class="year-desc">Dashboard</text>
                  </div>
                  <div class="work-list-desc">
                    <text>
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit. Exercitation veniam consequat sunt nostrud
                      amet.
                    </text>
                  </div>
                </div>
              </div>
              <div class="work-grid">
                <div class="work-image2"></div>
                <div class="work-description">
                  <a href="/post-detail">
                    <p>Vibrant Portraits of 2020</p>
                  </a>

                  <div class="work-year">
                    <div class="t20-wrapper">
                      <span class="work-year-2020">2020</span>
                    </div>
                    <text class="year-desc">Dashboard</text>
                  </div>
                  <div class="work-list-desc">
                    <text>
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit. Exercitation veniam consequat sunt nostrud
                      amet.
                    </text>
                  </div>
                </div>
              </div>
              <div class="work-grid">
                <div class="work-image3"></div>
                <div class="work-description">
                  <a href="/post-detail">
                    <p>36 Days of Malayalam</p>
                  </a>
                  <div class="work-year">
                    <div class="t20-wrapper">
                      <span class="work-year-2020">2020</span>
                    </div>
                    <text class="year-desc">Dashboard</text>
                  </div>
                  <div class="work-list-desc">
                    <text>
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit. Exercitation veniam consequat sunt nostrud
                      amet.
                    </text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default WorkList;
