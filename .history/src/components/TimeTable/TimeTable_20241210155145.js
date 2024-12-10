import React from "react";
import "./timetable.scss";

const Timetable = () => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const periods = [
    { time: "8:00 - 9:00", subject: "Math" },
    { time: "9:00 - 10:00", subject: "Science" },
    { time: "10:00 - 10:30", subject: "Break" },
    { time: "10:30 - 11:30", subject: "English" },
    { time: "11:30 - 12:30", subject: "History" },
    { time: "12:30 - 1:00", subject: "Break" },
    { time: "1:00 - 2:00", subject: "Art" },
    { time: "2:00 - 3:00", subject: "Physical Ed" },
  ];

  return (
    <div className="timetable">
      <div className="header">
        <div className="corner"></div>
        {days.map((day) => (
          <div key={day} className="day-header">
            {day}
          </div>
        ))}
      </div>
      <div className="body">
        {periods.map((period, rowIndex) => (
          <React.Fragment key={rowIndex}>
            <div className="time">{period.time}</div>
            {days.map((day, colIndex) => (
              <div
                key={`${day}-${rowIndex}`}
                className={`cell ${period.subject === "Break" ? "break" : ""}`}
              >
                {period.subject === "Break" ? (
                  <span className="vertical-text">Break</span>
                ) : (
                  period.subject
                )}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Timetable;
