import React from "react";
import { Outlet, Link } from "react-router-dom";
import PostDetail from "./post_detail";
import "../App.css";

function Header() {
  return (
    <>
      <nav className="nav-flex">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/works">Works</Link>
          </li>
          <li>
            <Link to="/add-post">Add Post</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}

export default Header;
