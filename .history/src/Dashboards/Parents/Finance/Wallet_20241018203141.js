import React from "react";
import "./finance.scss";
import Purse from "../../../assets/images/wallet.png";
export const Wallet = () => {
  return (
    <>
      <div className="finance-div">
        <h5>Wallet</h5>
        <div className="wallet-balance d-flex">
          <div className="d-flex">
            <img src={Purse} />
          </div>
        </div>
      </div>
    </>
  );
};
