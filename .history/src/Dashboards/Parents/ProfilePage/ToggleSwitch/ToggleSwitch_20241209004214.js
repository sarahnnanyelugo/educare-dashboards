import React from "react";
import "./toggle.scss";
export const ToggleSwitch = () => {
  return (
    <div id="app-cover">
      <div className="row">
        <div className="toggle-button-cover">
          <div className="">
            <div className="button r" id="button-1">
              <input type="checkbox" className="checkbox" />
              <div className="knobs"></div>
              <div className="layer"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
