import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import Head from "../../assets/images/logo-head.png";
import Write from "../../assets/images/logo-write.png";
import Accordion from "react-bootstrap/Accordion";
import { SidebarData, MobileSidebarData } from "./SidebarData";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowUp } from "react-icons/md";
import { LuArrowLeftToLine } from "react-icons/lu";
import ListGroup from "react-bootstrap/ListGroup";
import { MdLogout } from "react-icons/md";
import { IoMail } from "react-icons/io5";

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
import { Desktop, TabletAndBelow } from "../../Utils/mediaQueries";

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
    IoMail: IoMail,
  };

  return (
    <>
      <Desktop>
        {" "}
        <div
          style={{
            width: isCollapsed ? "110px" : "260px",
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
                width: isCollapsed ? "40px" : "40px",
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
                    width: "90px",
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
                marginLeft: isCollapsed ? "25px" : "120px",
                background: "#fff",
                border: "solid 1px #e7e7e7",
                color: "#fff",
                cursor: "pointer",
                padding: "0 5px",
                borderRadius: "6px",
                position: " relative",
                zIndex: 20,
              }}
            >
              <LuArrowLeftToLine style={{ color: "grey" }} />
            </button>
          </div>

          <ListGroup style={{ marginTop: "30px" }}>
            {SidebarData.map((item, index) => {
              const IconComponent = iconMap[item.icon]; // Dynamically select the icon

              return (
                <ListGroup.Item
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {item.accordion ? (
                    <Accordion defaultActiveKey="">
                      <Accordion.Item eventKey={index.toString()}>
                        <Accordion.Header
                          onClick={() =>
                            handleAccordionToggle(index.toString())
                          }
                          style={{
                            display: "flex", // Enable flexbox
                            justifyContent: "space-between", // Push content apart
                            alignItems: "center", // Align items vertically
                            width: "100%", // Full width
                          }}
                        >
                          {/* Replace IconComponent with image */}
                          <img
                            src={
                              activeAccordion === index.toString()
                                ? item.iconActive
                                : item.iconDefault
                            }
                            alt={item.name}
                            style={{
                              marginRight: isCollapsed ? "0" : "10px",
                              transition: "color 0.3s ease",
                            }}
                          />

                          {!isCollapsed && (
                            <span
                              style={{
                                color:
                                  activeAccordion === index.toString()
                                    ? "#0098DA"
                                    : "#191919",
                                transition: "color 0.3s ease",
                                flexGrow: 1,
                              }}
                            >
                              {item.name}
                            </span>
                          )}

                          <span
                            style={{
                              marginLeft: "auto", // Push icon to the far right
                              display: "flex",
                              alignItems: "center", // Center icon vertically
                            }}
                          >
                            {activeAccordion === index.toString() ? (
                              <MdKeyboardArrowUp style={{ fontSize: "14px" }} />
                            ) : (
                              <IoIosArrowDown style={{ fontSize: "14px" }} />
                            )}
                          </span>
                        </Accordion.Header>

                        <Accordion.Body>
                          <ListGroup style={{ listStyleType: "none" }}>
                            {item.accordionContent.map((contentItem, idx) => (
                              <ListGroup.Item
                                key={idx}
                                style={{ padding: "5px 0" }}
                              >
                                <NavLink
                                  to={contentItem.url}
                                  className={({ isActive }) =>
                                    isActive ? "active-link" : ""
                                  }
                                >
                                  {contentItem.name}
                                </NavLink>
                              </ListGroup.Item>
                            ))}
                          </ListGroup>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  ) : (
                    <NavLink
                      to={item.url}
                      className={({ isActive }) =>
                        isActive ? "active-link" : ""
                      }
                      style={{
                        display: "flex",
                        alignItems: "center",
                        textDecoration: "none",
                      }}
                    >
                      {({ isActive }) => (
                        <>
                          <img
                            src={isActive ? item.iconActive : item.iconDefault}
                            alt={item.name}
                            style={{
                              marginRight: isCollapsed ? "0" : "10px",
                              transition: "color 0.3s ease",
                            }}
                          />
                          {!isCollapsed && (
                            <span
                              style={{
                                color: isActive ? "#0098da" : "#191919",
                              }}
                            >
                              {item.name}
                            </span>
                          )}
                        </>
                      )}
                    </NavLink>
                  )}
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </div>
      </Desktop>
      <TabletAndBelow>
        {" "}
        <div className="side-nav-div">
          <div className="nav-inner"></div>

          <ListGroup style={{ marginTop: "30px" }}>
            {MobileSidebarData.map((item, index) => {
              const IconComponent = iconMap[item.icon]; // Dynamically select the icon

              return (
                <ListGroup.Item
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "30px",
                  }}
                >
                  {item.accordion ? (
                    <Accordion defaultActiveKey="">
                      <Accordion.Item eventKey={index.toString()}>
                        <Accordion.Header
                          onClick={() =>
                            handleAccordionToggle(index.toString())
                          }
                          style={{
                            display: "flex", // Enable flexbox
                          }}
                        >
                          <IconComponent
                            style={{
                              color:
                                activeAccordion === index.toString()
                                  ? "#0098DA"
                                  : "#191919",
                              marginRight: isCollapsed ? "0" : "10px",
                              transition: "color 0.3s ease",
                            }}
                          />
                          {!isCollapsed && (
                            <span
                              style={{
                                color:
                                  activeAccordion === index.toString()
                                    ? "#0098DA"
                                    : "#191919",
                                transition: "color 0.3s ease",
                                flexGrow: 1,
                              }}
                            >
                              {item.name}
                            </span>
                          )}
                          <span
                            style={{
                              marginLeft: "",
                            }}
                          >
                            {activeAccordion === index.toString() ? (
                              <MdKeyboardArrowUp style={{ fontSize: "14px" }} />
                            ) : (
                              <IoIosArrowDown style={{ fontSize: "14px" }} />
                            )}
                          </span>
                        </Accordion.Header>
                        <Accordion.Body>
                          <ListGroup
                            style={{ paddingLeft: "0", listStyleType: "none" }}
                          >
                            {item.accordionContent.map((contentItem, idx) => (
                              <ListGroup.Item
                                key={idx}
                                style={{ padding: "5px 0" }}
                              >
                                <NavLink
                                  to={contentItem.url}
                                  className={({ isActive }) =>
                                    isActive ? "active-link" : ""
                                  }
                                >
                                  {contentItem.name}
                                </NavLink>
                              </ListGroup.Item>
                            ))}
                          </ListGroup>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  ) : (
                    <NavLink
                      to={item.url}
                      className={({ isActive }) =>
                        isActive ? "active-link" : ""
                      }
                      style={{
                        display: "flex",
                        alignItems: "center",
                        textDecoration: "none",
                      }}
                    >
                      {/* Icon and link for non-accordion items */}
                      <IconComponent
                        style={{
                          color: ({ isActive }) => (isActive ? "blue" : "grey"),
                          marginRight: isCollapsed ? "0" : "10px",
                          transition: "color 0.3s ease",
                        }}
                      />

                      <span
                        style={{
                          color: ({ isActive }) => (isActive ? "blue" : "grey"),
                          transition: "color 0.3s ease",
                        }}
                      >
                        {item.name}
                      </span>
                    </NavLink>
                  )}
                </ListGroup.Item>
              );
            })}
            <ListGroup.Item>
              <span>
                <MdLogout />
              </span>
              Sign out
            </ListGroup.Item>
          </ListGroup>
        </div>
      </TabletAndBelow>
    </>
  );
};
