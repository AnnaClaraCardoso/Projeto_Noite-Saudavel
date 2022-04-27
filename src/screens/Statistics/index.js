const canvasIDs = ["sleep-duration-chart", "sleep-intervals-chart", "sleep-goal-chart"];
const chartsArr = [];
canvasIDs.forEach(chartID => {
  chartsArr.push(document.getElementById(chartID).getContext('2d'));
});

const labels = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']

// chartsArr.forEach(canvaContexts => {
//   console.log(canvaContexts)
// })

const chartSleepDuration = new Chart(chartsArr[0], {
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

const chartSleepIntervals = new Chart(chartsArr[1], {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        data: [
          // referente às posições das labels
          [4, 13],

        ],
        backgroundColor: [
          '#3339A6',
        ]
      }],
      color: '#00000'
    },
    options: {
      indexAxis: 'y',
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
          min: 0,
          grid: {
            color: 'transparent'
          },
          ticks: {
            color: '#815A8C',
            callback: (val) => {
              let hour = val + 6;
              let hourLabel = ''
              if(hour < 12) {
                hourLabel = `${hour} PM`
              } else if (hour === 12) {
                hourLabel = `${hour} MN`
              }
              if(hour > 12) {
                hour = hour - 12
                hourLabel = `${hour} AM`
              }
              return hourLabel;
            }
          }
        }
      }
    },
  }
);


const bgColor = []
const goalPrcentData = [50, 60, 80, 120, 80, 90, 140]
const overflowPercentData = []

const data = {
  labels: labels,
  datasets: [
    {
      label: `Horas dentro do objetivo`,
      data: goalPrcentData,
      backgroundColor: '#3339A6',
    }, 
    {
      label: `Horas excedidas`,
      data: overflowPercentData,
      backgroundColor: '#25D997'
    }
  ]
};

goalPrcentData.forEach((value, index) => {
  const isOverflow = value >= 100;
  if(isOverflow) {
    overflowPercentData[index] = value - 100;
    goalPrcentData[index] = 100
  }
});

const chartSleepGoal = new Chart(chartsArr[2], {
    type: 'bar',
    data: data,
    options: {
      plugins: {
        title: {
          display: true,
          text: 'Chart.js Bar Chart - Stacked'
        },
      },
      responsive: true,
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true,
          ticks: {
            callback: (val) => {
              return `${val}%`;
            }
          }
        }
      }
    }
  }
);
