import React from "react";
import { Link } from "react-router-dom";
import trash from "../../Assets/trash.svg";
import edit from "../../Assets/edit.svg";
import { supabase } from "../../supabase";
import "./LineProjectEdit.css";

export default function LineProjectEdit({
  status = "Unknown",
  image = "",
  id = "-",
  tag = "-",
  description = "-",
}) {
  async function deleteRow(rowId) {
    const { error } = await supabase
      .from("edit_screen")
      .delete()
      .eq("id", rowId);

    if (error) console.error("Delete failed:", error);
    else console.log("Deleted successfully:", rowId);
  }

  return (
    <div className="lpe-line-wrapper">
      <div className="lpe-left-section">
        <div
          className={`lpe-status-dot ${
            status === "Published" ? "lpe-pub" : "lpe-unpub"
          }`}
        />
        <h5
          className={`lpe-status-text ${
            status === "Published" ? "lpe-pub-text" : "lpe-unpub-text"
          }`}
        >
          {status}
        </h5>

        <div className="lpe-image-box">
          {image ? <img src={image} alt="preview" /> : <div>No Image</div>}
        </div>
      </div>

      <h4 className="lpe-line-id">{id}</h4>
      <h4 className="lpe-line-tag">{tag}</h4>
      <h4 className="lpe-line-desc">{description}</h4>

      <div className="lpe-actions">
        {/* الرابط هنا يمرر الـ id */}
        <Link to={`/edit/${id}`} className="lpe-btn-action">
          <img src={edit} alt="edit" />
        </Link>

        <button
          onClick={() => deleteRow(id)}
          className="lpe-btn-action lpe-delete"
        >
          <img src={trash} alt="delete" />
        </button>
      </div>
    </div>
  );
}