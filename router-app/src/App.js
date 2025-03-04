import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to our website. Navigate using the menu above.</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>We are a team of developers passionate about creating amazing applications.</p>
    </div>
  );
}

function Services() {
  return (
    <div>
      <h1>Our Services</h1>
      <ul>
        <li>Web Development</li>
        <li>App Development</li>
        <li>UI/UX Design</li>
      </ul>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Email: support@example.com</p>
      <p>Phone: +123 456 7890</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact  />} />
      </Routes>
    </Router>
  );
}

export default App;
