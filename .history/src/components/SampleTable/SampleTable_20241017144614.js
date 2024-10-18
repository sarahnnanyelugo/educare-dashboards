// src/Timetable.js
import React, { useState } from "react";
import { faker } from "@faker-js/faker";

const generateTimetableData = (numEntries, studentIds) => {
  const timetable = [];

  // Helper function to randomly pick an array element
  const arrayElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

  for (let i = 0; i < numEntries; i++) {
    timetable.push({
      id: i + 1,
      student_id: arrayElement(studentIds), // Use arrayElement helper function
      subject: arrayElement([
        "English",
        "Mathematics",
        "Geography",
        "Chemistry",
        "Physics",
        "Biology",
      ]), // Use arrayElement helper function,
      day: arrayElement([
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ]),
      time: `${faker.number.int({ min: 1, max: 12 })}:${faker.number.int({
        min: 0,
        max: 59,
      })} ${arrayElement(["AM", "PM"])}`, // Updated for faker v7+
    });
  }

  return timetable;
};

const Timetable = () => {
  const studentIds = ["child1", "child2", "child3", "child4"];
  const [selectedStudent, setSelectedStudent] = useState(null);
  const timetableData = generateTimetableData(30, studentIds);
  console.log{timetableData}

  // Filtered timetable based on selectedStudent
  const filteredTimetable = selectedStudent
    ? timetableData.filter((entry) => entry.student_id === selectedStudent)
    : timetableData;

  return (
    <div>
      <h1>Student Timetable</h1>

      {/* Filter buttons */}
      <div>
        <button onClick={() => setSelectedStudent(null)}>All Students</button>
        {studentIds.map((id) => (
          <button key={id} onClick={() => setSelectedStudent(id)}>
            {id}
          </button>
        ))}
      </div>

      {/* Timetable table */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Student ID</th>
            <th>Subject</th>
            <th>Day</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {filteredTimetable.map((entry) => (
            <tr key={entry.id}>
              <td>{entry.id}</td>
              <td>{entry.student_id}</td>
              <td>{entry.subject}</td>
              <td>{entry.day}</td>
              <td>{entry.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Timetable;
