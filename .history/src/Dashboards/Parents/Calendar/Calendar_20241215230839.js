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
import * as dates from "../../../Utils/dates";
import { Search } from "../../../components/Search/Search";
import Select from "../../../components/Select/Select";
import Icon1 from "../../../assets/images/clipboard.svg";
import CustomToolbar from "./CustomToolbar"; // Import custom toolbar

// Initialize moment localizer
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
  const { defaultDate, max } = useMemo(
    () => ({
      defaultDate: new Date(2024, 8, 1),
      max: dates.add(dates.endOf(new Date(2024, 17, 1), "day"), -1, "hours"),
    }),
    []
  );

  const [events] = useState([
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

  const [selectedDate, setSelectedDate] = useState(null);

  const eventStyleGetter = (event) => {
    let borderLeft = "solid 1px blue";
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
        display: "block",
        fontFamily: "rebondG-Medium",
      },
    };
  };

  const handleSelectDate = (date) => setSelectedDate(date);

  const EventPreview = () => {
    const selectedEvents = events.filter((event) =>
      moment(event.start).isSame(selectedDate, "day")
    );
    return selectedDate ? (
      selectedEvents.length ? (
        <ul className="list-unstyled" style={{ fontFamily: "rebondBook" }}>
          {selectedEvents.map((event, index) => (
            <li key={index}>{event.title}</li>
          ))}
        </ul>
      ) : (
        <p>No events for this day.</p>
      )
    ) : (
      <p>Select a date to see the events.</p>
    );
  };

  return (
    <div className="calendar-container">
      <div className="card calendar-inner">
        <div className="d-md-flex">
          <div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-3 col-md-3">
            <div className="col">
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
        </div>
        <hr />
        <div className="calendar-section">
          <div className="height600 d-md-flex">
            {/* Preview Section */}
            <div className="col-md-4" style={{ padding: "10px 20px" }}>
              <h6>
                {selectedDate ? moment(selectedDate).format("MMMM , YYYY") : ""}
              </h6>
              <h6 style={{ color: "#007AAE", marginTop: "20px" }}>
                {selectedDate ? moment(selectedDate).format("dddd") : ""}
              </h6>
              <h1>{selectedDate ? moment(selectedDate).format("Do") : ""}</h1>
              <EventPreview />
            </div>

            {/* Calendar Section */}
            <div className="col-md-8">
              <Calendar
                defaultDate={defaultDate}
                events={events}
                localizer={localizer}
                max={max}
                step={60}
                components={{
                  toolbar: CustomToolbar, // Use updated toolbar without label
                }}
                eventPropGetter={eventStyleGetter}
                selectable
                onSelectSlot={(slotInfo) => handleSelectDate(slotInfo.start)}
                onSelectEvent={(event) => handleSelectDate(event.start)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
