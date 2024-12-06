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
      <div className="col">
        <div
          className={isActive && mode === "tab" ? "active-component" : ""}
          id="children-outlay"
        >
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
        <div className="d-flex children-array-cover">
          {" "}
          <div className="tabs col-md-12 col-12  children-array ">
            {children.map((data, index) => (
              <Children
                data={data}
                handleClick2={handleClick2}
                tabIndex={index + 1}
                key={index}
                isActive={activeTab === index + 1} // Set active based on activeTab state
                mode="tab" // This mode is for tab triggering
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
