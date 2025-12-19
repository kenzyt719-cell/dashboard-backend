import React, { useEffect, useState } from "react";
import DashboardNav from "../Components/Layout/DashboardNav";
import Tittlemiddle from "../Components/Common/Tittlemiddle";
import AddButton from "../Components/Layout/AddButton";
import Divboxhome from "../Components/Layout/Divboxhome";
import { Link } from "react-router-dom";
import trash from "../Assets/trash.png";
import "./Pagelist.css";
import { supabase } from "../supabase";

const Pagelist = () => {
  const [loading, setLoading] = useState(true);
  const [pages, setPages] = useState([]);

  useEffect(() => {
    async function getPages() {
      const { data, error } = await supabase
        .from("pages_dashboard")
        .select("*")
        .limit(6); // ONLY 6 divs

      if (error) {
        console.error(error);
      } else {
        setPages(data);
      }

      setLoading(false);
    }

    getPages();
  }, []);

  if (loading) return <p>Loading...</p>;

  // split pages
  const leftPages = pages.slice(0, 3);
  const rightPages = pages.slice(3, 6);

  return (
    <>
      <DashboardNav />

      <div className="maargleft3">
        <Tittlemiddle title="Pages" />

        <Link to="/Addproject">
          <AddButton title="Add Page" />
        </Link>

        <div className="twdivs">
          {/* LEFT 3 */}
          <div className="boxses2">
            {leftPages.map((page) => (
              <Divboxhome
                key={page.id}
                title={page.title}
                descriptionLabel="Description:"
                descriptionText={page.description}
                icon={trash}
              />
            ))}
          </div>

          {/* RIGHT 3 */}
          <div className="boxses2">
            {rightPages.map((page) => (
              <Divboxhome
                key={page.id}
                title={page.title}
                descriptionLabel="Description:"
                descriptionText={page.description}
                icon={trash}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagelist;