import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar({ sidebarNavData }) {
  console.log("sidebar nav data", sidebarNavData);

  return (
    <div className="sidebar">
      {sidebarNavData.map((data) => {
        return (
          <Link className="sidebar__links" to={data.link}>
            <h4>{data.title}</h4>
          </Link>
        );
      })}
    </div>
  );
}

export default Sidebar;
