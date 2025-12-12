import React from "react";
import Tittlemiddle from "../Components/Common/Tittlemiddle";
import DashboardNav from "../Components/Layout/DashboardNav";
import ProjectTable from "../Components/Layout/ProjectTable";
import SeoMain from "../Components/Layout/SeoMain";
import photoprojects from "../Assets/photoprojects.svg"; 


import "./Projectsmain.css";

const dummyItems = [
  {
    status: "Published",
    image: "photoprojects.svg",
    id: "01",
    tag: "graphic design",
    description: "Design project",
  },
  {
    status: "Published",
  image: "photoprojects.svg",
    id: "02",
    tag: "uxui",
    description: "Website",
  },
  {
    status: "Published",
      image: "photoprojects.svg",
    id: "03",
    tag: "Photography",
    description: "App",
  },
  {
    status: "Unpublished",
     image: "photoprojects.svg",
    id: "04",
    tag: "uxui",
    description: "Design project",
  },
  {
    status: "Unpublished",
  image: "photoprojects.svg",
    id: "05",
    tag: "graphic design",
    description: "Website",
  },
];

const Projectsmain = () => {
  return (
    <>
      <DashboardNav />

      <div className="maargleft3">
        <Tittlemiddle title="Projects" />

        <ProjectTable items={dummyItems} />
        <SeoMain />
      </div>

    </>
  );
};

export default Projectsmain;