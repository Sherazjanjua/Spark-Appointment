import React from 'react';
import { Bar } from 'react-chartjs-2';
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
    <div className="bg-white shadow-sm rounded-lg p-3 space-y-1">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          <p className="text-sm text-gray-500">Avg per month</p>
          <h1 className="text-4xl font-bold text-blue-500 mt-2">
            {avg}
            <span className="text-sm text-green-500 ml-2">{percentage} ↑</span>
          </h1>
        </div>
        <div className="flex gap-2">
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
      <div className="w-full h-56">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default OverviewChart;
