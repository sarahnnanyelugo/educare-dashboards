import React from "react";
import "./feedbacks.scss";
import { HiOutlineDownload } from "react-icons/hi";
import { RiSearch2Line } from "react-icons/ri";
import Icon1 from "../../../assets/images/clipboard.svg";
import { BsCalendar4Week } from "react-icons/bs";
function Feedbacks() {
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
        <div className="d-md-flex col-md-4 offset-md-5">
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
            Download pdf
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Feedbacks;
