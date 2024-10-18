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
export const generateFeedback = (numEntries, avatarList) => {
  const feedbacks = [];
  // Helper function to randomly pick an array element
  const arrayElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
  for (let i = 0; i < numEntries; i++) {
    feedbacks.push({
      Date: faker.date.anytime(Date.now()).toLocaleDateString(),
      Photo: arrayElement(avatarList),
      Child: faker.person.firstName("female"),
      Category: arrayElement([
        "Fees",
        "Lesson",
        "Uniforms",
        "Others",
        "Bursary",
        "Canteen",
      ]),
      Details: faker.lorem.sentence(10),
      Action: "View",
    });
  }
  return feedbacks;
};
export const generatePastoralReport = (numEntries, avatarList) => {
  const feedbacks = [];
  // Helper function to randomly pick an array element
  const arrayElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
  for (let i = 0; i < numEntries; i++) {
    feedbacks.push({
      Date: faker.date.anytime(Date.now()).toLocaleDateString(),
      Photo: arrayElement(avatarList),
      Child: faker.person.firstName("female"),

      Class: arrayElement(["Basic 7", "Basic 10", "Basic 11"]),
      Action: "View",
    });
  }
  return feedbacks;
};
