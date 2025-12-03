import React from "react";
import DashboardNav from "../Components/Layout/DashboardNav";
import Boxsesfirst from "../Components/Layout/Boxsesfirst";
import Boxblackleft from "../Components/Common/Boxblackleft";

import "./Home.css";

const Home = () => {
  return (
    <>
      <DashboardNav />
      <div className="maargleft">
 

      <Boxsesfirst /> 
      <Boxblackleft />

      </div>
     
    </>
  );
}

export default Home;