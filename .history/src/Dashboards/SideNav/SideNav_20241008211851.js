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
//   CDBBadge,
//   CDBContainer,
//   CDBSidebarSubMenu,
// } from "cdbreact";
// import { IconContext } from "react-icons";

// import { NavLink } from "react-router-dom";
// import { IoMdMenu } from "react-icons/io";
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
//               <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
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
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "../App.css";
import { IconContext } from "react-icons";

export const SideNav = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "undefined" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};
