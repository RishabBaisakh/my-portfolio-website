import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Sidebar() {
  const location = useLocation();

  console.log("location => ", location);

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

      <div className="sidebar__bottom">
        <a href="#">
          <EmailIcon />
        </a>
        <a href="#">
          <GitHubIcon />
        </a>
        <a href="#">
          <LinkedInIcon />
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
