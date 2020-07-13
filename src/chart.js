import React from "react";
import Chart from "chart.js";
import css from "./App.module.css";

const LineChart = ({ data, labels, backgroundColor, label }) => {
  const chartRef = React.createRef();

  React.useEffect(() => {
    const myChartRef = chartRef.current.getContext("2d");

    new Chart(myChartRef, {
      type: "line",
      data: {
        //Bring in data
        labels: labels,
        datasets: [
          {
            label: label,
            data: data,
            backgroundColor: backgroundColor,
          },
        ],
      },

      options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }, []);

  return (
    <div className={css.chartClass}>
      <canvas id="myChart" ref={chartRef} />
    </div>
  );
};

export default LineChart;
