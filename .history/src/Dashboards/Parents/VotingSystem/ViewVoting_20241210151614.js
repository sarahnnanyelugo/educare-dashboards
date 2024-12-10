import React from "react";
import { AppTable } from "../../../components/AppTable/AppTable";
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
        <div className="mt-5 card">
          <h6>Other Candidates</h6>
          <AppTable
            headers={headers2}
            rows={mobileVoteRecords}
            includeImages={true}
          />
        </div>
      </div>
    </>
  );
};
