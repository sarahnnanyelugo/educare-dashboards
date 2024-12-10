import React from "react";
import "./time-table.scss";

const Timetable = () => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const timetableData = [
    [
      "Subject 1",
      "Subject 2",
      null,
      "Subject 3",
      "Subject 4",
      null,
      "Subject 5",
      "Subject 6",
      "Subject 7",
    ],
  ];

  return (
    <div className="subject-table">
      <div className="row header">
        <div className="cell"></div>
        <div className="cell">8:00 - 8:30</div>
        <div className="cell">8:30 - 9:00</div>
        <div className="cell">Break</div>
        <div className="cell">9:30 - 10:00</div>
        <div className="cell">10:00 - 10:30</div>
        <div className="cell">Break</div>
        <div className="cell">11:00 - 11:30</div>
        <div className="cell">11:30 - 12:00</div>
        <div className="cell">12:00 - 12:30</div>
      </div>
      <div className="body">
        {days.map((day, rowIndex) => (
          <div key={rowIndex} className="row">
            <div className="cell day-name">{day}</div>
            {timetableData[0].map((item, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`cell ${
                  item === null ? "break-placeholder" : "subject"
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        ))}
        {/* Break Columns */}
        <div
          className="break-column"
          style={{ gridRow: `span ${days.length}` }}
        >
          <span className="vertical-text">Short Break</span>
        </div>
        <div
          className="break-column"
          style={{ gridRow: `span ${days.length}` }}
        >
          <span className="vertical-text">Short Break</span>
        </div>
      </div>
    </div>
  );
};

export default Timetable;
