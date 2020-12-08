import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar({ sidebarNavData }) {
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
