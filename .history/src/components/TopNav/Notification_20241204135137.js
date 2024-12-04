import React from "react";

export const Notification = (props) => {
  return (
    <div className="notification-div d-flex col-md-12">
      <img src={props.icon} />
      <h6 className="col-md-6">{props.text}</h6>
      <div className="col-md-4">
        <small>{props.textDate}</small>
        <small>{props.textTime}</small>
      </div>
    </div>
  );
};
