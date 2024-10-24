import React, { useEffect, useState } from "react";
import "./transport-system.scss";
import Purse from "../../../assets/images/wallet.png";
import Icon1 from "../../../assets/images/clipboard.svg";
import { BsCalendar4Week } from "react-icons/bs";
import { HiOutlineDownload } from "react-icons/hi";
import { RiSearch2Line } from "react-icons/ri";
import { AppTable } from "../../../components/AppTable/AppTable";
import { generateTransportRecords } from "../../../Utils/DataUtils";

import { IoIosArrowDown } from "react-icons/io";

export const TransportSystem = () => {
  const [transportRecords, setTransportRecords] = useState([]);
  const headers = ["Start", "End", "Position", "Status", "Results", "Action"];

  useEffect(() => {
    const fb = generateTransportRecords(8);
    setTransportRecords(fb);
    console.log(fb);
  }, []);
  return (
    <>
      <div className="finance-div">
        <h5>Transport System</h5>

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
            rows={transportRecords}
            includeImages={true}
          />
        </div>
      </div>
    </>
  );
};
