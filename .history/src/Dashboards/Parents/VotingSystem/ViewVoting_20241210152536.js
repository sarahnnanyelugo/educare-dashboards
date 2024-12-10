import React, { useEffect, useState } from "react";
import { AppTable } from "../../../components/AppTable/AppTable";
import ResponsiveBar from "./ResponsiveBar";
import {
  generateVoteRecords,
  generateMobileVoteRecords,
} from "../../../Utils/DataUtils";
export const ViewVoting = () => {
  const [mobileVoteRecords, setMobileVoteRecords] = useState([]);
  const headers2 = ["Candidate", "Class", "Vote"];
  useEffect(() => {
    const fb = generateMobileVoteRecords(15);
    setMobileVoteRecords(fb);
    console.log(fb);
  }, []);
  return (
    <>
      <div className="d-md-flex view-voting-container">
        <div className="col-md-8">
          <div className="card view-vote-count col-md-11">
            <h6>Top 5 Candidates</h6>
            <ResponsiveBar />
          </div>
        </div>
        <div className="col-md-4 card view-vote-count">
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
