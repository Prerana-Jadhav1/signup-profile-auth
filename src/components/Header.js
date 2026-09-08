import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <span className="logo">Header</span>
      <div className="nav-links">
        <Link to="/" id="signup-link">Signup</Link>
        <Link to="/profile" id="profile-link">Profile</Link>
      </div>
    </div>
  );
};

export default Header;
