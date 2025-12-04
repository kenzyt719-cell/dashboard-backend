import React from "react";
import DashboardNav from "../Components/Layout/DashboardNav";
import Boxsesfirst from "../Components/Layout/Boxsesfirst";
import Boxblackleft from "../Components/Common/Boxblackleft";
import Projects from "../Components/Layout/Projects";

import "./Home.css";

const Home = () => {
  return (
    <>
      <DashboardNav />
      <div className="maargleft3">
 

      <Boxsesfirst /> 

      <Boxblackleft />
<Projects />


      </div>
     
    </>
  );
}

export default Home;