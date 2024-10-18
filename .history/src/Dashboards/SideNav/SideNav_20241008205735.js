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
  CDBBadge,
  CDBContainer,
  CDBSidebarSubMenu,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import "./side-nav.scss";
export const SideNav = () => {
  return (
    // <div
    //   style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
    // >
    //   <CDBSidebar textColor="#fff" backgroundColor="purple">
    //     <CDBSidebarHeader prefix={<IoMdMenu />}>
    //       <center>
    //         <a
    //           href="/"
    //           className="text-decoration-none"
    //           style={{ color: "inherit" }}
    //         >
    //           <img src={Logo} alt="logo" className="col-md-10" width="100%" />
    //         </a>
    //       </center>
    //     </CDBSidebarHeader>

    //     <CDBSidebarContent className="sidebar-content">
    //       <CDBSidebarMenu>
    //         <NavLink
    //           exact
    //           to="/"
    //           activeClassName="activeClicked"
    //           className=" slide-right"
    //         >
    //           <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
    //         </NavLink>
    //         <NavLink
    //           exact
    //           to="/tables"
    //           activeClassName="activeClicked"
    //           class="slide-up"
    //         >
    //           <CDBSidebarMenuItem icon="table">Tables</CDBSidebarMenuItem>
    //         </NavLink>
    //         <NavLink
    //           exact
    //           to="/profile"
    //           activeClassName="activeClicked"
    //           class="slide-up"
    //         >
    //           <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
    //         </NavLink>

    //         <NavLink
    //           exact
    //           to="/analytics"
    //           activeClassName="activeClicked"
    //           class="slide-up"
    //         >
    //           <CDBSidebarMenuItem icon="chart-line">
    //             Analytics
    //           </CDBSidebarMenuItem>
    //         </NavLink>

    //         <NavLink
    //           exact
    //           to="/hero404"
    //           target="_blank"
    //           activeClassName="activeClicked"
    //           class="slide-up"
    //         >
    //           <CDBSidebarMenuItem icon="exclamation-circle">
    //             404 page
    //           </CDBSidebarMenuItem>
    //         </NavLink>
    //       </CDBSidebarMenu>
    //     </CDBSidebarContent>

    //     <CDBSidebarFooter style={{ textAlign: "center" }}>
    //       <div
    //         style={{
    //           padding: "20px 5px",
    //         }}
    //       >
    //         Sidebar Footer
    //       </div>
    //     </CDBSidebarFooter>
    //   </CDBSidebar>
    // </div>

    <CDBSidebar textColor="#fff" backgroundColor="#333">
      <CDBSidebarHeader prefix={<CDBIcon icon="bars" size="lg" />}>
        Contrast Multi Level
      </CDBSidebarHeader>

      <CDBSidebarContent>
        <CDBSidebarMenu>
          <CDBSidebarMenuItem
            suffix={
              <CDBBadge color="danger" size="small" borderType="pill">
                new
              </CDBBadge>
            }
            icon="th-large"
          >
            Dashboard
          </CDBSidebarMenuItem>
          <CDBSidebarMenuItem
            icon="sticky-note"
            suffix={
              <CDBBadge color="danger" size="small" borderType="pill">
                new
              </CDBBadge>
            }
          >
            Components
          </CDBSidebarMenuItem>
        </CDBSidebarMenu>
        <CDBSidebarMenu>
          <CDBSidebarSubMenu title="Sidemenu" icon="th">
            <CDBSidebarMenuItem> submenu 1</CDBSidebarMenuItem>
            <CDBSidebarMenuItem> submenu 2</CDBSidebarMenuItem>
            <CDBSidebarMenuItem> submenu 3</CDBSidebarMenuItem>
          </CDBSidebarSubMenu>
          <CDBSidebarSubMenu
            title="Sidemenu2"
            icon="book"
            suffix={
              <CDBBadge color="danger" size="small" borderType="pill">
                new
              </CDBBadge>
            }
          >
            <CDBSidebarMenuItem>submenu 1</CDBSidebarMenuItem>
            <CDBSidebarMenuItem>submenu 2</CDBSidebarMenuItem>
            <CDBSidebarMenuItem>submenu 3</CDBSidebarMenuItem>
          </CDBSidebarSubMenu>
          <CDBSidebarSubMenu title="MultiLevel with Icon" icon="table">
            <CDBSidebarMenuItem>submenu 1 </CDBSidebarMenuItem>
            <CDBSidebarMenuItem>submenu 2 </CDBSidebarMenuItem>
            <CDBSidebarSubMenu title="submenu 3">
              <CDBSidebarMenuItem>submenu 3.1 </CDBSidebarMenuItem>
              <CDBSidebarMenuItem>submenu 3.2 </CDBSidebarMenuItem>
              <CDBSidebarSubMenu title="subnt">
                <CDBSidebarMenuItem>submenu 3.3.1 </CDBSidebarMenuItem>
                <CDBSidebarMenuItem>submenu 3.3.2 </CDBSidebarMenuItem>
                <CDBSidebarMenuItem>submenu 3.3.3 </CDBSidebarMenuItem>
              </CDBSidebarSubMenu>
            </CDBSidebarSubMenu>
          </CDBSidebarSubMenu>
        </CDBSidebarMenu>
      </CDBSidebarContent>

      <CDBSidebarFooter style={{ textAlign: "center" }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: "20px 5px",
          }}
        >
          Sidebar Footer
        </div>
      </CDBSidebarFooter>
    </CDBSidebar>
  );
};
