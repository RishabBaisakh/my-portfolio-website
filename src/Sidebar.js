import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  const sidebarNavData = [
    {
      title: "About",
      link: "/",
    },
    {
      title: "Skills",
      link: "/skills",
    },
    {
      title: "Education",
      link: "/education",
    },
    {
      title: "Experience",
      link: "/experience",
    },
    {
      title: "Work",
      link: "/work",
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ];

  return (
    <div className="sidebar">
      {sidebarNavData.map((data) => {
        return (
          <Link className="sidebar__links" to={data.link}>
            <h2>{data.title}</h2>
          </Link>
        );
      })}
    </div>
  );
}

export default Sidebar;
