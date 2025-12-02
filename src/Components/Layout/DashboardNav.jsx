import React, { useState } from "react";
import "./DashboardNav.css";
import logo from "../../Assets/main logo nav.png";
import NavItem from "../Common/NavItem";



// icons
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
        <NavItem icon={icon1} label="Dashboard" />

        <NavItem
          icon={icon2}
          label="Projects ▾"
          onClick={() => setOpenProjects(!openProjects)}
        >
          {openProjects && (
            <>
              <li>UX/UI</li>
              <li>Graphic Design</li>
              <li>Front End</li>
              <li>Photography</li>
              <li>Filmmaking</li>
              <li>Branding</li>
              <li>3D</li>
            </>
          )}
        </NavItem>

        <NavItem icon={icon3} label="Categories" />

        <NavItem icon={icon4} label="Pages" />

        <NavItem icon={icon5} label="Skills" />

        <NavItem
          icon={icon6}
          label="Inbox ▾"
          onClick={() => setOpenInbox(!openInbox)}
        >
          {openInbox && (
            <>
              <li>Messages</li>
              <li>Favorites</li>
              <li>Deleted</li>
            </>
          )}
        </NavItem>

        <NavItem icon={icon7} label="Profile" />

        <NavItem icon={icon8} label="Log Out" />
      </ul>
    </nav>
  );
};

export default DashboardNav;