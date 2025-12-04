import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DashboardNav.css";
import logo from "../../Assets/main logo nav.png";
import NavItem from "../Common/NavItem";

import icon1 from "../../Assets/icon1.svg";
import icon2 from "../../Assets/icon2.svg";
import icon3 from "../../Assets/icon3.svg";
import icon4 from "../../Assets/icon4.svg";
import icon5 from "../../Assets/icon5.svg";
import icon6 from "../../Assets/icon6.svg";
import icon7 from "../../Assets/icon7.svg";
import icon8 from "../../Assets/icon8.svg";

const DashboardNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openProjects, setOpenProjects] = useState(false);
  const [openInbox, setOpenInbox] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      {/* Top Bar Mobile */}
      <div className="mobile-topbar">
        <img src={logo} alt="logo" className="logo" />
        <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </div>

      {/* Sidebar */}
      <nav className={`dashboard-nav ${menuOpen ? "open" : "closed"}`}>
        <ul>
          {/* Main Dashboard */}
          <NavItem icon={icon1} label="Dashboard" onClick={() => navigate("/Home")} />

          {/* Projects with submenu */}
          <NavItem
            icon={icon2}
            label="Projects ▾"
            onClick={() => setOpenProjects(!openProjects)}
          >
            {openProjects && (
              <>
                <li onClick={() => navigate("/SkillsMangment")}>UX/UI</li>
                <li onClick={() => navigate("/EditProject")}>Graphic Design</li>
                <li onClick={() => navigate("/Home")}>Front End</li>
                <li onClick={() => navigate("/Home")}>Photography</li>
                <li onClick={() => navigate("/Home")}>Filmmaking</li>
                <li onClick={() => navigate("/Home")}>Branding</li>
                <li onClick={() => navigate("/Home")}>3D</li>
              </>
            )}
          </NavItem>

          {/* Other sections */}
          <NavItem icon={icon3} label="Categories" onClick={() => navigate("/Home")} />
          <NavItem icon={icon4} label="Pages" onClick={() => navigate("/Home")} />
          <NavItem icon={icon5} label="Skills" onClick={() => navigate("/SkillsMangment")} />

          {/* Inbox with submenu */}
          <NavItem
            icon={icon6}
            label="Inbox ▾"
            onClick={() => setOpenInbox(!openInbox)}
          >
            {openInbox && (
              <>
                <li onClick={() => navigate("/Home")}>Messages</li>
                <li onClick={() => navigate("/Home")}>Favorites</li>
                <li onClick={() => navigate("/Home")}>Deleted</li>
              </>
            )}
          </NavItem>

          {/* Profile */}
          <NavItem icon={icon7} label="Profile" onClick={() => navigate("/Home")} />

          {/* Log Out */}
          <NavItem icon={icon8} label="Log Out" onClick={() => navigate("/")} />
        </ul>
      </nav>
    </>
  );
};

export default DashboardNav;