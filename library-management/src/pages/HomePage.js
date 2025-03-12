import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to the Library Management System</h1>
      <p>Browse books, issue and return books, and manage your account.</p>
      
      <div style={{ marginTop: "20px" }}>
        <button 
          onClick={() => navigate("/admin-login")} 
          style={{ marginRight: "10px", padding: "10px 20px", fontSize: "16px" }}
        >
          Admin Login
        </button>

        <button 
          onClick={() => navigate("/user-signup")} 
          style={{ padding: "10px 20px", fontSize: "16px" }}
        >
          User Signup
        </button>
      </div>
    </div>
  );
}
