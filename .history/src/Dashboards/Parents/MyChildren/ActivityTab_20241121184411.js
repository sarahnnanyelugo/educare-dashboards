import React, { useEffect, useState } from "react";
import { TimeTable } from "../../../components/TimeTable/TimeTable";

import { child1, child2 } from "../../../TestData/childrenData";
import { subjects } from "../../../TestData/subjects";
// import { generateTimetableData } from "../../../Utils/DataUtils";
import Icon3 from "../../../assets/images/clipboard.svg";
import Select from "../../../components/Select/Select";
import { Col, Row } from "react-bootstrap";
import { generateAssignment } from "../../../Utils/DataUtils";
import { AppTable } from "../../../components/AppTable/AppTable";
import Student from "../../../assets/images/student.png";
import Peter from "../../../assets/images/peter.png";
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
export const ActivityTab = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";
  const [timetable, setTimetable] = useState([]);
  const [assignment, setAssignment] = useState([]);
  const headers = ["Subject", "Teacher", "Assignment", "Status", "Action"];

  const [selectedTerm, setSelectedTerm] = useState("");
  const [selectedSession, setSelectedSession] = useState("");
  useEffect(() => {
    const fb = generateAssignment(10, avatarList);
    setTimetable(fb);
    console.log(fb);
  }, []);
  const avatarList = [Student, Peter];

  return (
    <div className="activity-tab card">
      <div className="tabs2 offset-md-">
        <button
          className={`tab2 edge ${checkActive(1, "active3")}`}
          onClick={() => handleClick(1)}
        >
          Time table
        </button>
        <button
          className={`tab2 ${checkActive(2, "active3")}`}
          onClick={() => handleClick(2)}
        >
          Subjects
        </button>{" "}
        <button
          className={`tab2 ${checkActive(3, "active3")}`}
          onClick={() => handleClick(3)}
        >
          Assignments
        </button>{" "}
        <button
          className={`tab2 ${checkActive(4, "active3")}`}
          onClick={() => handleClick(4)}
        >
          Medicals
        </button>{" "}
        <button
          className={`tab2 ${checkActive(5, "active3")}`}
          onClick={() => handleClick(5)}
        >
          Results
        </button>{" "}
        <button
          className={`tab2 ${checkActive(6, "active3")}`}
          onClick={() => handleClick(6)}
        >
          Communication Book
        </button>{" "}
        <button
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
          <hr />1
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
          <div className="d-md-flex">
            <div className="col-md-5 teacher-subjects">
              <Row>
                <Col>
                  <h6>Subject</h6>
                </Col>
                <Col>
                  <h6>Teacher</h6>
                </Col>
              </Row>
              {subjects.map((item, index) => (
                <Row key={index} className="rowed">
                  <Col>
                    <p>{item.subject}</p>
                  </Col>
                  <Col>
                    <p>{item.teacher}</p>
                  </Col>
                </Row>
              ))}
            </div>
            <div className="">
              <h6>Lesson Plan</h6>
              <Row>
                <Col>
                  <p>Week 1-2</p>
                </Col>{" "}
                <Col>
                  <p>Week 1-2</p>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <div className={`panel ${checkActive(3, "active2")}`}>
          {" "}
          <AppTable headers={headers} rows={feedBack} includeImages={true} />
        </div>
        <div className={`panel ${checkActive(4, "active2")}`}> 4</div>
        <div className={`panel ${checkActive(5, "active2")}`}> 5</div>
        <div className={`panel ${checkActive(6, "active2")}`}> 6</div>
        <div className={`panel ${checkActive(7, "active2")}`}> 7</div>
      </div>
    </div>
  );
};
