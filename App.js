import React from "react";
import Register from "./Register";
import Login from "./Login";
import "./App.css"; // General styling for the app

const App = () => {
  return (
    <div className="app-container">
      <div className="auth-container">
        <Register />
        <Login />
      </div>
    </div>
  );
};

export default App;
