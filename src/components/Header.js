import React from "react";

function Header({ title, color }) {
  return (
    <div className="header">
      <h1>{title}</h1>
      <button style={{ backgroundColor: color }} className="btn">
        Add
      </button>
    </div>
  );
}

export default Header;
