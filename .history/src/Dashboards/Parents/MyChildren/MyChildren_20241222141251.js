import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./my-children.scss";
import {
  child1,
  child2,
  child3,
  children,
} from "../../../TestData/childrenData";
import { Children } from "./Children";
import { ActivityTab } from "./ActivityTab";
import Icon from "../../../assets/images/cal-icon2.svg";
import { FileUpload } from "../../../components/FIleUpload/FileUpload";
import { Documents } from "./Documents";
// import { generateTimetableData } from "../../../Utils/DataUtils";
import { Desktop, TabletAndBelow } from "../../../Utils/mediaQueries";

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

  // const child0 = generateTimetableData(5, ["child0"]);
  return (
    <>
      <Desktop>
        {" "}
        <div className="my-children-view">
          <h6 style={{ fontSize: "18px", marginTop: "20px" }}>My Children</h6>
          <div className="d-md-flex">
            <div className="col-md-8 ">
              {" "}
              <div className="tabs col-md-12 row  row-cols-lg-3 g-2 g-lg-3">
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
                <div className={`panel ${checkActive(2, "active2")}`}>
                  {" "}
                  {/* <ActivityTab data={child2} /> */}
                </div>
                <div className={`panel ${checkActive(3, "active2")}`}>
                  {" "}
                  {/* <ActivityTab data={child3} /> */}
                </div>
              </div>
            </div>
            <div style={{ paddingLeft: "10px" }} className="col-md-4">
              <div
                className="col-md-12 card attendance-summary"
                style={{ minHeight: "600px" }}
              >
                {" "}
                <h6>Attendance Summary</h6>
                <div className="attendance missed d-flex">
                  <img src={Icon} width="34px" height="34px" />
                  <p>2 days missed</p>
                </div>{" "}
                <div className="attendance late d-flex">
                  <img src={Icon} width="34px" height="34px" />
                  <p>12 days late</p>
                </div>{" "}
                <div className="attendance present d-flex">
                  <img src={Icon} width="34px" height="34px" />
                  <p>59 days present</p>
                </div>
                <h6>Documents</h6>
                <div className="card file-input" style={{ minHeight: "500px" }}>
                  <Documents />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Desktop>

      <TabletAndBelow>
        <div className="my-children-view">
          <h6 style={{ fontSize: "18px", marginTop: "20px" }}>My Children</h6>
          <div className="d-md-flex">
            <div className="col-md-8 ">
              {" "}
              <div className="d-flex children-array-cover">
                {" "}
                <div className="tabs col-12  children-array ">
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
              <div className="col-12 card attendance-summary">
                <h6>Attendance Summary</h6>
                <div className="attendance missed d-flex">
                  <img src={Icon} />
                  <p>2 days missed</p>
                </div>{" "}
                <div className="attendance late d-flex">
                  <img src={Icon} />
                  <p>12 days late</p>
                </div>{" "}
                <div className="attendance present d-flex">
                  <img src={Icon} />
                  <p>59 days present</p>
                </div>
              </div>
              <div className="panels">
                <div className={`panel ${checkActive(1, "active2")}`}>
                  <ActivityTab />
                </div>
                <div className={`panel ${checkActive(2, "active2")}`}>
                  {" "}
                  {/* <ActivityTab data={child2} /> */}
                </div>
                <div className={`panel ${checkActive(3, "active2")}`}>
                  {" "}
                  {/* <ActivityTab data={child3} /> */}
                </div>
              </div>
              <h6 className="mt-8">Documents</h6>
              <div className="card file-input">
                <Documents />
              </div>
            </div>
          </div>
        </div>
      </TabletAndBelow>
    </>
  );
};