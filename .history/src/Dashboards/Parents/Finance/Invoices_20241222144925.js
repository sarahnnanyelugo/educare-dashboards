import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Icon1 from "../../../assets/images/clipboard.svg";
import { BsCalendar4Week } from "react-icons/bs";
import { HiOutlineDownload } from "react-icons/hi";
import { RiSearch2Line } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import { generateInvoices } from "../../../Utils/DataUtils";
import Icon3 from "../../../assets/images/clipboard.svg";
import Icon4 from "../../../assets/images/cal-icon.svg";
import Download from "../../../assets/images/download.svg";
import "./finance.scss";
import {
  child1,
  child2,
  child3,
  children,
} from "../../../TestData/childrenData";
import { Children } from "../MyChildren/Children";
import { AppTable } from "../../../components/AppTable/AppTable";
import Select from "../../../components/Select/Select";
import { Search } from "../../../components/Search/Search";
import { Desktop, TabletAndBelow } from "../../../Utils/mediaQueries";
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
const status = [
  { value: "inactive", label: "Inactive" },
  { value: "active", label: "Active" },
  { value: "pending", label: "Pending" },
];
export const Invoices = () => {
  const [activeTab, setActiveTab] = useState(1); // Default to first tab
  const location = useLocation(); // Get the location object

  const getTabIndexFromUrl = () => {
    const params = new URLSearchParams(location.search);
    const tab = params.get("tab");
    return tab ? parseInt(tab, 10) : 1; // Return the tab index or default to 1
  };

  useEffect(() => {
    const initialTab = getTabIndexFromUrl();
    setActiveTab(initialTab); // Set the active tab based on the URL parameter
  }, [location.search]); // Re-run when the location changes

  const handleClick2 = (index) => {
    setActiveTab(index); // Set the active tab
  };

  const checkActive = (index, className) => {
    return activeTab === index ? className : "";
  };
  const [invoices, setInvoices] = useState([]);
  const headers = [
    "Date",
    "TransactionID",
    "Amount",
    "Purpose",
    "Status",
    "Action",
  ];
  useEffect(() => {
    const fb = generateInvoices(8);
    setInvoices(fb);
    console.log(fb);
  }, []);

  const [selectedTerm, setSelectedTerm] = useState("");
  const [selectedSession, setSelectedSession] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  return (
    <div className="my-children-view">
      <h6 style={{ fontSize: "18px", marginTop: "20px" }}>My Children</h6>
      <div className="d-md-flex">
        <div className="col-md-12 ">
          <Desktop>
            {" "}
            <div className="tabs col-md-6 row row-cols-1 row-cols-lg-3 g-2 g-lg-3">
              {children.map((data, index) => (
                <Children
                  data={data}
                  handleClick2={handleClick2}
                  tabIndex={index + 1}
                  key={index}
                  isActive={activeTab === index + 1} // Set active based on activeTab state
                  mode="tab" // This mode is for tab triggering
                />
              ))}
            </div>
          </Desktop>
          <TabletAndBelow>
            <div className="d-flex children-array-cover">
              {" "}
              <div className="tabs col-12  children-array ">
                {children.map((data, index) => (
                  <Children
                    data={data}
                    handleClick2={handleClick2}
                    tabIndex={index + 1}
                    key={index}
                    isActive={activeTab === index + 1} // Set active based on activeTab state
                    mode="tab" // This mode is for tab triggering
                  />
                ))}
              </div>
            </div>
          </TabletAndBelow>
          <br />
          <div className="panels">
            <div className={`panel ${checkActive(1, "active2")}`}>
              <div className="d-md-flex">
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
                        Icon={Icon4}
                      />
                    </div>
                  </div>

                  <div className=" col">
                    <h6>Status</h6>
                    <div className="card col-md-12">
                      <Select
                        options={status}
                        value={selectedStatus}
                        onChange={setSelectedStatus}
                        placeholder="Select Status"
                      />
                    </div>
                  </div>
                </div>

                <div className="d-md-flex col-md-6 offset-md-">
                  {" "}
                  <div style={{ flexGrow: 1 }} />
                  <div className="col-md-6 mt-2">
                    {" "}
                    <Search />
                  </div>
                  <button className="pdf-download-btn">
                    {" "}
                    <img src={Download} />
                    Download pdf
                  </button>{" "}
                  {/* <button className="app-btn "> Deposit</button> */}
                </div>
              </div>{" "}
              <hr />
              <br />
              <Desktop>
                {" "}
                <AppTable
                  headers={headers}
                  rows={invoices}
                  includeImages={true}
                />
              </Desktop>
              <TabletAndBelow>
                {invoices.map((data, index) => (
                  <MobileDisplayTable
                    data={data}
                    isOdd={index % 2 === 1}
                    key={index}
                    showLink={false}
                  />
                ))}
              </TabletAndBelow>
            </div>
            <div className={`panel ${checkActive(2, "active2")}`}>2 </div>
            <div className={`panel ${checkActive(3, "active2")}`}> 3</div>
          </div>
        </div>
      </div>
    </div>
  );
};
