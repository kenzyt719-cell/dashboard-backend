import React from "react";
import DashboardNav from "../Components/Layout/DashboardNav";
import Tittlemiddle from "../Components/Common/Tittlemiddle";
import Blogsboxses from "../Components/Layout/Blogsboxses";

import trash from "../Assets/trash.png";
import uiuxImg from "../Assets/uiux.png"; // <-- your main image
import { Link } from "react-router-dom";

import "./Blogs.css";

const Blogs = () => {
  return (
    <>
      <DashboardNav />

      <div className="maargleft3">

        <Tittlemiddle title="Blogs" />
 <div className="boxblogsdiv">

  <Link to="/BlogsEdit">
        <Blogsboxses
          title="UI/UX Designer"
          descriptionText="Create user-centered interfaces and interactive experiences that enhance usability and engagement."
          icon={trash}
          mainImg={uiuxImg}
        />
</Link>
               <Blogsboxses
          title="UI/UX Designer"
          descriptionText="Create user-centered interfaces and interactive experiences that enhance usability and engagement."
          icon={trash}
          mainImg={uiuxImg}
        />

               <Blogsboxses
          title="UI/UX Designer"
          descriptionText="Create user-centered interfaces and interactive experiences that enhance usability and engagement."
          icon={trash}
          mainImg={uiuxImg}
        />

               <Blogsboxses
          title="UI/UX Designer"
          descriptionText="Create user-centered interfaces and interactive experiences that enhance usability and engagement."
          icon={trash}
          mainImg={uiuxImg}
        />
 </div>
      </div>
    </>
  );
}

export default Blogs;