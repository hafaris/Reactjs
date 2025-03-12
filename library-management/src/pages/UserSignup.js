import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserSignup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    if (username && password) {
      localStorage.setItem("user", JSON.stringify({ username, password }));
      alert("User Registered! Please Log In.");
      navigate("/user-login");
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User Sign Up</h1>
      <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
}
