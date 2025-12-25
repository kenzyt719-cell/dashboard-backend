import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Msgsscreen from "./Pages/Msgsscreen";
import EditProject from "./Pages/EditProject";
import SkillsMangment from "./Pages/SkillsMangment";
import Projectsmain from "./Pages/Projectsmain";
import ChatScreen from "./Pages/ChatScreen";
import Addproject from "./Pages/Addproject";
import Blogs from "./Pages/Blogs";
import BlogsEdit from "./Pages/BlogsEdit";
import Pagelist from "./Pages/Pagelist";
import Categories from "./Pages/Categories";

const RoutingApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/SkillsMangment" element={<SkillsMangment />} />
        <Route path="/edit/:id" element={<EditProject />} /> {/* رابط التعديل */}
        <Route path="/Profile" element={<Profile />} />
        <Route path="/ChatScreen" element={<ChatScreen />} />
        <Route path="/Projectsmain" element={<Projectsmain />} />
        <Route path="/Msgsscreen" element={<Msgsscreen />} />
        <Route path="/Addproject" element={<Addproject />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/BlogsEdit" element={<BlogsEdit />} />
        <Route path="/Pagelist" element={<Pagelist />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutingApp;