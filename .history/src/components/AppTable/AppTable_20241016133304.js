import React from "react";
import { Table } from "react-bootstrap";

export const AppTable = (props) => {
  return;

  <Table>
    {" "}
    <tbody>
      {props.data.data.map((item, index) => (
        <tr>
          <th>{item.heading}</th>
        </tr>
      ))}
    </tbody>
  </Table>;
};
