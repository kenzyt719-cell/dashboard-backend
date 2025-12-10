import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Msgsscreen from "./Pages/Msgsscreen";
import EditProject from "./Pages/EditProject";
import SkillsMangment from "./Pages/SkillsMangment";

const RoutingApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/SkillsMangment" element={<SkillsMangment />} />
        <Route path="/EditProject" element={<EditProject />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Msgsscreen" element={<Msgsscreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutingApp;