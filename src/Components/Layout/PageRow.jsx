import React from "react";
import eyeIcon from "../../Assets/eye.png";
import editIcon from "../../Assets/edit.svg";
import trashIcon from "../../Assets/trash.svg";
import "./PageRow.css";

const PageRow = ({ title, lastEdited, status }) => {
  return (
    <div className="page-row">
      <div className="page-info">
        <img src={eyeIcon} alt="view" className="icon" />
        <span className="page-title">{title}</span>
      </div>
      <div className="page-edited">{lastEdited}</div>
      <div className={`page-status ${status.toLowerCase()}`}>
        {status}
      </div>
      <div className="page-actions">
        <img src={editIcon} alt="edit" className="icon action-icon" />
        <img src={trashIcon} alt="delete" className="icon action-icon" />
      </div>
    </div>
  );
};

export default PageRow;