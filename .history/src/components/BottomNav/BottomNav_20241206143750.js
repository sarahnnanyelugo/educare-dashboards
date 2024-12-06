import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SlPeople } from "react-icons/sl";
import { TbReportAnalytics } from "react-icons/tb";
import { TiDocumentText } from "react-icons/ti";
import { FaRegUserCircle } from "react-icons/fa";

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
          <NavLink activeClassName="active" to={"/main-view"}>
            <span>
              {" "}
              <IoStatsChartSharp />
            </span>
            <br />
            Dashboard
          </NavLink>
        </li>
        <li className="list-inline-item">
          <NavLink>
            <span>
              {" "}
              <SlPeople />
            </span>
            <br />
            My Children
          </NavLink>
        </li>
        <li className="list-inline-item">
          <NavLink activeClassName="active">
            <span>
              {" "}
              <TbReportAnalytics />
            </span>
            <br />
            Results
          </NavLink>
        </li>
        <li className="list-inline-item">
          <NavLink activeClassName="active">
            <span>
              {" "}
              <TiDocumentText />
            </span>
            <br />
            Reports
          </NavLink>
        </li>
        <li className="list-inline-item">
          <NavLink>
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
