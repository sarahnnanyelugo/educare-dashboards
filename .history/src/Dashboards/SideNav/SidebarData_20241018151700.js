import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    name: "Dashboard",
    icon: "IoStatsChartSharp",
    url: "/",
  },
  {
    name: "My Children",
    icon: "SlPeople",
    url: "/my-children",
  },
  {
    name: "Pastoral",
    icon: "LuBuilding2",
    url: "/pastoral",
    accordion: true,
    accordionContent: [
      { name: "Pastoral Report", url: "/pastoral-report" },
      { name: "Exeat Requests", url: "/exeat-requests" },
      { name: "Hostel Report", url: "/hostel-report" },
    ],
  },
  {
    name: "Feedbacks",
    icon: "SlPeople",
    url: "/feedbacks",
  },
  {
    name: "Result",
    icon: "LiaIdCardSolid",
    url: "/result",
  },
  {
    name: "Finance",
    icon: "FaCoins",
    url: "/finance",
    accordion: true,
    accordionContent: [
      { name: "Wallet", url: "/wallet" },
      { name: "Pocket Money", url: "/pocket-money" },
      { name: "Transaction History", url: "/transaction-history" },
    ],
  },
  {
    name: "Store",
    icon: "IoStorefrontOutline",
    url: "/store",
  },
  {
    name: "Transport ",
    icon: "MdOutlineEmojiTransportation",
    url: "/transport",
    accordion: true,
    accordionContent: [
      { name: "Bus Routes", url: "/transport/routes" },
      { name: "Schedules", url: "/transport/schedules" },
      { name: "Ticketing", url: "/transport/ticketing" },
    ],
  },
  {
    name: "Calendar",
    icon: "IoCalendarNumberOutline",
    url: "/calendar",
  },
  {
    name: "Voting System",
    icon: "MdOutlineHowToVote",
    url: "/voting",
  },
  {
    name: "Photo Journals",
    icon: "TbPhoto",
    url: "/photo-journals",
  },
];
