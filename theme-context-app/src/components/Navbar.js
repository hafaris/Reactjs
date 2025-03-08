import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import "./Navbar.css";

const Navbar = () => {
  const { toggleTheme } = useTheme();

  return (
    <nav>
      <h2>My Website</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </nav>
  );
};

export default Navbar;
