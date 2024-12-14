import React from "react";
import { Col, Row } from "react-bootstrap";
import "./mobile-table.scss";
export const MobileTable = ({ data }) => {
  return (
    <>
      <div className="mobile-table-container">
        <h6>{data.heading}</h6>
        <Row>
          <Col>
            <small>
              Start:{data.startDate}
              {data.startingTime}
            </small>
            <br />
            <small>
              End:<small>{data.startDate}</small>
              {data.time}
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
