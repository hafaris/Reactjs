import React, { useState } from "react";
import "./Login.css";

const Login = ({ onLogin }) => {
  // Hardcoded valid credentials
  const validUsers = [
    { email: "admin@example.com", password: "admin123" },
    { email: "user@example.com", password: "user123" },
  ];

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Check if entered credentials match any valid user
    const user = validUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (!user) {
      setError("Invalid email or password");
      return;
    }

    setError("");
    onLogin(); // Call login function to navigate to Dashboard
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p className="error">{error}</p>}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
