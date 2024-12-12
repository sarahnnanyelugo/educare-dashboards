import React from "react";
import Student from "../../assets/images/student.png";
import Peter from "../../assets/images/peter.png";
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
  { subject: "Eng", score: 40 },
  { subject: "Math", score: 20 },
  { subject: "H. Econs", score: 70 },
  { subject: "Basic Sci", score: 55 },
  { subject: "Civic Edu", score: 10 },
  { subject: "S.O.S", score: 80 },
  { subject: "French", score: 35 },
  { subject: "French", score: 67 },
  { subject: "Comp. Sci", score: 45 },
  { subject: "CRS", score: 15 },
  { subject: "G.A.D", score: 90 },
];

// Sort data in descending order
const data = rawData.sort((a, b) => b.score - a.score);

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
        // label={(props) => (
        //   <CustomBarLabel {...props} image={data[props.index].image} />
        // )}
      />
    </BarChart>
  </ResponsiveContainer>
);
