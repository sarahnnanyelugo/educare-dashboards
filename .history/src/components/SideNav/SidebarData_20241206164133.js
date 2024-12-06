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
      { name: "Invoices", url: "/invoices" },
      { name: "Transaction History", url: "/transaction-history" },
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
    accordion: true,
    accordionContent: [
      { name: "Bus", url: "/transport-system" },
      { name: "Pickup", url: "/pickup" },
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
    url: "/voting-system",
  },
  {
    name: "Media",
    icon: "TbPhoto",

    accordion: true,
    accordionContent: [
      { name: "Photo Journals", url: "/photo-journals" },
      { name: "Tagged Posts", url: "/tagged-posts" },
    ],
  },
];

export const MobileSidebarData = [
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
      { name: "Invoices", url: "/invoices" },
      { name: "Transaction History", url: "/transaction-history" },
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
    accordion: true,
    accordionContent: [
      { name: "Bus", url: "/transport-system" },
      { name: "Pickup", url: "/pickup" },
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
    url: "/voting-system",
  },
  {
    name: "Media",
    icon: "TbPhoto",

    accordion: true,
    accordionContent: [
      { name: "Photo Journals", url: "/photo-journals" },
      { name: "Tagged Posts", url: "/tagged-posts" },
    ],
  },
];
