import React from "react";
import { Table } from "react-bootstrap";

export const AppTable = ({ headers, rows }) => {
  return;

  <>
    {" "}
    <Table>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {headers.map((header, colIndex) => (
              <td key={colIndex}>{row[header]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
    ;
  </>;
};
