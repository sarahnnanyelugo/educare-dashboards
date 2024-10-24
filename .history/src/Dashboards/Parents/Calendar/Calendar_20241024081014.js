import React, { Fragment, useMemo, useState } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import "./calendar.scss";
import {
  Calendar,
  Views,
  DateLocalizer,
  momentLocalizer,
} from "react-big-calendar";
// import events from "./events";
import * as dates from "../../../Utils/dates";

const mLocalizer = momentLocalizer(moment);

const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: "lightblue",
    },
  });

/**
 * We are defaulting the localizer here because we are using this same
 * example on the main 'About' page in Storybook
 */
export default function Event({ localizer = mLocalizer, ...props }) {
  const { components, defaultDate, max, views } = useMemo(
    () => ({
      components: {
        timeSlotWrapper: ColoredDateCellWrapper,
      },
      defaultDate: new Date(2015, 3, 1),
      max: dates.add(dates.endOf(new Date(2015, 17, 1), "day"), -1, "hours"),
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
    let backgroundColor = "#3174ad"; // Default blue

    if (event.title === "Open Day") backgroundColor = "red";
    else if (event.title === "Picture Day") backgroundColor = "green";
    else if (event.title === "Heritage Day") backgroundColor = "purple";

    return {
      style: {
        backgroundColor,
        borderRadius: "0px",
        opacity: 0.8,
        color: "white",
        border: "0px",
        display: "block",
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
      <ul>
        {selectedEvents.map((event, index) => (
          <li key={index}>
            <strong>{event.title}</strong>
          </li>
        ))}
      </ul>
    );
  };
  return (
    <div className="calendar-section">
      {" "}
      <div className="height600 d-md-flex" {...props}>
        <div className="col-md-4">
          <div style={{ padding: "20px" }}>
            <h6>
              {selectedDate ? moment(selectedDate).format("MMMM , YYYY") : ""}
            </h6>
            <h6 style={{ color: "#007AAE", marginTop: "50px" }}>
              {" "}
              {selectedDate ? moment(selectedDate).format("dddd") : ""}
            </h6>
            <h1> {selectedDate ? moment(selectedDate).format(" Do,") : ""}</h1>
            <EventPreview />
          </div>
        </div>
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
      </div>
    </div>
  );
}
