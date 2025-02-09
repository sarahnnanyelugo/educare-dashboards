import React from "react";
import { Col, Row } from "react-bootstrap";
import "./mobile-table.scss";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";

export const MobileTable = ({ data, isOdd }) => {
  return (
    <>
      <Link
        to={"/voting-system"}
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
            <button>
              <GoDotFill />
              {data.status}
            </button>
          </Col>
        </div>
      </Link>
    </>
  );
};
