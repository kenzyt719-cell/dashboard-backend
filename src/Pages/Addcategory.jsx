import React, { useState } from "react";
import DashboardNav from "../Components/Layout/DashboardNav";
import Tittlemiddle from "../Components/Common/Tittlemiddle";
import { supabase } from "../supabase";
import "./Addcategory.css";

const DescriptionEditor = ({ value, onChange }) => (
  <div className="field">
    <label className="label">Description Area</label>
    <textarea
      className="desc-textarea"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Write your description here..."
    />
  </div>
);

const Addcategory = () => {
  const [saving, setSaving] = useState(false);

  const [project, setProject] = useState({
    Project: "",
    Title1: "",
    Image1: "",
    description1: "",
    Title2: "",
    img2: "",
    description2: "",
    title3: "",
    img3: "",
    description3: "",
    idnumber: "",
    tag: "",
    description: "",
  });

  const updateField = (field, value) => {
    setProject({ ...project, [field]: value });
  };

  const handleSave = async () => {
    setSaving(true);
    const { data, error } = await supabase.from("edit_screen").insert([project]);
    if (error) {
      console.error("Error adding project:", error);
      alert("Error adding project: " + error.message);
    } else {
      alert("Project added successfully!");
      setProject({
        Project: "",
        Title1: "",
        Image1: "",
        description1: "",
        Title2: "",
        img2: "",
        description2: "",
        title3: "",
        img3: "",
        description3: "",
        idnumber: "",
        tag: "",
        description: "",
      });
    }
    setSaving(false);
  };

  return (
    <>
      <DashboardNav />
      <div className="maargleft3">
        <Tittlemiddle title="Add Project" />
        <div className="edit-container">
          <div className="edit-card">
            <label className="label">Project</label>
            <input
              className="input"
              type="text"
              value={project.Project}
              onChange={(e) => updateField("Project", e.target.value)}
            />

            <label className="label">Title 1</label>
            <input
              className="input"
              type="text"
              value={project.Title1}
              onChange={(e) => updateField("Title1", e.target.value)}
            />

            <label className="label">Image 1</label>
            <input
              className="input"
              type="text"
              value={project.Image1}
              onChange={(e) => updateField("Image1", e.target.value)}
            />

            <DescriptionEditor
              value={project.description1}
              onChange={(val) => updateField("description1", val)}
            />

            <label className="label">Title 2</label>
            <input
              className="input"
              type="text"
              value={project.Title2}
              onChange={(e) => updateField("Title2", e.target.value)}
            />

            <label className="label">Image 2</label>
            <input
              className="input"
              type="text"
              value={project.img2}
              onChange={(e) => updateField("img2", e.target.value)}
            />

            <DescriptionEditor
              value={project.description2}
              onChange={(val) => updateField("description2", val)}
            />

            <label className="label">Title 3</label>
            <input
              className="input"
              type="text"
              value={project.title3}
              onChange={(e) => updateField("title3", e.target.value)}
            />

            <label className="label">Image 3</label>
            <input
              className="input"
              type="text"
              value={project.img3}
              onChange={(e) => updateField("img3", e.target.value)}
            />

            <DescriptionEditor
              value={project.description3}
              onChange={(val) => updateField("description3", val)}
            />

            <label className="label">ID Number</label>
            <input
              className="input"
              type="text"
              value={project.idnumber}
              onChange={(e) => updateField("idnumber", e.target.value)}
            />

            <label className="label">Tag</label>
            <input
              className="input"
              type="text"
              value={project.tag}
              onChange={(e) => updateField("tag", e.target.value)}
            />

            <label className="label">Description</label>
            <textarea
              className="textarea"
              value={project.description}
              onChange={(e) => updateField("description", e.target.value)}
            />

            <label className="label">Status</label>
            <select
              className="input"
              value={project.status}
              onChange={(e) => updateField("status", e.target.value)}
            >
              <option value="Published">Published</option>
              <option value="Unpublished">Unpublished</option>
            </select>

            <button className="save-btn" onClick={handleSave} disabled={saving}>
              {saving ? "Saving..." : "Save"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addcategory;