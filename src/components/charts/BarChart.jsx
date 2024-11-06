import React from 'react';
import { Bar } from 'react-chartjs-2'; // Import Bar chart from react-chartjs-2
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register required components for Bar chart
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  // Data for the Bar chart
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'], // Labels for X axis
    datasets: [
      {
        label: 'My First Dataset', // Label for the dataset
        data: [65, 59, 80, 81, 56, 55, 40], // Values for each month
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // Background color of bars
        borderColor: 'rgb(75, 192, 192)', // Border color of bars
        borderWidth: 1, // Border width
      },
    ],
  };

  // Options for the Bar chart
  const options = {
    responsive: true, // Ensures the chart is responsive
    plugins: {
      title: {
        display: true,
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
    <div style={{ width: '40%', margin: '0 auto' }}>
      <h2></h2>
      <Bar data={data} options={options} /> 
    </div>
  );
};

export default BarChart;
