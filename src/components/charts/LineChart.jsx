import React from 'react';
import { Line } from 'react-chartjs-2'; // Import Line chart from react-chartjs-2
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

// Register required components for Line chart
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const LineChart = ({title}) => {
  // Data for the Line chart
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'], // Labels for X axis
    datasets: [
      {
        label: title, // Label for the dataset
        data: [65, 59, 80, 81, 56, 55, 40], // Values for each month
        fill: false, // Whether to fill the area under the line or not
        borderColor: 'rgb(75, 192, 192)', // Line color
        tension: 0.1, // Curve of the line (0 is a straight line)
      },
    ],
  };

  // Options for the Line chart
  const options = {
    responsive: true, // Ensures the chart is responsive
    plugins: {
      title: {
        display: true
         // Chart title
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            return `Value: ${context.raw}`; // Format the tooltip label
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true, // Ensures Y-axis starts from 0
      },
    },
  };

  return (
    <div style={{ width: '50%', margin: '0 auto' }}>
     
      <Line data={data} options={options} /> 
    </div>
  );
};

export default LineChart;
