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
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['Wrath', 'What', 'Trickle', 'Prism', 'Cyber', 'Chegg', 'Valor'];

const data = {
  labels,
  datasets: [
    {
      label: 'Proxy global performance',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      backgroundColor: '#be123c',
    },
    
  ],
};

const ProxyGraph = () => {
  return (
    <Bar options={options} data={data} />
  )
}

export default ProxyGraph;