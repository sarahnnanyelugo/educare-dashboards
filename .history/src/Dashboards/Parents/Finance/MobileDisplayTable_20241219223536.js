import React from "react";

export const MobileDisplayTable = ({ data, isOdd }) => {
  return (
    <>
      <div className={`d-flex mobile-feed ${isOdd ? "odd-row" : "even-row"}`}>
        <div className="col-9" style={{ paddingRight: "10px" }}>
          <div className="d-flex">
            <img src={data.Photo} width="26px" height="26px" />
            <h6>{data.Child}</h6>
          </div>
          <p>{data.Details}</p>
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
