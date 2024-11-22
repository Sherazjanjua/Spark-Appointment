import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register required components
ChartJS.register(ArcElement, Tooltip, Legend);

const ApplicationAnalysis = () => {
  // Data for the chart
  const data = {
    labels: ["Design", "Dev", "SEO"],
    datasets: [
      {
        data: [25, 65, 14], // Data values
        backgroundColor: [
          "rgba(59, 130, 246, 0.8)", // Blue
          "rgba(229, 231, 235, 0.6)", // Gray
          "rgba(255, 99, 132, 0.8)", // Red
        ],
        borderWidth: 8, // Reduced border width to reduce gap
      },
    ],
  };

  const options = {
    cutout: "60%", // Create space in the middle for the total
    plugins: {
      tooltip: {
        enabled: true,
      },
      legend: {
        display: false, 
      },
    },
  };

  return (
    <div className="bg-white shadow-sm rounded-lg p-6 w-full max-w-md mx-auto">
      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Application Analysis
      </h3>
      {/* Chart */}
      <div className="relative">
        <Doughnut data={data} options={options} />
        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-sm text-gray-500">Total Jobs</p>
          <h2 className="text-2xl font-bold text-gray-800">104</h2>
        </div>
      </div>
      {/* Legend */}
      <div className="flex justify-center gap-3 mt-4">
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          <p className="text-sm text-gray-600">25 Design</p>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
          <p className="text-sm text-gray-600">65 Dev</p>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 bg-red-500 rounded-full"></span>
          <p className="text-sm text-gray-600">14 SEO</p>
        </div>
      </div>
    </div>
  );
};

export default ApplicationAnalysis;
