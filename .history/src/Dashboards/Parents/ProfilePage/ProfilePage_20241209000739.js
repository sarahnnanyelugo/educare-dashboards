import React, { useState } from "react";
import "./profile-page.scss";
import User from "../../../assets/images/peter.png";
import Signature from "../../../assets/images/signature.png";
import { UploadPhoto } from "../../../components/UploadPhoto/UploadPhoto";

export const ProfilePage = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";
  const [pin, setPin] = useState(["", "", "", ""]);
  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return; // Allow only digits
    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);

    // Move focus to the next input
    if (value && index < 3) {
      document.getElementById(`pin-input-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !pin[index] && index > 0) {
      document.getElementById(`pin-input-${index - 1}`).focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("Text").slice(0, 4);
    const newPin = [...pin];
    for (let i = 0; i < pastedData.length; i++) {
      if (/^[0-9]$/.test(pastedData[i])) {
        newPin[i] = pastedData[i];
      }
    }
    setPin(newPin);
    document
      .getElementById(`pin-input-${Math.min(pastedData.length - 1, 3)}`)
      .focus();
  };
  return (
    <>
      <div className="profile-page">
        <h5>Settings</h5>
        <div className="card pastoral-tab">
          <div className="tabs2 offset-md-">
            <button
              className={`tab2 edge ${checkActive(1, "active3")}`}
              onClick={() => handleClick(1)}
            >
              Pastoral Report
            </button>
            <button
              className={`tab2 ${checkActive(2, "active3")}`}
              onClick={() => handleClick(2)}
            >
              Exeat Report
            </button>{" "}
            <button
              className={`tab2 ${checkActive(3, "active3")}`}
              onClick={() => handleClick(3)}
            >
              Hostel Report
            </button>{" "}
          </div>
          <div className="panels">
            <div className={`panel ${checkActive(1, "active2")}`}>
              <div className="d-flex">
                <div className="col-3">
                  {" "}
                  <img
                    src={User}
                    width="96%"
                    style={{ borderRadius: "100%" }}
                  />
                </div>
                <UploadPhoto />
              </div>{" "}
              <h6>Full name</h6>
              <div className="parent-info">
                <p>Peter Olugbenga</p>
              </div>
              <h6>Alternative email</h6>
              <div className="parent-info">
                <p>olugnenga.p@gmail.com</p>
              </div>
              <h6>Mobile Number</h6>
              <div className="parent-info">
                <p>+2347064711742</p>
              </div>
              <h6>Current Address</h6>
              <div className="parent-info">
                <p>
                  Chevron Hospital Warri, Kilometer 4, Warri New Port
                  Expressway, Pmb 1244, Warri Delta State
                </p>
              </div>
              <h6>Personal ID</h6>
              <div className="parent-info">
                <p>Personal ID</p>
              </div>
              <h6>Alternative Email</h6>
              <div className="parent-info">
                <p>PeterO@gmail.com</p>
              </div>{" "}
              <h6>Gender</h6>
              <div className="parent-info">
                <p>Female</p>
              </div>{" "}
              <h6>Alternative mobile number</h6>
              <div className="parent-info">
                <p>Female</p>
              </div>{" "}
              <h6>Permanent address</h6>
              <div className="parent-info">
                <p>
                  Chevron Hospital Warri, Kilometer 4, Warri New Port
                  Expressway, Pmb 1244, Warri Delta State.
                </p>
              </div>
              <h6>My signature</h6>
              <div className="d-flex">
                <div className="col-3">
                  <img src={Signature} width="100%" />
                </div>
                <UploadPhoto height="60px" />
              </div>
              <h6>Access PIN</h6>
            </div>
            <div className={`panel ${checkActive(2, "active2")}`}> 2</div>
            <div className={`panel ${checkActive(3, "active2")}`}> 3</div>
          </div>
        </div>
      </div>
    </>
  );
};
