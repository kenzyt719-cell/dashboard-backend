import React from "react";
import "./Profiledivone.css";
import profile from "../../Assets/profile.svg";
import ProfileInfo from "../Common/ProfileInfo";

const Profiledivone = () => {
  return (
    <>


    <div className="profilediv">
        
      <img  src={profile} alt="profile" className="profileimgg" />
     <ProfileInfo />




      <div className="settings-wrapper">

      {/* Left Card */}
      <div className="settings-card">
        <h2 className="title">Platform Settings</h2>
        <p className="sub-title">ACCOUNT</p>

        <div className="toggle-row">
          <span>Email me when someone follows me</span>
          <input type="checkbox" className="toggle" defaultChecked />
        </div>

        <div className="toggle-row">
          <span>Email me when someone answers on my post</span>
          <input type="checkbox" className="toggle" />
        </div>

        <div className="toggle-row">
          <span>Email me when someone likes my project</span>
          <input type="checkbox" className="toggle" defaultChecked />
        </div>

        <div className="toggle-row">
          <span>Push notifications for new followers</span>
          <input type="checkbox" className="toggle" />
        </div>

        <div className="toggle-row">
          <span>Notify me when someone bookmarks my project</span>
          <input type="checkbox" className="toggle" defaultChecked />
        </div>
      </div>

      {/* Middle Card */}
      <div className="settings-card">
        <h2 className="title">Settings</h2>
        <p className="sub-title">Profile Information</p>

        {["Change username", "Change username", "Change username", "Change username", "Change username"].map((t, i) => (
          <div className="row" key={i}>
            <span>{t}</span>
            <span className="arrow">›</span>
          </div>
        ))}
      </div>

      {/* Right Card */}
      <div className="settings-card">
        <h2 className="title">Settings</h2>
        <p className="sub-title">Profile information</p>

        {[
          "Update password",
          "Two-factor authentication",
          "Sign out from all devices",
          "Change username",
          "Change recovery email",
        ].map((t, i) => (
          <div className="row" key={i}>
            <span>{t}</span>
            <span className="arrow">›</span>
          </div>
        ))}
      </div>
    </div>
    </div>
    </>
  );
};

export default Profiledivone;