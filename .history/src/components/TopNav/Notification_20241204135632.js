import React from "react";

export const Notification = (props) => {
  return (
    <div className="notification-div d-flex col-md-12">
      <img src={props.icon} />
      <div className="col-md-8">
        <p>{props.text}</p>
      </div>
      <div className="col-md-4">
        <small>{props.textDate}</small>
        <br />
        <small>{props.textTime}</small>
      </div>
    </div>
  );
};