import React from "react";
import { Col, Row } from "react-bootstrap";
import "./mobile-table.scss";
import { GoDotFill } from "react-icons/go";

export const MobileTable = ({ data, isOdd }) => {
  return (
    <>
      <div className="mobile-table-container ">
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
      </div>
    </>
  );
};
