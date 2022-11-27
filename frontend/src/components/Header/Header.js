import React from "react";
import "./header.style.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="name">
        <h1> Welcome , My Name</h1>
      </div>

      <div className="logout_btn">
        <h1>Logout</h1>
      </div>
    </div>
  );
};

export default Header;
