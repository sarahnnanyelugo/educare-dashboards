import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GoDotFill } from "react-icons/go";

import "./table.scss";
export const AppTable = ({
  headers = [],
  rows = [],
  includeImages = false,
}) => {
  const statusArray = { Pending: "orange", Paid: "green", Canceled: "red" };
  const getStatusClass = (status) => {
    if (!status) return "status-default";

    const normalizedStatus = status.trim().toLowerCase();
    if (normalizedStatus === "conducted") {
      return "status-conducted";
    } else if (normalizedStatus === "published") {
      return "status-published";
    } else {
      return "status-default"; // Default for "Not Conducted" or "Not Published"
    }
  };
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
          </tr>
        </thead>
        <tbody>
          {rows.length > 0 ? (
            rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {headers.map((header, colIndex) => (
                  <td key={colIndex}>
                    {/* Render image for 'Child' field if includeImages is true */}
                    {includeImages && header === "Child" && row["Photo"] ? (
                      <>
                        <img
                          src={row["Photo"]}
                          alt={`Row ${rowIndex} Photo`}
                          style={{
                            width: "30px",
                            height: "30px",
                            marginRight: "10px",
                            borderRadius: "50%",
                          }}
                        />
                        {row[header]}
                      </>
                    ) : header === "Status" || header === "Results" ? (
                      <span
                        className={`status-label ${getStatusClass(
                          row[header]
                        )}`}
                      >
                        <GoDotFill style={{ marginRight: "5px" }} />
                        {row[header]}
                      </span>
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