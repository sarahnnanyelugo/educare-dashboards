import React from "react";
import "./main-view.scss";
import { CDBBox } from "cdbreact";

export const MainView = () => {
  return (
    <>
      <div className="main-view">
        <p style={{ fontSize: "18px" }}>
          Good morning, <strong>Peter</strong>
        </p>
        <div className="d-md-flex">
          <div className="col-md-8">
            <div className="d-flex">
              <div className="col-md-5">
                <CDBContainer>
                  <CDBBox tag="div">Div</CDBBox>
                </CDBContainer>
              </div>
              <div className="col-md-5"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
