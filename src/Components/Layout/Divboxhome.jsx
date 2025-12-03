import React from "react";
import "./Divboxhome.css";
import Button from "../Common/Button";

const Divboxhome = ({ title, descriptionLabel, descriptionText, icon }) => {
  return (
    <div className="divboxhome">
      <div className="top-row">
        <div className="displayone">
          <h1 className="text1">{title}</h1>
          <h1 className="text1">{descriptionLabel}</h1>
        </div>

        <div>
          {icon && <img src={icon} alt="icon" className="icon-img" />}
        </div>
      </div>

      <h1 className="text2">{descriptionText}</h1>

      <Button />
    </div>
  );
};

export default Divboxhome;