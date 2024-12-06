import React, { useState } from "react";
import { Children } from "../MyChildren/Children";
import { children } from "../../../TestData/childrenData";
import Icon1 from "../../../assets/images/clipboard.svg";
import { BsCalendar4Week } from "react-icons/bs";
import { HiOutlineDownload } from "react-icons/hi";
import { RiSearch2Line } from "react-icons/ri";
import { Desktop, TabletAndBelow } from "../../../Utils/mediaQueries";

import "./result.scss";
import Table from "react-bootstrap/Table";
import { ResultChart } from "../../../components/ResultChart/ResultChart";
import { AppTable } from "../../../components/AppTable/AppTable";
import { examSubjects } from "../../../TestData/subjects";
import Select from "../../../components/Select/Select";
import Icon3 from "../../../assets/images/clipboard.svg";

import { Search } from "../../../components/Search/Search";
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
const terms = [
  { value: "first term", label: "First Term" },
  { value: "second term", label: "Second Term" },
  { value: "third term", label: "Third Term" },
];
const sessions = [
  { value: "2020/2022", label: "2020/2022" },
  { value: "2021/2022", label: "2021/2022" },
  { value: "2022/2023", label: "2022/2023" },
  { value: "2023/2024", label: "2023/2024" },
];
const resultType = [
  { value: "termly", label: "Termly" },
  { value: "weekly", label: "Weekly" },
];
const CAType = [
  { value: "first c.a", label: "First C.A." },
  { value: "second c.a.", label: "Second C.A." },
  { value: "third c.a.", label: "Third C.A." },
];
export const Result = () => {
  const [activeTab, setActiveTab] = useState(1); // Default to first tab

  const handleClick2 = (index) => {
    setActiveTab(index); // Set the active tab
  };
  const checkActive = (index, className) => {
    return activeTab === index ? className : "";
  };

  const [selectedTerm, setSelectedTerm] = useState("");
  const [selectedSession, setSelectedSession] = useState("");
  const [selectedCA, setSelectedCA] = useState("");
  const [selectedResultType, setSelectedResultType] = useState("");
  return (
    <div className="results-div">
      <Desktop>
        {" "}
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
      </Desktop>
      <TabletAndBelow>
    <div></div>
        <div className="tabs col-md-8 row ">
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
      </TabletAndBelow>
      <hr />
      <div className="panels">
        <div className={`panel ${checkActive(1, "active2")}`}>
          <div className="d-md-flex">
            {" "}
            <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3 col-md-6">
              <div className=" col">
                <h6>Session</h6>
                <div className="card col-md-12">
                  <Select
                    options={sessions}
                    value={selectedSession}
                    onChange={setSelectedSession}
                    placeholder="Select Session"
                    Icon={Icon3}
                  />
                </div>
              </div>
              <div className=" col">
                <h6>Term</h6>
                <div className="card col-md-12">
                  <Select
                    options={terms}
                    value={selectedTerm}
                    onChange={setSelectedTerm}
                    placeholder="Select Term"
                    Icon={Icon3}
                  />
                </div>
              </div>
              <div className=" col">
                <h6>Type</h6>
                <div className="card col-md-12">
                  <Select
                    options={CAType}
                    value={selectedCA}
                    onChange={setSelectedCA}
                    placeholder="Select CA"
                    Icon={Icon3}
                  />
                </div>
              </div>
              <div className=" col">
                <h6>Result Type</h6>
                <div className="card col-md-12">
                  <Select
                    options={resultType}
                    value={selectedResultType}
                    onChange={setSelectedResultType}
                    placeholder="Select Result Type"
                    Icon={Icon3}
                  />
                </div>
              </div>
            </div>
            <div className="d-md-flex col-md-4 offset-md-2">
              <div className="col-md-8 mt-2">
                {" "}
                <Search />
              </div>
              <button className="pdf-download-btn">
                {" "}
                <HiOutlineDownload className="icon2" />
                Export as csv
              </button>
            </div>
          </div>
          <hr />
          <br />
          <div className="col-md-12 d-md-flex">
            <div className="col-md-5">
              {" "}
              <AppTable
                headers={examSubjects.headers}
                rows={examSubjects.rows}
              />
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
