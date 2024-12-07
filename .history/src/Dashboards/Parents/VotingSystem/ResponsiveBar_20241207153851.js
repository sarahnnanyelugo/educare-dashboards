import React from "react";
import Student from "../../../assets/images/student.png";
import Peter from "../../../assets/images/peter.png";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

// Example sorted data
const sortedData = [
  { label: "Item A", value: 300, image: Peter },
  { label: "Item B", value: 250, image: Student },
  { label: "Item C", value: 200, image: Peter },
  { label: "Item D", value: 150, image: Student },
];

// Custom label for the bars
const CustomBarLabel = ({ x, y, width, value, image }) => {
  const imageWidth = 46;
  const imageHeight = 46;
  const imageX = x + width / 2 - imageWidth / 2;
  const imageY = y - imageHeight - 10; // Adjusted for spacing
  const textMargin = 5; // Spacing for text

  return (
    <>
      {/* Circular image */}
      <foreignObject
        x={imageX}
        y={imageY}
        width={imageWidth}
        height={imageHeight}
      >
        <div
          style={{
            width: `${imageWidth}px`,
            height: `${imageHeight}px`,
            borderRadius: "50%", // Ensure perfect circle
            overflow: "hidden",
          }}
        >
          <img
            src={image} // Correctly accessing the image
            alt="label"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </foreignObject>

      {/* Text with margin below the image */}
      <text
        x={x + width / 2}
        y={imageY + imageHeight + textMargin}
        fill="#000"
        textAnchor="middle"
        fontSize="12px"
      >
        {value}
      </text>
    </>
  );
};

const ResponsiveBar = () => (
  <div style={{ width: "100%", height: "400px" }}>
    {/* Parent container with defined height */}
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={sortedData}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" /> {/* Optional grid lines */}
        <XAxis dataKey="label" />
        <YAxis />
        <Tooltip />
        <Bar
          ddataKey="value"
          fill="#4CAF50"
          radius={[10, 10, 0, 0]} // Rounded top corners
          label={<CustomBarLabel />} // Custom label component
          stroke="none" // Remove bar borders
        />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default ResponsiveBar;
