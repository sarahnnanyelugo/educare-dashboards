import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Icon1 from "../../../assets/images/clipboard.svg";
import { BsCalendar4Week } from "react-icons/bs";
import { HiOutlineDownload } from "react-icons/hi";
import { RiSearch2Line } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import { generateInvoices } from "../../../Utils/DataUtils";

import "./finance.scss";
import {
  child1,
  child2,
  child3,
  children,
} from "../../../TestData/childrenData";
import { Children } from "../MyChildren/Children";
import { AppTable } from "../../../components/AppTable/AppTable";

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
  const headers = ["Date", "TransactionID", "Amount", "Reference"];
  useEffect(() => {
    const fb = generateInvoices(8);
    setInvoices(fb);
    console.log(fb);
  }, []);
  return (
    <div className="my-children-view">
      <h6 style={{ fontSize: "18px", marginTop: "20px" }}>My Children</h6>
      <div className="d-md-flex">
        <div className="col-md-12 ">
          <div className="tabs col-md-12 row row-cols-1 row-cols-lg-3 g-2 g-lg-3">
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
          <div className="panels">
            <div className={`panel ${checkActive(1, "active2")}`}>
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
                    <h6>Status</h6>
                    <div className="select-div  d-flex col">
                      {" "}
                      <select>
                        <option>First CA</option>
                        <option>Second CA</option>
                        <option>Third CA</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="d-md-flex col-md-5 offset-md-1">
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
                    Export as CSV <FaAngleDown />
                  </button>{" "}
                  <button className="app-btn "> Deposit</button>
                </div>
              </div>
              <hr />
              <AppTable
                headers={headers}
                rows={pocketMoney}
                includeImages={true}
              />
            </div>
            <div className={`panel ${checkActive(2, "active2")}`}>2 </div>
            <div className={`panel ${checkActive(3, "active2")}`}> 3</div>
          </div>
        </div>
      </div>
    </div>
  );
};
