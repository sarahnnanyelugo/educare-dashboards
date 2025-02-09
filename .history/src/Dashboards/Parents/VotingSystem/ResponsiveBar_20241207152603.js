import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import Student from "../../../assets/images/student.png";
import Peter from "../../../assets/images/peter.png";
// Example sorted data
const sortedData = [
  { label: "Item A", value: 300, image: "https://via.placeholder.com/46" },
  { label: "Item B", value: 250, image: "https://via.placeholder.com/46" },
  { label: "Item C", value: 200, image: "https://via.placeholder.com/46" },
  { label: "Item D", value: 150, image: "https://via.placeholder.com/46" },
];

const CustomBarLabel = (props) => {
  const { x, y, width, value, image } = props;
  const imageWidth = 46;
  const imageHeight = 46;
  const imageX = x + width / 2 - imageWidth / 2;
  const imageY = y - imageHeight - 10;
  const textMargin = 5;

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
            borderRadius: "100%",
            overflow: "hidden",
          }}
        >
          <img
            src={image}
            alt="label"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </foreignObject>

      {/* Text with margin */}
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
          dataKey="value"
          fill="#4CAF50"
          radius={[10, 10, 0, 0]} // Rounded top corners
          label={<CustomBarLabel />}
        />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default ResponsiveBarChart;
