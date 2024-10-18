import React, { useState } from "react";
import "./main-view.scss";
import Icon1 from "../../../assets/images/wallet.png";
import Icon2 from "../../../assets/images/fees.png";
import News from "../../../components/News/News";
import { PerfomanceChart } from "../../components/PerfomanceChart/PerfomanceChart";
import { latestNews } from "../../../TestData/newsData";

const customData = [50, 100, 80, 90, 70, 80];
const customLabels = [
  "Facebook",
  "Whatsapp",
  "Instagram",
  "Twitter",
  "LinkedIn",
  "Others",
];
export const MainView = () => {
  const [state, setState] = useState({
    query: "",

    list2: latestNews.filter((newsItem) => {
      return newsItem.id <= 4;
    }),
  });
  return (
    <>
      <div className="main-view">
        <p style={{ fontSize: "18px" }}>
          Good morning, <strong>Peter</strong>
        </p>
        <div className="d-md-flex">
          <div className="col-md-8">
            <div className="d-flex">
              <div className="stats-container col-md-5">
                <div className=" card stats">
                  <div className="d-flex">
                    <img src={Icon1} width="32px" height="32px" />
                    <div>
                      <small>Wallet Balance</small>
                      <h3>₦300,000</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="stats-container2 col-md-5">
                <div className=" card stats">
                  <div className="d-flex">
                    <img src={Icon2} width="32px" height="32px" />
                    <div>
                      <small>Wallet Balance</small>
                      <h3>₦1,300,000</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-md-flex mt-5 ">
              <div className="col-md-7 stats-container">
                {" "}
                <h6>Posts Feed</h6>
                <div className="">
                  {" "}
                  {state.list2.map((data, index) => (
                    <News data={data} key={"m" + index} />
                  ))}
                </div>
              </div>
              <div className="col-md-5 stats-container2 ">
                {" "}
                <h6>Performance Review</h6>
                <div className=" card performance-review">
                  <div className="card">
                    <select>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </div>{" "}
                  <div className="mt-2 d-flex">
                    <div className="card col-md-6">
                      <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </div>{" "}
                    <div className="card col-md-6">
                      <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </div>
                  </div>
                  <PerfomanceChart labels={customLabels} dataset={customData} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
