import React, { useEffect, useState } from "react";
import DashboardNav from "../Components/Layout/DashboardNav";
import Tittlemiddle from "../Components/Common/Tittlemiddle";
import Divboxhome from "../Components/Layout/Divboxhome";
import { Link } from "react-router-dom";
import trash from "../Assets/trash.png";
import "./Categories.css";
import AddButton from "../Components/Layout/AddButton";
import { supabase } from "../supabase";

const Categories = () => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getCategories() {
      const { data, error } = await supabase
        .from("Categories")
        .select("*")
        .limit(6);

      if (error) console.error(error);
      else setCategories(data);

      setLoading(false);
    }

    getCategories();
  }, []);

  if (loading) return <p>Loading...</p>;

  const leftCategories = categories.slice(0, 3);
  const rightCategories = categories.slice(3, 6);

  const handleDelete = (deletedId) => {
    setCategories(categories.filter((cat) => cat.id !== deletedId));
  };

  return (
    <>
      <DashboardNav />
      <div className="maargleft3">
        <Tittlemiddle title="Categories" />
        <Link to="/Addcategory">
          <AddButton title="Add Page" />
        </Link>

        <div className="twdivs">
          <div className="boxses2">
            {leftCategories.map((category) => (
              <Divboxhome
                key={category.id}
                id={category.id}
                title={category.title}
                descriptionLabel="Description:"
                descriptionText={category.project_description}
                icon={trash}
                onDeleted={handleDelete}
              />
            ))}
          </div>

          <div className="boxses2">
            {rightCategories.map((category) => (
              <Divboxhome
                key={category.id}
                id={category.id}
                title={category.title}
                descriptionLabel="Description:"
                descriptionText={category.project_description}
                icon={trash}
                onDeleted={handleDelete}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;