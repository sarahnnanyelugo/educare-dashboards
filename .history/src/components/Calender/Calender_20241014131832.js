import React from "react";
import "./calender.scss";
export const Calender = ({ data }) => {
  const { day, date, event1, event2 } = data;
  return (
    <div className="calender-div">
      <p>{day}</p>
      <h1>{date}</h1>
      <div className="event1">
        <p>{event1}</p>
      </div>
      <div className="event2">
        <p>{event2}</p>
      </div>
    </div>
  );
};
