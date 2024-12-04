import React from "react";

export const Notification = (props) => {
  return (
    <div className="notification-div d-flex">
      <img src={props.icon} />
      <h6>{props.text}</h6>
      <div>
        <small>{props.textDate}</small>
        <small>{props.textTime}</small>
      </div>
    </div>
  );
};
