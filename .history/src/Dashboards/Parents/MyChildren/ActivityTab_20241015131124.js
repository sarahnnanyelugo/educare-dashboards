import React, { useState } from "react";
import TimeTable from "../../../components/Timetable/TimeTable";

export const ActivityTab = () => {
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
        </button>
      </div>
      <div className="panels">
        <div className={`panel ${checkActive(1, "active2")}`}>
          <TimeTable />
        </div>
        <div className={`panel ${checkActive(2, "active2")}`}>cdwdwew</div>
      </div>
    </>
  );
};
