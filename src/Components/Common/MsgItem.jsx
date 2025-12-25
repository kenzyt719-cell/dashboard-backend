import React from "react";
import "./MsgItem.css";

import star from "../../Assets/star.svg";
import trash from "../../Assets/trash.svg";

const MsgItem = ({ id, name, title, preview, time, onDelete }) => {
  return (
    <div className="msg1">
      <img src={star} alt="star" className="msg-icon star-icon" />

      <span className="msg-name">{name}</span>
      <span className="msg-title">{title}</span>
      <span className="msg-preview">{preview}</span>
      <span className="msg-time">{time}</span>

      {/* 🗑 DELETE */}
      <img
        src={trash}
        alt="trash"
        className="msg-icon delete-icon"
        onClick={() => onDelete(id)}
      />
    </div>
  );
};

export default MsgItem;