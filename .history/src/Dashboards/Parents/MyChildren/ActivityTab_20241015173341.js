import React, { useState } from "react";
import Timetable from "../../../components/SampleTable/SampleTable";
import TimeTable from "../../../components/TimeTable/TimeTable";
import { child1, child2 } from "../../../TestData/childrenData";
import { subjects } from "../../../TestData/subjects";

export const ActivityTab = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";

  return (
    <>
      <div className="tabs2 offset-md-1">
        <button
          className={`tab2 ${checkActive(1, "active3")}`}
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
          className={`tab2 ${checkActive(5, "active3")}`}
          onClick={() => handleClick(5)}
        >
          Results
        </button>
      </div>
      <div className="panels">
        <div className={`panel ${checkActive(1, "active2")}`}>
          <TimeTable data={data} />
          {/* <Timetable /> */}
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
      </div>
    </>
  );
};
