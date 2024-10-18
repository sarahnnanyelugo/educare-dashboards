import React, { useState } from "react";
import "./my-children.scss";
import { children } from "../../../TestData/childrenData";
import { Children } from "./Children";

export const MyChildren = () => {
  const [activeTab, setActiveTab] = useState(1); // Active tab index
  const [activeComponent, setActiveComponent] = useState(null); // Active component index
  const handleClick2 = (index) => {
    setActiveTab(index); // Activate the tab
    setActiveComponent(index); // Set the active component
  };

  const checkActive2 = (index, className) => {
    return activeTab === index ? className : "";
  };
  return (
    <div className="my-children-view">
      <h6 style={{ fontSize: "18px", marginTop: "20px" }}>My Children</h6>
      <div className="d-md-flex">
        <div className="col-md-8 card">
          {/* <div className="col-md-flex">
            <button>Time Table</button>
            <button>Subjects</button>
            <button>Assignments</button>
            <button>Medicals</button>
            <button>Results</button>
            <button>Communication Book</button>
            <button>Tuck Shop</button>
          </div> */}
          <div className="tabs ">
            {/* <button
              className={`tab ${checkActive2(1, "active2")}`}
              onClick={() => handleClick2(1)}
            >
              Business
            </button>
            <button
              className={`tab ${checkActive2(2, "active2")}`}
              onClick={() => handleClick2(2)}
              style={{ marginLeft: "20px" }}
            >
              School
            </button>{" "}
            <button
              className={`tab ${checkActive2(3, "active2")}`}
              onClick={() => handleClick2(3)}
              style={{ marginLeft: "20px" }}
            >
              church
            </button> */}

            {children.map((data, index) => (
              <Children
                data={data}
                handleClick2={handleClick2}
                tabIndex={index + 1}
                key={index}
                isActive={activeComponent === index + 1} // Check if the component is active
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
