import React from "react";
import { Table } from "react-bootstrap";
import "./time-table.scss";
export const TimeTable = ({
  subjects = [],
  time = [],
  rows = [],
  includeImages = false,
}) => {
  return (
    <>
      <Table className="app-table" responsive striped hover>
        <thead>
          <tr>
            {time.length > 0 ? (
              time.map((header, index) => <th key={index}>{time}</th>)
            ) : (
              <th>No headers available</th>
            )}
          </tr>
        </thead>
        <tbody>
          {rows.length > 0 ? (
            rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {subjects.map((header, colIndex) => (
                  <td key={colIndex}>
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
                    ) : (
                      row[header] || "N/A"
                    )}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={subjects.length || 1}>No data available</td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
};
