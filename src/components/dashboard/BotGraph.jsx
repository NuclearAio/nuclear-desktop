import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
      display: false,
      text: 'Global Bot Performance',
    },
  },
};


const BotGraph = () => {
  const labels = ['Wrath', 'What', 'Trickle', 'Prism', 'Cyber', 'Chegg'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Global Bot Performance (Top 6) ',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
        backgroundColor: 'black',
        color: "#fafafa",
      },
      
    ],
  };
  return (
    <Bar options={options} data={data} />
  )
}

export default BotGraph;