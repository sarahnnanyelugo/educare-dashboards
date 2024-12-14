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
            <span>
              <small>
                Start:<small>{data.startDate}</small> </span>
                <small>{data.time}</small>
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
