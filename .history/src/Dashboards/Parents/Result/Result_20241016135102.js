import React, { useState } from "react";
import { Children } from "../MyChildren/Children";
import { children } from "../../../TestData/childrenData";
import Icon1 from "../../../assets/images/clipboard.svg";
import { BsCalendar4Week } from "react-icons/bs";

import "./result.scss";
import Table from "react-bootstrap/Table";
import { ResultChart } from "../../../components/ResultChart/ResultChart";
import { AppTable } from "../../../components/AppTable/AppTable";
const customData = [100, 80, 50, 100, 90, 70, 40, 90, 100, 80, 70];
const customLabels = [
  "Math",
  "Eng",
  "CRS",
  "B.Tech",
  "B.Sci",
  "G.A.D",
  "French",
  "Comp.Sci",
  "C.C.A",
  "H. Econs",
  "Civic Edu.",
];
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
      <div className="tabs col-md-8 row row-cols-1 row-cols-lg-3 g-2 g-lg-3">
        {children.map((data, index) => (
          <Children
            data={data}
            handleClick2={handleClick2}
            tabIndex={index + 1}
            key={index}
            isActive={activeTab === index + 1}
            mode="tab" // This mode is for tab triggering
          />
        ))}
      </div>{" "}
      <hr />
      <div className="panels">
        <div className={`panel ${checkActive(1, "active2")}`}>
          <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3 col-md-6">
            <div className=" col">
              <h6>Session</h6>
              <div className="select-div  d-flex col">
                {" "}
                <div>
                  {" "}
                  <img src={Icon1} height="" />
                </div>
                <select>
                  <option>2023/2024</option>
                </select>
              </div>
            </div>
            <div className=" col">
              <h6>Term</h6>
              <div className="select-div  d-flex col">
                {" "}
                <div>
                  {" "}
                  <BsCalendar4Week />
                </div>
                <select>
                  <option>First Term</option>
                  <option>Second Term</option>
                  <option>Third Term</option>
                </select>
              </div>
            </div>
            <div className=" col">
              <h6>Type</h6>
              <div className="select-div  d-flex col">
                {" "}
                <select>
                  <option>First CA</option>
                  <option>Second CA</option>
                  <option>Third CA</option>
                </select>
              </div>
            </div>
            <div className=" col">
              <h6>Result Type</h6>
              <div className="select-div  d-flex col">
                {" "}
                <select>
                  <option>School Result</option>
                </select>
              </div>
            </div>
          </div>
          <hr />
          <div className="col-md-12 d-md-flex">
            <div className="col-md-5">
              {" "}
              <AppTable />
            </div>

            <div className="col-md-5">
              {" "}
              <ResultChart labels={customLabels} dataset={customData} />
            </div>
          </div>
        </div>
        <div className={`panel ${checkActive(2, "active2")}`}>2 </div>
        <div className={`panel ${checkActive(3, "active2")}`}> 3</div>
      </div>
    </div>
  );
};
