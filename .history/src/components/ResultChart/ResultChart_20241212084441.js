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
  { name: "English", Votes: 40 },
  { name: "Mathematics", Votes: 20 },
  { name: "H. Econs", Votes: 70 },
  { name: "Basic Science", Votes: 55 },
  { name: "Civic Edu", Votes: 10 },
  { name: "S.O.S", Votes: 5 },
  { name: "S.O.S", Votes: 5 },
];

// Sort data in descending order
const data = rawData.sort((a, b) => b.Votes - a.Votes);

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
        dataKey="name"
        tick={<CustomXAxisTick />}
        interval={0} // Ensure all labels are displayed
      />
      <YAxis axisLine={false} tick={false} />
      <Tooltip />
      <Bar
        dataKey="Votes"
        fill="#0098DA"
        radius={[10, 10, 0, 0]} // Add border-radius here for rounded top corners
        // label={(props) => (
        //   <CustomBarLabel {...props} image={data[props.index].image} />
        // )}
      />
    </BarChart>
  </ResponsiveContainer>
);
