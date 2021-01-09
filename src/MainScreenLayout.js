import React from "react";
import "./MainScreenLayout.css";

function MainScreenLayout({ title, children }) {
  return (
    <div className="mainScreenLayout">
      <div className="mainScreenLayout__header">
        <h1>{title}...</h1>
      </div>
      <div className="mainScreenLayout__body">{children}</div>
    </div>
  );
}

export default MainScreenLayout;
