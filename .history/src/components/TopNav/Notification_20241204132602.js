import React from "react";

export const Notification = (props) => {
  return (
    <div className="notification-div d-flex">
      <img src={props.icon} />
      <h5>{props.notification}</h5>
      <div>
        <small>{props.notificationDate}</small>
        <small>{props.notificationTime}</small>
      </div>
    </div>
  );
};
