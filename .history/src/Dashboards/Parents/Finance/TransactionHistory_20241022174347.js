import React, { useEffect, useState } from "react";
import "./finance.scss";
import Purse from "../../../assets/images/wallet.png";
import Icon1 from "../../../assets/images/clipboard.svg";
import { BsCalendar4Week } from "react-icons/bs";
import { HiOutlineDownload } from "react-icons/hi";
import { RiSearch2Line } from "react-icons/ri";
import { AppTable } from "../../../components/AppTable/AppTable";
import { generateWallet } from "../../../Utils/DataUtils";
import Student from "../../../assets/images/student.png";
import Peter from "../../../assets/images/peter.png";
export const TransactionHistory = () => {
  const [wallet, setWallet] = useState([]);
  const headers = ["Date", "Code", "Amount", "Purpose", "Status", "Action"];
  const avatarList = [Student, Peter];
  useEffect(() => {
    const fb = generateWallet(8, avatarList);
    setWallet(fb);
    console.log(fb);
  }, []);
  return (
    <>
      <div className="finance-div">
        <h5>Transaction History</h5>

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
              <div className=" col">
                <h6>Type</h6>
                <div className="select-div  d-flex col">
                  {" "}
                  <select>
                    <option>First CA</option>
                    <option>Second CA</option>
                    <option>Third CA</option>
                  </select>
                </div>
              </div>
              <div className=" col">
                <h6>Result Type</h6>
                <div className="select-div  d-flex col">
                  {" "}
                  <select>
                    <option>School Result</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="d-md-flex col-md-4 offset-md-2">
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
                Export as csv
              </button>
            </div>
          </div>
          <AppTable headers={headers} rows={wallet} includeImages={true} />
        </div>
      </div>
    </>
  );
};
