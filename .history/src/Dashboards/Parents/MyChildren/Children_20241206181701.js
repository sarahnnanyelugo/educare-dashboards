import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./my-children.scss";
export const Children = ({
  data,
  handleClick2,
  tabIndex,
  isActive,
  mode,
  linkUrl,
}) => {
  const handleClick = () => {
    if (mode === "tab" && handleClick2) {
      handleClick2(tabIndex); // Trigger the tab change only in tab mode
    } else if (mode === "link" && linkUrl) {
      window.location.href = linkUrl; // Navigate to the link in link mode
    }
  };
  return (
    <>
      <div className="" style={{ width: "1250px" }}>
        <div className={isActive && mode === "tab" ? "active-component" : ""}>
          {" "}
          <div className="d-flex children-div col-md-12" onClick={handleClick}>
            <div>
              {" "}
              <img src={data.img} width="34px" height="34px" />
            </div>
            <div>
              <h6>{data.name}</h6>
              <p>{data.class}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
