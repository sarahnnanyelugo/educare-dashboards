import React, { useEffect, useState } from "react";
import { TimeTable } from "../../../components/TimeTable/TimeTable";

import { child1, child2 } from "../../../TestData/childrenData";
import { subjects } from "../../../TestData/subjects";
import {
  generateTimetableData,
  generateFeedback,
} from "../../../Utils/DataUtils";

export const ActivityTab = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";
  const [timetable, setTimetable] = useState([]);
  const [feedBack, setFeedBack] = useState([]);
  // const headers = ["Date", "Child", "Category", "Details", "Action"];

  useEffect(() => {
    const fb = generateTimetableData(10);
    setTimetable(fb);
    console.log(fb);
  }, []);
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
          <div className="col-md-2 card">
            <select>
              <option>2023/2024</option>
              <option>2022/2021</option>
              <option>2021/2020</option>
            </select>
          </div>
          <TimeTable rows={timetable} />
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
