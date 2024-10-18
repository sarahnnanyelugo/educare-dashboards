import React, { useState } from "react";
import { FaHome, FaUser, FaCog } from "react-icons/fa"; // Example icons
import Head from "../../assets/images/logo-head.png";
import Write from "../../assets/images/logo-write.png";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import "./side-nav.scss";
import { IoStatsChartSharp } from "react-icons/io5";
import { SlPeople } from "react-icons/sl";
import { LuBuilding2 } from "react-icons/lu";
import { LiaIdCardSolid } from "react-icons/lia";
import { FaCoins } from "react-icons/fa";

export const SideNav = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      style={{
        width: isCollapsed ? "70px" : "200px", // Adjust these values as needed
        transition: "width 0.3s ease",
        backgroundColor: "#fff",
        color: "#000",
        height: "100vh",
      }}
      className="side-nav-div"
    >
      <div style={{ padding: "5px", display: "flex", alignItems: "center" }}>
        <img
          src={Head}
          alt="logo"
          style={{
            width: isCollapsed ? "40px" : "60px", // Dynamic sizing when collapsed or expanded
            height: "auto",
            transition: "width 0.3s ease",
          }}
          width="100%"
        />
        {!isCollapsed && (
          <span style={{ marginLeft: "5px" }}>
            <img
              src={Write}
              alt="logo"
              style={{
                width: "100px",
                height: "auto",
                marginLeft: "10px",
                transition: "width 0.3s ease",
              }}
              width="100%"
            />
          </span>
        )}
        <button
          onClick={toggleSidebar}
          style={{
            marginLeft: isCollapsed ? "10px" : "5px", // Align toggle button properly
            background: "",
            border: "solid 1px grey",
            color: "#fff",
            cursor: "pointer",
            padding: "0 5px",
            borderRadius: "6px",
          }}
        >
          <FaLongArrowAltLeft style={{ color: "grey" }} />
        </button>
      </div>

      <ul style={{ listStyleType: "none", padding: "0" }}>
        <li style={{ padding: "15px", display: "flex", alignItems: "center" }}>
          <IoStatsChartSharp />

          {!isCollapsed && (
            <span style={{ marginLeft: "10px" }}>
              <NavLink>Dashboard</NavLink>
            </span>
          )}
        </li>
        <li style={{ padding: "15px", display: "flex", alignItems: "center" }}>
          <SlPeople />

          {!isCollapsed && (
            <span style={{ marginLeft: "10px" }}>
              {" "}
              <NavLink>My Children</NavLink>
            </span>
          )}
        </li>
        <li style={{ padding: "15px", display: "flex", alignItems: "center" }}>
          <LuBuilding2 />

          {!isCollapsed && (
            <span style={{ marginLeft: "10px" }}>
              {" "}
              <Accordion defaultActiveKey="">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Pastoral</Accordion.Header>
                  <Accordion.Body>1</Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </span>
          )}
        </li>
        <li style={{ padding: "15px", display: "flex", alignItems: "center" }}>
          <SlPeople />
          {!isCollapsed && (
            <span style={{ marginLeft: "10px" }}>
              {" "}
              <NavLink>Feedbacks</NavLink>
            </span>
          )}
        </li>{" "}
        <li style={{ padding: "15px", display: "flex", alignItems: "center" }}>
          <LiaIdCardSolid />

          {!isCollapsed && (
            <span style={{ marginLeft: "10px" }}>
              {" "}
              <NavLink>Result</NavLink>
            </span>
          )}
        </li>
        <li style={{ padding: "15px", display: "flex", alignItems: "center" }}>
          <FaCoins />

          {!isCollapsed && (
            <span style={{ marginLeft: "10px" }}>
              {" "}
              <NavLink>Finance</NavLink>
            </span>
          )}
        </li>{" "}
        <li style={{ padding: "15px", display: "flex", alignItems: "center" }}>
          <IoStorefrontOutline />

          {!isCollapsed && (
            <span style={{ marginLeft: "10px" }}>
              {" "}
              <NavLink>Store</NavLink>
            </span>
          )}
        </li>
      </ul>
    </div>
  );
};
