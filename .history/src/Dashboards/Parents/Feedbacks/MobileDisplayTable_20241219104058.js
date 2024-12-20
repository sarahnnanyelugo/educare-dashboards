import React from "react";

export const MobileDisplayTable = ({ data }) => {
  return (
    <>
      <div className="d-flex mobile-feed">
        <div className="col-9">
          <div className="d-flex">
            <img src={data.Photo} width="26px" height="26px" />
            <h6>{data.Child}</h6>
          </div>
          <p>{data.Details}</p>
        </div>
        <div className="col-3" style={{ textAlign: "right" }}>
          <small>{data.Category}</small>
          <br />
          <small>{data.Date}</small>
        </div>
      </div>
    </>
  );
};
