import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/Home");
  };

  return (
    <div className="container">
      <div className="left-section"></div>

      <div className="right-section">
        <h1 className="title">Log In</h1>
        <div className="divider"></div>

        <form className="form" onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
            <p className="forgot">Forgot password?</p>
          </div>

          <button type="submit" className="login-btn">
            Log in
          </button>

          <div className="remember">
            <input type="checkbox" />
            <span>Remember me</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;