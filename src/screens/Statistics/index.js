const canvas = document.getElementById("myCanvas").getContext('2d');

const labels = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']

let data = {
  labels: labels,
  datasets: [{
    label: ['Horas'], 
    data: [7, 5, 8, 8,5, 10, 11, 3],
    backgroundColor: [
      '#3339A6',
    ]
  }],
  color: '#00000'
};

const config = {
  type: 'bar',
  data: data,
  options: {
    title: {
      display: true,
      text: "Sleep Duration"
    },
    scales: {
      y: {
        ticks: {
          color: '#815A8C'
        },
        grid: {
          color: '#330740'
        },
        beginAtZero: true
      },
      x: {
        grid: {
          color: 'transparent'
        },
        ticks: {
          color: '#815A8C'
        }
      }
    }
  },
};

let chart = new Chart(canvas, config);