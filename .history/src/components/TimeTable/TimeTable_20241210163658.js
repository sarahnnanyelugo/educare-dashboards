import React from "react";
import "./time-table.scss";

const Timetable = () => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const timetableData = [
    [
      "Subject 1",
      "Subject 2",
      "Break",
      "Subject 3",
      "Subject 4",
      "Break",
      "Subject 5",
      "Subject 6",
      "Subject 7",
    ],
  ];

  return (
    <div className="Subject-allocation">
      <div className="row header">
        <div className="allocations"></div>
        <div className="allocations">8:00 - 8:30</div>
        <div className="allocations">8:30 - 9:00</div>
        <div className="allocations">Break</div>
        <div className="allocations">9:30 - 10:00</div>
        <div className="allocations">10:00 - 10:30</div>
        <div className="allocations">Break</div>
        <div className="allocations">11:00 - 11:30</div>
        <div className="allocations">11:30 - 12:00</div>
        <div className="allocations">12:00 - 12:30</div>
      </div>
      {days.map((day, rowIndex) => (
        <div key={rowIndex} className="row">
          <div className="allocations day-name">{day}</div>
          {timetableData[0].map((item, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`allocations ${
                item === "Break" ? "break" : "subject"
              }`}
            >
              {item === "Break" ? (
                <span className="vertical-text">Short Break</span>
              ) : (
                item
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Timetable;
