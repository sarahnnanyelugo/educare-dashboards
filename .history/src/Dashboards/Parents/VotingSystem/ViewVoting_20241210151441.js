import React from "react";
import ResponsiveBar from "./ResponsiveBar";

export const ViewVoting = () => {
  return (
    <>
      <div className="d-md-flex">
        <div className="col-md-7">
          <div className="card">
            <ResponsiveBar />
          </div>
        </div>
      </div>
    </>
  );
};
