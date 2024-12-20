import React, { useEffect, useState } from "react";
import { AppTable } from "../../../components/AppTable/AppTable";
import ResponsiveBar from "./ResponsiveBar";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useParams, Link } from "react-router-dom";
import { generateVoteRecords } from "../../../Utils/DataUtils";
import { GoDotFill } from "react-icons/go";
import Student from "../../../assets/images/student.png";
import Peter from "../../../assets/images/peter.png";
export const ViewVoting = () => {
  const [voteRecord, setVoteRecord] = useState(null);
  const [mobileVoteRecords, setMobileVoteRecords] = useState([]);
  const { id } = useParams(); // Extract `id` from the URL

  const avatarList = [Student, Peter];
  useEffect(() => {
    const allRecords = generateVoteRecords(10, avatarList);

    const randomIndex = Math.floor(Math.random() * allRecords.length);
    const selectedRecord = allRecords[randomIndex];

    if (selectedRecord) {
      setVoteRecord(selectedRecord);
    } else {
      console.error("Record not found for id:", id);
    }
    // Generate dummy data for mobileVoteRecords
    const fb = generateVoteRecords(10, avatarList); // Use a subset for mobile table
    console.log("fb", fb);
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
            className="d-md-flex view-voting-header"
            style={{ padding: "0 20px" }}
          >
            <h4 style={{ flexGrow: 1 }}>{voteRecord.Position}</h4>
            <span className="status-published">
              {" "}
              <GoDotFill style={{ marginRight: "4px" }} />
              Conducted
            </span>
            <span className="status-conducted">
              {" "}
              <GoDotFill style={{ marginRight: "4px" }} />
              Published
            </span>
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