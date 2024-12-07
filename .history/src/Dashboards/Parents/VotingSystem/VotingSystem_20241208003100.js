import React, { useEffect, useState } from "react";
import "./voting-system.scss";
import Purse from "../../../assets/images/wallet.png";
import Icon1 from "../../../assets/images/clipboard.svg";
import { BsCalendar4Week } from "react-icons/bs";
import { HiOutlineDownload } from "react-icons/hi";
import { RiSearch2Line } from "react-icons/ri";
import { AppTable } from "../../../components/AppTable/AppTable";
import {
  generateVoteRecords,
  generateMobileVoteRecords,
} from "../../../Utils/DataUtils";
import Student from "../../../assets/images/student.png";
import Peter from "../../../assets/images/peter.png";
import { IoIosArrowDown } from "react-icons/io";
import { TabletAndBelow, Desktop } from "../../../Utils/mediaQueries";
import ResponsiveBar from "./ResponsiveBar";

export const VotingSystem = () => {
  const [voteRecords, setVoteRecords] = useState([]);
  const [mobileVoteRecords, setMobileVoteRecords] = useState([]);
  const headers = ["Start", "End", "Position", "Status", "Results", "Action"];
  const headers2 = ["Candidate", "Class", "Vote"];
  const avatarList = [Student, Peter];
  useEffect(() => {
    const fb = generateVoteRecords(8, avatarList);
    setVoteRecords(fb);
    console.log(fb);
  }, []);
  useEffect(() => {
    const fb = generateMobileVoteRecords(8, avatarList);
    setMobileVoteRecords(fb);
    console.log(fb);
  }, []);
  return (
    <>
      <Desktop>
        {" "}
        <div className="finance-div">
          <h5>Voting System</h5>

          <div className="selections">
            <div className="d-md-flex">
              {" "}
              <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3 col-md-6">
                <div className=" col">
                  <h6>Session</h6>
                  <div className="select-div  d-flex col">
                    {" "}
                    <div>
                      {" "}
                      <img src={Icon1} height="" />
                    </div>
                    <select>
                      <option>2023/2024</option>
                    </select>
                  </div>
                </div>
                <div className=" col">
                  <h6>Term</h6>
                  <div className="select-div  d-flex col">
                    {" "}
                    <div>
                      {" "}
                      <BsCalendar4Week />
                    </div>
                    <select>
                      <option>First Term</option>
                      <option>Second Term</option>
                      <option>Third Term</option>
                    </select>
                  </div>
                </div>
              </div>
              <div style={{ flexGrow: 1 }} />
              <div className="d-md-flex  ">
                <div>
                  <h6>Search</h6>
                  <div className="input-div d-flex">
                    <RiSearch2Line className="icon" />

                    <input placeholder="search" />
                  </div>
                </div>
                <button className="pdf-download-btn">
                  {" "}
                  <HiOutlineDownload className="icon2" />
                  Export as csv <IoIosArrowDown />
                </button>
              </div>
            </div>
            <AppTable
              headers={headers}
              rows={voteRecords}
              includeImages={true}
            />
          </div>
        </div>
      </Desktop>
      <TabletAndBelow>
        <div className="chart-container">
          <h5>Principal for the Day Election</h5>
          <div className="card">
            <h6>Top 5 Candidates</h6>
            <ResponsiveBar />
          </div>
          <div className="mt-5 card" style={{ marginBottom: "40px" }}>
            <h6>Other Candidates</h6>
            <AppTable
              headers={headers2}
              rows={mobileVoteRecords}
              includeImages={true}
            />
          </div>
        </div>
      </TabletAndBelow>
    </>
  );
};
