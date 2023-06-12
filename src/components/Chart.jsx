import React, { useEffect, useState } from "react";
import axios from "axios";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip
);



// import { PieData } from "../data/data";

const Chart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await axios.get(
          "https://sharanvkt.github.io/react-brush-up/sales.json"
        );
        const response2 = await axios.get(
          "https://sharanvkt.github.io/react-brush-up/sales2.json"
        );

        const sales1 = response1.data.map((dataObj) => dataObj.sales_number);
        const sales2 = response2.data.map((dataObj) => dataObj.sales_number);

        setChartData({
          labels: ["", "week 1", "week 2", "week 3", "week 4"],
          datasets: [
            {
              label: "Basic tees",
              data: sales1,
              backgroundColor: "white",
              borderColor: "#9BDD7C",
              tension: 0.5,
            },
            {
              label: "Hoodies",
              data: sales2,
              backgroundColor: "white",
              borderColor: "#FF6384",
              tension: 0.5,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching chart data:", error);
      }
    };

    fetchData();
  }, []);

  const LineOptions = {
    maintainAspectRatio: false,
    plugins: {
      legend: false,
      tooltip: {
        enabled: true,
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.raw}`,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 0,
        max: 1000,
        ticks: {
          stepSize: 200,
          callback: (value) => value,
        },
      },
    },
  };

  return (
    <div className="mt-10 bg-white rounded-2xl p-4">
  <div className="flex items-center justify-start px-4 py-2">
    <p className="text-black font-bold">Activities</p>
  </div>
  <select className="bg-white text-[#858585] font-light text-sm ml-4 mt-2">
    <option value="May - June 2021">May - June 2021</option>
    <option value="June - June 2021">June - June 2021</option>
    <option value="July - June 2021">July - June 2021</option>
  </select>
  <div className="w-full h-48 sm:h-56 md:h-64 lg:h-80 xl:h-96">
    {chartData ? (
      <Line className="p-2 sm:p-5" data={chartData} options={LineOptions} />
    ) : (
      <p className="p-2 sm:p-5 text-center text-black">Loading chart data...</p>
    )}
  </div>
</div>


  );
};

export default Chart;
