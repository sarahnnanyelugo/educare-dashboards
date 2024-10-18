// import React from "react";
// import { Link } from "react-router-dom";
// import Logo from "../../assets/images/new-logo.png";
// import {
//   CDBSidebar,
//   CDBSidebarContent,
//   CDBSidebarFooter,
//   CDBSidebarHeader,
//   CDBSidebarMenu,
//   CDBSidebarMenuItem,
// } from "cdbreact";
// import { NavLink } from "react-router-dom";
// import { IoMdMenu } from "react-icons/io";
// import { MdDashboard } from "react-icons/md";

// import "./side-nav.scss";
// export const SideNav = () => {
//   return (
//     <div
//       style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
//     >
//       <CDBSidebar textColor="#fff" backgroundColor="purple">
//         <CDBSidebarHeader prefix={<IoMdMenu />}>
//           <center>
//             <a
//               href="/"
//               className="text-decoration-none"
//               style={{ color: "inherit" }}
//             >
//               <img src={Logo} alt="logo" className="col-md-10" width="100%" />
//             </a>
//           </center>
//         </CDBSidebarHeader>

//         <CDBSidebarContent className="sidebar-content">
//           <CDBSidebarMenu>
//             <NavLink
//               exact
//               to="/"
//               activeClassName="activeClicked"
//               className=" slide-right"
//             >
//               <CDBSidebarMenuItem icon="pay">Dashboard</CDBSidebarMenuItem>
//             </NavLink>
//             <NavLink
//               exact
//               to="/tables"
//               activeClassName="activeClicked"
//               class="slide-up"
//             >
//               <CDBSidebarMenuItem icon="table">Tables</CDBSidebarMenuItem>
//             </NavLink>
//             <NavLink
//               exact
//               to="/profile"
//               activeClassName="activeClicked"
//               class="slide-up"
//             >
//               <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
//             </NavLink>
//             <NavLink
//               exact
//               to="/analytics"
//               activeClassName="activeClicked"
//               class="slide-up"
//             >
//               <CDBSidebarMenuItem icon="chart-line">
//                 Analytics
//               </CDBSidebarMenuItem>
//             </NavLink>

//             <NavLink
//               exact
//               to="/hero404"
//               target="_blank"
//               activeClassName="activeClicked"
//               class="slide-up"
//             >
//               <CDBSidebarMenuItem icon="exclamation-circle">
//                 404 page
//               </CDBSidebarMenuItem>
//             </NavLink>
//           </CDBSidebarMenu>
//         </CDBSidebarContent>

//         <CDBSidebarFooter style={{ textAlign: "center" }}>
//           <div
//             style={{
//               padding: "20px 5px",
//             }}
//           >
//             Sidebar Footer
//           </div>
//         </CDBSidebarFooter>
//       </CDBSidebar>
//     </div>
//   );
// };
import React, { useState } from "react";
import { FaHome, FaUser, FaCog } from "react-icons/fa"; // Example icons
import Logo from "../../assets/images/new-logo.png";
import Head from "../../assets/images/logo-head.png";
import Write from "../../assets/images/logo-write.png";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const SideNav = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      style={{
        width: isCollapsed ? "70px" : "200px", // Adjust these values as needed
        transition: "width 0.3s ease",
        backgroundColor: "#fff",
        color: "#000",
        height: "100vh",
      }}
    >
      <div style={{ padding: "5px", display: "flex", alignItems: "center" }}>
        <img
          src={Head}
          alt="logo"
          style={{
            width: isCollapsed ? "40px" : "60px", // Dynamic sizing when collapsed or expanded
            height: "auto",
            transition: "width 0.3s ease",
          }}
          width="100%"
        />
        {!isCollapsed && (
          <span style={{ marginLeft: "5px" }}>
            <img
              src={Write}
              alt="logo"
              style={{
                width: "100px",
                height: "auto",
                marginLeft: "10px",
                transition: "width 0.3s ease",
              }}
              width="100%"
            />
          </span>
        )}
        <button
          onClick={toggleSidebar}
          style={{
            marginLeft: isCollapsed ? "10px" : "5px", // Align toggle button properly
            background: "",
            border: "solid 1px grey",
            color: "#fff",
            cursor: "pointer",
            padding: "0 5px",
            borderRadius: "6px",
          }}
        >
          <FaLongArrowAltLeft style={{ color: "grey" }} />
        </button>
      </div>

      <ul style={{ listStyleType: "none", padding: "0" }}>
        <li style={{ padding: "15px", display: "flex", alignItems: "center" }}>
          <FaHome />
          {!isCollapsed && (
            <span style={{ marginLeft: "10px" }}>
              <NavLink>Dashboard</NavLink>
            </span>
          )}
        </li>
        <li style={{ padding: "15px", display: "flex", alignItems: "center" }}>
          <FaUser />
          {!isCollapsed && <span style={{ marginLeft: "10px" }}>Profile</span>}
        </li>
        <li style={{ padding: "15px", display: "flex", alignItems: "center" }}>
          <FaCog />
          {!isCollapsed && <span style={{ marginLeft: "10px" }}>Settings</span>}
        </li>
      </ul>
    </div>
  );
};
