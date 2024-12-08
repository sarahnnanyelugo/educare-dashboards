import React, { useState } from "react";
import "./profile-page.scss";
export const ProfilePage = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";
  return (
    <>
      <div className="profile-page">
        <h5>Settings</h5>
        <div className="card"></div>
      </div>
    </>
  );
};
