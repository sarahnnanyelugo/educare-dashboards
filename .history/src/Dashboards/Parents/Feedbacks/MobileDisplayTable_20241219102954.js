import React from "react";

export const MobileDisplayTable = ({ data }) => {
  return (
    <>
      <div className="d-flex">
        <div className="col-8">
          <div className="d-flex">
            <img src={data.avartarList} width="24px" height="24px" />
            <h6>{data.Child}</h6>
          </div>
          <p>{data.paragraph}</p>
        </div>
        <div className="col-4">
          <p>{data.Category}</p>
          <p>{data.Date}</p>
        </div>
      </div>
    </>
  );
};
