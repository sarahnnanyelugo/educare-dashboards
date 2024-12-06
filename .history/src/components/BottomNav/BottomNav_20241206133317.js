import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  IoStatsChartSharp,
  IoStorefrontOutline,
  IoCalendarNumberOutline,
} from "react-icons/io5";
export const BottomNav = () => {
  return (
    <div clasName="botom-nav">
      <ul className="list-inline list-unstyled">
        <li>
          <NavLink>
            <IoStatsChartSharp />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
