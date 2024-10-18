import React from "react";
import { Children } from "../MyChildren/Children";

export const Result = () => {
  return (
    <>
      <div className="tabs col-md-12 row row-cols-1 row-cols-lg-3 g-2 g-lg-3">
        {children.map((data, index) => (
          <Children
            data={data}
            handleClick2={handleClick2}
            tabIndex={index + 1}
            key={index}
            isActive={activeTab === index + 1} // Set active based on activeTab state
            mode="tab" // This mode is for tab triggering
          />
        ))}
      </div>
    </>
  );
};
