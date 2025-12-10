import React from "react";
import "./ProfileInfo.css";

const ProfileInfo = () => {
  return (
    <div className="profileinfo">
      <h2 className="profileinfo-title">Profile Information</h2>

      <h3 className="profileinfo-text">
        UX/UI Designer focused on creating clean, intuitive, and user-centered digital
        experiences. Skilled in wireframing, prototyping, design systems, and usability.
        Passionate about turning ideas into seamless, visually balanced interfaces that
        solve real user needs.
      </h3>

      <div className="profileinfo-line"></div>

      <div className="profileinfo-row">
        <div className="profileinfo-col">
          <h3 className="profileinfo-item">Full Name: Alec M. Thompson</h3>
          <h3 className="profileinfo-item">Mobile: (44) 123 1234 123</h3>
          <h3 className="profileinfo-item">Email: alecthompson@mail.com</h3>
        </div>

        <div className="profileinfo-col">
          <h3 className="profileinfo-item">Social Media: —</h3>
          <h3 className="profileinfo-item">Location: United States</h3>
          <h3 className="profileinfo-item">Email: alecthompson@mail.com</h3>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;