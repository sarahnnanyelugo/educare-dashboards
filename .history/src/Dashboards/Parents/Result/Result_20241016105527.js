import React, { useState } from "react";
import { Children } from "../MyChildren/Children";
import { children } from "../../../TestData/childrenData";
import "./result.scss";
export const Result = () => {
  const [activeTab, setActiveTab] = useState(1); // Default to first tab

  const handleClick2 = (index) => {
    setActiveTab(index); // Set the active tab
  };
  const checkActive = (index, className) => {
    return activeTab === index ? className : "";
  };

  return (
    <div className="results-div">
      <div className="tabs col-md-12 row row-cols-1 row-cols-lg-3 g-2 g-lg-3">
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
      <div className="panels">
        <div className={`panel ${checkActive(1, "active2")}`}>1</div>
        <div className={`panel ${checkActive(2, "active2")}`}>2 </div>
        <div className={`panel ${checkActive(3, "active2")}`}> 3</div>
      </div>
    </div>
  );
};
