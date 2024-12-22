import React, { useEffect, useState } from "react";
import "./pastoral.scss";
import { RiSearch2Line } from "react-icons/ri";
import Icon1 from "../../../assets/images/clipboard.svg";
import { BsCalendar4Week } from "react-icons/bs";
import Icon4 from "../../../assets/images/cal-icon.svg";

import Note from "../../../assets/images/note.svg";
import { Search } from "../../../components/Search/Search";
import Select from "../../../components/Select/Select";
import RequestExeat from "./RequestExeat";
const terms = [
  { value: "first term", label: "First Term" },
  { value: "second term", label: "Second Term" },
  { value: "third term", label: "Third Term" },
];
const sessions = [
  { value: "2020/2022", label: "2020/2022" },
  { value: "2021/2022", label: "2021/2022" },
  { value: "2022/2023", label: "2022/2023" },
  { value: "2023/2024", label: "2023/2024" },
];
function ExeatRequests() {
  const [selectedTerm, setSelectedTerm] = useState("");
  const [selectedSession, setSelectedSession] = useState("");
  return (
    <div className="feedbacks-div">
      <div className="col-md-12 heading">
        <h5>Exeat Requests</h5>
      </div>{" "}
      <div className="page-session">
        <div className="d-md-flex">
          {" "}
          <div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-3 col-md-3">
            <div className="col">
              {" "}
              <h6>Session</h6>
              <div className="card col-md-12">
                <Select
                  options={sessions}
                  value={selectedSession}
                  onChange={setSelectedSession}
                  placeholder="Select Session"
                  Icon={Icon1}
                />
              </div>
            </div>
            <div className="col">
              {" "}
              <h6>Term</h6>
              <div className="card col-md-12">
                <Select
                  options={terms}
                  value={selectedTerm}
                  onChange={setSelectedTerm}
                  Icon={Icon4}
                  placeholder="Select Term"
                />
              </div>
            </div>
          </div>
          <div className="d-md-flex col-md-4 offset-md-5">
            <div className="col-md-8">
              {" "}
              <Search />
            </div>
            <RequestExeat />
            {/* <button className="add-feedback-btn"> Request Exeat</button> */}
          </div>
        </div>
        <hr />
        <div className="">
          <center>
            <div className="col-md-2 empty-record">
              <div className="img-div">
                <center>
                  {" "}
                  <img src={Note} />
                </center>
              </div>
              <h6>No exeat records</h6>
              <p>All exit records would show up here</p>
            </div>
          </center>
        </div>
      </div>
    </div>
  );
}

export default ExeatRequests;
