import React from "react";
import "./time-table.scss"; // Import custom CSS for styling

const timetableData = [
  {
    day: "Monday",
    subjects: [
      "Math",
      "Science",
      "Short Break",
      "English",
      "History",
      "Lunch Break",
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
      "Short Break",
      "Chemistry",
      "Computer",
      "Lunch Break",
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
      "Short Break",
      "Art",
      "PE",
      "Lunch Break",
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
      "Short Break",
      "Computer",
      "Math",
      "Lunch Break",
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
      "Short Break",
      "Science",
      "Physics",
      "Lunch Break",
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
      {timetableData.map((row, index) => (
        <div key={index} className="timetable-row">
          <div className="row-cell">{row.day}</div>
          {row.subjects.map((subject, i) => (
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
          ))}
        </div>
      ))}
    </div>
  );
};

export default Timetable;
