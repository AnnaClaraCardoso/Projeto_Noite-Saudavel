import { Chart, registerables } from 'chart.js'
Chart.register(...registerables);

import "./styles.css";

new Chart(document.getElementById("sleep-duration_bar-chart"), config)

const labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15']

let data = {
  labels: labels,
  datasets: [{
    label: ['My First Dataset', '# of Votes'], 
    data: [7, 5, 8, 8.5, 10, 11, 3],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
};

const config = {
  type: 'bar',
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  },
};