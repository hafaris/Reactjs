import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/">Logout</Link>
    </nav>
  );
};

export default Navbar;
