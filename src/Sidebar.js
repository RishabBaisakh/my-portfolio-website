import React from "react";
import "./Sidebar.css";
import { Link, useLocation } from "react-router-dom";

function Sidebar({ sidebarNavData }) {
  // try to implement this using useEffect and see what happens....
  let location = useLocation();

  const activeLink = {
    color: "white",
    fontWeight: "900",
    transition: "200ms color ease-in",
  };

  return (
    <div className="sidebar">
      {sidebarNavData.map((data, index) => {
        console.log("location", location);
        console.log("data.link", data.link);

        return (
          <Link key={index} className="sidebar__links" to={data.link}>
            <h4 style={location.pathname == data.link ? activeLink : {}}>
              {data.title}
            </h4>
          </Link>
        );
      })}
    </div>
  );
}

export default Sidebar;
