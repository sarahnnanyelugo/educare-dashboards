import React from "react";

export const Calender = ({ data }) => {
  const { day, date, event1, event2 } = data;
  return (
    <>
      <p>{day}</p>
      <h1>{date}</h1>
      <div className="event1">
        <p>{event1}</p>
      </div>
      <div className="event2">
        <p>{event2}</p>
      </div>
    </>
  );
};
