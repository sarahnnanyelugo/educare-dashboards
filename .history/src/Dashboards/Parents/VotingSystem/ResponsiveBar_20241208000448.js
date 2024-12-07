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
  { name: "Duru Munachisom", sales: 40, image: Peter },
  { name: "Okonkwo John", sales: 20, image: Student },
  { name: "Mark Collin", sales: 70, image: Peter },
  { name: "Eze Sophia", sales: 55, image: Student },
  { name: "Peter Young", sales: 10, image: Peter },
  { name: "Mark Kola", sales: 5, image: Student },
];

// Sort data in descending order
const data = rawData.sort((a, b) => b.sales - a.sales);

const CustomBarLabel = (props) => {
  const { x, y, width, value, image } = props;
  const imageWidth = 46;
  const imageHeight = 46;
  const imageX = x + width / 2 - imageWidth / 2;
  const imageY = y - imageHeight - 10;

  return (
    <>
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

      <text
        x={x + width / 2}
        y={imageY + imageHeight + 10}
        textAnchor="middle"
        fontSize="12px"
      >
        <tspan fill="#000" fontWeight="bold">
          {value}
        </tspan>
        <tspan fill="#888" fontStyle="italic">
          {" "}
          Votes
        </tspan>
      </text>
    </>
  );
};

// Custom tick component for wrapping
const CustomXAxisTick = (props) => {
  const { x, y, payload } = props;
  const textLines = payload.value.split(" "); // Split text into words

  return (
    <text
      x={x}
      y={y + 10} // Adjust y for positioning
      textAnchor="middle"
      fontSize="12px"
    >
      {textLines.map((line, index) => (
        <tspan key={index} x={x} dy={index === 0 ? 0 : 15}>
          {line}
        </tspan>
      ))}
    </text>
  );
};

const ResponsiveBar = () => (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={data}>
      <XAxis
        dataKey="name"
        tick={<CustomXAxisTick />}
        interval={0} // Ensure all labels are displayed
      />
      <YAxis axisLine={false} tick={false} />
      <Tooltip />
      <Bar
        dataKey="sales"
        fill="#8884d8"
        radius={[10, 10, 0, 0]}
        label={(props) => (
          <CustomBarLabel {...props} image={data[props.index].image} />
        )}
      />
    </BarChart>
  </ResponsiveContainer>
);

export default ResponsiveBar;
