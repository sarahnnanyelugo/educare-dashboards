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

const rawData = [
  { name: "January", sales: 30, image: Peter },
  { name: "February", sales: 50, image: Peter },
  { name: "March", sales: 40, image: Student },
];
const data = rawData.sort((a, b) => b.sales - a.sales);

const CustomBarLabel = (props) => {
  const { x, y, width, value, image } = props;
  return (
    <>
      <foreignObject
        x={imageX}
        y={imageY}
        width={imageWidth}
        height={imageHeight}
      >
        <div
          style={{
            width: `${imageWidth}px`,
            height: `${imageHeight}px`,
            borderRadius: "100%",
            overflow: "hidden",
          }}
        >
          <img
            src={image}
            alt="label"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </foreignObject>
      <text
        x={x + width / 2}
        y={imageY + imageHeight + 15}
        fill="#000"
        textAnchor="middle"
        fontSize="12px"
      >
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
        <div className="finance-div">
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
        </div>
      </Desktop>
      <TabletAndBelow>
        <div style={{ padding: "10px" }}>
          {" "}
          <div className="card">
            {" "}
            <ResponsiveContainer width="100%" height={500}>
              <BarChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar
                  dataKey="sales"
                  fill="#8884d8"
                  label={(props) => (
                    <CustomBarLabel
                      {...props}
                      image={data[props.index].image}
                    />
                  )}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </TabletAndBelow>
    </>
  );
};
