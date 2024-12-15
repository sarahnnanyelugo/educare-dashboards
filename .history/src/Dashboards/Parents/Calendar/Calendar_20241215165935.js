import React, { useMemo, useState } from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import CustomToolbar from "./CustomToolbar"; // Import the Custom Toolbar
import * as dates from "../../../Utils/dates";

const mLocalizer = momentLocalizer(moment);

export default function EventCalendar({ localizer = mLocalizer, ...props }) {
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

  const { defaultDate, max } = useMemo(
    () => ({
      defaultDate: new Date(2024, 8, 1),
      max: dates.add(dates.endOf(new Date(2024, 8, 30), "day"), -1, "hours"),
    }),
    []
  );

  return (
    <div className="calendar-container">
      <Calendar
        defaultDate={defaultDate}
        events={events}
        localizer={localizer}
        max={max}
        step={60}
        views={{ month: true }} // Only show the month view
        components={{
          toolbar: CustomToolbar, // Replace default toolbar with custom one
        }}
        eventPropGetter={(event) => ({
          style: {
            borderLeft: "solid 4px blue",
            borderRadius: "0px",
            opacity: 0.8,
            color: "white",
            display: "block",
            fontFamily: "rebondG-Medium",
          },
        })}
      />
    </div>
  );
}
