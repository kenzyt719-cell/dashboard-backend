import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import LoginScreen from "./Pages/LoginScreen"; // ✔ added import

const RoutingApp = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Login Page */}
        <Route path="/login" element={<LoginScreen />} />

      </Routes>
    </BrowserRouter>
  );
};

export default RoutingApp;