import React, { useEffect, useState } from "react";
import "./pastoral.scss";
import { HiOutlineDownload } from "react-icons/hi";
import { RiSearch2Line } from "react-icons/ri";
import Icon1 from "../../../assets/images/clipboard.svg";
import { BsCalendar4Week } from "react-icons/bs";
import { AppTable } from "../../../components/AppTable/AppTable";
import { feedbacks } from "../../../TestData/FeedbacksData";
import Timetable from "../../../components/SampleTable/SampleTable";
import { generatePastoralReport } from "../../../Utils/DataUtils";
import Student from "../../../assets/images/student.png";
import Peter from "../../../assets/images/peter.png";
import Select from "../../../components/Select/Select";
import { Search } from "../../../components/Search/Search";
import { Desktop, TabletAndBelow } from "../../../Utils/mediaQueries";
import Note from "../../../assets/images/note.svg";
import RequestExeat from "./RequestExeat";
import { generateHostelReport } from "../../../Utils/DataUtils";
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
function PastoralReport() {
  const [report, setReport] = useState([]);
  const headers = ["Date", "Child", "Class", "Action"];
  const [hostelReport, setHostelReport] = useState([]);

  const avatarList = [Student, Peter];
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";
  const [selectedTerm, setSelectedTerm] = useState("");
  const [selectedSession, setSelectedSession] = useState("");
  useEffect(() => {
    const fb = generatePastoralReport(3, avatarList);
    setReport(fb);
    console.log(fb);
  }, []);
  useEffect(() => {
    const fb = generateHostelReport(4, avatarList);
    setHostelReport(fb);
    console.log(fb);
  }, []);
  return (
    <>
      <Desktop>
        {" "}
        <div className="pastoral-div">
          <div className="col-md-12 heading">
            <h5>Pastoral Report</h5>
          </div>{" "}
          <div className="pastoral-table card">
            {" "}
            <div className="d-md-flex">
              {" "}
              <div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-3 col-md-3">
                <div className="col">
                  {" "}
                  <h6>Session</h6>
                  <div className="card col-md-12">
                    <Select
                      options={sessions}
                      value={selectedSession}
                      onChange={setSelectedSession}
                      placeholder="Select Session"
                      Icon={Icon1}
                    />
                  </div>
                </div>
                <div className="col">
                  {" "}
                  <h6>Term</h6>
                  <div className="card col-md-12">
                    <Select
                      options={terms}
                      value={selectedTerm}
                      onChange={setSelectedTerm}
                      Icon={Icon1}
                      placeholder="Select Term"
                    />
                  </div>
                </div>
              </div>
              <div style={{ flexGrow: 1 }} />
              <div className=" col-md-3 ">
                <Search />
              </div>
            </div>
            <hr />
            <div className="feedbacks-table">
              <AppTable headers={headers} rows={report} includeImages={true} />
            </div>
          </div>
        </div>
      </Desktop>
      <TabletAndBelow>
        {" "}
        <div className="pastoral-div">
          <div className="col-md-12 heading">
            <h5> Reports</h5>
          </div>{" "}
          <div className="tabs2 offset-md-">
            <button
              className={`tab2 edge ${checkActive(1, "active3")}`}
              onClick={() => handleClick(1)}
            >
              Pastoral Report
            </button>
            <button
              className={`tab2 ${checkActive(2, "active3")}`}
              onClick={() => handleClick(2)}
            >
              Exeat Report
            </button>{" "}
            <button
              className={`tab2 ${checkActive(3, "active3")}`}
              onClick={() => handleClick(3)}
            >
              Hostel Report
            </button>{" "}
          </div>
          <div className="panels">
            <div className={`panel ${checkActive(1, "active2")}`}>
              {" "}
              <div className="pastoral-table card">
                {" "}
                <div className="d-md-flex">
                  {" "}
                  <div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-3 col-md-3">
                    <div className="col">
                      {" "}
                      <h6>Session</h6>
                      <div className="card col-md-12">
                        <Select
                          options={sessions}
                          value={selectedSession}
                          onChange={setSelectedSession}
                          placeholder="Select Session"
                          Icon={Icon1}
                        />
                      </div>
                    </div>
                    <div className="col">
                      {" "}
                      <h6>Term</h6>
                      <div className="card col-md-12">
                        <Select
                          options={terms}
                          value={selectedTerm}
                          onChange={setSelectedTerm}
                          Icon={Icon1}
                          placeholder="Select Term"
                        />
                      </div>
                    </div>
                  </div>
                  <div style={{ flexGrow: 1 }} />
                  <div className=" col-md-3 ">
                    <Search />
                  </div>
                </div>
                <hr />
                <div className="feedbacks-table">
                  <AppTable
                    headers={headers}
                    rows={report}
                    includeImages={true}
                  />
                </div>
              </div>
            </div>
            <div className={`panel ${checkActive(2, "active2")}`}>
              {" "}
              <div className="page-session">
                <div className=" col-12">
                  {" "}
                  <Search />
                </div>
                <div className="d-md-flex mt-5">
                  {" "}
                  <div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-3 col-md-3">
                    <div className="col">
                      {" "}
                      <h6>Session</h6>
                      <div className="card col-md-12">
                        <Select
                          options={sessions}
                          value={selectedSession}
                          onChange={setSelectedSession}
                          placeholder="Select Session"
                          Icon={Icon1}
                        />
                      </div>
                    </div>
                    <div className="col">
                      {" "}
                      <h6>Term</h6>
                      <div className="card col-md-12">
                        <Select
                          options={terms}
                          value={selectedTerm}
                          onChange={setSelectedTerm}
                          Icon={Icon1}
                          placeholder="Select Term"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="d-md-flex col-md-4 offset-md-5">
                    <RequestExeat />
                  </div>
                </div>
                <hr />
                <div className="">
                  <center>
                    <div className="col-md-2 empty-record">
                      <div className="img-div">
                        <center>
                          {" "}
                          <img src={Note} />
                        </center>
                      </div>
                      <h6>No exeat records</h6>
                      <p>All exit records would show up here</p>
                    </div>
                  </center>
                </div>
              </div>
            </div>
            <div className={`panel ${checkActive(3, "active2")}`}>
              {" "}
              <div className="page-session">
                {" "}
                <div className="d-md-flex">
                  {" "}
                  <div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-3 col-md-3">
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
                  </div>
                  <div style={{ flexGrow: 1 }} />
                  <div className=" col-md-3 ">
                    <h6>Search</h6>
                    <div className="input-div d-flex">
                      <RiSearch2Line className="icon" />

                      <input placeholder="search" />
                    </div>
                  </div>
                </div>
                <hr />
                <div className="feedbacks-table">
                  <AppTable
                    headers={headers}
                    rows={hostelReport}
                    includeImages={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </TabletAndBelow>
    </>
  );
}

export default PastoralReport;
