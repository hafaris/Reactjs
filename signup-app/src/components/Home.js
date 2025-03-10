import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => (
  <div className="home-container">
    <h2>Welcome to Retail Website</h2>
    <div className="links">
      <Link to="/register">Sign Up</Link>
      <Link to="/login">Sign In</Link>
    </div>
  </div>
);

export default Home;