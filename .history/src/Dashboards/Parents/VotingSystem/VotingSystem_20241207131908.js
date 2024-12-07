import React, { useEffect, useState } from "react";
import "./voting-system.scss";
import Purse from "../../../assets/images/wallet.png";
import Icon1 from "../../../assets/images/clipboard.svg";
import { BsCalendar4Week } from "react-icons/bs";
import { HiOutlineDownload } from "react-icons/hi";
import { RiSearch2Line } from "react-icons/ri";
import { AppTable } from "../../../components/AppTable/AppTable";
import { generateVoteRecords } from "../../../Utils/DataUtils";
import Student from "../../../assets/images/student.png";
import Peter from "../../../assets/images/peter.png";
import { IoIosArrowDown } from "react-icons/io";
import { TabletAndBelow, Desktop } from "../../../Utils/mediaQueries";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "January", sales: 30, image: Peter },
  { name: "February", sales: 50, image: "../../../assets/images/peter.png" },
  { name: "March", sales: 40, image: "../../../assets/images/student.png" },
];

const CustomBarLabel = (props) => {
  const { x, y, width, value, image } = props;
  return (
    <>
      <image
        x={x + width / 2 - 15}
        y={y - 40}
        href={image}
        height={30}
        width={30}
      />
      <text x={x + width / 2} y={y - 10} fill="#000" textAnchor="middle">
        {value}
      </text>
    </>
  );
};
export const VotingSystem = () => {
  const [voteRecords, setVoteRecords] = useState([]);
  const headers = ["Start", "End", "Position", "Status", "Results", "Action"];
  const avatarList = [Student, Peter];
  useEffect(() => {
    const fb = generateVoteRecords(8, avatarList);
    setVoteRecords(fb);
    console.log(fb);
  }, []);
  return (
    <>
      <Desktop>
        {" "}
        {/* <div className="finance-div">
          <h5>Voting System</h5>

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
              rows={voteRecords}
              includeImages={true}
            />
          </div>
        </div> */}
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="sales"
              fill="#8884d8"
              label={(props) => (
                <CustomBarLabel {...props} image={data[props.index].image} />
              )}
            />
          </BarChart>
        </ResponsiveContainer>
      </Desktop>
      <TabletAndBelow>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="sales"
              fill="#8884d8"
              label={(props) => (
                <CustomBarLabel {...props} image={data[props.index].image} />
              )}
            />
          </BarChart>
        </ResponsiveContainer>
      </TabletAndBelow>
    </>
  );
};
