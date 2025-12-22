import React, { useEffect, useState } from "react";
import Tittlemiddle from "../Components/Common/Tittlemiddle";
import DashboardNav from "../Components/Layout/DashboardNav";
import ProjectTable from "../Components/Layout/ProjectTable";
import SeoMain from "../Components/Layout/SeoMain";
import photoprojects from "../Assets/photoprojects.svg"; 
import { Link } from "react-router-dom";
import AddButton from "../Components/Layout/AddButton";
import { supabase } from "../supabase";

import "./Projectsmain.css";

const Projectsmain = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function getProjects() {
      const { data, error } = await supabase
        .from("projectsallllback") // Your table name
        .select("*"); // Select all columns

      if (error) {
        console.error(error);
      } else {
       
        const mappedData = data.map((project) => ({
          id: project.id,
          tag: project.tag,
          description: project.description,
          status: project.status || "Unpublished",
          image: photoprojects,
        }));

        setProjects(mappedData);
      }

      setLoading(false);
    }

    getProjects();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <DashboardNav />

      <div className="maargleft3">
        <Tittlemiddle title="Projects" />
        <Link to="/Addproject">
          <AddButton title="Add Project" />
        </Link>

        <ProjectTable items={projects} />
        <SeoMain />
      </div>
    </>
  );
};

export default Projectsmain;
// import React from "react";
// import Tittlemiddle from "../Components/Common/Tittlemiddle";
// import DashboardNav from "../Components/Layout/DashboardNav";
// import ProjectTable from "../Components/Layout/ProjectTable";
// import SeoMain from "../Components/Layout/SeoMain";
// import photoprojects from "../Assets/photoprojects.svg"; 
// import { Link } from "react-router-dom";

// import AddButton from "../Components/Layout/AddButton";

// import "./Projectsmain.css";

// const dummyItems = [
//   {
//     status: "Published",
//     image: "photoprojects.svg",
//     id: "01",
//     tag: "graphic design",
//     description: "Design project",
//   },
//   {
//     status: "Published",
//   image: "photoprojects.svg",
//     id: "02",
//     tag: "uxui",
//     description: "Website",
//   },
//   {
//     status: "Published",
//       image: "photoprojects.svg",
//     id: "03",
//     tag: "Photography",
//     description: "App",
//   },
//   {
//     status: "Unpublished",
//      image: "photoprojects.svg",
//     id: "04",
//     tag: "uxui",
//     description: "Design project",
//   },
//   {
//     status: "Unpublished",
//   image: "photoprojects.svg",
//     id: "05",
//     tag: "graphic design",
//     description: "Website",
//   },
// ];

// const Projectsmain = () => {
//   return (
//     <>
//       <DashboardNav />

//       <div className="maargleft3">
//         <Tittlemiddle title="Projects" />
//   <Link to="/Addproject">
//    <AddButton title="Add Project" />
//    </Link>
//         <ProjectTable items={dummyItems} />
//         <SeoMain />
//       </div>

//     </>
//   );
// };

// export default Projectsmain;


