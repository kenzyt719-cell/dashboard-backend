import React from "react";
import DashboardNav from "../Components/Layout/DashboardNav";
import Tittlemiddle from "../Components/Common/Tittlemiddle";

import "./EditProject.css";

const EditProject = () => {
  return (
    <>
      <DashboardNav />
       <div className="maargleft3">

      <div className="skills-page maargleft">
        <Tittlemiddle title="Edit Project" />

        <div className="edit-container">

          <div className="edit-card">

            {/* Project Select */}
            <label className="label">Project Select</label>
            <input className="input" type="text" />

            {/* Page Title */}
            <label className="label">Page Title</label>
            <input className="input" type="text" />

            {/* IMAGE 1 */}
            <label className="label">Image 1</label>
            <div className="upload-box">Upload Image</div>

            {/* DESC 1 */}
            <DescriptionEditor />

            {/* Title 2 */}
            <label className="label">Title 2</label>
            <input className="input" type="text" />

            {/* IMAGE 2 */}
            <label className="label">Image 2</label>
            <div className="upload-box">Upload Image</div>

            {/* DESC 2 */}
            <DescriptionEditor />

            {/* Title 3 */}
            <label className="label">Title 3</label>
            <input className="input" type="text" />

            {/* IMAGE 3 */}
            <label className="label">Image 3</label>
            <div className="upload-box">Upload Image</div>

            {/* DESC 3 */}
            <DescriptionEditor />

            {/* Github + live link */}
            <label className="label">GitHub Link</label>
            <input className="input" type="text" placeholder="github.com" />

            <label className="label">Live link</label>
            <input className="input" type="text" placeholder="yourapp.com" />

            <button className="save-btn">Save</button>
          </div>

          {/* SEO CARD */}
          <div className="seo-card">
            <h2 className="seo-title">SEO</h2>

            <label className="label">Page Title</label>
            <input className="input" />

            <label className="label">Slug</label>
            <input className="input" />

            <label className="label">Meta Description</label>
            <textarea className="textarea"></textarea>

            <label className="label">Meta Description (AR)</label>
            <textarea className="textarea"></textarea>
          </div>

        </div>
      </div>
      </div>
    </>
  );
};


export default EditProject;

// ⭐ Reusable Editor Component
const DescriptionEditor = () => {
  return (
    <div className="field">
      <label className="label">Description Area</label>

      <div className="desc-container">

        <div className="desc-toolbar">
          <select className="font-size-select">
            <option>14</option>
            <option>16</option>
            <option>18</option>
          </select>

          <select className="heading-select">
            <option>H2</option>
            <option>H3</option>
            <option>H4</option>
          </select>

          <div className="tool-group">
            <button className="tool-btn">B</button>
            <button className="tool-btn">I</button>
            <button className="tool-btn">U</button>
            <button className="tool-btn">S</button>
          </div>

          <div className="tool-group">
            <button className="tool-btn">≡</button>
            <button className="tool-btn">≣</button>
            <button className="tool-btn">1.</button>
            <button className="tool-btn">•</button>
          </div>

          <div className="tool-group right">
            <button className="tool-btn">🖼️</button>
            <button className="tool-btn">🔗</button>
          </div>
        </div>

        <textarea
          className="desc-textarea"
          placeholder="Write your project description here..."
        />
      </div>
    </div>
    
  );
};