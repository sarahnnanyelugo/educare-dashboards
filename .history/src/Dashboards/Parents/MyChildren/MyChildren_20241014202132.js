import React, { useState } from "react";
import "./my-children.scss";
import { children } from "../../../TestData/childrenData";
import { Children } from "./Children";

export const MyChildren = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [activeComponent, setActiveComponent] = useState(null);
  const handleClick2 = (index) => {
    setActiveTab(index);
    setActiveComponent(index);
  };

  const checkActive = (index, className) => {
    return activeTab === index ? className : "";
  };
  return (
    <div className="my-children-view">
      <h6 style={{ fontSize: "18px", marginTop: "20px" }}>My Children</h6>
      <div className="d-md-flex">
        <div className="col-md-8 card">
          <div className="tabs col-md-12 row row-cols-1 row-cols-lg-3 g-2 g-lg-3">
            {children.map((data, index) => (
              <Children
                data={data}
                handleClick2={handleClick2}
                tabIndex={index + 1}
                key={index}
                isActive={activeComponent === index + 1}
              />
            ))}
          </div>{" "}
          <div className="panels">
            <div className={`panel ${checkActive(1, "active2")}`}>1</div>
            <div className={`panel ${checkActive(2, "active2")}`}>2</div>
            <div className={`panel ${checkActive(3, "active2")}`}>3</div>
          </div>
        </div>
      </div>
    </div>
  );
};
