import React from "react";

export const Notification = (props) => {
  return (
    <div className="notification-div d-flex col-md-12">
      <img src={props.Icon} className="col-md-1" />
      <div className="col-md-8">
        <h6>{props.text}</h6>
      </div>
      <div className="col-md-3">
        <small>{props.textDate}</small>
        <br />
        <small>{props.textTime}</small>
      </div>
    </div>
  );
};
