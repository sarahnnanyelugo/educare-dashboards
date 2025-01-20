import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SlPeople } from "react-icons/sl";
import { TbReportAnalytics } from "react-icons/tb";
import { TiDocumentText } from "react-icons/ti";
import { FaRegUserCircle } from "react-icons/fa";
import DashboardActive from "../../assets/images/dashboard.svg";
import DashboardDefault from "../../assets/images/d-voting.svg";
import ChildrenDefault from "../../assets/images/d-children.svg";
import ChildrenActive from "../../assets/images/d-children.svg";
import ResultDefault from "../../assets/images/d-result.svg";
import ResultActive from "../../assets/images/results.svg";
import {
  IoStatsChartSharp,
  IoStorefrontOutline,
  IoCalendarNumberOutline,
} from "react-icons/io5";
import "./bottom-nav.scss";
export const BottomNav = () => {
  return (
    <div className="bottom-nav col-12">
      <ul className="list-inline list-unstyled">
        <li className="list-inline-item">
          <NavLink activeClassName="active" to={"/"}>
            <span>
              {" "}
              <IoStatsChartSharp />
            </span>
            <br />
            Dashboard
          </NavLink>
        </li>
        <li className="list-inline-item">
          <NavLink activeClassName="active" to={"/my-children"}>
            <span>
              {" "}
              <SlPeople />
            </span>
            <br />
            My Children
          </NavLink>
        </li>
        <li className="list-inline-item">
          <NavLink activeClassName="active" to={"/result"}>
            <span>
              {" "}
              <TbReportAnalytics />
            </span>
            <br />
            Results
          </NavLink>
        </li>
        <li className="list-inline-item">
          <NavLink activeClassName="active" to={"/pastoral-report"}>
            <span>
              {" "}
              <TiDocumentText />
            </span>
            <br />
            Reports
          </NavLink>
        </li>
        <li className="list-inline-item">
          <NavLink activeClassName="active" to={"/profile-page"}>
            <span>
              <FaRegUserCircle />
            </span>
            <br />
            Profile
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
