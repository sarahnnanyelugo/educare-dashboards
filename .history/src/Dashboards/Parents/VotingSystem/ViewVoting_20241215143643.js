import React, { useEffect, useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { AppTable } from "../../../components/AppTable/AppTable";
import ResponsiveBar from "./ResponsiveBar";
import { IoIosArrowRoundBack } from "react-icons/io";
import { generateMobileVoteRecords } from "../../../Utils/DataUtils";

export const ViewVoting = () => {
  const [mobileVoteRecords, setMobileVoteRecords] = useState([]);
  const { id } = useParams(); // Retrieve id from URL
  const location = useLocation();
  const positionTitle = location.state?.position || `Voting Details (${id})`; // Fallback to id if no position is passed

  const headers2 = ["Candidate", "Class", "Vote"];
  useEffect(() => {
    const fb = generateMobileVoteRecords(12);
    setMobileVoteRecords(fb);
  }, []);

  return (
    <>
      <div className="bl-div">
        <Link to={"/voting-system"} className="back-link">
          <IoIosArrowRoundBack />
          Back
        </Link>
      </div>
      <div className="d-md-flex view-voting-container">
        <div className="col-md-7">
          <div className="card view-vote-count vote-chart">
            <h6>{positionTitle}</h6> {/* Dynamically display the position */}
            <ResponsiveBar />
          </div>
        </div>
        <div className="col-md-5 card view-vote-count vote-table">
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
