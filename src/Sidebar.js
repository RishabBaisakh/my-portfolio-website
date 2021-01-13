import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Sidebar() {
  const location = useLocation();
  const [hoverLink, setHoverLink] = useState("");
  const LinkData = ["Skills", "Projects", "Education", "Experience", "Contact"];
  const activeLinkStyle = {
    color: "white",
  };

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <img src="/my-portfolio-website/myImage.png" alt="" />
        <Link to="/">
          <h1>Rishab Baisakh</h1>
          <h2>Web Developer</h2>
        </Link>
      </div>

      <div className="sidebar__links">
        <ul>
          {LinkData.map((link, index) => (
            <Link
              onMouseEnter={() => setHoverLink(link)}
              onMouseLeave={() => setHoverLink("")}
              style={
                location.pathname === `/${link.toLowerCase()}`
                  ? activeLinkStyle
                  : null
              }
              key={index}
              to={`/${link.toLowerCase()}`}
            >
              {location.pathname === `/${link.toLowerCase()}` ||
              link === hoverLink
                ? `<${link} />`
                : link}
            </Link>
          ))}
        </ul>
      </div>

      <div className="sidebar__bottom">
        <a href="mailto:rishab.baisakh@gmail.com" target="_blank">
          <EmailIcon />
        </a>
        <a href="https://github.com/RishabBaisakh" target="_blank">
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/rishab-baisakh/" target="_blank">
          <LinkedInIcon />
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
