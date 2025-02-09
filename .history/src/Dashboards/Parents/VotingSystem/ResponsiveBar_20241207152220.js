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

const sortedData = [
  { label: "Item A", value: 300, image: "../../../assets/images/student.png" },
  { label: "Item B", value: 250, image: Student },
  { label: "Item C", value: 200, image: Peter },
  { label: "Item D", value: 150, image: Student },
];
// const data = rawData.sort((a, b) => b.sales - a.sales);

const CustomBarLabel = (props) => {
  const { x, y, width, value, image } = props;
  const imageWidth = 46;
  const imageHeight = 46;
  const imageX = x + width / 2 - imageWidth / 2;
  const imageY = y - imageHeight - 10;
  const textMargin = 5;

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

      {/* Text between the bar and the image */}
      <text
        x={x + width / 2}
        y={imageY + imageHeight + textMargin} // Adjusted for margin
        fill="#000"
        textAnchor="middle"
        fontSize="12px"
      >
        {value} Votes
      </text>
    </>
  );
};
export const ResponsiveBar = () => {
  return (
    <div style={{ padding: "10px" }}>
      {" "}
      <div className="card">
        {" "}
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
    </div>
  );
};
