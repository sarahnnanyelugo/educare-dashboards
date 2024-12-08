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
        <div className="card">
          <div className="tabs2 offset-md-">
            <button
              className={`tab2 edge ${checkActive(1, "active3")}`}
              onClick={() => handleClick(1)}
            >
              Pastoral Report
            </button>
            <button
              className={`tab2 ${checkActive(2, "active3")}`}
              onClick={() => handleClick(2)}
            >
              Exeat Report
            </button>{" "}
            <button
              className={`tab2 ${checkActive(3, "active3")}`}
              onClick={() => handleClick(3)}
            >
              Hostel Report
            </button>{" "}
          </div>
        </div>
      </div>
    </>
  );
};
