import React from "react";
import { Col, Row } from "react-bootstrap";
import "./mobile-table.scss";
export const MobileTable = ({ data }) => {
  return (
    <>
      <div className="mobile-table-container card">
        <h6>{data.heading}</h6>
        <div className="d-flex">
          <div style={{ flexGrow: 1 }}>
            <small>
              <span> Start:</span>
              {data.startDate}
              {data.startingTime}
            </small>
            <br />
            <small>
              <span> End:</span>
              {data.endDate}
              {data.endingTime}
            </small>
          </div>
          <Col>
            <small>{data.status}</small>
          </Col>
        </div>
      </div>
    </>
  );
};
