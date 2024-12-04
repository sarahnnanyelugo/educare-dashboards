import React from "react";

export const Notification = (props) => {
  return (
    <div className="notification-div d-flex">
      <img src={props.icon} />
    </div>
  );
};
