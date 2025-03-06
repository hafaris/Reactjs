import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  // Toggle Text State
  const [isVisible, setIsVisible] = useState(false);

  // API Data State
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from API
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container">
      <h1>React App: Toggle & Fetch Data</h1>

      {/* Toggle Visibility Section */}
      <div className="toggle-section">
        <button onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? "Hide" : "Show"} Text
        </button>
        {isVisible && <p className="text">Hello! You toggled me. 🎉</p>}
      </div>

      {/* Fetch and Display API Data */}
      <div className="api-section">
        <h2>Fetched API Data</h2>
        {loading ? (
          <p>Loading posts...</p>
        ) : (
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <strong>{post.title}</strong>
                <p>{post.url}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;
