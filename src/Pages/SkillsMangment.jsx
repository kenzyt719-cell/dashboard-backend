import React from "react";
import Tittlemiddle from "../Components/Common/Tittlemiddle";
import DashboardNav from "../Components/Layout/DashboardNav";
import Divboxhome from "../Components/Layout/Divboxhome";

import "./SkillsMangment.css";

const SkillsMangment = () => {
  return (
    <>
      <DashboardNav />
      <div className="skills-page maargleft">
        <Tittlemiddle title="Skills Management" />
        {/* <Divboxhome /> */}
      </div>
    </>
  );
};

export default SkillsMangment;