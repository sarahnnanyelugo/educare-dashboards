import React from "react";
import { Table } from "react-bootstrap";
import "./communicate.scss";
export const communication = {
  headers: ["Date", "Report"],
  rows: [
    {
      Date: ["Monday", "16/09/2024"],
      Report:
        "Ella learnt how to become a good citizen, counted shapes and became a very good lady in training",
    },
    {
      Date: ["Tuesday", "22/09/2024"],
      Report: "Temperature of almost 100 degrees",
    },
    {
      Date: ["Wednesday", "23/09/2024"],
      Report: "",
    },
    {
      Date: ["Thursday", "24/09/2024"],
      Report: "",
    },
    {
      Date: ["Friday", "25/09/2024"],
      Report: "",
    },
  ],
};

const CommunicateTable = () => {
  const { headers, rows } = communication;

  return (
    <Table responsive striped className="communication-table">
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
                verticalAlign: "top",
                width: "25%", // Adjust column width for more spacing
              }}
            >
              <div>
                {row.Date[0]}
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
            <td
              style={{
                padding: "8px",
                verticalAlign: "top",
                width: "75%", // Adjust column width for more spacing
              }}
            >
              {row.Report}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CommunicateTable;
