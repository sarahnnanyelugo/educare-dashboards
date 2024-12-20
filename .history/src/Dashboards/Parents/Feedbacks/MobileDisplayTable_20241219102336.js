import React from "react";

export const MobileDisplayTable = ({ data }) => {
  return (
    <>
      <div className="d-flex">
        <div className="col-8">
          <div className="d-flex">
            <img src={data.avartarList} />
          </div>
        </div>
      </div>
    </>
  );
};
