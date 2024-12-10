import React from "react";
import "./time-table.scss";

const timetableData = [
  {
    day: "Monday",
    subjects: [
      "Math",
      "Science",
      "Break",
      "English",
      "History",
      "Lunch",
      "Geography",
      "Art",
      "PE",
      "Music",
    ],
  },
  {
    day: "Tuesday",
    subjects: [
      "Biology",
      "Physics",
      "Break",
      "Chemistry",
      "Computer",
      "Lunch",
      "Math",
      "History",
      "Science",
      "English",
    ],
  },
  {
    day: "Wednesday",
    subjects: [
      "English",
      "Math",
      "Break",
      "Art",
      "PE",
      "Lunch",
      "Geography",
      "History",
      "Science",
      "Biology",
    ],
  },
  {
    day: "Thursday",
    subjects: [
      "Physics",
      "Chemistry",
      "Break",
      "Computer",
      "Math",
      "Lunch",
      "Biology",
      "PE",
      "Art",
      "History",
    ],
  },
  {
    day: "Friday",
    subjects: [
      "History",
      "English",
      "Break",
      "Science",
      "Physics",
      "Lunch",
      "Math",
      "Computer",
      "Biology",
      "Music",
    ],
  },
];

const Timetable = () => {
  return (
    <div className="timetable">
      {/* Header */}
      <div className="timetable-header">
        <div className="header-cell">Day</div>
        {Array.from({ length: 10 }, (_, i) => (
          <div key={i} className="header-cell">
            {i === 2
              ? "Short Break"
              : i === 5
              ? "Lunch Break"
              : `${8 + Math.floor(i / 2)}:${i % 2 === 0 ? "00" : "30"}`}
          </div>
        ))}
      </div>

      {/* Timetable Rows */}
      {timetableData.map((row, index) => (
        <div key={index} className="timetable-row">
          <div className="row-cell">{row.day}</div>
          {row.subjects.map((subject, i) => {
            if (i === 2 && index === 0) {
              // Render "Short Break" once, spanning rows
              return (
                <div
                  key={i}
                  className="row-cell break-cell"
                  rowSpan={timetableData.length}
                >
                  <div className="vertical-text">Short Break</div>
                </div>
              );
            }
            if (i === 2) {
              // Skip rendering for "Short Break" in subsequent rows
              return null;
            }
            return (
              <div
                key={i}
                className={`row-cell ${
                  subject.includes("Break") ? "break-cell" : ""
                }`}
              >
                {subject.includes("Break") ? (
                  <div className="vertical-text">{subject}</div>
                ) : (
                  subject
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Timetable;
