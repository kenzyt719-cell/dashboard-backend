import React from "react";
import "./NavItem.css";

const NavItem = ({ icon, label, onClick, children }) => {
  return (
    <li className="nav-item">
      <span className="nav-link" onClick={onClick}>
        <img src={icon} className="nav-icon" alt={label} />
        {label}
      </span>

      {children && <ul className="submenu">{children}</ul>}
    </li>
  );
};

export default NavItem;