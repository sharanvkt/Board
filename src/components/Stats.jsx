import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
ChartJS.register(ArcElement, Tooltip);

const PieData = {
  labels: ["Basic Tees", "Custom Short Pants", "Super Hoodies"],
  datasets: [
    {
      data: [25, 30, 45],
      backgroundColor: ["#98D89E", "#F6DC7D", "#EE8484"],
      borderWidth: 0,
      radius: 90,
    },
  ],
};

const Stats = () => {
  return (
    <div className="flex flex-col md:flex-row mt-5 gap-4">
      <div className="flex-1 bg-white rounded-2xl p-7">
        <div className="flex justify-between items-center">
          <h1 className="text-black text-xl font-bold mb-4">Top Products</h1>
          <select className="bg-white text-[#858585] font-light text-[14px] ml-4">
            <option value="May - June 2021">May - June 2021</option>
            <option value="June - June 2021">June - June 2021</option>
            <option value="July - June 2021">July - June 2021</option>
          </select>
        </div>
        <div className="flex flex-col sm:flex-row">
          <div className="w-full h-48 md:h-full md:w-1/2">
            <Pie data={PieData} />
          </div>
          <div className="w-full md:w-1/2 mt-6 md:mt-0">
            {PieData.labels.map((label, index) => (
              <div
                key={index}
                className="mt-5 flex items-center justify-start space-y-2"
              >
                <span
                  className="mr-2 flex items-center justify-center rounded-full"
                  style={{
                    backgroundColor: PieData.datasets[0].backgroundColor[index],
                    width: "10px",
                    height: "10px",
                  }}
                ></span>
                <p className="ml-3 text-black">
                  {label} {PieData.datasets[0].data[index]}%
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 rounded-2xl p-7 bg-white mt-5 md:mt-0">
        <div className="flex justify-between items-center">
          <p className="font-bold text-black text-xl">Today's schedules</p>
          <p className="text-[#666666] text-xs font-normal">See All</p>
        </div>
        <div className="mt-12 space-y-4">
          <div className="pl-2 border-l-4 border-[#9BDD7C] space-y-1">
            <p className="text-[#666666] text-sm font-bold">
              Check operation at Giga Factory 1
            </p>
            <p className="text-[#666666] text-xs font-normal">18.00-20.00</p>
            <p className="text-[#666666] text-xs font-normal">
              at Central Jakarta
            </p>
          </div>
          <div className="pl-2 border-l-4 border-[#6972C3] space-y-1">
            <p className="text-[#666666] text-sm font-bold">
              Meeting with suppliers from Kuta Bali
            </p>
            <p className="text-[#666666] text-xs font-normal">14.00-15.00</p>
            <p className="text-[#666666] text-xs font-normal">
              at Sunset Road, Kuta, Bali
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
