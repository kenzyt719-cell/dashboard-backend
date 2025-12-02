import React, { useState } from "react";
import "./DashboardNav.css";
import logo from "../../Assets/main logo nav.png";

// استيراد كل الايقونات SVG
import icon1 from "../../Assets/icon1.svg";
import icon2 from "../../Assets/icon2.svg";
import icon3 from "../../Assets/icon3.svg";
import icon4 from "../../Assets/icon4.svg";
import icon5 from "../../Assets/icon5.svg";
import icon6 from "../../Assets/icon6.svg";
import icon7 from "../../Assets/icon7.svg";
import icon8 from "../../Assets/icon8.svg";

const DashboardNav = () => {
  const [openProjects, setOpenProjects] = useState(false);
  const [openInbox, setOpenInbox] = useState(false);

  return (
    <nav className="dashboard-nav">
      <img src={logo} alt="Main Logo" className="logo" />

      <ul>
        <li>
          <span><img src={icon1} alt="Dashboard" className="nav-icon" /> Dashboard</span>
        </li>

        <li>
          <span onClick={() => setOpenProjects(!openProjects)}>
            <img src={icon2} alt="Projects" className="nav-icon" /> Projects ▾
          </span>
          {openProjects && (
            <ul className="submenu">
              <li>UX/UI</li>
              <li>Graphic Design</li>
              <li>Front End</li>
              <li>Photography</li>
              <li>Filmmaking</li>
              <li>Branding</li>
              <li>3D</li>
            </ul>
          )}
        </li>

        <li>
          <span><img src={icon3} alt="Categories" className="nav-icon" /> Categories</span>
        </li>

        <li>
          <span><img src={icon4} alt="Pages" className="nav-icon" /> Pages</span>
        </li>

        <li>
          <span><img src={icon5} alt="Skills" className="nav-icon" /> Skills</span>
        </li>

        <li>
          <span onClick={() => setOpenInbox(!openInbox)}>
            <img src={icon6} alt="Inbox" className="nav-icon" /> Inbox ▾
          </span>
          {openInbox && (
            <ul className="submenu">
              <li>Messages</li>
              <li>Favorites</li>
              <li>Deleted</li>
            </ul>
          )}
        </li>

        <li>
          <span><img src={icon7} alt="Profile" className="nav-icon" /> Profile</span>
        </li>

        <li>
          <span><img src={icon8} alt="Log Out" className="nav-icon" /> Log Out</span>
        </li>
      </ul>
    </nav>
  );
};

export default DashboardNav;