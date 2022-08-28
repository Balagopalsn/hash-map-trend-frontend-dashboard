import React from "react";
import { Chart as ChartJS } from "chart.js/auto";

import { Line } from "react-chartjs-2";

const Chart = ({ trendData }) => {
  const weekDays = ["Sun", "Mon", "Tue", "Thu", "Wed", "Fri", "Sat"];
  const dataPoints = trendData?.map((item) => item?.value);
  const weekDataLabels = trendData?.map(
    (item) => weekDays[new Date(item?.date)?.getDay()]
  );
  const dayDataLabels = trendData?.map((item) =>
    `${new Date(item?.date)?.getHours()}:00`
  );
  console.log("datapoints", dataPoints);

  const data = {
    labels: trendData?.length === 7 ? weekDataLabels : dayDataLabels,
    datasets: [
      {
        label: "Hits",
        data: dataPoints,
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };
  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default Chart;
