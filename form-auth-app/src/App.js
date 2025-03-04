import React, { useState } from 'react';
import './App.css';

const validUsers = [
  { email: 'faris@gmail.com', password: '12345' },
  { email: 'arghya@outlook.com', password: 'password2' },
  { email: 'admin@example.com', password: 'admin123' }
];

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      setErrorMessage('Please fill out both fields.');
      return;
    }
    
    const userExists = validUsers.find(
      (user) => user.email === email && user.password === password
    );
    
    if (userExists) {
      setErrorMessage('');
      alert('Login successful!');
    } else {
      setErrorMessage('Invalid credentials.');
      alert('Invalid credentials.');
    }
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
      <div className="button-container">
        <button onClick={handleLogin}>Login</button>
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default LoginForm;
