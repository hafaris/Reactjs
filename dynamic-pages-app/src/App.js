import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Importing Pages from /pages folder
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Post from './pages/Post';
import NotFound from './pages/NotFound';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        {/*  Navigation Menu */}
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/post/1">Post 1</Link></li>
            <li><Link to="/post/2">Post 2</Link></li>
          </ul>
        </nav>

        {/* Route Management */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
