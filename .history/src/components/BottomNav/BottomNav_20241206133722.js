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
    <div className="bottom-nav">
      <ul className="list-inline list-unstyled">
        <li>
          <NavLink>
            <IoStatsChartSharp />
            Dashboard
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
