import React from "react";
import ResponsiveBar from "./ResponsiveBar";

export const ViewVoting = () => {
  return (
    <>
      <div className="d-md-flex">
        <div className="col-md-7">
          <div className="card">
            <h6>Top 5 Candidates</h6>
            <ResponsiveBar />
          </div>
        </div>
      </div>
    </>
  );
};
