import React, { Fragment, useMemo } from "react";
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
export default function Event({
  localizer = mLocalizer,
  showDemoLink = true,
  ...props
}) {
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
  return (
    <div className="calendar-section">
      {" "}
      <div className="height600 d-md-flex" {...props}>
        <div className="col-md-4"></div>
        <div className="col-md-8">
          {" "}
          <Calendar
            components={components}
            defaultDate={defaultDate}
            events={events}
            localizer={localizer}
            max={max}
            showMultiDayTimes
            step={60}
            views={views}
          />
        </div>
      </div>
    </div>
  );
}
// Basic.propTypes = {
//   localizer: PropTypes.instanceOf(DateLocalizer),
//   showDemoLink: PropTypes.bool,
// };
