import React from "react";
import { Link } from "react-router-dom";
import { GoDotFill } from "react-icons/go";

export const MobileDisplayTable = ({ data, isOdd }) => {
  const getStatusClass = (status) => {
    if (!status) return "status-default";
    const normalizedStatus = status.trim().toLowerCase();
    if (normalizedStatus === "conducted") {
      return "status-conducted";
    } else if (normalizedStatus === "published") {
      return "status-published";
    } else if (normalizedStatus === "pending") {
      return "status-pending";
    } else if (normalizedStatus === "submitted") {
      return "status-submitted";
    } else if (normalizedStatus === "not submitted") {
      return "status-not-submitted";
    } else if (normalizedStatus === "severe") {
      return "status-severe";
    } else if (normalizedStatus === "cancelled") {
      return "status-cancelled";
    } else if (normalizedStatus === "paid") {
      return "status-paid";
    } else {
      return "status-default";
    }
  };

  return (
    <>
      <div
        className={`d-flex mobile-feed wallet-mobile ${
          isOdd ? "odd-row" : "even-row"
        }`}
      >
        <div className="col-7" style={{ paddingRight: "10px" }}>
          <div className="">
            <h6>{data.Purpose}</h6>
            <p>{data.Code}</p>

            <button className={getStatusClass(data.Status)}>
              {" "}
              <GoDotFill />
              {data.Status}
            </button>
          </div>
        </div>
        <div
          className="col-5"
          style={{ textAlign: "right", paddingLeft: "8px" }}
        >
          <h6>{data.Amount}</h6>
          <h6 style={{ fontFamily: " rebondBook" }}> {data.Date}</h6>

          <Link to={"/"}>Proceed to Pay</Link>
        </div>
      </div>
    </>
  );
};
