import React from "react";
import "./main-view.scss";
import { GiWallet } from "react-icons/gi";
import { CiMoneyCheck1 } from "react-icons/ci";
import Icon1 from "../../../assets/images/wallet.png";
import Icon2 from "../../../assets/images/fees.png";
import News from "../../../components/News/News";

export const MainView = () => {
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
                <h6>Post Feed</h6>
                <div className="card">
                  {" "}
                  {state.list2.map((data, index) => (
                    <News data={data} key={"m" + index} />
                  ))}
                </div>
              </div>
              <div className="col-md-5 stats-container2 ">
                {" "}
                <h6>Performance Review</h6>
                <div className=" card"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
