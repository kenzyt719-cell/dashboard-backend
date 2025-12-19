import React, { useEffect, useState } from "react";
import "./ProfileInfo.css";
import { supabase } from "../../supabase";

const ProfileInfo = () => {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    async function getProfile() {
      const { data, error } = await supabase
        .from("profile_dashboard")
        .select("*")
        .single(); // Assuming one profile row

      if (error) {
        console.error(error);
      } else {
        setProfile(data);
      }

      setLoading(false);
    }

    getProfile();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!profile) return <p>No profile found</p>;

  return (
    <div className="profileinfo">
      <h2 className="profileinfo-title">Profile Information</h2>

      <h3 className="profileinfo-text">
        {profile.bio ||
          "UX/UI Designer focused on creating clean, intuitive, and user-centered digital experiences. Skilled in wireframing, prototyping, design systems, and usability. Passionate about turning ideas into seamless, visually balanced interfaces that solve real user needs."}
      </h3>

      <div className="profileinfo-line"></div>

      <div className="profileinfo-row">
        <div className="profileinfo-col">
          <h3 className="profileinfo-item">Full Name: {profile.name}</h3>
          <h3 className="profileinfo-item">Mobile: {profile.mobile}</h3>
          <h3 className="profileinfo-item">Email: {profile.email}</h3>
        </div>

        <div className="profileinfo-col">
          <h3 className="profileinfo-item">Social Media: {profile.social || "—"}</h3>
          <h3 className="profileinfo-item">Location: {profile.location}</h3>
          <h3 className="profileinfo-item">Email: {profile.email}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;