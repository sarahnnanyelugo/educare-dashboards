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
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Dropdown from "react-bootstrap/Dropdown";
import { IoIosLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
import { Notification } from "./Notification";
import { RxHamburgerMenu } from "react-icons/rx";
import { SideNav } from "../SideNav/SideNav";
import { Desktop, TabletAndBelow } from "../../Utils/mediaQueries";
import MainLogo from "../../assets/images/new-logo.png";
import { LuCalendarDays } from "react-icons/lu";
import Logo from "../../assets/images/new-logo.png";
import Cal from "../../assets/images/cal.svg";
import Notify from "../../assets/images/notify.svg";
import Message from "../../assets/images/message.svg";

export const TopNav = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Desktop>
        {" "}
        <div className="top-nav-container">
          <ul className="list-inline">
            <li className="list-inline-item">
              <div className="profile-drop profile-drop2">
                <Dropdown>
                  <Dropdown.Toggle>
                    <img src={Cal} width="24px" />
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
                    <img src={Notify} width="24px" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <h6>Notifications</h6>
                    </Dropdown.Item>{" "}
                    <hr />
                    <Dropdown.Item>
                      <Notification
                        Icon={Icon6}
                        text="₦100,000 has been added to your wallet"
                        textDate="Oct 22, 2024"
                        textTime="12:30 PM"
                      />
                    </Dropdown.Item>{" "}
                    <hr />
                    <Dropdown.Item>
                      <Notification
                        Icon={Icon7}
                        text="New document added"
                        textDate="Oct 22, 2024"
                        textTime="12:30 PM"
                      />
                    </Dropdown.Item>{" "}
                    <hr />
                    <Dropdown.Item>
                      <Notification
                        Icon={Icon6}
                        text="₦2000 sent to Emmanuella’s pocket money"
                        textDate="Oct 22, 2024"
                        textTime="12:30 PM"
                      />
                    </Dropdown.Item>{" "}
                    <hr />
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </li>{" "}
            <li className="list-inline-item">
              <Link to={"/chat-interface"} style={{ color: "#000" }}>
                {" "}
                <img src={Message} width="24px" />
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
      </Desktop>
      <TabletAndBelow>
        {" "}
        <div className="d-flex top-nav-container">
          <p className="canvas-toggle">
            <RxHamburgerMenu onClick={handleShow} />
          </p>
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              {" "}
              <Offcanvas.Title>
                <div className="col-5">
                  {" "}
                  <img src={MainLogo} alt="logo" width="100%" />
                </div>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <SideNav />
            </Offcanvas.Body>
          </Offcanvas>
          <div className="col-3 " style={{ flexGrow: 1 }}>
            <img src={Logo} alt="logo" width="30%" />
          </div>

          <div className="mobile-calender-link">
            {" "}
            <Link to={"/calendar"}></Link>
          </div>
          <div className="profile-drop profile-drop2">
            {" "}
            <Dropdown>
              <Dropdown.Toggle>
                <img src={Notify} width="24px" />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>
                  <h6>Notifications</h6>
                </Dropdown.Item>{" "}
                <hr />
                <Dropdown.Item>
                  <Notification
                    Icon={Icon6}
                    text="₦100,000 has been added to your wallet"
                    textDate="Oct 22, 2024"
                    textTime="12:30 PM"
                  />
                </Dropdown.Item>{" "}
                <hr />
                <Dropdown.Item>
                  <Notification
                    Icon={Icon7}
                    text="New document added"
                    textDate="Oct 22, 2024"
                    textTime="12:30 PM"
                  />
                </Dropdown.Item>{" "}
                <hr />
                <Dropdown.Item>
                  <Notification
                    Icon={Icon6}
                    text="₦2000 sent to Emmanuella’s pocket money"
                    textDate="Oct 22, 2024"
                    textTime="12:30 PM"
                  />
                </Dropdown.Item>{" "}
                <hr />
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </TabletAndBelow>
    </>
  );
};
