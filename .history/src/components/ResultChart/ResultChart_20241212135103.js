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

// Keep data as is (no sorting)
const data = rawData;

export const ResultChart = () => (
  <ResponsiveContainer width="100%" height={330}>
    <BarChart data={data}>
      <XAxis
        dataKey="subject"
        interval={0} // Ensure all labels are displayed
        angle={-45} // Slant labels at a 45-degree angle
        textAnchor="end" // Align the text properly when slanted
        style={{ fontSize: "9px" }}
      />
      <YAxis
        tickFormatter={(value) => `${value}%`} // Display percentage on Y-axis
        interval="preserveStartEnd" // Ensure clear label placement
        style={{ fontSize: "9px" }} // Adjust font size for the Y-axis
      />
      <Tooltip />
      <Bar
        dataKey="score"
        fill="#0098DA"
        radius={[10, 10, 0, 0]} // Add border-radius here for rounded top corners
      />
    </BarChart>
  </ResponsiveContainer>
);
