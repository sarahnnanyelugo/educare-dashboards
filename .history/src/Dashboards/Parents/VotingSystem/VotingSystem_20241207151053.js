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
  CartesianGrid,
} from "recharts";

const sortedData = [
  { label: "Item A", value: 300, image: Peter },
  { label: "Item B", value: 250, image: Student },
  { label: "Item C", value: 200, image: Peter },
  { label: "Item D", value: 150, image: Student },
];
const data = rawData.sort((a, b) => b.sales - a.sales);

const CustomBarLabel = (props) => {
  const { x, y, width, value, image } = props;
  const imageWidth = 46; // Image width
  const imageHeight = 46; // Image height
  const imageX = x + width / 2 - imageWidth / 2;
  const imageY = y - imageHeight - 10; // Position above the bar
  const textMargin = 10; // Add top and bottom margin

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

      {/* Text between the bar and the image */}
      <text
        x={x + width / 2}
        y={imageY + imageHeight + textMargin} // Adjusted for margin
        fill="#000"
        textAnchor="middle"
        fontSize="12px"
      >
        {value} Votes
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
            <BarChart
              width={600}
              height={400}
              data={sortedData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />{" "}
              {/* Optional grid lines */}
              <XAxis dataKey="label" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="value"
                fill="#4CAF50"
                radius={[10, 10, 0, 0]} // Rounded top corners
                label={<CustomBarLabel />}
              />
            </BarChart>
          </div>
        </div>
      </TabletAndBelow>
    </>
  );
};
