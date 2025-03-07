import React, { useState } from "react";
import "./TogglePage.css";

const TogglePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="page">
      <h1>Toggle Text Button</h1>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"} Text
      </button>
      {isVisible && <p className="text">Hello! The Toggled Text is visible.</p>}
    </div>
  );
};

export default TogglePage;
