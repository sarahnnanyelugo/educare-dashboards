import React from "react";
import { Table } from "react-bootstrap";
import "./time-table.scss";
export const TimeTable = ({ time = [], rows = [], includeImages = false }) => {
  return (
    <>
      <Table className="app-table" responsive striped hover>
        <thead>
          <tr>
            {rows.length > 0 ? (
              rows.map((tt, index) => <th key={index}>{tt}</th>)
            ) : (
              <th>No headers available</th>
            )}
          </tr>
        </thead>
        <tbody>
          {rows.length > 0 ? (
            rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {time.map((time, colIndex) => (
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
                    ) : (
                      row[header] || "N/A"
                    )}
                  </td>
                ))}
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
