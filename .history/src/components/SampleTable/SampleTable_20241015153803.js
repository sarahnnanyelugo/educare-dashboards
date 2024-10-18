// Create as src/Timetable.js
import React, { useState } from "react";
import faker from "faker";

const generateTimetableData = (numEntries, studentIds) => {
  const timetable = [];
  for (let i = 0; i < numEntries; i++) {
    timetable.push({
      id: i + 1,
      student_id: faker.random.arrayElement(studentIds),
      subject: faker.random.word(),
      day: faker.random.arrayElement([
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ]),
      time: `${faker.random.number({ min: 1, max: 12 })}:${faker.random.number({
        min: 0,
        max: 59,
      })} ${faker.random.arrayElement(["AM", "PM"])}`,
    });
  }
  return timetable;
};

const Timetable = () => {
  const studentIds = ["child1", "child2", "child3"];
  const [selectedStudent, setSelectedStudent] = useState(null);
  const timetableData = generateTimetableData(30, studentIds);

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
