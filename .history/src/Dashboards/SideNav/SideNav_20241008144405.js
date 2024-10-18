import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/new-logo.png";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import "./side-nav.scss";
export const SideNav = () => {
  return (
    <div
      style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="purple">
        <CDBSidebarHeader prefix={<IoMdMenu />}>
          <center>
            <a
              href="/"
              className="text-decoration-none"
              style={{ color: "inherit" }}
            >
              logo{" "}
              <img src={Logo} alt="logo" className="col-md-10" width="100%" />
            </a>
          </center>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink
              exact
              to="/"
              activeClassName="activeClicked"
              className=" slide-right"
            >
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/tables"
              activeClassName="activeClicked"
              class="slide-up"
            >
              <CDBSidebarMenuItem icon="table">Tables</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/profile"
              activeClassName="activeClicked"
              class="slide-up"
            >
              <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/analytics"
              activeClassName="activeClicked"
              class="slide-up"
            >
              <CDBSidebarMenuItem icon="chart-line">
                Analytics
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink
              exact
              to="/hero404"
              target="_blank"
              activeClassName="activeClicked"
              class="slide-up"
            >
              <CDBSidebarMenuItem icon="exclamation-circle">
                404 page
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div
            style={{
              padding: "20px 5px",
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};
