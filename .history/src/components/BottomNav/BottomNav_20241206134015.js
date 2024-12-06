import React from "react";
import { Link, NavLink } from "react-router-dom";
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
        <li>
          <NavLink>
            <IoStatsChartSharp />
            <br />
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink>
            <IoStatsChartSharp />
            <br />
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink>
            <IoStatsChartSharp />
            <br />
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink>
            <IoStatsChartSharp />
            <br />
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink>
            <IoStatsChartSharp />
            <br />
            Dashboard
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
