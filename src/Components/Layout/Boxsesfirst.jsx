import React from "react";
import "./Boxsesfirst.css";
import Boxhome from "../Common/Boxhome";

import boxhome1 from "../../Assets/boxhome1.svg";
import boxhome2 from "../../Assets/boxhome2.png";
import boxhome3 from "../../Assets/boxhome3.png";

const Boxsesfirst = () => {
  return (
    <>
      <div className="maargleft2">

        <Boxhome
          img={boxhome1}
          title="Website Views"
          subtitle="Last Campaign Performance"
          footer="Sent 2 days ago"
        />

        <Boxhome
          img={boxhome2}
          title="Daily views"
          subtitle="Weekly Growth"
          footer="1,200 new this week"
        />

        <Boxhome
          img={boxhome3}
          title="Completed Tasks"
          subtitle="Sales Funnel Analytics"
          footer="Updated 10 mins ago"
        />

      </div>
    </>
  );
};

export default Boxsesfirst;