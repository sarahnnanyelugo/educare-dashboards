import React from "react";

export const Notification = (props) => {
  return (
    <div className="notification-div d-flex">
      <img src={props.icon} />
      <h5>{props.text}</h5>
      <div>
        <small>{props.textDate}</small>
        <small>{props.textTime}</small>
      </div>
    </div>
  );
};
