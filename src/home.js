import logo from "./logo.svg";
import Header from "./components/header";
import ShowCase from "./components/showcase";
import Posts from "./components/post";
import Work from "./components/work";
import Footer from "./components/footer";
import BlogList from "./components/blogList";
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

function Home() {
  return (
    <div className="App">
      <link rel="stylesheet" href="../public/css/font-awesome.min.css" />
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta charset="utf-8" />
      <ShowCase />
      <Posts />
      <Work />
      <Footer />
    </div>
  );
}

export default Home;
