import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import DashboardActive from "../../assets/images/dashboard.svg";
import DashboardDefault from "../../assets/images/d-voting.svg";
import ChildrenDefault from "../../assets/images/d-children.svg";
import ChildrenActive from "../../assets/images/d-children.svg";
import FinanceDefault from "../../assets/images/d-finance.svg";
import FinanceActive from "../../assets/images/finance.svg";
import MediaDefault from "../../assets/images/d-media.svg";
import MediaActive from "../../assets/images/media.svg";
import TransportDefault from "../../assets/images/d-transport.svg";
import TransportActive from "../../assets/images/transport.svg";
import ReportDefault from "../../assets/images/d-report.svg";
import ReportActive from "../../assets/images/report.svg";
import ResultDefault from "../../assets/images/d-result.svg";
import ResultActive from "../../assets/images/results.svg";
import CalenderDefault from "../../assets/images/d-calendar.svg";
import CalenderActive from "../../assets/images/calender.svg";
import FeedbackDefault from "../../assets/images/d-feedback.svg";
import FeedbackActive from "../../assets/images/feedbacks.svg";
import StoreDefault from "../../assets/images/d-store.svg";
import StoreActive from "../../assets/images/store.svg";
import VotingActive from "../../assets/images/voting.svg";
import VotingDefault from "../../assets/images/d-voting.svg";

export const SidebarData = [
  {
    name: "Dashboards",
    icon: "IoStatsChartSharp",
    iconActive: DashboardActive,
    iconDefault: DashboardDefault,
    url: "/",
  },
  {
    name: "My Children",
    iconActive: ChildrenActive,
    iconDefault: ChildrenDefault,
    icon: "SlPeople",
    url: "/my-children",
  },
  {
    name: "Reports",
    icon: "LuBuilding2",
    iconActive: ReportActive,
    iconDefault: ReportDefault,
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
    iconDefault: FeedbackDefault,
    iconActive: FeedbackActive,
    icon: "SlPeople",
    url: "/feedbacks",
  },
  {
    name: "Result",
    icon: "LiaIdCardSolid",
    url: "/result",
    iconDefault: ResultDefault,
    iconActive: ResultActive,
  },
  {
    name: "Finance",
    icon: "FaCoins",
    iconDefault: FinanceDefault,
    iconActive: FinanceActive,
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
    iconDefault: StoreDefault,
    iconActive: StoreActive,
    icon: "IoStorefrontOutline",
    url: "/store",
  },
  {
    name: "Transport System",
    iconDefault: TransportDefault,
    iconActive: TransportActive,
    icon: "MdOutlineEmojiTransportation",
    accordion: true,
    accordionContent: [
      { name: "Bus", url: "/transport-system" },
      { name: "Pickup", url: "/pickup" },
    ],
  },
  {
    name: "Calender",
    iconDefault: CalenderDefault,
    iconActive: CalenderActive,
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
    iconDefault: MediaDefault,
    iconActive: MediaActive,
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
    name: "Messages",
    icon: "IoMail",
    url: "/chat-interface",
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
