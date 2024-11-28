import React from "react";
import "./top-nav.scss";
import { LuCalendarCheck } from "react-icons/lu";
import { CgBell } from "react-icons/cg";
import { MdOutlineEmail } from "react-icons/md";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Icon5 from "../../assets/images/peter.png";
import { FaRegUser } from "react-icons/fa";

import Dropdown from "react-bootstrap/Dropdown";
import { IoIosLogOut } from "react-icons/io";

export const TopNav = () => {
  return (
    <div className="top-nav-container">
      <ul className="list-inline">
        <li className="list-inline-item">
          <LuCalendarCheck />
        </li>
        <li className="list-inline-item">
          <CgBell />
        </li>{" "}
        <li className="list-inline-item">
          <MdOutlineEmail />
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
                  <IoIosLogOut />
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
