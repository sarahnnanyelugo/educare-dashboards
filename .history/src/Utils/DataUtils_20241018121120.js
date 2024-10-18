import { faker } from "@faker-js/faker";

export const generateTimetableData = (numEntries, studentIds) => {
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
export const generateFeedback = (numEntries) => {
  const feedbacks = {};
  // Helper function to randomly pick an array element
  const arrayElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
  for (let i = 0; i < numEntries; i++) {
    feedbacks.push({
      id: i + 1,
      date: faker.date,
      child: faker.person,
      category: faker.commerce,
      details: faker.details,
    });
  }
  return feedbacks;
};
