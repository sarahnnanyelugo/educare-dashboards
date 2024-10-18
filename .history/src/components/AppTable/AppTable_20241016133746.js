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
          <td>
            {item.name.productType}
            {/* <br />
                  <small>{item.name.productDetail}</small> */}
          </td>
          <td>{item.type}</td>
          <td>{item.amount}</td>
          <td>{item.status}</td>
          <td>{item.date}</td>
          <td
            onClick={() => {
              displayInvoice(item);
            }}
            className="invoice-td"
          >
            {item.invoice}
          </td>
        </tr>
      ))}
    </tbody>
  </Table>;
};
