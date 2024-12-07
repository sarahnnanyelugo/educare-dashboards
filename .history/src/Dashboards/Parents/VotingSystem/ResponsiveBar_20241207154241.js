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
const rawData = [
  { name: "January", sales: 30, image: "https://via.placeholder.com/50" },
  { name: "February", sales: 50, image: "https://via.placeholder.com/50" },
  { name: "March", sales: 40, image: "https://via.placeholder.com/50" },
];

// Sort data in descending order
const data = rawData.sort((a, b) => b.sales - a.sales);

const CustomBarLabel = (props) => {
  const { x, y, width, value, image } = props;
  const imageWidth = 30;
  const imageHeight = 30;
  const imageX = x + width / 2 - imageWidth / 2;
  const imageY = y - 50;

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

      {/* Text below the image */}
      <text
        x={x + width / 2}
        y={imageY + imageHeight + 15}
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
  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar
        dataKey="sales"
        fill="#8884d8"
        label={(props) => (
          <CustomBarLabel {...props} image={data[props.index].image} />
        )}
      />
    </BarChart>
  </ResponsiveContainer>
);

export default ResponsiveBar;
