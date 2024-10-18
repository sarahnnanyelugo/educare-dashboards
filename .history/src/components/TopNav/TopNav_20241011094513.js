import React from "react";
import "./top-nav.scss";
import { LuCalendarCheck } from "react-icons/lu";
import { CgBell } from "react-icons/cg";
import { MdOutlineEmail } from "react-icons/md";
import { CDBNavbar } from "cdbreact";

export const TopNav = () => {
  const [collapse, setCollapse] = useState(false);

  const bgBlack = { backgroundColor: "#000000", color: "#f4f4f4" };

  return (
    <div className="top-nav-container">
      <ul className="list-inline">
        <li className="list-inline-item">
          <LuCalendarCheck />
        </li>
        <li className="list-inline-item">
          <CgBell />
        </li>{" "}
        <li className="list-inline-item">
          <MdOutlineEmail />
        </li>
      </ul>
    </div>
  );
};
