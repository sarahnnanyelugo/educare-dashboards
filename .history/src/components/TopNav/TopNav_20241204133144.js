import React from "react";
import "./top-nav.scss";
import { LuCalendarCheck } from "react-icons/lu";
import { CgBell } from "react-icons/cg";
import { MdOutlineEmail } from "react-icons/md";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Icon5 from "../../assets/images/peter.png";
import Icon6 from "../../assets/images/wallet.png";
import Icon7 from "../../assets/images/doc.svg";
import { FaRegUser } from "react-icons/fa";

import Dropdown from "react-bootstrap/Dropdown";
import { IoIosLogOut } from "react-icons/io";
import { Link } from "react-router-dom";

export const TopNav = () => {
  return (
    <div className="top-nav-container">
      <ul className="list-inline">
        <li className="list-inline-item">
          <div className="profile-drop profile-drop2">
            <Dropdown>
              <Dropdown.Toggle>
                <LuCalendarCheck style={{ fontSize: "24px" }} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/dashboard-selector">
                  <h6>Unapproved Results</h6>
                </Dropdown.Item>
                <hr />
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </li>
        <li className="list-inline-item">
          <div className="profile-drop profile-drop2">
            <Dropdown>
              <Dropdown.Toggle>
                <CgBell style={{ fontSize: "24px" }} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>
                  <h6>Notifications</h6>
                </Dropdown.Item>{" "}
                <Dropdown.Item>
                  <Notificatific Icon={Icon6} text="" />
                </Dropdown.Item>{" "}
                <Dropdown.Item>
                  <h6>Notifications</h6>
                </Dropdown.Item>
                <hr />
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </li>{" "}
        <li className="list-inline-item">
          <Link to={"/chat-interface"} style={{ color: "#000" }}>
            {" "}
            <MdOutlineEmail style={{ fontSize: "24px" }} />
          </Link>
        </li>
        <li className="list-inline-item">
          <div className="profile-drop">
            <Dropdown>
              <Dropdown.Toggle>
                <img src={Icon5} width="37px" />
                Peter Olugbenga
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/dashboard-selector">
                  <h6> Peter Olugbenga</h6>
                  <small>olasunkanifiness@gmail.com</small>
                </Dropdown.Item>
                <hr />
                <Dropdown.Item>
                  <FaRegUser style={{ marginRight: "10px" }} />
                  Profile
                </Dropdown.Item>
                <Dropdown.Item>
                  <IoIosLogOut style={{ marginRight: "10px" }} />
                  Sign out
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </li>
      </ul>
    </div>
  );
};
