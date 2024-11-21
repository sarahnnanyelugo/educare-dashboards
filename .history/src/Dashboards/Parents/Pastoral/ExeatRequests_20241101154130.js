import React, { useEffect, useState } from "react";
import "./pastoral.scss";
import { RiSearch2Line } from "react-icons/ri";
import Icon1 from "../../../assets/images/clipboard.svg";
import { BsCalendar4Week } from "react-icons/bs";

import Note from "../../../assets/images/note.svg";
import { Search } from "../../../components/Search/Search";
function ExeatRequests() {
  return (
    <div className="feedbacks-div">
      <div className="col-md-12 heading">
        <h5>Feedbacks</h5>
        <hr />
      </div>{" "}
      <div className="d-md-flex">
        {" "}
        <div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-3 col-md-3">
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
        <div className="d-md-flex col-md-4 offset-md-3">
          <div className="col-md-9">
            {" "}
            <Search />
          </div>
          <button className="add-feedback-btn"> Request Exeat</button>
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
  );
}

export default ExeatRequests;
