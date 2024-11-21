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
import Select from "../../../components/Select/Select";
import { Search } from "../../../components/Search/Search";
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
                <div className="card col-md-12">
                  <Select
                    options={sessions}
                    value={selectedSession}
                    onChange={setSelectedSession}
                    placeholder="Select Session"
                    Icon={Icon3}
                  />
                </div>
              </div>
              <div className=" col">
                <h6>Term</h6>
                <div className="card col-md-12">
                  <Select
                    options={terms}
                    value={selectedTerm}
                    onChange={setSelectedTerm}
                    placeholder="Select Term"
                    Icon={Icon3}
                  />
                </div>
              </div>
              <div className=" col">
                <h6>Type</h6>
                <div className="card col-md-12">
                  <Select
                    options={CAType}
                    value={selectedCA}
                    onChange={setSelectedCA}
                    placeholder="Select CA"
                    Icon={Icon3}
                  />
                </div>
              </div>
              <div className=" col">
                <h6>Result Type</h6>
                <div className="card col-md-12">
                  <Select
                    options={resultType}
                    value={selectedResultType}
                    onChange={setSelectedResultType}
                    placeholder="Select Result Type"
                    Icon={Icon3}
                  />
                </div>
              </div>
            </div>
            <div className="d-md-flex col-md-4 offset-md-2">
              <div className="col-md-8 mt-2">
                {" "}
                <Search />
              </div>
              <button className="pdf-download-btn">
                {" "}
                <HiOutlineDownload className="icon2" />
                Export as csv
              </button>
            </div>
          </div>
          <hr />
          <br />
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
