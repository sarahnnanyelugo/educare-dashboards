import React, { useState, useEffect } from "react";
import "./time-table.scss";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

const TimeTable = (props) => {
  return (
    <>
      <div className="transactions-table-container">
        <Table className="col-md-12 col-12" striped responsive>
          <tr>
            <td>8:00am-9:00am</td>
            <td>9:00am-10:00am</td>
            <td>10:00am-10:15am</td>
            <td>10:15am-11:15am</td>
            <td>11:15am-12:00pm</td>
            <td>12:00pm-1:00pm</td>
            <td>1:00pm-1:30pm</td>
            <td>1:30pm-2:00pm</td>
            <td>2:00pm-3:00pm</td>
          </tr>

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
