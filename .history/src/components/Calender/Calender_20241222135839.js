import React from "react";
import "./calender.scss";
import Arrow from "../../assets/images/arrow-up.svg";

export const Calender = ({ data }) => {
  const { day, date, event1, event2, week } = data;
  return (
    <div className="calender-div">
      <div className="d-flex">
        <p style={{ flexGrow: 1 }}>{week}</p>
        <p>
          {date}
          <img src={Arrow} width="14px" />
        </p>
      </div>
      <h1>{day}</h1>
      <div className="event1">
        <p>{event1}</p>
      </div>
      <div className="event2">
        <p>{event2}</p>
      </div>
    </div>
  );
};
