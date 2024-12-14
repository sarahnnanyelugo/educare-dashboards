import React from "react";
import { Col, Row } from "react-bootstrap";
import "./mobile-table.scss";
export const MobileTable = ({ data }) => {
  return (
    <>
      <div className="mobile-table-container">
        <h6>{data.heading}</h6>
        <Row>
          <Col sm={8}>
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
          </Col>
          <Col>
            <small>Not conducted</small>
          </Col>
        </Row>
      </div>
    </>
  );
};
