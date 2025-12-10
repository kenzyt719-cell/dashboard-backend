import React from "react";
import "./MsgItem.css";

import profile from "../../Assets/profile.svg";
import star from "../../Assets/star.svg";
import trash from "../../Assets/trash.svg";

const MsgItem = ({ name, title, preview, time }) => {
  return (
    <div className="msg1">

    
      {/* <img src={profile} alt="profile" className="msg-profile" /> */}
 <img src={star} alt="star" className="msg-icon star-icon" />
    
      <span className="msg-name">{name}</span>

    
      <span className="msg-title">{title}</span>

     
      <span className="msg-preview">{preview}</span>

    
      <span className="msg-time">{time}</span>

     
      <img src={trash} alt="trash" className="msg-icon delete-icon" />

    </div>
  );
};

export default MsgItem;