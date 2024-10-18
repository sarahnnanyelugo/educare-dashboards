import React from "react";
import "./top-nav.scss";
import { LuCalendarCheck } from "react-icons/lu";
import { CgBell } from "react-icons/cg";
import { MdOutlineEmail } from "react-icons/md";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
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
                <img src={Icon5} width="38px" />
              </Dropdown.Toggle>

              {isLoggedIn && (
                <Dropdown.Menu>
                  {/*<Dropdown.Item href="#/action-1">Profile</Dropdown.Item>*/}
                  <Dropdown.Item href="/dashboard-selector">
                    My Roles
                  </Dropdown.Item>
                  <hr />
                  <Dropdown.Item
                    onClick={handleLogout}
                    style={{ color: "#DE1E1E" }}
                  >
                    Sign out
                  </Dropdown.Item>
                </Dropdown.Menu>
              )}
            </Dropdown>
          </div>
        </li>
      </ul>
    </div>
  );
};
