import React from "react";
import { Col } from "react-bootstrap";
import "./mobile-table.scss";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";

export const MobileTable = ({ data, isOdd }) => {
  // Function to determine the CSS class for conduct and published statuses
  const getStatusClass = (status) => {
    if (!status) return "status-default"; // Fallback for missing statuses

    const normalizedStatus = status.trim().toLowerCase();
    if (normalizedStatus === "conducted") {
      return "status-conducted";
    } else if (normalizedStatus === "published") {
      return "status-published";
    } else {
      return "status-default"; // Default for "not conducted" or "not published"
    }
  };

  return (
    <Link
      to="/view-voting"
      className={`mobile-table-container ${isOdd ? "odd-row" : "even-row"}`}
    >
      <h6>{data.heading}</h6>
      <div className="d-flex">
        <div style={{ flexGrow: 1 }}>
          <small>
            Start: <span>{data.startDate}</span> {data.startingTime}
          </small>
          <br />
          <small>
            End: <span>{data.endDate}</span> {data.endingTime}
          </small>
        </div>
        <Col>
          {/* Button for Conduct Status */}
          <button
            className={`status-button ${getStatusClass(data.conductStatus)}`}
            aria-label={`Conduct Status: ${data.conductStatus}`}
          >
            <GoDotFill />
            {data.conductStatus}
          </button>
          {/* Button for Published Status */}
          <button
            className={`status-button ${getStatusClass(data.publishedStatus)}`}
            aria-label={`Published Status: ${data.publishedStatus}`}
          >
            <GoDotFill />
            {data.publishedStatus}
          </button>
        </Col>
      </div>
    </Link>
  );
};
