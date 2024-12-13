import React from "react";

export const communication = {
  headers: ["Date", "Report"],
  rows: [
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
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
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
            <td style={{ padding: "8px", verticalAlign: "top" }}>
              <div>
                <strong>{row.Date[0]}</strong>
                <br />
                <span style={{ color: "#888", fontSize: "0.9em" }}>
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
    </table>
  );
};

export default CommunicateTable;
