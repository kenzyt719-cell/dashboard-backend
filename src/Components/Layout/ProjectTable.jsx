import React from "react";
import "./ProjectTable.css";
import LineProjectEdit from "../Common/LineProjectEdit";

export default function ProjectTable({ items = [] }) {
  return (
    <div className="project-table-wrapper">
      <div className="header-row">
        <h4>Image</h4>
        <h4>ID</h4>
        <h4>Tag</h4>
        <h4>Description</h4>
        <h4>Actions</h4>
      </div>

      <div className="lines-area">
        {items.map((item, index) => (
          <LineProjectEdit
            key={index}
            status={item.status}
            image={item.image}
            id={item.id}
            tag={item.tag}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}