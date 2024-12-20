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
import Icon3 from "../../../assets/images/clipboard.svg";
import Select from "../../../components/Select/Select";
import { Search } from "../../../components/Search/Search";
import { Desktop, TabletAndBelow } from "../../../Utils/mediaQueries";
import { MobileTable } from "../../../components/MobileTable/MobileTable";
import { MobileDisplayTable } from "./MobileDisplayTable";

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
const resultType = [
  { value: "termly", label: "Termly" },
  { value: "weekly", label: "Weekly" },
];
const CAType = [
  { value: "first c.a", label: "First C.A." },
  { value: "second c.a.", label: "Second C.A." },
  { value: "third c.a.", label: "Third C.A." },
];
export const Wallet = () => {
  const [wallet, setWallet] = useState([]);
  const headers = ["Date", "Code", "Amount", "Purpose", "Status", "Action"];
  const avatarList = [Student, Peter];
  useEffect(() => {
    const fb = generateWallet(8, avatarList);
    setWallet(fb);
    console.log(fb);
  }, []);

  const [selectedTerm, setSelectedTerm] = useState("");
  const [selectedSession, setSelectedSession] = useState("");
  const [selectedCA, setSelectedCA] = useState("");
  const [selectedResultType, setSelectedResultType] = useState("");
  return (
    <>
      <div className="finance-div">
        <h5>Wallet</h5>
        <div className="wallet-balance d-md-flex">
          <div className="d-flex" style={{ flexGrow: 1 }}>
            <img src={Purse} height="38px" width="38px" />
            <div>
              <p>Wallet Balance</p>
              <h3>₦300,000</h3>
            </div>
          </div>
          <div className="wallet-btns col-md-2">
            {" "}
            <button className="withdraw-btn col-5">Withdraw</button>
            <button className="deposit-btn col-5">Deposit</button>
          </div>
        </div>
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
                <h6>Status</h6>
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
            </div>
            <div className="d-md-flex col-md-4 offset-md-2">
              <Desktop>
                {" "}
                <div className="col-md-8 mt-2">
                  {" "}
                  <Search />
                </div>
              </Desktop>
              <Desktop>
                {" "}
                <button className="pdf-download-btn ">
                  {" "}
                  <HiOutlineDownload className="icon2" />
                  Export as csv
                </button>
              </Desktop>
              <TabletAndBelow>
                {" "}
                <button className="pdf-download-btn  col-12">
                  {" "}
                  <HiOutlineDownload className="icon2" />
                  Export as csv
                </button>
              </TabletAndBelow>
            </div>
          </div>
          <hr />
          <br />
          <Desktop>
            {" "}
            <AppTable headers={headers} rows={wallet} includeImages={true} />
          </Desktop>
          <TabletAndBelow>
            <div className="card mobile-voting">
              {" "}
              {wallet.map((data, index) => (
                <MobileDisplayTable
                  data={data}
                  isOdd={index % 2 === 1}
                  key={index}
                  showLink={true}
                />
              ))}
            </div>
          </TabletAndBelow>
        </div>
      </div>
    </>
  );
};
