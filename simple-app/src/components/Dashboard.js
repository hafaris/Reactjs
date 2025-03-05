import React from "react";
import Header from "./Header";

const Dashboard = ({ onLogout }) => {
  return (
    <div>
      <Header onLogout={onLogout} />
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>
        Welcome to Your Dashboard 🚀
      </h2>
    </div>
  );
};

export default Dashboard;
