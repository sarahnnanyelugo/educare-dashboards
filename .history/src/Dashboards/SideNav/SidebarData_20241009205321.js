import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    name: "Dashboard",
    icon: "IoStatsChartSharp",
    url: "/dashboard",
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
      { name: "Ministry", url: "/pastoral/ministry" },
      { name: "Sermons", url: "/pastoral/sermons" },
      { name: "Events", url: "/pastoral/events" },
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
      { name: "Donations", url: "/finance/donations" },
      { name: "Expenses", url: "/finance/expenses" },
      { name: "Reports", url: "/finance/reports" },
    ],
  },
  {
    name: "Store",
    icon: "IoStorefrontOutline",
    url: "/store",
  },
  {
    name: "Transport System",
    icon: "MdOutlineEmojiTransportation",
    url: "/transport",
    accordion: true,
    accordionContent: ["Bus Routes", "Schedules", "Ticketing"],
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
