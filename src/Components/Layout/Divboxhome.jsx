import React from "react";
import "./Divboxhome.css";
import Button from "../Common/Button";

const Divboxhome = () => {
  return (
    <div className="divboxhome">
      <div>
        <h1 className="text1">Graphic Designer</h1>
        <h1 className="text1">Description:</h1>
      </div>

      <h1 className="text2">
        Develop creative visual concepts and designs that strengthen brand
        communication across print and digital platforms.
      </h1>

      <Button />
    </div>
  );
};

export default Divboxhome;