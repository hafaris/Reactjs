import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">Toggle Text</Link>
      <Link to="/fetch">Fetch Data</Link>
    </div>
  );
};

export default Navbar;
