import React, { useEffect, useState } from "react";
import { TimeTable } from "../../../components/TimeTable/TimeTable";

import { child1, child2 } from "../../../TestData/childrenData";
import { subjects } from "../../../TestData/subjects";
// import { generateTimetableData } from "../../../Utils/DataUtils";
import Icon3 from "../../../assets/images/clipboard.svg";
import Select from "../../../components/Select/Select";

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
  const [feedBack, setFeedBack] = useState([]);
  const headers = ["Date", "Child", "Category", "Details", "Action"];

  const [selectedTerm, setSelectedTerm] = useState("");
  const [selectedSession, setSelectedSession] = useState("");
  // useEffect(() => {
  //   const fb = generateTimetableData(10);
  //   setTimetable(fb);
  //   console.log(fb);
  // }, []);
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
          <div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-3 col-md-5 mt-5">
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
          1
        </div>
        <div className={`panel ${checkActive(2, "active2")}`}>
          {" "}
          <ul>
            {subjects.map((item, index) => (
              <li key={index}>
                <strong>{item.subject}</strong>: {item.teacher}
              </li>
            ))}
          </ul>
        </div>
        <div className={`panel ${checkActive(3, "active2")}`}> 3</div>
        <div className={`panel ${checkActive(4, "active2")}`}> 4</div>
        <div className={`panel ${checkActive(5, "active2")}`}> 5</div>
        <div className={`panel ${checkActive(6, "active2")}`}> 6</div>
        <div className={`panel ${checkActive(7, "active2")}`}> 7</div>
      </div>
    </div>
  );
};
