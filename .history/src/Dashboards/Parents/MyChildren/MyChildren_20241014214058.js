import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./my-children.scss";
import { children } from "../../../TestData/childrenData";
import { Children } from "./Children";
import { ActivityTab } from "./ActivityTab";
import Icon from "../../../assets/images/wallet.png";

export const MyChildren = () => {
  const [activeTab, setActiveTab] = useState(1); // Default to first tab
  const location = useLocation(); // Get the location object

  const getTabIndexFromUrl = () => {
    const params = new URLSearchParams(location.search);
    const tab = params.get("tab");
    return tab ? parseInt(tab, 10) : 1; // Return the tab index or default to 1
  };

  useEffect(() => {
    const initialTab = getTabIndexFromUrl();
    setActiveTab(initialTab); // Set the active tab based on the URL parameter
  }, [location.search]); // Re-run when the location changes

  const handleClick2 = (index) => {
    setActiveTab(index); // Set the active tab
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
                isActive={activeTab === index + 1} // Set active based on activeTab state
                mode="tab" // This mode is for tab triggering
              />
            ))}
          </div>
          <div className="panels">
            <div className={`panel ${checkActive(1, "active2")}`}>
              <ActivityTab />
            </div>
            <div className={`panel ${checkActive(2, "active2")}`}>2</div>
            <div className={`panel ${checkActive(3, "active2")}`}>3</div>
          </div>
        </div>
        <div className="col-md-4 card">
          <div className="attendance d-flex">
            <img src={Icon} width="34px" height="34px" />
            <p>2 days missed</p>
          </div>
        </div>
      </div>
    </div>
  );
};
