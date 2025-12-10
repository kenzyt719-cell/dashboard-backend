import React from "react";
import Tittlemiddle from "../Components/Common/Tittlemiddle";
import DashboardNav from "../Components/Layout/DashboardNav";
import Divboxhome from "../Components/Layout/Divboxhome";
import Profiledivone from "../Components/Layout/Profiledivone";

import { Link } from "react-router-dom";
import "./Profile.css";

 

const Profile = () => {
  return (
    <>
       <DashboardNav />
        <div className="maargleft3">


        <Tittlemiddle title="Profile" />
        <Profiledivone />
        </div>
    </>
  );
};

export default Profile;