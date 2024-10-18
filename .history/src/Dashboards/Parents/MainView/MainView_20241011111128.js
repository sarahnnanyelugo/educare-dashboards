import React from "react";
import "./main-view.scss";

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
              <div className="stats-container col-md-5">
                <div className=" card stats">
                  <small>Wallet Balance</small>
                  <h3>₦300,000</h3>
                </div>
              </div>
              <div className="stats-container2 col-md-5">
                <div className=" card stats">
                  <small>Wallet Balance</small>
                  <h3>₦300,000</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
