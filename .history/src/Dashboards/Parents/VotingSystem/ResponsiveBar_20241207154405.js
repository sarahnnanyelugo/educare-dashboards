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
  { name: "January", sales: 30, image: Peter },
  { name: "February", sales: 50, image: Student },
  { name: "March", sales: 40, image: Peter },
];

// Sort data in descending order
const data = rawData.sort((a, b) => b.sales - a.sales);

const CustomBarLabel = (props) => {
  const { x, y, width, value, image } = props;
  return (
    <>
      <image
        x={x + width / 2 - 15}
        y={y - 40}
        href={image}
        height={30}
        width={30}
      />
      <text x={x + width / 2} y={y - 10} fill="#000" textAnchor="middle">
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
