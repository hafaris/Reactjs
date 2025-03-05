import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="page">
      <h1>Latest Blogs 📝</h1>
      <ul>
        <li><strong>React Router Guide</strong> - Learn how to use React Router in your projects.</li>
        <li><strong>React Hooks Explained</strong> - A deep dive into useState, useEffect, and more.</li>
        <li><strong>Styling in React</strong> - Explore different ways to style your React components.</li>
      </ul>
    </div>
  );
};

export default Blogs;
