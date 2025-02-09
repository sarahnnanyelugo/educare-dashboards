import React, { useEffect, useState } from "react";
import { AppTable } from "../../../components/AppTable/AppTable";
import ResponsiveBar from "./ResponsiveBar";
import { IoIosArrowRoundBack } from "react-icons/io";

import {
  generateVoteRecords,
  generateMobileVoteRecords,
} from "../../../Utils/DataUtils";
export const ViewVoting = () => {
  const [mobileVoteRecords, setMobileVoteRecords] = useState([]);
  const headers2 = ["Candidate", "Class", "Vote"];
  useEffect(() => {
    const fb = generateMobileVoteRecords(12);
    setMobileVoteRecords(fb);
    console.log(fb);
  }, []);
  return (
    <>
      <Link>
        <IoIosArrowRoundBack />
        Back
      </Link>
      <div className="d-md-flex view-voting-container">
        <div className="col-md-7">
          <div className="card view-vote-count vote-chart">
            <h6>Top 5 Candidates</h6>
            <ResponsiveBar />
          </div>
        </div>
        <div className="col-md-5 card view-vote-count vote-table ">
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
