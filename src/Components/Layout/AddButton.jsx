import React from "react";
import "./AddButton.css";

const AddButton = ({ title = "Add Categories" }) => {
  return (
    <div className="addb">
      <h1 className="AddCtetctc">{title}</h1>
    </div>
  );
};

export default AddButton;