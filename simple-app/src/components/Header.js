import React from "react";
import { useState } from "react";
import "./Header.css";

const Header = ({ onLogout }) => {
  const [active, setActive] = useState("home");

  return (
    <header className="Header">
      <div className="logo">🚀 Dashboard</div>
      <nav>
        <ul>
          <li
            className={active === "home" ? "active" : ""}
            onClick={() => setActive("home")}
          >
            Home
          </li>
          <li
            className={active === "profile" ? "active" : ""}
            onClick={() => setActive("profile")}
          >
            Profile
          </li>
          <li
            className={active === "settings" ? "active" : ""}
            onClick={() => setActive("settings")}
          >
            Settings
          </li>
          <li className="logout" onClick={onLogout}>
            Logout
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
