import React from "react";
import "./Divboxhome.css";
import { supabase } from "../../supabase";
import { useNavigate } from "react-router-dom";

const Divboxhome = ({ title, descriptionLabel, descriptionText, icon, id, onDeleted }) => {
  const navigate = useNavigate();

  const deleteCategory = async () => {
    const { error } = await supabase
      .from("Categories")
      .delete()
      .eq("id", id);

    if (error) console.error("Delete failed:", error.message);
    else if (onDeleted) onDeleted(id);
  };

  const handleEdit = () => {
    navigate(`/editcategory/${id}`);
  };

  return (
    <div className="divboxhome">
      <div className="top-row styletrash">
        <div className="displayone">
          <h1 className="text1">{title}</h1>
          <h1 className="text1">{descriptionLabel}</h1>
        </div>

        <div>
          {icon && (
            <img
              src={icon}
              alt="icon"
              className="icon-img"
              style={{ cursor: "pointer" }}
              onClick={deleteCategory}
            />
          )}
        </div>
      </div>

      <h1 className="text2">{descriptionText}</h1>

      {/* زر Edit مدمج */}
      <div className="buttonorg" onClick={handleEdit}>
        <h3 className="textbutton">Edit</h3>
      </div>
    </div>
  );
};

export default Divboxhome;