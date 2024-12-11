import React, { Fragment, useMemo, useState } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { HiOutlineDownload } from "react-icons/hi";
import { Desktop, TabletAndBelow } from "../../../Utils/mediaQueries";

import "./calendar.scss";
import {
  Calendar,
  Views,
  DateLocalizer,
  momentLocalizer,
} from "react-big-calendar";
// import events from "./events";
import * as dates from "../../../Utils/dates";
import { Search } from "../../../components/Search/Search";
import Select from "../../../components/Select/Select";
import Icon1 from "../../../assets/images/clipboard.svg";

const mLocalizer = momentLocalizer(moment);

const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: "lightblue",
    },
  });

const terms = [
  { value: "first term", label: "First Term" },
  { value: "second term", label: "Second Term" },
  { value: "third term", label: "Third Term" },
];
const sessions = [
  { value: "2020/2022", label: "2020/2022" },
  { value: "2021/2022", label: "2021/2022" },
  { value: "2022/2023", label: "2022/2023" },
  { value: "2023/2024", label: "2023/2024" },
];
export default function Event({ localizer = mLocalizer, ...props }) {
  const [selectedTerm, setSelectedTerm] = useState("");
  const [selectedSession, setSelectedSession] = useState("");
  const { components, defaultDate, max, views } = useMemo(
    () => ({
      components: {
        timeSlotWrapper: ColoredDateCellWrapper,
      },
      defaultDate: new Date(2024, 8, 1),
      max: dates.add(dates.endOf(new Date(2024, 17, 1), "day"), -1, "hours"),
      views: Object.keys(Views).map((k) => Views[k]),
    }),
    []
  );
  const [events, setEvents] = useState([
    {
      title: "Election Day",
      start: new Date(2024, 8, 2),
      end: new Date(2024, 8, 2),
      allDay: true,
    },
    {
      title: "Cultural Day",
      start: new Date(2024, 8, 4),
      end: new Date(2024, 8, 4),
      allDay: true,
    },
    {
      title: "Open Day",
      start: new Date(2024, 8, 22),
      end: new Date(2024, 8, 22),
      allDay: true,
    },
    {
      title: "Picture Day",
      start: new Date(2024, 8, 22),
      end: new Date(2024, 8, 22),
      allDay: true,
    },
    {
      title: "Heritage Day",
      start: new Date(2024, 8, 26),
      end: new Date(2024, 8, 26),
      allDay: true,
    },
  ]);
  const eventStyleGetter = (event) => {
    let borderLeft = "solid 1px blue"; // Default blue

    if (event.title === "Open Day") borderLeft = "solid 4px #08B529";
    else if (event.title === "Picture Day") borderLeft = "solid 4px #B50808";
    else if (event.title === "Heritage Day") borderLeft = "solid 4px #8B63E6";
    else if (event.title === "Election Day") borderLeft = "solid 4px #0098DA";
    else if (event.title === "Cultural Day") borderLeft = "solid 4px #E6DC63";

    return {
      style: {
        borderLeft,
        borderRadius: "0px",
        opacity: 0.8,
        color: "white",
        // border: "0px",
        display: "block",
        fontFamily: " rebondG-Medium",
      },
    };
  };
  const [selectedDate, setSelectedDate] = useState(null);

  // Handle date click
  const handleSelectDate = (date) => {
    setSelectedDate(date);
  };

  // Filter events for the selected date
  const getEventsForDate = (date) => {
    return events.filter(
      (event) =>
        moment(event.start).isSame(date, "day") ||
        moment(event.end).isSame(date, "day")
    );
  };
  const EventPreview = () => {
    if (!selectedDate) return <p>Select a date to see the events.</p>;

    const selectedEvents = getEventsForDate(selectedDate);

    if (selectedEvents.length === 0) {
      return <p>No events for this day.</p>;
    }

    return (
      <ul className="list-unstyled" style={{ fontFamily: " rebondBook" }}>
        {selectedEvents.map((event, index) => (
          <li key={index}>{event.title}</li>
        ))}
      </ul>
    );
  };
  return (
    <div className="calendar-container ">
      <h5>Calendar</h5>
      <div className="card calendar-inner">
        {" "}
        <div className="d-md-flex">
          {" "}
          <div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-3 col-md-3">
            <div className="col">
              {" "}
              <h6>Session</h6>
              <div className="card col-md-12">
                <Select
                  options={sessions}
                  value={selectedSession}
                  onChange={setSelectedSession}
                  placeholder="Select Session"
                  Icon={Icon1}
                />
              </div>
            </div>
            <div className="col">
              {" "}
              <h6>Term</h6>
              <div className="card col-md-12">
                <Select
                  options={terms}
                  value={selectedTerm}
                  onChange={setSelectedTerm}
                  Icon={Icon1}
                  placeholder="Select Term"
                />
              </div>
            </div>
          </div>
          <Desktop>
            {" "}
            <div style={{ flexGrow: 1 }} />
            <div className=" col-md-3 ">
              <Search />
            </div>
          </Desktop>
          <button
            className="pdf-download-btn"
            style={{ color: "#191919", fontSize: "12px" }}
          >
            {" "}
            <HiOutlineDownload className="icon2" />
            Export as csv
          </button>
        </div>
        <hr />
        <div className="calendar-section">
          {" "}
          <div className="height600 d-md-flex" {...props}>
            <Desktop>
              <div className="col-md-4">
                <div style={{ padding: "20px" }}>
                  <h6>
                    {selectedDate
                      ? moment(selectedDate).format("MMMM , YYYY")
                      : ""}
                  </h6>
                  <h6 style={{ color: "#007AAE", marginTop: "50px" }}>
                    {" "}
                    {selectedDate ? moment(selectedDate).format("dddd") : ""}
                  </h6>
                  <h1>
                    {" "}
                    {selectedDate ? moment(selectedDate).format(" Do,") : ""}
                  </h1>
                  <EventPreview />
                </div>
              </div>
            </Desktop>
            <div className="col-md-8">
              {" "}
              <Calendar
                // components={components}
                defaultDate={defaultDate}
                events={events}
                localizer={localizer}
                max={max}
                showMultiDayTimes
                step={60}
                // views={views}
                eventPropGetter={eventStyleGetter}
                selectable
                onSelectSlot={(slotInfo) => handleSelectDate(slotInfo.start)}
                onSelectEvent={(event) => handleSelectDate(event.start)}
              />
            </div>
            <TabletAndBelow>
              <div className="col-md-4 col-12">
                <div style={{ padding: "20px" }}>
                  <h6>
                    {selectedDate
                      ? moment(selectedDate).format("MMMM , YYYY")
                      : ""}
                  </h6>
                  <h6 style={{ color: "#007AAE", marginTop: "50px" }}>
                    {" "}
                    {selectedDate ? moment(selectedDate).format("dddd") : ""}
                  </h6>
                  <h1>
                    {" "}
                    {selectedDate ? moment(selectedDate).format(" Do,") : ""}
                  </h1>
                  <EventPreview />
                </div>
              </div>
            </TabletAndBelow>
          </div>
        </div>
      </div>
    </div>
  );
}
