import React, { useState } from "react";
import "./top-nav.scss";
import { LuCalendarCheck } from "react-icons/lu";
import { CgBell } from "react-icons/cg";
import { MdOutlineEmail } from "react-icons/md";
import {
  CDBNavbar,
  CDBNavBrand,
  CDBNavItem,
  CDBNavLink,
  CDBDropDown,
  CDBDropDownMenu,
  CDBDropDownToggle,
  CDBBtn,
  CDBNavToggle,
  CDBIcon,
  CDBCollapse,
  CDBNavbarNav,
  CDBContainer,
} from "cdbreact";

export const TopNav = () => {
  const [collapse, setCollapse] = useState(false);

  const bgBlack = { backgroundColor: "#000000", color: "#f4f4f4" };

  return (
    // <div className="top-nav-container">
    //   <ul className="list-inline">
    //     <li className="list-inline-item">
    //       <LuCalendarCheck />
    //     </li>
    //     <li className="list-inline-item">
    //       <CgBell />
    //     </li>{" "}
    //     <li className="list-inline-item">
    //       <MdOutlineEmail />
    //     </li>
    //   </ul>
    // </div>
    <CDBContainer>
      <Router style={{ width: "100%" }}>
        <CDBNavbar style={bgBlack} dark expand="md" scrolling>
          <CDBNavBrand href="/">
            <strong>Navbar</strong>
          </CDBNavBrand>
          <CDBNavToggle
            onClick={() => {
              setCollapse(!collapse);
            }}
          />
          <CDBCollapse id="navbarCollapse1" isOpen={collapse} navbar>
            <CDBNavbarNav left>
              <CDBNavItem>
                <CDBNavLink to="#">
                  <CDBIcon fab icon="facebook-f" />
                </CDBNavLink>
              </CDBNavItem>
              <CDBNavItem>
                <CDBNavLink to="#">
                  <CDBIcon fab icon="twitter" />
                </CDBNavLink>
              </CDBNavItem>
              <CDBNavItem>
                <CDBNavLink to="#">
                  <CDBIcon fab icon="instagram" />
                </CDBNavLink>
              </CDBNavItem>
            </CDBNavbarNav>
            <CDBNavbarNav right className="align-items-center">
              <CDBNavItem active>
                <CDBBtn circle color="dark" style={{ padding: 0 }}>
                  <CDBNavLink to="#">
                    <CDBIcon className="me-2" icon="home" /> Home
                  </CDBNavLink>
                </CDBBtn>
              </CDBNavItem>
              <CDBNavItem>
                <CDBBtn circle color="dark" style={{ padding: 0 }}>
                  <CDBNavLink to="#">
                    <CDBIcon className="me-2" icon="feather" /> Features
                  </CDBNavLink>
                </CDBBtn>
              </CDBNavItem>
              <CDBNavItem>
                <CDBBtn circle color="dark" style={{ padding: 0 }}>
                  <CDBNavLink to="#">
                    <CDBIcon className="me-2" icon="dollar-sign" /> Pricing
                  </CDBNavLink>
                </CDBBtn>
              </CDBNavItem>

              <CDBNavItem>
                <CDBDropDown>
                  <CDBDropDownToggle
                    caret
                    style={{ padding: 0 }}
                    color="dark"
                    circle
                  >
                    <CDBIcon className="me-2" icon="cogs" /> Options
                  </CDBDropDownToggle>
                  <CDBDropDownMenu>
                    Coming soon #pleaseStayUpdated.
                  </CDBDropDownMenu>
                </CDBDropDown>
              </CDBNavItem>
            </CDBNavbarNav>
          </CDBCollapse>
        </CDBNavbar>
      </Router>
    </CDBContainer>
  );
};
