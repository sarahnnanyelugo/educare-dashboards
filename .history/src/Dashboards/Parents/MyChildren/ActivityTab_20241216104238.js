import React, { useEffect, useState } from "react";
import Timetable, { TimeTable } from "../../../components/TimeTable/TimeTable";

import { HiOutlineDownload } from "react-icons/hi";
import Icon3 from "../../../assets/images/clipboard.svg";
import Select from "../../../components/Select/Select";
import {
  generateAssignment,
  generateMedicalRecords,
  generateTuckShopRecord,
} from "../../../Utils/DataUtils";
import { AppTable } from "../../../components/AppTable/AppTable";
import Student from "../../../assets/images/student.png";
import Peter from "../../../assets/images/peter.png";
import { ResultChart } from "../../../components/ResultChart/ResultChart";
import { examSubjects, communication } from "../../../TestData/subjects";
import SubjectTab from "./SubjectTab/SubjectTab";
import CommunicateTable from "../../../components/CommunicateTable/CommunicateTable";
import { Link } from "react-router-dom";
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
const CA = [
  { value: "first CA", label: "First CA" },
  { value: "second CA", label: "Second CA" },
  { value: "third CA", label: "Third CA" },
];
export const ActivityTab = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";
  const [timetable, setTimetable] = useState([]);
  const [assignment, setAssignment] = useState([]);
  const [medicalRecord, setMedicalRecord] = useState([]);
  const [tuckShopRecord, setTuckShopRecord] = useState([]);
  const headers = ["Subject", "Teacher", "Assignment", "Status", "Action"];
  const headers2 = ["Date", "Incident", "Severity"];
  const headers3 = [
    "PurchaseDate",
    "Item",
    "Quantity",
    "UnitPrice",
    "TotalPrice",
  ];

  const [selectedTerm, setSelectedTerm] = useState("");
  const [selectedSession, setSelectedSession] = useState("");
  const [selectedCA, setSelectedCA] = useState("");
  useEffect(() => {
    const fb = generateAssignment(10, avatarList);
    setAssignment(fb);
    console.log(fb);
  }, []);
  useEffect(() => {
    const fb = generateMedicalRecords(6, avatarList);
    setMedicalRecord(fb);
    console.log(fb);
  }, []);
  useEffect(() => {
    const fb = generateTuckShopRecord(10, avatarList);
    setTuckShopRecord(fb);
    console.log(fb);
  }, []);
  const avatarList = [Student, Peter];

  return (
    <div className="activity-tab card">
      <div className="tabs2 offset-md-">
        <button
          title="timetable"
          className={`tab2 edge ${checkActive(1, "active3")}`}
          onClick={() => handleClick(1)}
        >
          Time table
        </button>
        <button
          title="subjects"
          className={`tab2 ${checkActive(2, "active3")}`}
          onClick={() => handleClick(2)}
        >
          Subjects
        </button>{" "}
        <button
          title="assignments"
          className={`tab2 ${checkActive(3, "active3")}`}
          onClick={() => handleClick(3)}
        >
          Assignments
        </button>{" "}
        <button
          title="medicals"
          className={`tab2 ${checkActive(4, "active3")}`}
          onClick={() => handleClick(4)}
        >
          Medicals
        </button>{" "}
        <button
          title="results"
          className={`tab2 ${checkActive(5, "active3")}`}
          onClick={() => handleClick(5)}
        >
          Results
        </button>{" "}
        <button
          title="communication book"
          className={`tab2 ${checkActive(6, "active3")}`}
          onClick={() => handleClick(6)}
        >
          Communication Book
        </button>{" "}
        <button
          title="tuck shop"
          className={`tab2 edge2 ${checkActive(7, "active3")}`}
          onClick={() => handleClick(7)}
        >
          Tuck Shop
        </button>
      </div>
      <div className="panels">
        <div className={`panel ${checkActive(1, "active2")}`}>
          <div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-3 col-md-5 mt-3">
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
          </div>
          <hr />
          <Timetable />
        </div>
        <div className={`panel ${checkActive(2, "active2")}`}>
          <div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-3 col-md-5 mt-3">
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
          </div>
          <hr />
          <div className="d-flex subject-lesson-cover col-md-12">
            <SubjectTab />
          </div>
        </div>
        <div className={`panel ${checkActive(3, "active2")}`}>
          <div className="d-md-flex">
            {" "}
            <div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-3 col-md-5 mt-3">
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
            </div>
            <div>
              <Link to={"/assignment-guide"}>How to use</Link>
            </div>
          </div>

          <hr />
          <AppTable headers={headers} rows={assignment} includeImages={true} />
        </div>
        <div className={`panel ${checkActive(4, "active2")}`}>
          <div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-3 col-md-5 mt-3">
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
          </div>
          <hr />
          <AppTable
            headers={headers2}
            rows={medicalRecord}
            includeImages={true}
          />
        </div>
        <div className={` panel ${checkActive(5, "active2")}`}>
          <div className="d-md-flex">
            {" "}
            <div className="row row-cols-2 row-cols-lg-3 g-2 g-lg-3 col-md-7 mt-3">
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
              </div>{" "}
              <div className=" col">
                <h6>Type</h6>
                <div className="card col-md-12">
                  <Select
                    options={terms}
                    value={selectedCA}
                    onChange={setSelectedTerm}
                    placeholder="First CA"
                    Icon={Icon3}
                  />
                </div>
              </div>
            </div>
            <div style={{ flexGrow: 1 }} />
            <div className="mt-3">
              {" "}
              <button className="pdf-download-btn">
                {" "}
                <HiOutlineDownload className="icon2" />
                Download pdf
              </button>
            </div>
          </div>

          <hr />
          <div className="col-md-12 d-md-flex">
            <div className="col-md-5">
              {" "}
              <AppTable
                headers={examSubjects.headers}
                rows={examSubjects.rows}
              />
            </div>

            <div className="col-md-7 ">
              {" "}
              <ResultChart labels={customLabels} dataset={customData} />
            </div>
          </div>
        </div>
        <div className={`panel ${checkActive(6, "active2")}`}>
          <div className="row row-cols-2 row-cols-lg-3 g-2 g-lg-3 col-md-7 mt-3">
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
            </div>{" "}
          </div>
          <hr />
          <div className="col-md-12">
            <CommunicateTable />
          </div>
        </div>
        <div className={`panel ${checkActive(7, "active2")}`}>
          {" "}
          <div className="row row-cols-2 row-cols-lg-3 g-2 g-lg-3 col-md-7 mt-3">
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
            </div>{" "}
          </div>
          <hr />
          <div className="col-md-12">
            {" "}
            <AppTable headers={headers3} rows={tuckShopRecord} />
          </div>
        </div>
      </div>
    </div>
  );
};
