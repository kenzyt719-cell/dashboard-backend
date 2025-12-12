import React from "react";
import DashboardNav from "../Components/Layout/DashboardNav";
import Tittlemiddle from "../Components/Common/Tittlemiddle";

import "./BlogsEdit.css";

const BlogsEdit = () => {
  return (
    <>
      <DashboardNav />

      <div className="maargleft3">

        <Tittlemiddle title="Edit Blogs Details" />

        <div className="edit-container">


          <div className="edit-card">


            <label className="label">Project Select</label>
            <input className="input" type="text" />

  
            <label className="label">Page Title</label>
            <input className="input" type="text" />

  
            <label className="label">Table of Contents</label>
            <textarea className="textarea" />

            <DescriptionEditor title="Description Area" />


            <DescriptionEditor title="Description Area in Arabic" />

  
            <button className="save-btn">Save</button>
          </div>

    
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
    </>
  );
};

export default BlogsEdit;

const DescriptionEditor = ({ title }) => {
  return (
    <div className="field">
      <label className="label">{title}</label>

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
          placeholder="Write your content here..."
        />
      </div>
    </div>
  );
};