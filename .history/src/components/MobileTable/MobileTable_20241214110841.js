import React from "react";
import { Col, Row } from "react-bootstrap";
import "./mobile-table.scss";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";

export const MobileTable = ({ data, isOdd }) => {
  const getStatusClass = (status) => {
    const normalizedStatus = status.trim().toLowerCase();
    if (normalizedStatus === "conducted") {
      return "status-conducted";
    } else if (normalizedStatus === "published") {
      return "status-published";
    } else {
      return "status-default";
    }
  };
  return (
    <>
      <Link
        to={"/view-voting"}
        className={`mobile-table-container ${isOdd ? "odd-row" : "even-row"}`}
      >
        <h6>{data.heading}</h6>
        <div className="d-flex">
          <div style={{ flexGrow: 1 }}>
            <small>
              Start:
              <span> {data.startDate}</span>
              {data.startingTime}
            </small>
            <br />
            <small>
              End:
              <span> {data.endDate}</span>
              {data.endingTime}
            </small>
          </div>
          <Col>
            <button
              className={`status-button ${getStatusClass(data.status)}`}
              aria-label={`Status: ${data.status}`}
            >
              <GoDotFill />
              {data.conductStatus}
            </button>{" "}
            <button
              className={`status-button ${getStatusClass(data.status)}`}
              aria-label={`Status: ${data.status}`}
            >
              <GoDotFill />
              {data.publishedStatus}
            </button>
          </Col>
        </div>
      </Link>
    </>
  );
};
