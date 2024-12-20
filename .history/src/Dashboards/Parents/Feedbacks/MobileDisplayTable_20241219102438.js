import React from "react";

export const MobileDisplayTable = ({ data }) => {
  return (
    <>
      <div className="d-flex">
        <div className="col-8">
          <div className="d-flex">
            <img src={data.avartarList} />
            <h6>{data.child}</h6>
          </div>
          <p>{data.paragraph}</p>
        </div>
        <div className="col-4">
            <p
        </div>
      </div>
    </>
  );
};
