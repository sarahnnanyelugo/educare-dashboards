import React from "react";
import { Table } from "react-bootstrap";

export const communication = {
  headers: ["Date", "Report"],
  rows: [
    {
      Date: ["Monday", "16/09/2024"],
      Report:
        "Ella learnt how to become a good citizen, counted shapes and became a very good lady in training",
    },
    {
      Date: ["Monday", "16/09/2024"],
      Report:
        "Ella learnt how to become a good citizen, counted shapes and became a very good lady in training",
    },
  ],
};

const CommunicateTable = () => {
  const { headers, rows } = communication;

  return (
    <Table responsive striped>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th
              key={index}
              style={{
                borderBottom: "1px solid #ddd",
                textAlign: "left",
                padding: "8px",
              }}
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            <td
              style={{
                padding: "8px",
                paddingRight: "106px", // Added extra spacing between columns
                verticalAlign: "top",
              }}
            >
              <div>
                <strong>{row.Date[0]}</strong>
                <br />
                <span
                  style={{
                    color: "#888",
                    fontSize: "0.9em",
                  }}
                >
                  {row.Date[1]}
                </span>
              </div>
            </td>
            <td style={{ padding: "8px", verticalAlign: "top" }}>
              {row.Report}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CommunicateTable;
