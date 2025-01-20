import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import DashboardActive from "../../assets/images/dashboard.svg";
import DashboardDefault from "../../assets/images/d-voting.svg";
import ChildrenDefault from "../../assets/images/d-children.svg";
import ChildrenActive from "../../assets/images/d-children.svg";
import ResultDefault from "../../assets/images/d-result.svg";
import ResultActive from "../../assets/images/results.svg";
import ReportDefault from "../../assets/images/d-report.svg";
import ReportActive from "../../assets/images/report.svg";
import ProfileDefault from "../../assets/images/d-profile.svg";
import ProfileActive from "../../assets/images/profile.svg";
import "./bottom-nav.scss";

export const BottomNav = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className="bottom-nav col-12"
      style={{
        width: isCollapsed ? "60px" : "100%", // Adjust width when collapsed
        transition: "width 0.3s ease",
      }}
    >
      <ul className="list-inline list-unstyled">
        <li className="list-inline-item">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
            style={{
              pointerEvents: isCollapsed ? "none" : "auto",
              opacity: isCollapsed ? 0.5 : 1,
            }}
          >
            {({ isActive }) => (
              <>
                <img
                  src={isActive ? DashboardActive : DashboardDefault}
                  alt="Dashboard"
                />
                <br />
                {!isCollapsed && "Dashboard"}
              </>
            )}
          </NavLink>
        </li>

        <li className="list-inline-item">
          <NavLink
            to="/my-children"
            className={({ isActive }) => (isActive ? "active" : "")}
            style={{
              pointerEvents: isCollapsed ? "none" : "auto",
              opacity: isCollapsed ? 0.5 : 1,
            }}
          >
            {({ isActive }) => (
              <>
                <img
                  src={isActive ? ChildrenActive : ChildrenDefault}
                  alt="My Children"
                />
                <br />
                {!isCollapsed && "My Children"}
              </>
            )}
          </NavLink>
        </li>

        <li className="list-inline-item">
          <NavLink
            to="/result"
            className={({ isActive }) => (isActive ? "active" : "")}
            style={{
              pointerEvents: isCollapsed ? "none" : "auto",
              opacity: isCollapsed ? 0.5 : 1,
            }}
          >
            {({ isActive }) => (
              <>
                <img
                  src={isActive ? ResultActive : ResultDefault}
                  alt="Results"
                />
                <br />
                {!isCollapsed && "Results"}
              </>
            )}
          </NavLink>
        </li>

        <li className="list-inline-item">
          <NavLink
            to="/pastoral-report"
            className={({ isActive }) => (isActive ? "active" : "")}
            style={{
              pointerEvents: isCollapsed ? "none" : "auto",
              opacity: isCollapsed ? 0.5 : 1,
            }}
          >
            {({ isActive }) => (
              <>
                <img
                  src={isActive ? ReportActive : ReportDefault}
                  alt="Reports"
                />
                <br />
                {!isCollapsed && "Reports"}
              </>
            )}
          </NavLink>
        </li>

        <li className="list-inline-item">
          <NavLink
            to="/profile-page"
            className={({ isActive }) => (isActive ? "active" : "")}
            style={{
              pointerEvents: isCollapsed ? "none" : "auto",
              opacity: isCollapsed ? 0.5 : 1,
            }}
          >
            {({ isActive }) => (
              <>
                <img
                  src={isActive ? ProfileActive : ProfileDefault}
                  alt="Profile"
                />

                {!isCollapsed && "Profile"}
              </>
            )}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
