import React from "react";
import { Table } from "react-bootstrap";

export const AppTable = (props) => {
  return;

  <Table>
    {props.data.data.map((item, index) => (
      <tr>
        <th>{item.heading}</th>
      </tr>
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
