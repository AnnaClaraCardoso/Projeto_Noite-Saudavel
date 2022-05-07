// labels dos graficos
let dates = [
  new Date('Fri Apr 01 2022'), 
  new Date('Sat Apr 02 2022'), 
  new Date('Sun Apr 03 2022'), 
  new Date('Mon Apr 04 2022'), 
  new Date('Tue Apr 05 2022'), 
  new Date('Wed Apr 06 2022'), 
  new Date('Thu Apr 07 2022')
];

// dates.forEach((date) => {
//   console.log(date, typeof(date))
// })

// inputs do filtro por data
const startDateInput = document.getElementById('date-start');
const endDateInput = document.getElementById('date-end');

// Gráfico de controle de testes; não fará parte do resultado final
// let exemData = [65, 59, 75, 81, 56, 55, 40];

// const exemChart = new Chart(document.getElementById('exemple').getContext('2d'), {
//   type: 'bar',
//   data: {
//     labels: dates,
//     datasets: [{
//       label: 'My First Dataset',
//       data: exemData,
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.2)'
//       ],
//       borderColor: [
//         'rgb(255, 99, 132)'
//       ],
//       borderWidth: 1
//     }]
//   },
//   options: {
//     scales: {
//       x: {
//         type: 'time',
//         time: {
//           unit: 'day',
//           timezone: 'America/Sao_Paulo',
//           tooltipFormat : 'E, d MMM, yyyy',
//           displayFormats: {
//             day: 'E, d MMM'
//           }
//         }
//       },
//       y: {
//         beginAtZero: true
//       }
//     }
//   },
// });


// Fazendo elementos que farão parte da página

const canvasIDs = ["sleep-duration-chart", "sleep-intervals-chart", "sleep-goal-chart"];
const chartsArr = [];
canvasIDs.forEach(chartID => {
  chartsArr.push(document.getElementById(chartID).getContext('2d'));
});

// chartsArr.forEach(canvaContexts => {
//   console.log(canvaContexts)
// })

let sleepDurationData = [7, 5, 8, 8.5, 10, 11, 3]

const chartSleepDuration = new Chart(chartsArr[0], {
    type: 'bar',
    data: {
      labels: dates,
      datasets: [{
        data: sleepDurationData,
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
          type: 'time',
          time: {
            unit: 'day',
            timezone: 'America/Sao_Paulo',
            tooltipFormat : 'E, d MMM, yyyy',
            displayFormats: {
              day: 'E, d MMM'
            }
          }, 
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

let sleepIntervalsData = [
  // referente às posições das labels
  [4, 13],

]

const chartSleepIntervals = new Chart(chartsArr[1], {
    type: 'bar',
    data: {
      labels: dates,
      datasets: [{
        data: sleepIntervalsData,
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
          type: 'time',
          time: {
            unit: 'day',
            timezone: 'America/Sao_Paulo',
            tooltipFormat : 'E, d MMM, yyyy',
            displayFormats: {
              day: 'E, d MMM'
            }
          },
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
let goalPrcentData = [50, 60, 80, 120, 80, 90, 140]
let overflowPercentData = []

const sleepGoalData = {
  labels: dates,
  datasets: [
    {
      label: `Horas dentro do objetivo`,
      backgroundColor: '#3339A6',
    }, 
    {
      label: `Horas excedidas`,
      backgroundColor: '#25D997'
    }
  ]
};

const chartSleepGoal = new Chart(chartsArr[2], {
    type: 'bar',
    data: sleepGoalData,
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
          type: 'time',
          time: {
            unit: 'day',
            timezone: 'America/Sao_Paulo',
            tooltipFormat : 'E, d MMM, yyyy',
            displayFormats: {
              day: 'E, d MMM'
            }
          },
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

filterOverflow(goalPrcentData)
chartSleepGoal.update();


function filterOverflow(filterData) {
  console.log(filterData)
  filterData.forEach((value, index) => {
    const isOverflow = value >= 100;
    if(isOverflow) {
      overflowPercentData[index] = value - 100;
      filterData[index] = 100
    }
  });

  console.log(overflowPercentData)

  chartSleepGoal.config.data.datasets[0].data = filterData;
}

function filterData() {

  const startValueDate = new Date(`${startDateInput.value} 00:00:00`).toString()
  const endValueDate = new Date(`${endDateInput.value} 00:00:00`).toString()
  
  console.log(startValueDate, typeof(startValueDate))
  console.log(endValueDate, typeof(endValueDate))

  const stringDates = dates.map(date => {
    return date.toString()
  })
  
  // Pegando datas
  const indexOfStartDate = stringDates.indexOf(startValueDate);
  const indexOfEndDate = stringDates.indexOf(endValueDate);

  // console.log(indexOfStartDate)
  // console.log(indexOfEndDate)

  // Criando label com novo intervalo de datas
  const filterDates = dates.slice(indexOfStartDate, indexOfEndDate + 1);
  chartSleepDuration.config.data.labels = filterDates;
  chartSleepIntervals.config.data.labels = filterDates;
  chartSleepGoal.config.data.labels = filterDates;
  
  // modificando dados
  const dataPointsArray = [
    [...sleepDurationData], 
    [...sleepIntervalsData], 
    [...goalPrcentData],
  ];

  const filterDataPoints = dataPointsArray.map(dataPoint => {
    return dataPoint.slice(indexOfStartDate, indexOfEndDate + 1)
  });

  // console.log('filterDataPoints\n' + filterDataPoints)

  chartSleepDuration.config.data.datasets[0].data = filterDataPoints[0];
  chartSleepIntervals.config.data.datasets[0].data = filterDataPoints[1];
  filterOverflow(filterDataPoints[2])
  chartSleepGoal.config.data.datasets[1].data = overflowPercentData.slice(indexOfStartDate, indexOfEndDate + 1);

  chartSleepDuration.update();
  chartSleepIntervals.update();
  chartSleepGoal.update();
}
