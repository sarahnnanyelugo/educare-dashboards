import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowUp } from "react-icons/md";
import Accordion from "react-bootstrap/Accordion";

export const SideNav = ({ SidebarData, isCollapsed }) => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionToggle = (key) => {
    setActiveAccordion(activeAccordion === key ? null : key);
  };

  return (
    <ul style={{ listStyleType: "none", padding: "0" }}>
      {SidebarData.map((item, index) => (
        <li
          key={index}
          style={{ padding: "15px", display: "flex", alignItems: "center" }}
        >
          {!item.accordion ? (
            // If it's a normal menu item
            <div style={{ display: "flex", alignItems: "center" }}>
              {item.icon && <item.icon />}
              {!isCollapsed && (
                <span style={{ marginLeft: "10px" }}>
                  <NavLink to={item.url}>{item.name}</NavLink>
                </span>
              )}
            </div>
          ) : (
            // If it's an accordion item
            <Accordion activeKey={activeAccordion}>
              <Accordion.Item eventKey={index.toString()}>
                <Accordion.Header
                  onClick={() => handleAccordionToggle(index.toString())}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  {item.icon && <item.icon />}
                  <span
                    style={{
                      marginLeft: "10px",
                      display: isCollapsed ? "none" : "inline",
                    }}
                  >
                    {item.name}
                  </span>
                  <span
                    style={{
                      marginLeft: "auto",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {activeAccordion === index.toString() ? (
                      <MdKeyboardArrowUp style={{ fontSize: "12px" }} />
                    ) : (
                      <IoIosArrowDown style={{ fontSize: "12px" }} />
                    )}
                  </span>
                </Accordion.Header>
                <Accordion.Body>
                  <ul style={{ paddingLeft: "0", listStyleType: "none" }}>
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
          )}
        </li>
      ))}
    </ul>
  );
};
