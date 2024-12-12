import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Example unsorted data
const rawData = [
  { subject: "Eng", score: 88 },
  { subject: "Math", score: 60 },
  { subject: "H. Econs", score: 100 },
  { subject: "Basic Sci", score: 65 },
  { subject: "Civic Edu", score: 60 },
  { subject: "S.O.S", score: 80 },
  { subject: "French", score: 79 },
  { subject: "French", score: 67 },
  { subject: "Comp. Sci", score: 45 },
  { subject: "CRS", score: 65 },
  { subject: "G.A.D", score: 90 },
];

// Keep data as is (no sorting)
const data = rawData;

const CustomXAxisTick = (props) => {
  const { x, y, payload } = props;
  const textLines = payload.value.split(" "); // Split text into words

  return (
    <text
      x={x}
      y={y + 10} // Adjust y for positioning
      textAnchor="middle"
      fontSize="10px"
      fontFamily="rebondG-Medium"
    >
      {textLines.map((line, index) => (
        <tspan key={index} x={x} dy={index === 0 ? 0 : 15}>
          {line}
        </tspan>
      ))}
    </text>
  );
};

export const ResultChart = () => (
  <ResponsiveContainer width="100%" height={550}>
    <BarChart data={data}>
      <XAxis
        dataKey="subject"
        tick={<CustomXAxisTick />}
        interval={0} // Ensure all labels are displayed
      />
      <YAxis axisLine={false} tick={false} />
      <Tooltip />
      <Bar
        dataKey="score"
        fill="#0098DA"
        radius={[10, 10, 0, 0]} // Add border-radius here for rounded top corners
      />
    </BarChart>
  </ResponsiveContainer>
);
