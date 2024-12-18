import React, { useEffect, useState } from "react";
import { AppTable } from "../../../components/AppTable/AppTable";
import ResponsiveBar from "./ResponsiveBar";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useParams, Link } from "react-router-dom";
import { generateVoteRecords } from "../../../Utils/DataUtils";

export const ViewVoting = () => {
  const [voteRecord, setVoteRecord] = useState(null);
  const [mobileVoteRecords, setMobileVoteRecords] = useState([]);
  const { id } = useParams(); // Extract `id` from the URL

  useEffect(() => {
    // Fetch all records (you can replace this with an actual API call if needed)
    const allRecords = generateVoteRecords(10);

    // Find the specific record by `id` (to be used on live)
    // const selectedRecord = allRecords.find((record) => record.id === id);

    const randomIndex = Math.floor(Math.random() * allRecords.length);
    const selectedRecord = allRecords[randomIndex];

    if (selectedRecord) {
      setVoteRecord(selectedRecord);
    } else {
      console.error("Record not found for id:", id);
    }
    // Generate dummy data for mobileVoteRecords
    const fb = generateVoteRecords(10); // Use a subset for mobile table
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
      {voteRecord ? (
        <>
          {" "}
          <div
            className="d-flex view-voting-header"
            style={{ padding: "0 20px" }}
          >
            <h4 className="mt-4" style={{ flexGrow: 1 }}>
              {voteRecord.Position}
            </h4>
            <span className="status-published">Conducted</span>
            <span className="status-conducted">Published</span>
          </div>
          {/* Dynamic title from the `Position` field */}
          <div className="d-md-flex view-voting-container">
            <div className="col-md-7">
              <div className="card view-vote-count vote-chart">
                <h6>Top 5 Candidates</h6>
                <ResponsiveBar />
              </div>
            </div>
            <div className="col-md-5 card view-vote-count vote-table">
              <h6>Other Candidates</h6>
              <AppTable
                headers={["Candidate", "Class", "Vote"]}
                rows={mobileVoteRecords}
                includeImages={true}
              />
            </div>
          </div>
        </>
      ) : (
        <p>Loading record details...</p>
      )}
    </>
  );
};
