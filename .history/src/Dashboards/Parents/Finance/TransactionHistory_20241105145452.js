import React, { useEffect, useState } from "react";
import "./finance.scss";
import Purse from "../../../assets/images/wallet.png";
import Icon1 from "../../../assets/images/clipboard.svg";
import { BsCalendar4Week } from "react-icons/bs";
import { HiOutlineDownload } from "react-icons/hi";
import { RiSearch2Line } from "react-icons/ri";
import { AppTable } from "../../../components/AppTable/AppTable";
import { generateTransactionHistory } from "../../../Utils/DataUtils";
import Student from "../../../assets/images/student.png";
import Peter from "../../../assets/images/peter.png";
const sessions = [
  { value: "2020/2022", label: "2020/2022" },
  { value: "2021/2022", label: "2021/2022" },
  { value: "2022/2023", label: "2022/2023" },
  { value: "2023/2024", label: "2023/2024" },
];
const resultType = [
  { value: "termly", label: "Termly" },
  { value: "weekly", label: "Weekly" },
];
const CAType = [
  { value: "first c.a", label: "First C.A." },
  { value: "second c.a.", label: "Second C.A." },
  { value: "third c.a.", label: "Third C.A." },
];
export const TransactionHistory = () => {
  const [transactionHistory, setTransactionHistory] = useState([]);
  const headers = [
    "Date",
    "TransactionID",
    "Amount",
    "Purpose",
    "Status",
    "Action",
  ];

  useEffect(() => {
    const fb = generateTransactionHistory(8);
    setTransactionHistory(fb);
    console.log(fb);
  }, []);

  const [selectedTerm, setSelectedTerm] = useState("");
  const [selectedSession, setSelectedSession] = useState("");
  const [selectedCA, setSelectedCA] = useState("");
  const [selectedResultType, setSelectedResultType] = useState("");
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
          <hr />
          <AppTable
            headers={headers}
            rows={transactionHistory}
            includeImages={true}
          />
        </div>
      </div>
    </>
  );
};
