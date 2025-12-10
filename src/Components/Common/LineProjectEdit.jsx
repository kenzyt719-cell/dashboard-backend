import React from "react";
import edit from "../../Assets/edit.svg";
import trash from "../../Assets/trash.svg";

import "./LineProjectEdit.css";

export default function LineProjectEdit({
  status = "Unknown",
  image = "",
  id = "-",
  tag = "-",
  description = "-",
}) {
  return (
    <div className="line-wrapper">
 
      <div className="left-section">
        <div className={`status-dot ${status === "Published" ? "pub" : "unpub"}`} />

        <h5 className={`status-text ${status === "Published" ? "pub-text" : "unpub-text"}`}>
          {status}
        </h5>

        <div className="image-box">
          {image ? (
            <img src={image} alt="preview" />
          ) : (
            <div className="no-image">No Image</div>
          )}
        </div>
      </div>


      <h4 className="line-id">{id}</h4>
      <h4 className="line-tag">{tag}</h4>
      <h4 className="line-desc">{description}</h4>


      <div className="actions">
        <button className="btn-action">
          <img src={edit} alt="edit" />
        </button>

        <button className="btn-action delete">
          <img src={trash} alt="delete" />
        </button>
      </div>
    </div>
  );
}