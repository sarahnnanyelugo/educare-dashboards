import React from "react";
import "./finance.scss";
import Purse from "../../../assets/images/wallet.png";
export const Wallet = () => {
  return (
    <>
      <div className="finance-div">
        <h5>Wallet</h5>
        <div className="wallet-balance d-flex">
          <div className="d-flex" style={{ flexGrow: 1 }}>
            <img src={Purse} height="38px" width="38px" />
            <div>
              <p>Wallet Balance</p>
              <h3>₦300,000</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
