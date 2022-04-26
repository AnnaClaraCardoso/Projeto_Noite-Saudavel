const canvasIDs = ["sleep-duration-chart", "sleep-regularity-chart", "deficits-n-surpluses-chart", "sleep-goal-chart"];
const chartsArr = []
canvasIDs.forEach(element => {
  chartsArr.push(document.getElementById(element).getContext('2d'))
});

const labels = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']

let data = {
  labels: labels,
  datasets: [{
    // label: '',
    //data: [],
    backgroundColor: [
      '#3339A6',
    ]
  }],
  color: '#00000'
};

let config = {
  // type: ''
  data: data,
  options: {
    title: {
      display: true
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

chartsArr.forEach(canva => {
  const chart = new Chart(canva);
  chart.config = 
});
