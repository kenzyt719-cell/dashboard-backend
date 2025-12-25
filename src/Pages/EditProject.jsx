import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DashboardNav from "../Components/Layout/DashboardNav";
import Tittlemiddle from "../Components/Common/Tittlemiddle";
import { supabase } from "../supabase";
import "./EditProject.css";

const EditProject = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function fetchProject() {
      const { data, error } = await supabase
        .from("edit_screen")
        .select("*")
        .eq("id", Number(id))
        .single();

      if (error) {
        console.error(error);
        alert("Project not found!");
      } else {
        setSelectedProject(data);
      }
      setLoading(false);
    }

    fetchProject();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!selectedProject) return <p>Project not found!</p>;

  const handleSave = async () => {
    setSaving(true);
    const { error } = await supabase
      .from("edit_screen")
      .update(selectedProject)
      .eq("id", selectedProject.id);

    if (error) {
      console.error("Error saving project:", error);
      alert("Error saving project");
    } else {
      alert("Project saved successfully!");
    }
    setSaving(false);
  };

  const updateField = (field, value) => {
    setSelectedProject({ ...selectedProject, [field]: value });
  };

  return (
    <>
      <DashboardNav />
      <div className="maargleft3">
        <Tittlemiddle title="Edit Project" />

        <div className="edit-container">
          <div className="edit-card">
            {/* Title 1 */}
            <label className="label">Title 1</label>
            <input
              className="input"
              type="text"
              value={selectedProject.Title1 || ""}
              onChange={(e) => updateField("Title1", e.target.value)}
            />

            {/* Image 1 */}
            <label className="label">Image 1</label>
            <div className="upload-box">
              {selectedProject.Image1 ? (
                <img
                  src={selectedProject.Image1}
                  alt="Image 1"
                  className="preview-img"
                />
              ) : (
                "Upload Image"
              )}
            </div>

            {/* Description 1 */}
            <DescriptionEditor
              description={selectedProject.description1 || ""}
              onChange={(desc) => updateField("description1", desc)}
            />

            {/* Title 2 */}
            <label className="label">Title 2</label>
            <input
              className="input"
              type="text"
              value={selectedProject.Title2 || ""}
              onChange={(e) => updateField("Title2", e.target.value)}
            />

            {/* Image 2 */}
            <label className="label">Image 2</label>
            <div className="upload-box">
              {selectedProject.img2 ? (
                <img
                  src={selectedProject.img2}
                  alt="Image 2"
                  className="preview-img"
                />
              ) : (
                "Upload Image"
              )}
            </div>

            {/* Description 2 */}
            <DescriptionEditor
              description={selectedProject.description2 || ""}
              onChange={(desc) => updateField("description2", desc)}
            />

            {/* Title 3 */}
            <label className="label">Title 3</label>
            <input
              className="input"
              type="text"
              value={selectedProject.title3 || ""}
              onChange={(e) => updateField("title3", e.target.value)}
            />

            {/* Image 3 */}
            <label className="label">Image 3</label>
            <div className="upload-box">
              {selectedProject.img3 ? (
                <img
                  src={selectedProject.img3}
                  alt="Image 3"
                  className="preview-img"
                />
              ) : (
                "Upload Image"
              )}
            </div>

            {/* Description 3 */}
            <DescriptionEditor
              description={selectedProject.description3 || ""}
              onChange={(desc) => updateField("description3", desc)}
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

export default EditProject;

const DescriptionEditor = ({ description, onChange }) => {
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
          value={description}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
};
// import React, { useEffect, useState } from "react";
// import DashboardNav from "../Components/Layout/DashboardNav";
// import Tittlemiddle from "../Components/Common/Tittlemiddle";
// import "./EditProject.css";
// import { supabase } from "../supabase";

// const EditProject = () => {
//   const [loading, setLoading] = useState(true);
//   const [projects, setProjects] = useState([]);
//   const [selectedProject, setSelectedProject] = useState(null);

//   useEffect(() => {
//     async function fetchProjects() {
//       const { data, error } = await supabase.from("edit_screen").select("*");


//       if (error) {
//         console.error(error);
//       } else {
//         setProjects(data);
//         if (data.length > 0) setSelectedProject(data[0]); // default select first project
//       }

//       setLoading(false);
//     }

//     fetchProjects();
//   }, []);

//   if (loading) return <p>Loading...</p>;

//   const handleProjectChange = (e) => {
//     const project = projects.find((p) => p.id === e.target.value);
//     setSelectedProject(project);
//   };

//   return (
//     <>
//       <DashboardNav />
//       <div className="maargleft3">
//         <Tittlemiddle title="Edit Project" />

//         <div className="edit-container">
//           <div className="edit-card">
//             {/* Project Select */}
//             <label className="label">Project Select</label>
//             <select
//               className="input"
//               value={selectedProject?.id || ""}
//               onChange={handleProjectChange}
//             >
//               {projects.map((p) => (
//                 <option key={p.id} value={p.id}>
//                   {p.project} 
//                 </option>
//               ))}
//             </select>

//             {/* Title 1 */}
//             <label className="label">Page Title</label>
//             <input
//               className="input"
//               type="text"
//               value={selectedProject?.title1 || ""}
//               onChange={(e) =>
//                 setSelectedProject({
//                   ...selectedProject,
//                   title1: e.target.value,
//                 })
//               }
//             />

//             {/* Image 1 */}
//             <label className="label">Image 1</label>
//             <div className="upload-box">
//               {selectedProject?.image1 ? (
//                 <img
//                   src={selectedProject.image1}
//                   alt="Image 1"
//                   className="preview-img"
//                 />
//               ) : (
//                 "Upload Image"
//               )}
//             </div>

//             {/* Description 1 */}
//             <DescriptionEditor
//               description={selectedProject?.description1 || ""}
//               onChange={(desc) =>
//                 setSelectedProject({ ...selectedProject, description1: desc })
//               }
//             />

//             {/* Title 2 */}
//             <label className="label">Title 2</label>
//             <input
//               className="input"
//               type="text"
//               value={selectedProject?.title2 || ""}
//               onChange={(e) =>
//                 setSelectedProject({
//                   ...selectedProject,
//                   title2: e.target.value,
//                 })
//               }
//             />

//             {/* Image 2 */}
//             <label className="label">Image 2</label>
//             <div className="upload-box">
//               {selectedProject?.image2 ? (
//                 <img
//                   src={selectedProject.image2}
//                   alt="Image 2"
//                   className="preview-img"
//                 />
//               ) : (
//                 "Upload Image"
//               )}
//             </div>

//             {/* Description 2 */}
//             <DescriptionEditor
//               description={selectedProject?.description2 || ""}
//               onChange={(desc) =>
//                 setSelectedProject({ ...selectedProject, description2: desc })
//               }
//             />

//             {/* Title 3 */}
//             <label className="label">Title 3</label>
//             <input
//               className="input"
//               type="text"
//               value={selectedProject?.title3 || ""}
//               onChange={(e) =>
//                 setSelectedProject({
//                   ...selectedProject,
//                   title3: e.target.value,
//                 })
//               }
//             />

//             {/* Image 3 */}
//             <label className="label">Image 3</label>
//             <div className="upload-box">
//               {selectedProject?.image3 ? (
//                 <img
//                   src={selectedProject.image3}
//                   alt="Image 3"
//                   className="preview-img"
//                 />
//               ) : (
//                 "Upload Image"
//               )}
//             </div>

//             {/* Description 3 */}
//             <DescriptionEditor
//               description={selectedProject?.description3 || ""}
//               onChange={(desc) =>
//                 setSelectedProject({ ...selectedProject, description3: desc })
//               }
//             />

//             {/* GitHub and Live Links */}
//             <label className="label">GitHub Link</label>
//             <input
//               className="input"
//               type="text"
//               placeholder="github.com"
//               value={selectedProject?.github || ""}
//               onChange={(e) =>
//                 setSelectedProject({ ...selectedProject, github: e.target.value })
//               }
//             />

//             <label className="label">Live link</label>
//             <input
//               className="input"
//               type="text"
//               placeholder="yourapp.com"
//               value={selectedProject?.live || ""}
//               onChange={(e) =>
//                 setSelectedProject({ ...selectedProject, live: e.target.value })
//               }
//             />

//             <button className="save-btn">Save</button>
//           </div>

//           {/* SEO Card */}
//           <div className="seo-card">
//             <h2 className="seo-title">SEO</h2>

//             <label className="label">Page Title</label>
//             <input
//               className="input"
//               value={selectedProject?.seoTitle || ""}
//               onChange={(e) =>
//                 setSelectedProject({ ...selectedProject, seoTitle: e.target.value })
//               }
//             />

//             <label className="label">Slug</label>
//             <input
//               className="input"
//               value={selectedProject?.slug || ""}
//               onChange={(e) =>
//                 setSelectedProject({ ...selectedProject, slug: e.target.value })
//               }
//             />

//             <label className="label">Meta Description</label>
//             <textarea
//               className="textarea"
//               value={selectedProject?.metaDescription || ""}
//               onChange={(e) =>
//                 setSelectedProject({
//                   ...selectedProject,
//                   metaDescription: e.target.value,
//                 })
//               }
//             />

//             <label className="label">Meta Description (AR)</label>
//             <textarea
//               className="textarea"
//               value={selectedProject?.metaDescriptionAr || ""}
//               onChange={(e) =>
//                 setSelectedProject({
//                   ...selectedProject,
//                   metaDescriptionAr: e.target.value,
//                 })
//               }
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default EditProject;

// // Description Editor Component
// const DescriptionEditor = ({ description, onChange }) => {
//   return (
//     <div className="field">
//       <label className="label">Description Area</label>
//       <div className="desc-container">
//         <div className="desc-toolbar">
//           <select className="font-size-select">
//             <option>14</option>
//             <option>16</option>
//             <option>18</option>
//           </select>
//           <select className="heading-select">
//             <option>H2</option>
//             <option>H3</option>
//             <option>H4</option>
//           </select>
//           <div className="tool-group">
//             <button className="tool-btn">B</button>
//             <button className="tool-btn">I</button>
//             <button className="tool-btn">U</button>
//             <button className="tool-btn">S</button>
//           </div>
//           <div className="tool-group">
//             <button className="tool-btn">≡</button>
//             <button className="tool-btn">≣</button>
//             <button className="tool-btn">1.</button>
//             <button className="tool-btn">•</button>
//           </div>
//           <div className="tool-group right">
//             <button className="tool-btn">🖼️</button>
//             <button className="tool-btn">🔗</button>
//           </div>
//         </div>
//         <textarea
//           className="desc-textarea"
//           placeholder="Write your project description here..."
//           value={description}
//           onChange={(e) => onChange(e.target.value)}
//         />
//       </div>
//     </div>
//   );
// };