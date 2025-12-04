import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Kenzy from "./Pages/Kenzy"; // ✔ added import

import EditProject from "./Pages/EditProject"; // ✔ added import
import SkillsMangment from "./Pages/SkillsMangment"; // ✔ added import

const RoutingApp = () => {
  return (
    <BrowserRouter>
      <Routes>


        <Route path="/" element={<Kenzy />} />

        <Route path="/Home" element={<Home />} />

        <Route path="/SkillsMangment" element={<SkillsMangment />} />

        <Route path="/EditProject" element={<EditProject />} />


      </Routes>
    </BrowserRouter>
  );
};

export default RoutingApp;