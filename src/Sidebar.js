import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <img src="myImage.png" alt="" />
        <Link to="/">
          <h1>Rishab Baisakh</h1>
          <h2>Web Developer</h2>
        </Link>
      </div>

      <div className="sidebar__links">
        <ul>
          <Link to="/skills">{"<Skills />"}</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/education">Education</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/contact">Contact</Link>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
