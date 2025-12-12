import React from "react";
import "./Blogsboxses.css";
import Button from "../Common/Button";

const Blogsboxses = ({ title, descriptionText, icon, mainImg }) => {
  return (
    <div className="Blogsboxses">

      {/* TOP ROW */}
      <div className="top-row-new">

        {/* Left side: Image beside title */}
        <div className="left-side">
          {mainImg && <img src={mainImg} alt="main" className="main-img" />}
          <h1 className="text1">{title}</h1>
        </div>

        {/* Right side: Trash icon */}
        <div>
          {icon && <img src={icon} alt="icon" className="icon-img" />}
        </div>
      </div>

      {/* Description */}
      <h1 className="text2">{descriptionText}</h1>

      {/* Button */}
      <div className="buttonnnn">
        <Button />
      </div>

    </div>
  );
};

export default Blogsboxses;