import React from "react";
import Tittlemiddle from "../Components/Common/Tittlemiddle";
import DashboardNav from "../Components/Layout/DashboardNav";
import Msgdiv from "../Components/Layout/Msgdiv";

import "./Msgsscreen.css";

const Msgsscreen = () => {
  return (
    <>
      <DashboardNav />

      <div className="maargleft3">
        <Tittlemiddle title="Profile" />
        <Msgdiv />
      </div>
    </>
  );
};

export default Msgsscreen;