import React from "react";
import DashboardNav from "../Components/Layout/DashboardNav";
import Tittlemiddle from "../Components/Common/Tittlemiddle";


import Divboxhome from "../Components/Layout/Divboxhome";
import { Link } from "react-router-dom";


import trash from "../Assets/trash.png";
import "./Pagelist.css";

const Pagelist= () => {
  return (
    <>
      <DashboardNav />
           <div className="maargleft3">


        <Tittlemiddle title="Pages" />
       <div className="boxses">

<div className="boxses2">

  <Link to="/Blogs">
    <Divboxhome
      title="blogs screen"
      descriptionLabel="Description:"
      descriptionText="Develop creative visual concepts and designs that strengthen brand communication across print and digital platforms."
      icon={trash}
    />
  </Link>

  <Divboxhome
    title="UI/UX Designer"
    descriptionLabel="Description:"
    descriptionText="Create user-centered interfaces and interactive experiences that enhance usability and engagement."
    icon={trash}
  />

</div>
<div className="boxses2">
        <Divboxhome
          title="Frontend Developer"
          descriptionLabel="Description:"
          descriptionText="Build responsive and dynamic web applications using HTML, CSS, JavaScript and modern frameworks."
          icon={trash}
        />

        <Divboxhome
          title="Photographer"
          descriptionLabel="Description:"
          descriptionText="Capture high-quality photos and visual content for events, brands and creative campaigns."
          icon={trash}
        />
</div>
<div className="boxses2">
        <Divboxhome
          title="Video Editor"
          descriptionLabel="Description:"
          descriptionText="Edit and assemble recorded raw footage into polished projects with motion graphics and transitions."
          icon={trash}
        />

        <Divboxhome
          title="Social Media Designer"
          descriptionLabel="Description:"
          descriptionText="Design posts, ads and creative assets that boost brand presence and engagement on social platforms."
          icon={trash}
        />
</div>

      </div>
             </div>
    </>
  );
};

export default Pagelist;