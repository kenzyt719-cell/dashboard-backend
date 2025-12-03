import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import LoginScreen from "./Pages/LoginScreen"; // ✔ added import

import SkillsMangment from "./Pages/SkillsMangment"; // ✔ added import

const RoutingApp = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Login Page */}
        <Route path="/login" element={<LoginScreen />} />

        <Route path="/SkillsMangment" element={<SkillsMangment />} />


      </Routes>
    </BrowserRouter>
  );
};

export default RoutingApp;