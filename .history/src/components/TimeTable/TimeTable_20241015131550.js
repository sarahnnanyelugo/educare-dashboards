import React, { useState, useEffect } from "react";
import "./time-table.scss";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

const TimeTable = (props) => {
  return (
    <>
      <div className="transactions-table-container">
        <Table className="col-md-12 col-12" striped responsive>
          {/* <thead>
            <tr>
              {props.data.headers.map((item) => (
                <th>{item}</th>
              ))}
            </tr>
          </thead> */}
          <tbody>
            {props.data.data.map((item, index) => (
              <tr>
                <th>{item.day}</th>
                <td>{item.period1}</td>
                <td>{item.period2}</td>
                <td>{item.period3}</td>
                <td>{item.period4}</td>
                <td>{item.period5}</td>
                <td>{item.period6}</td>
                <td>{item.period7}</td>
                <td>{item.period8}</td>
                <td>{item.period9}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};
export default TimeTable;
