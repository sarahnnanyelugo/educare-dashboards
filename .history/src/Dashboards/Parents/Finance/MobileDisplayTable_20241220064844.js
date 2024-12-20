import React from "react";

export const MobileDisplayTable = ({ data, isOdd }) => {
  return (
    <>
      <div className={`d-flex mobile-feed ${isOdd ? "odd-row" : "even-row"}`}>
        <div className="col-9" style={{ paddingRight: "10px" }}>
          <div className="">
            <h6>{data.Category}</h6>
            <p>{data.Code}</p>
            <p>{data.Status}</p>
          </div>
        </div>
        <div
          className="col-3"
          style={{ textAlign: "right", paddingLeft: "8px" }}
        >
          <small>{data.Category}</small>
          <br />
          <small>{data.Date}</small>
        </div>
      </div>
    </>
  );
};
