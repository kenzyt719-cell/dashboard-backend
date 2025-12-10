import React from "react";
import "./ChatScreen.css";
import DashboardNav from "../Components/Layout/DashboardNav";

const ChatScreen = () => {
  return (
    <>
      <DashboardNav />

      <div className="chat-wrapper">
        {/* Header */}
        <div className="chat-header">
          <div className="back-arrow">&#8592;</div>

          <div className="user-info">
            <div className="avatar"></div>
            <div className="user-text">
              <div className="user-name">Nour Nasr</div>
              <div className="user-email">Nournasr@gmail.com</div>
            </div>
          </div>

          <div className="active-status">
            <div className="active-dot"></div>
            <div className="active-text">Active</div>
          </div>
        </div>

        {/* Messages */}
        <div className="chat-body">

          <div className="msg-row left">
            <div className="msg-box left-bg"></div>
            <div className="msg-time">10:23 AM</div>
          </div>

          <div className="msg-row right">
            <div className="msg-box right-bg"></div>
            <div className="msg-time">10:23 AM ✔✔</div>
          </div>

          <div className="msg-row left">
            <div className="msg-box left-bg"></div>
            <div className="msg-time">10:23 AM</div>
          </div>

          <div className="msg-row right">
            <div className="msg-box right-bg"></div>
            <div className="msg-time">10:23 AM ✔✔</div>
          </div>
        </div>

        <div className="chat-input-area">
          <div className="chat-input"></div>
          <button className="send-btn">&#9658;</button>
        </div>
      </div>
    </>
  );
};

export default ChatScreen;