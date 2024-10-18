import React, { useState, useEffect } from "react";
import "./transaction-table.css";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

const TransactionTable = (props) => {
  return (
    <>
      <div className="transactions-table-container">
        <Table className="col-md-12 col-12" striped responsice>
          <thead>
            <tr>
              {props.data.headers.map((item) => (
                <th>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {props.data.data.map((item, index) => (
              <tr>
                <td>{item.name.productType}</td>
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
        </Table>
      </div>
    </>
  );
};
export default TransactionTable;
