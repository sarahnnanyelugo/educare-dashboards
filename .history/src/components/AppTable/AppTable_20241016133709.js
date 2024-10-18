import React from "react";
import { Table } from "react-bootstrap";

export const AppTable = (props) => {
  return;

  <Table>
    {props.data.heading.map((item, index) => (
      <thead>
        <tr>
          {props.data.headers.map((item) => (
            <th>{item}</th>
          ))}
        </tr>
      </thead>
    ))}
    <tbody>
      {props.data.data.map((item, index) => (
        <tr>
          <td>{item.heading}</td>
        </tr>
      ))}
    </tbody>
  </Table>;
};
