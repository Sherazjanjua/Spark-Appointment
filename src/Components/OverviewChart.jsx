import React from 'react';
import { Bar } from 'react-chartjs-2';
import up from '../assets/Images/up.svg'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const OverviewChart = ({ title, avg, percentage, labels, dataSets }) => {
  const data = {
    labels: labels,
    datasets: dataSets,
  };
  const options = {
    plugins: {
      tooltip: {
        enabled: true,
      },
    },
    responsive: true,
    maintainAspectRatio: false, // Allow the chart to resize dynamically
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: '#4B5563' },
      },
      y: {
        grid: { color: '#E5E7EB' },
        ticks: { color: '#4B5563' },
      },
    },
  };
  

  return (
    <div className="bg-white shadow-sm rounded-lg p-6 space-y-1">
      <div className="flex justify-between items-center">
        <div className='relative'>
          <h2 className="w-[79px] h-[21px] mt-[4px] mr-[48px] mb-0 ml-[27px] text-[17px] font-semibold text-black">{title}</h2>
          <p className="w-[91px] h-[16px] mt-[3px] mr-[36px] mb-[1px] ml-[27px] text-[13px] font-medium text-[#a5a5a5]">Avg per month</p>

          <h1 className="w-[48px] h-[33px] mt-[5px] mr-[31px] mb-[11px] ml-[26px] text-[27px] font-inter font-medium text-[#18ade4]"
          >
            {avg}
            <span className="  w-[38px] h-[16px] mr-[13px] ml-[10px] text-[13px] font-inter font-medium text-black">{percentage}
               <img src={up} alt=""  className="absolute top-[72px] left-[120px] "/></span>
          </h1>
        </div>
        <div className="flex gap-2 mt-[-74px]">
          <button className="py- px-2 rounded-lg bg-blue-500 text-white text-sm">1 Year</button>
          <button className="py- px-2 rounded-lg border text-sm text-gray-500">6 months</button>
          <button className="py- px-2 rounded-lg border text-sm text-gray-500">3 months</button>
          <button className="py- px-2 rounded-lg border text-sm text-gray-500">1 month</button>
        </div>
      </div>
      <div className="flex justify-end gap-2 mr-10 items-center text-sm text-black font-semibold">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-500"></div> Applications
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gray-400"></div> Interviews
        </div>
      </div>
      <div className="w-full p-4 h-56">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default OverviewChart;
