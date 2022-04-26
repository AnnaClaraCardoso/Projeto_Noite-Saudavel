const canvasIDs = ["sleep-duration-chart", "sleep-regularity-chart", "deficits-n-surpluses-chart", "sleep-goal-chart"];
const chartsArr = []
canvasIDs.forEach(element => {
  chartsArr.push(document.getElementById(element).getContext('2d'));
});

const labels = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']

chartsArr.forEach(canvaContexts => {
  console.log(canvaContexts)
})

let chartSleepDuration = new Chart(chartsArr[0], {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        data: [7, 5, 8, 8.5, 10, 11, 3],
        backgroundColor: [
          '#3339A6',
        ]
      }],
      color: '#00000'
    },
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
  }
);
