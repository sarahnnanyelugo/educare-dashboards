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
  { name: "January", sales: 40, image: Peter },
  { name: "February", sales: 20, image: Student },
  { name: "January", sales: 70, image: Peter },
  { name: "February", sales: 55, image: Student },

  { name: "March", sales: 10, image: Peter },
  { name: "March", sales: 5, image: Student },
];

// Sort data in descending order
const data = rawData.sort((a, b) => b.sales - a.sales);

const CustomBarLabel = (props) => {
  const { x, y, width, value, image } = props;
  const imageWidth = 46; // Updated image width
  const imageHeight = 46; // Updated image height
  const imageX = x + width / 2 - imageWidth / 2;
  const imageY = y - imageHeight - 10; // Position above the bar, accounting for new size

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

      {/* Text between the bar and the image */}
      <text
        x={x + width / 2}
        y={imageY + imageHeight + 10} // Position text below the image
        fill="#000"
        textAnchor="middle"
        fontSize="12px"
      >
        {value}Votes
      </text>
    </>
  );
};

const ResponsiveBar = () => (
  <ResponsiveContainer width="100%" height={550}>
    <BarChart data={data}>
      <XAxis dataKey="name" />
      {/* Remove Y-Axis Labels */}
      <YAxis axisLine={false} tick={false} />
      <Tooltip />
      <Bar
        dataKey="sales"
        fill="#0098DA"
        radius={[10, 10, 0, 0]} // Add border-radius here for rounded top corners
        label={(props) => (
          <CustomBarLabel {...props} image={data[props.index].image} />
        )}
      />
    </BarChart>
  </ResponsiveContainer>
);

export default ResponsiveBar;
