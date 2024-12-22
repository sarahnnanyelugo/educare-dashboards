import React, { useState } from "react";
import { Children } from "../MyChildren/Children";
import { children } from "../../../TestData/childrenData";
import Icon1 from "../../../assets/images/clipboard.svg";
import { BsCalendar4Week } from "react-icons/bs";
import { HiOutlineDownload } from "react-icons/hi";
import { RiSearch2Line } from "react-icons/ri";
import { Desktop, TabletAndBelow } from "../../../Utils/mediaQueries";
import Icon4 from "../../../assets/images/cal-icon.svg";
import Download from "../../../assets/images/download.svg";

import "./result.scss";
import Table from "react-bootstrap/Table";
import { ResultChart } from "../../../components/ResultChart/ResultChart";
import { AppTable } from "../../../components/AppTable/AppTable";
import { examSubjects } from "../../../TestData/subjects";
import Select from "../../../components/Select/Select";
import Icon3 from "../../../assets/images/clipboard.svg";

import { Search } from "../../../components/Search/Search";

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
        <div className="children-array-cover col-12">
          {" "}
          <div className="tabs  col-12 d-flex  ">
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
        </div>
      </TabletAndBelow>
      <hr />
      <div className="panels">
        <div className={`panel ${checkActive(1, "active2")}`}>
          <div className="d-md-flex">
            {" "}
            <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3 col-md-6 select-headings">
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
                    Icon={Icon4}
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
              <div className="col-md-8 mt-2 mobile-hide">
                {" "}
                <Search />
              </div>
              <Desktop>
                <button className="pdf-download-btn">
                  {" "}
                  <HiOutlineDownload className="icon2" />
                  Export as csv
                </button>
              </Desktop>
              <TabletAndBelow>
                {" "}
                <button className="pdf-download-btn col-12">
                  {" "}
                  <img src={Download} />
                  Download as pdf
                </button>
              </TabletAndBelow>
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
              <ResultChart />
            </div>
          </div>
        </div>
        <div className={`panel ${checkActive(2, "active2")}`}>2 </div>
        <div className={`panel ${checkActive(3, "active2")}`}> 3</div>
      </div>
    </div>
  );
};
