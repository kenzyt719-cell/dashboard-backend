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
        .from("edit_screen") 
        .select("*");

      if (error) {
        console.error(error);
      } else {
        const mappedData = data.map((project) => ({
          id: project.id,
          tag: project.tag,
          description: project.description,
          status: project.status || "Unpublished",
          image: photoprojects,
          editLink: `/edit/${project.id}`, 
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