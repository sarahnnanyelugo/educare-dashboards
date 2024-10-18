import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import Head from "../../assets/images/logo-head.png";
import Write from "../../assets/images/logo-write.png";
import Accordion from "react-bootstrap/Accordion";
import { SidebarData } from "./SidebarData";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowUp } from "react-icons/md";
import { LuArrowLeftToLine } from "react-icons/lu";

// Import the JSON file
import "./side-nav.scss";
// Import icons
import {
  IoStatsChartSharp,
  IoStorefrontOutline,
  IoCalendarNumberOutline,
} from "react-icons/io5";
import { SlPeople } from "react-icons/sl";
import { LuBuilding2 } from "react-icons/lu";
import { LiaIdCardSolid } from "react-icons/lia";
import { FaCoins } from "react-icons/fa";
import {
  MdOutlineEmojiTransportation,
  MdOutlineHowToVote,
} from "react-icons/md";
import { TbPhoto } from "react-icons/tb";

export const SideNav = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionToggle = (key) => {
    setActiveAccordion(activeAccordion === key ? null : key);
  };
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Map icon names to the actual components
  const iconMap = {
    IoStatsChartSharp: IoStatsChartSharp,
    SlPeople: SlPeople,
    LuBuilding2: LuBuilding2,
    LiaIdCardSolid: LiaIdCardSolid,
    FaCoins: FaCoins,
    IoStorefrontOutline: IoStorefrontOutline,
    MdOutlineEmojiTransportation: MdOutlineEmojiTransportation,
    IoCalendarNumberOutline: IoCalendarNumberOutline,
    MdOutlineHowToVote: MdOutlineHowToVote,
    TbPhoto: TbPhoto,
  };

  return (
    <div
      style={{
        width: isCollapsed ? "70px" : "180px",
        transition: "width 0.3s ease",
        color: "#000",
        height: "100vh",
      }}
      className="side-nav-div"
    >
      <div className="nav-inner">
        <img
          src={Head}
          alt="logo"
          style={{
            width: isCollapsed ? "20px" : "30px",
            height: "auto",
            transition: "width 0.3s ease",
          }}
        />
        {!isCollapsed && (
          <span style={{ marginLeft: "0px" }}>
            <img
              src={Write}
              alt="logo"
              style={{
                width: "80px",
                height: "auto",
                marginLeft: "3px",
                transition: "width 0.3s ease",
              }}
            />
          </span>
        )}
        <button
          onClick={toggleSidebar}
          style={{
            marginLeft: isCollapsed ? "25px" : "45px",
            background: "#fff",
            border: "solid 1px #e7e7e7",
            color: "#fff",
            cursor: "pointer",
            padding: "0 5px",
            borderRadius: "6px",
          }}
        >
          <LuArrowLeftToLine style={{ color: "grey" }} />
        </button>
      </div>

      <ul style={{ listStyleType: "none", padding: "0", marginTop: "30px" }}>
        {SidebarData.map((item, index) => {
          const IconComponent = iconMap[item.icon]; // Dynamically select the icon

          return (
            <li
              key={index}
              style={{ padding: "15px", display: "flex", alignItems: "center" }}
            >
              <IconComponent /> {/* Render the icon */}
              {!isCollapsed && (
                <span style={{ marginLeft: "10px" }}>
                  {item.accordion ? (
                    <Accordion defaultActiveKey="">
                      <Accordion.Item eventKey={index.toString()}>
                        <Accordion.Header
                          onClick={() =>
                            handleAccordionToggle(index.toString())
                          }
                        >
                          {item.name}
                          {activeAccordion === index.toString() ? (
                            <MdKeyboardArrowUp
                              style={{ marginLeft: "20px", fontSize: "10px" }}
                            />
                          ) : (
                            <IoIosArrowDown
                              style={{ marginLeft: "20px", fontSize: "10px" }}
                            />
                          )}
                        </Accordion.Header>
                        <Accordion.Body>
                          <ul
                            style={{ paddingLeft: "0", listStyleType: "none" }}
                          >
                            {item.accordionContent.map((contentItem, idx) => (
                              <li key={idx} style={{ padding: "5px 0" }}>
                                <NavLink to={contentItem.url}>
                                  {contentItem.name}
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  ) : (
                    <NavLink to={item.url}>{item.name}</NavLink>
                  )}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
