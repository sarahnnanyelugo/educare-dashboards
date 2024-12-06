import React from "react";
import { Link, NavLink } from "react-router-dom";

export const BottomNav = () => {
  return (
    <div clasName="botom-nav">
      <ul className="list-inline list-unstyled">
        <li>
          <NavLink><IoStatsChartSharp /></NavLink>
        </li>
      </ul>
    </div>
  );
};
