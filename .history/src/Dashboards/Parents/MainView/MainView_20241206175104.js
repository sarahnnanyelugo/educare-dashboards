import React, { useState } from "react";
import "./main-view.scss";
import Icon1 from "../../../assets/images/wallet.png";
import Icon2 from "../../../assets/images/fees.png";
import Icon3 from "../../../assets/images/clipboard.svg";
import News from "../../../components/News/News";
import { latestNews } from "../../../TestData/newsData";
import { children } from "../../../TestData/childrenData";
import { schEvents } from "../../../TestData/schEvents";
import { ResultChart } from "../../../components/ResultChart/ResultChart";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { Children } from "../MyChildren/Children";
import { Calender } from "../../../components/Calender/Calender";
import Select from "../../../components/Select/Select";
import { GoDotFill } from "react-icons/go";

const child = [
  { value: "Chidera Ozike -Basic 1", label: "Chidera Ozike -Basic 10" },
  { value: "Emmanuella Ozike - Basic 7", label: "Emmanuella Ozike - Basic 7" },
  { value: "Ogechi Ozike - Basic 11", label: "Ogechi Ozike - Basic 11" },
];
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
const linkUrl = "my-children";
export const MainView = () => {
  const [state, setState] = useState({
    query: "",

    list2: latestNews.filter((newsItem) => {
      return newsItem.id <= 4;
    }),
    list: children.filter((newsItem) => {
      return newsItem.id <= 3;
    }),
  });
  const [selectedTerm, setSelectedTerm] = useState("");
  const [selectedSession, setSelectedSession] = useState("");
  const [selectedChild, setSelectedChild] = useState("");

  return (
    <>
      <div className="main-view">
        <div className="d-md-flex">
          <div className="col-md-8">
            <p style={{ fontSize: "18px", marginTop: "20px" }}>
              Good morning, <strong>Peter</strong>
            </p>
            <div className="d-flex stats-holder">
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
                    <div style={{ flexGrow: 1 }}>
                      <small>FIrst term school fees</small>
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
                    <small
                      style={{
                        color: "#08B529",
                        fontFamily: "rebondG-Medium",
                      }}
                    >
                      <GoDotFill />
                      Paid
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-md-flex mt-5 ">
              <div className="col-md-7 stats-container web-news">
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
                <div className=" card performance-review col-12">
                  <div className="card ">
                    <Select
                      options={child}
                      value={selectedChild}
                      onChange={setSelectedChild}
                      placeholder="Select Child"
                    />
                  </div>{" "}
                  <div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-3 mt-2">
                    <div className="col">
                      {" "}
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
                    <div className="col">
                      {" "}
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
                  </div>
                  <div className="mt-5">
                    <Link
                      style={{
                        color: "#0098DA",
                        float: "right",
                        fontSize: "10px",
                        fontFamily: "rebondBook;",
                        marginBottom: "20px",
                      }}
                    >
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
          <div className="col-md-4 stats-container2">
            <div className="col-md-12 card children-corner">
              <h6>My Child(ren)</h6>
              <div className="">
                {" "}
                {children.map((data, index) => (
                  <Children
                    data={data}
                    key={index}
                    mode="link" // This page uses "link" functionality
                    linkUrl={`/my-children?tab=${index + 1}`} // Pass the tab index as a query parameter
                  />
                ))}
              </div>
              <div className="d-flex mt-5">
                {" "}
                <h6 style={{ flexGrow: 1 }}>School Calender</h6>
                <small>Session 2014/2015</small>
              </div>
              <Link to={"/calendar"}>
                <div className="card">
                  {" "}
                  {schEvents.map((data, index) => (
                    <Calender data={data} />
                  ))}
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
