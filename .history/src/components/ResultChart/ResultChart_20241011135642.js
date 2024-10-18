import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Title,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Title,
  Legend
);

export const options = (drillPage, data) => ({
  // indexAxis: "y",
  datalabels: {
    display: true,
    color: "#000", // Color of the labels
    anchor: "end", // Position the label at the end of the bar
    align: "top", // Align the label to the top of the bar
    formatter: (value) => value, // Format the label as the value
    font: {
      weight: "bold", // Make the font bold
    },
    offset: 4, // Space between the label and the top of the bar
  },
  scales: {
    y: { ticks: { display: false } },
    x: { stepSize: 1, grid: { display: false } },
  },
  responsive: true,
  animation: {
    duration: 1000, // Animation duration in milliseconds
    easing: "easeInOutQuad", // Easing function for smooth animation
  },
  plugins: {
    legend: {
      display: true,
    },
    title: {
      display: false,
      text: "",
    },
  },
  onClick: (event, elements) => {
    if (elements.length > 0) {
      const elementIndex = elements[0].index;
      const datasetIndex = elements[0].datasetIndex;
      console.log(`ClickedIndex: ${elementIndex}`);
      // Call the drillPage function here
      drillPage && drillPage(elementIndex);
    }
  },
});

export function ResultChart({ labels, dataset, drillPage }) {
  const data = {
    labels,
    datasets: [
      {
        label: "votes",
        data: dataset,
        backgroundColor: "#0098DA",
        borderRadius: 10,
        // aspectRatio: 1,
      },
    ],
  };

  return <Bar options={options(drillPage)} data={data} className="" />;
}
