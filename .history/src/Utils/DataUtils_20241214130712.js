import { faker } from "@faker-js/faker";

export const generateFeedback = (numEntries, avatarList) => {
  const feedbacks = [];
  // Helper function to randomly pick an array element
  const arrayElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
  for (let i = 0; i < numEntries; i++) {
    feedbacks.push({
      Date: faker.date.anytime(Date.now()).toLocaleDateString(),
      Photo: arrayElement(avatarList),
      Child: arrayElement([
        "Emmanuella Ozike",
        "Chidera Ozike",
        "Ogechi Ozike",
      ]),
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
      Child: arrayElement([
        "Emmanuella Ozike",
        "Chidera Ozike",
        "Ogechi Ozike",
      ]),
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
export const generateHostelReport = (numEntries, avatarList) => {
  const hostelReport = [];
  const arrayElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
  for (let i = 0; i < numEntries; i++) {
    hostelReport.push({
      Date: faker.date.anytime(Date.now()).toLocaleDateString(),
      Photo: arrayElement(avatarList),
      Child: arrayElement([
        "Emmanuella Ozike",
        "Chidera Ozike",
        "Ogechi Ozike",
      ]),
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
  return hostelReport;
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
      Code: faker.string.numeric({
        length: { min: 15, max: 15, symbol: "₦ " },
      }), // '197089478'
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
export const generateStoreItems = (numEntries, avatarList, catList) => {
  const storeItems = [];
  console.log(avatarList);
  // Helper function to randomly pick an array element
  const arrayElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
  for (let i = 0; i < numEntries; i++) {
    storeItems.push({
      id: faker.string.uuid(),
      Photo: arrayElement(avatarList),
      category: arrayElement(catList),
      amount: parseFloat("123.45"),

      // amount: faker.finance.amount({
      //   min: 100,
      //   max: 10000,
      //   dc: 2,
      // }),
      productName: arrayElement([
        "sports wear",
        "Uniform",
        "Shirt",
        "Shorts",
        "Sucks",
        "Barret",
        "Books",
        "BackPack",
        "Pen",
        "Pencil",
        "Ruler",
        "Cardigan",
        "Trousers",
      ]),
      // TransactionID: faker.string.numeric({ length: { min: 10, max: 15 } }), // '197089478'
      Purpose: arrayElement(["Accessories", "Books", "Uniforms"]),
    });
  }
  return storeItems;
};
import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./table.scss";
export const AppTable = ({
  headers = [],
  rows = [],
  includeImages = false,
}) => {
  const statusArray = { Pending: "orange", Paid: "green", Canceled: "red" };
  return (
    <>
      <Table className="app-table" responsive striped hover>
        <thead>
          <tr>
            {headers.length > 0 ? (
              headers.map((header, index) => <th key={index}>{header}</th>)
            ) : (
              <th>No headers available</th>
            )}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.length > 0 ? (
            rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {headers.map((header, colIndex) => (
                  <td key={colIndex}>
                    {/* Conditionally render images if includeImages is true and the row has a Photo field */}
                    {includeImages && header === "Child" && row["Photo"] ? (
                      <>
                        {" "}
                        <img
                          src={row["Photo"]}
                          alt={`Row ${rowIndex} Photo`}
                          style={{
                            width: "30px",
                            height: "30px",
                            marginRight: "10px",
                            borderRadius: "50%",
                          }} // Adjust size as needed
                        />
                        {row[header]}
                      </>
                    ) : header == "Status" ? (
                      <span style={{ color: statusArray[row[header]] }}>
                        {row[header]}
                      </span>
                    ) : (
                      [row[header] || "N/A"]
                    )}
                  </td>
                ))}
                <td>
                  <Link to={"/view-voting"}>View</Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={headers.length || 1}>No data available</td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
};

export const generateMobileVoteRecords = (numEntries, avatarList) => {
  const mobileVoteRecords = [];
  // Helper function to randomly pick an array element
  const arrayElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
  for (let i = 0; i < numEntries; i++) {
    mobileVoteRecords.push({
      Candidate: arrayElement([
        "Ogechi Ozike",
        "Emmanuel Ozike",
        "Chidera Ozike",
      ]),
      Class: arrayElement(["Basic 7", "Basic 10", "Basic 12"]),
      Vote: arrayElement(["2", "3", "4"]),
    });
  }
  return mobileVoteRecords;
};

export const generateTransportRecords = (numEntries, avatarList) => {
  const transportRecords = [];
  // Helper function to randomly pick an array element
  const arrayElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
  for (let i = 0; i < numEntries; i++) {
    transportRecords.push({
      Date: faker.date.anytime(Date.now()).toLocaleDateString(),
      Amount: faker.finance.amount({
        min: 100,
        max: 10000,
        dec: 2,
        symbol: "₦ ",
      }), // '$5.85'

      Position: arrayElement([
        "Head of School for the Day",
        "Pricipal for the Day Election",
      ]),
      Status: arrayElement(["Not Conducted", "Conducted"]),
      Results: arrayElement(["Not Published", "Published"]),
      Class: arrayElement(["Basic 7", "Basic 10", "Basic 11"]),
      Action: arrayElement(["View", "--------"]),
    });
  }
  return transportRecords;
};

export const generateAssignment = (numEntries, avatarList) => {
  const assignment = [];
  // Helper function to randomly pick an array element
  const arrayElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
  for (let i = 0; i < numEntries; i++) {
    assignment.push({
      Photo: arrayElement(avatarList),
      Teacher: arrayElement([
        "Mr Patrick",
        "Mr Ifeanyi",
        "Mrs Uju",
        "Mrs Ogo",
        "Mrs David",
        "Mrs Botty",
        "Mrs Chidera",
        "Mr Blessed",
      ]),
      Subject: arrayElement([
        "Home Econs",
        "Mathematics",
        "English",
        "Basic Science",
        "Social Science",
        "French",
        "Basic Technology",
        "PHE",
      ]),

      Status: arrayElement([" Pending", "Submitted", "Inactive"]),
      Assignment: arrayElement([
        "Mention three types of...",
        "List all the equipments...",
        "Enumerate the three branches of...",
      ]),
      Action: "View",
    });
  }
  return assignment;
};
export const generateMedicalRecords = (numEntries, avatarList) => {
  const medicalRecords = [];
  // Helper function to randomly pick an array element
  const arrayElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
  for (let i = 0; i < numEntries; i++) {
    medicalRecords.push({
      Date: faker.date.anytime(Date.now()).toLocaleDateString(),

      Incident: arrayElement([
        "Had a disturbing headache",
        "Temperature of almost 100 degrees",
        "Bleeding out of nose",
        "Malaria & Typhoid",
        "Slight headache & stomach pain",
        "Diarrhea",
      ]),
      Severity: arrayElement(["Mild", "Severe"]),
    });
  }
  return medicalRecords;
};
export const generateTuckShopRecord = (numEntries, avatarList) => {
  const tuckShopRecord = [];
  // Helper function to randomly pick an array element
  const arrayElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
  for (let i = 0; i < numEntries; i++) {
    tuckShopRecord.push({
      PurchaseDate: faker.date.anytime(Date.now()).toLocaleDateString(),

      Item: arrayElement([
        "Soap",
        "Noodles",
        "Sweets",
        "Drawing board",
        "Soap",
        "Pad",
        "Body lotion",
        "Biro",
        "Sucks",
      ]),
      Quantity: arrayElement(["1", "2"]),
      UnitPrice: faker.finance.amount({
        min: 100,
        max: 10000,
        dec: 2,
        symbol: "₦ ",
      }), // '$5.85'
      TotalPrice: faker.finance.amount({
        min: 100,
        max: 10000,
        dec: 2,
        symbol: "₦ ",
      }), // '$5.85'
    });
  }
  return tuckShopRecord;
};
