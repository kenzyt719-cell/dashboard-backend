import React from "react";
import DashboardNav from "../Components/Layout/DashboardNav";
import Tittlemiddle from "../Components/Common/Tittlemiddle";

import "./EditProject.css";

const EditProject = () => {
  return (
    <>
      <DashboardNav />

      <div className="skills-page maargleft">
        <Tittlemiddle title="Edit Project" />

        <div className="maindiv">

          <div className="divhf">
            <h1 className="h1proj">Project Select</h1>
            <div className="divclassrec"></div>
          </div>

          <div className="divhf">
            <h1 className="h1proj">Project Select</h1>
            <div className="divclassrec"></div>
          </div>

          <div className="divhf">
            <h1 className="h1proj">Project Select</h1>
            <div className="divclassrec"></div>
          </div>

          <div className="divhf">
            <h1 className="h1proj">Project Select</h1>
            <div className="divhfimg"></div>
          </div>

          <div className="divhf">
            <h1 className="h1proj">Project Select</h1>
            <div className="divclassrec"></div>
          </div>

          {/* ⭐ MERGED DESCRIPTION AREA INSIDE THE MAIN DIV ⭐ */}
          <div className="divhf">
            <h1 className="h1proj">Description Area</h1>

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

                <button className="tool-btn">B</button>
                <button className="tool-btn">I</button>
                <button className="tool-btn">U</button>
                <button className="tool-btn">S</button>

                <button className="tool-btn">≡</button>
                <button className="tool-btn">≣</button>

                <button className="tool-btn">1.</button>
                <button className="tool-btn">•</button>

                <button className="tool-btn">🖼️</button>
                <button className="tool-btn">🔗</button>
              </div>

              <textarea
                className="desc-textarea"
                placeholder="Write your project description here..."
              ></textarea>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default EditProject;