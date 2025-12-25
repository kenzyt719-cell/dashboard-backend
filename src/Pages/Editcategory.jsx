import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DashboardNav from "../Components/Layout/DashboardNav";
import Tittlemiddle from "../Components/Common/Tittlemiddle";
import { supabase } from "../supabase";
import "./Addcategory.css"; 

const Editcategory = () => {
  const { id } = useParams();
  const [category, setCategory] = useState({ title: "", project_description: "", thumbnail: "" });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  
  useEffect(() => {
    async function fetchCategory() {
      const { data, error } = await supabase
        .from("Categories")
        .select("*")
        .eq("id", Number(id))
        .single();

      if (error) console.error(error);
      else if (data) setCategory({
        title: data.title || "",
        project_description: data.project_description || "",
        thumbnail: data.thumbnail || ""
      });

      setLoading(false);
    }

    if (id) fetchCategory();
    else setLoading(false);
  }, [id]);

  const updateField = (field, value) => {
    setCategory({ ...category, [field]: value });
  };

  const handleSave = async () => {
    if (!category.title || !category.project_description || !category.thumbnail) {
      alert("Please fill all fields");
      return;
    }

    setSaving(true);

    const { error } = await supabase
      .from("Categories")
      .update(category)
      .eq("id", Number(id));

    if (error) alert("Error saving: " + error.message);
    else alert("Saved successfully!");

    setSaving(false);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <DashboardNav />
      <div className="maargleft3">
        <Tittlemiddle title="Edit Category" />
        <div className="edit-container">
          <div className="edit-card">
            <label className="label">Thumbnail URL</label>
            <input
              className="input"
              type="text"
              value={category.thumbnail}
              onChange={(e) => updateField("thumbnail", e.target.value)}
            />

            <label className="label">Title</label>
            <input
              className="input"
              type="text"
              value={category.title}
              onChange={(e) => updateField("title", e.target.value)}
            />

            <label className="label">Project Description</label>
            <textarea
              className="textarea"
              value={category.project_description}
              onChange={(e) => updateField("project_description", e.target.value)}
            />

            <button className="save-btn" onClick={handleSave} disabled={saving}>
              {saving ? "Saving..." : "Save"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Editcategory;