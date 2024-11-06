import React, { useEffect } from 'react';
import { Chart } from 'chart.js';
import { Pie } from 'react-chartjs-2'; // Import Pie chart from react-chartjs-2
import { ArcElement, Tooltip, Legend } from 'chart.js';

// Register required components
Chart.register(ArcElement, Tooltip, Legend);

const PieChart = ({title}) => {
  // Pie chart data
  const data = {
    labels: ['Red', 'Blue', 'Yellow'], // Labels for the Pie chart slices
    datasets: [
      {
        data: [300, 50, 100], // Corresponding values for each slice
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 205, 86, 0.2)'], // Colors for each slice
        borderColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'], // Border colors
        borderWidth: 1,
      },
    ],
  };

  // Options for the chart (optional)
  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            let label = context.label || '';
            let value = context.raw || 0;
            return `${label}: ${value}`;
          },
        },
      },
    },
  };

  return (
    <div style={{ width: '20%', margin: '0 auto'}}>
      <h2 className='flex justify-center mb-2'>{title}</h2>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
