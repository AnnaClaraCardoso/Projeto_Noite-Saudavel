// labels dos graficos
let dates = [
  new Date('Fri, April 01, 2022'), 
  new Date('Sat, April 02, 2022'), 
  new Date('Sun, April 03, 2022'), 
  new Date('Mon, April 04, 2022'), 
  new Date('Tue, April 05, 2022'), 
  new Date('Wed, April 06, 2022'), 
  new Date('Thu, April 07, 2022')
];

// inputs do filtro por data
const startDateInput = document.getElementById('date-start');
const endDateInput = document.getElementById('date-end');

// Gráfico de controle de testes; não fará parte do resultado final
let exemData = [65, 59, 75, 81, 56, 55, 40];

const exemChart = new Chart(document.getElementById('exemple').getContext('2d'), {
  type: 'bar',
  data: {
    labels: dates,
    datasets: [{
      label: 'My First Dataset',
      data: exemData,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)'
      ],
      borderWidth: 1
    }]
  },
  options: {
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
        }
      },
      y: {
        beginAtZero: true
      }
    }
  },
});


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

function filterData() {

  // Pegando datas
  const startValueDate = new Date(`${startDateInput.value} 00:00:00`);
  const endValueDate = new Date(`${endDateInput.value} 00:00:00`);

  console.log(startValueDate);
  console.log(endValueDate);

  // Criando label com novo intervalo de datas
  const filterDates = dates.filter(date => date >= startValueDate && date <= endValueDate);
  exemChart.config.data.labels = filterDates;
  chartSleepDuration.config.data.labels = filterDates;
  chartSleepIntervals.config.data.labels = filterDates;
  chartSleepGoal.config.data.labels = filterDates;
  
  // modificando dados
  const dataStartArray = dates.indexOf(filterDates[0]);
  const dataEndArray = dates.indexOf(filterDates[filterDates.length - 1]);
  // console.log(dataEndArray)

  const dataPointsArray = [
    [...exemData], 
    [...sleepDurationData], 
    [...sleepIntervalsData], 
    [...goalPrcentData], 
    [...overflowPercentData]
  ];

  console.log(dataPointsArray);

  dataPointsArray.forEach((dataPoints) => {
    dataPoints.splice(dataEndArray + 1)
  });

  exemChart.update();
  chartSleepDuration.update();
  chartSleepIntervals.update();
  chartSleepGoal.update();
}
