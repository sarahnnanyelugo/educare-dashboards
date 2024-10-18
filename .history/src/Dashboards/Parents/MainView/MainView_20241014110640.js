import React, { useState } from "react";
import "./main-view.scss";
import Icon1 from "../../../assets/images/wallet.png";
import Icon2 from "../../../assets/images/fees.png";
import News from "../../../components/News/News";
import { latestNews } from "../../../TestData/newsData";
import { ResultChart } from "../../../components/ResultChart/ResultChart";
import CountUp from "react-countup";

const customData = [100, 80, 50, 100, 90, 70, 40, 90, 100, 80, 70];
const customLabels = [
  "Math",
  "Eng",
  "CRS",
  "B.Tech",
  "B.Sci",
  "G.A.D",
  "French",
  "Comp.Sci",
  "C.C.A",
  "H. Econs",
  "Civic Edu.",
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

                      <h3>
                        <CountUp
                          start={0}
                          end={300000}
                          duration={2}
                          decimal=""
                          prefix="₦ "
                          suffix=""
                          enableScrollSpy={true}
                        />
                      </h3>
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
                      <h3>
                        <CountUp
                          start={0}
                          end={1300000}
                          duration={2}
                          decimal=""
                          prefix="₦ "
                          suffix=""
                          enableScrollSpy={true}
                        />
                      </h3>
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
                  <div className="mt-5">
                    <Link style={{ color: "", float: "right" }}>
                      View Subject
                    </Link>
                    <ResultChart labels={customLabels} dataset={customData} />
                    <center>
                      <p>Total Subjects = 15</p>
                    </center>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
