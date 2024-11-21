import React from "react";
import { Table } from "react-bootstrap";
import "./time-table.scss";
export const TimeTable = ({ time = [], rows = [], includeImages = false }) => {
  return (
    <>
      <Table className="app-table" responsive striped hover>
        {/* <thead>
          <tr>
            {rows.length > 0 ? (
              rows.map((tt, index) => <th key={index}>{tt}</th>)
            ) : (
              <th>No headers available</th>
            )}
          </tr>
        </thead> */}
        <tbody>
          {rows.length > 0 ? (
            rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((time, colIndex) => (
                  <td key={colIndex}>
                
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
