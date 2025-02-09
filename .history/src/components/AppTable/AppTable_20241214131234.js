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
