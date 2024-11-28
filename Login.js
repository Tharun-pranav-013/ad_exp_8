import React, { useState } from "react";
import axios from "axios";
import "./FormStyles.css"; // Styling for the forms

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        username,
        password,
      });
      alert(response.data.message);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="input-container">
          <i className="fas fa-user input-icon"></i>
          <input
            type="text"
            placeholder="Enter Username"
            className="form-input"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <i className="fas fa-lock input-icon"></i>
          <input
            type="password"
            placeholder="Enter Password"
            className="form-input"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="form-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
