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
  const pastoralReport = [];
  // Helper function to randomly pick an array element
  const arrayElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
  for (let i = 0; i < numEntries; i++) {
    pastoralReport.push({
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
      Class: arrayElement(["Basic 7", "Basic 10", "Basic 11"]),
      Action: "View",
    });
  }
  return pastoralReport;
};
export const generateWallet = (numEntries, avatarList) => {
  const wallet = [];
  // Helper function to randomly pick an array element
  const arrayElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
  for (let i = 0; i < numEntries; i++) {
    wallet.push({
      Date: faker.date.anytime(Date.now()).toLocaleDateString(),
      Amount: faker.finance.amount({
        min: 100,
        max: 10000,
        dec: 2,
        symbol: "₦ ",
      }), // '$5.85'
      Code: faker.string.numeric({ length: { min: 10, max: 15 } }), // '197089478'
      Purpose: arrayElement([
        "Fees",
        "Lesson",
        "Uniforms",
        "Others",
        "Bursary",
        "Canteen",
      ]),
      Status: arrayElement(["Pending", "Paid", "Canceled"]),
      Class: arrayElement(["Basic 7", "Basic 10", "Basic 11"]),
      Action: arrayElement(["View", "Proceed to pay"]),
    });
  }
  return wallet;
};
export const generatePocketMoney = (numEntries) => {
  const pocketMoney = [];
  const arrayElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
  for (let i = 0; i < numEntries; i++) {
    pocketMoney.push({
      Date: faker.date.anytime(Date.now()).toLocaleDateString(),
      Amount: faker.finance.amount({
        min: 100,
        max: 10000,
        dec: 2,
        symbol: "₦ ",
      }), // '$5.85'
      TransactionID: faker.string.numeric({ length: { min: 10, max: 15 } }), // '197089478'
      Reference: arrayElement([
        "Fees",
        "Lesson",
        "Uniforms",
        "Others",
        "Bursary",
        "Canteen",
      ]),
    });
  }
  return pocketMoney;
};
export const generateInvoices = (numEntries) => {
  const Invoices = [];
  // Helper function to randomly pick an array element
  const arrayElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
  for (let i = 0; i < numEntries; i++) {
    Invoices.push({
      Date: faker.date.anytime(Date.now()).toLocaleDateString(),
      Amount: faker.finance.amount({
        min: 100,
        max: 10000,
        dec: 2,
        symbol: "₦ ",
      }), // '$5.85'
      TransactionID: faker.string.numeric({ length: { min: 10, max: 15 } }), // '197089478'
      Reference: arrayElement([
        "Fees",
        "Lesson",
        "Uniforms",
        "Others",
        "Bursary",
        "Canteen",
      ]),
    });
  }
  return Invoices;
};
export const generateTransactionHistory = (numEntries, avatarList) => {
  const transactionHistory = [];
  // Helper function to randomly pick an array element
  const arrayElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
  for (let i = 0; i < numEntries; i++) {
    transactionHistory.push({
      Date: faker.date.anytime(Date.now()).toLocaleDateString(),
      Amount: faker.finance.amount({
        min: 100,
        max: 10000,
        dec: 2,
        symbol: "₦ ",
      }), // '$5.85'
      TransactionID: faker.string.numeric({ length: { min: 10, max: 15 } }), // '197089478'
      Purpose: arrayElement([
        "Fees",
        "Lesson",
        "Uniforms",
        "Others",
        "Bursary",
        "Canteen",
      ]),
      Status: arrayElement(["Pending", "Paid", "Canceled"]),
      Class: arrayElement(["Basic 7", "Basic 10", "Basic 11"]),
      Action: arrayElement(["View", "Proceed to pay"]),
    });
  }
  return transactionHistory;
};
export const generateStoreItems= (numEntries, avatarList) => {
  const transactionHistory = [];
  // Helper function to randomly pick an array element
  const arrayElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
  for (let i = 0; i < numEntries; i++) {
    storeItems.push({
      Date: faker.date.anytime(Date.now()).toLocaleDateString(),
      Amount: faker.finance.amount({
        min: 100,
        max: 10000,
        dec: 2,
        symbol: "₦ ",
      }), // '$5.85'
      TransactionID: faker.string.numeric({ length: { min: 10, max: 15 } }), // '197089478'
      Purpose: arrayElement([
        "Fees",
        "Lesson",
        "Uniforms",
        "Others",
        "Bursary",
        "Canteen",
      ]),
      Status: arrayElement(["Pending", "Paid", "Canceled"]),
      Class: arrayElement(["Basic 7", "Basic 10", "Basic 11"]),
      Action: arrayElement(["View", "Proceed to pay"]),
    });
  }
  return  storeItems;
