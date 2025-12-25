import React from "react";
import "./Divboxhome.css";
import { supabase } from "../../supabase";

const Divboxhome = ({ title, descriptionLabel, descriptionText, icon, id, onDeleted }) => {

  const deleteCategory = async () => {
    const { error } = await supabase
      .from("Categories")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Delete failed:", error.message);
    } else {
      console.log("Deleted successfully:", id);
      if (onDeleted) onDeleted(id); // نحدث الـ state في الـ parent
    }
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
              onClick={deleteCategory} // الحذف بالضغط على الايكون
            />
          )}
        </div>
      </div>

      <h1 className="text2">{descriptionText}</h1>
    </div>
  );
};

export default Divboxhome;