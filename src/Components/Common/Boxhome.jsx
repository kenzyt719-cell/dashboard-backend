import React from "react";
import "./Boxhome.css";

const Boxhome = ({ img, title, subtitle, footer }) => {
  return (
    <>
      <div className="divbox">
        <img src={img} className="styleimg" alt={title} />
        
        <h2 className="webtir1">{title}</h2>
        <h3 className="webtir2">{subtitle}</h3>

        <hr />

        <h3 className="webtir2">{footer}</h3>
      </div>
    </>
  );
};

export default Boxhome;