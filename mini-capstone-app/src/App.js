import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TogglePage from "./pages/TogglePage";
import FetchDataPage from "./pages/FetchDataPage";
import Navbar from "./components/Navbar";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<TogglePage />} />
        <Route path="/fetch" element={<FetchDataPage />} />
      </Routes>
    </Router>
  );
};

export default App;
