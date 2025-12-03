import React from "react";
import "./LoginScreen.css";

const LoginScreen = () => {
  return (
    <div className="container">
      {/* Left Image Section */}
      <div className="left-section">
     
      </div>

      {/* Right Form Section */}
      <div className="right-section">
        <h1 className="title">log In</h1>
        <div className="divider"></div>

        <form className="form">
          <div className="input-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
            <p className="forgot">Forgot password?</p>
          </div>

          <button className="login-btn">Log in</button>

          <div className="remember">
            <input type="checkbox" />
            <span>Remember me</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;