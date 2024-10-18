import React from "react";

export const Calender = ({ data }) => {
  const { day, date, event1, event2 } = data;
  return (
    <>
      <p>{day}</p>
      <h1>{data}</h1>
    </>
  );
};
