import React from "react";
import "./ThemeToggleButton.css";

function ThemeToggleButton() {
  return (
    <div className="themeToggleButton">
      {/* <input type="checkbox" checked> */}
      <input type="checkbox" />
      <span className="switch-left">On</span>
      <span className="switch-right">Off</span>
    </div>
  );
}

export default ThemeToggleButton;
