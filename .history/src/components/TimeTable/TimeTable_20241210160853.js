import React from "react";
import "./time-table.scss";

const Timetable = () => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const periods = [
    { time: "8:00 - 9:00", subjects: ["Math", "Math", "Math", "Math", "Math"] },
    {
      time: "9:00 - 10:00",
      subjects: ["Science", "Science", "Science", "Science", "Science"],
    },
    {
      time: "10:00 - 10:30",
      subjects: ["Break", "Break", "Break", "Break", "Break"],
    },
    {
      time: "10:30 - 11:30",
      subjects: ["English", "English", "English", "English", "English"],
    },
    {
      time: "11:30 - 12:30",
      subjects: ["History", "History", "History", "History", "History"],
    },
    {
      time: "12:30 - 1:00",
      subjects: ["Break", "Break", "Break", "Break", "Break"],
    },
    { time: "1:00 - 2:00", subjects: ["Art", "Art", "Art", "Art", "Art"] },
    {
      time: "2:00 - 3:00",
      subjects: [
        "Physical Ed",
        "Physical Ed",
        "Physical Ed",
        "Physical Ed",
        "Physical Ed",
      ],
    },
  ];

  return (
    <div className="timetable">
      <div className="row header">
        <div className="cell time-header">Time</div>
        {days.map((day) => (
          <div key={day} className="cell day-header">
            {day}
          </div>
        ))}
      </div>
      {periods.map((period, rowIndex) => (
        <div key={rowIndex} className="row">
          <div className="cell time">{period.time}</div>
          {period.subjects.map((subject, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`cell ${subject === "Break" ? "break" : ""}`}
            >
              {subject === "Break" ? (
                <span className="vertical-text">Break</span>
              ) : (
                subject
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Timetable;
