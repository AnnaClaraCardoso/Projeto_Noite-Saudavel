let dates = [
  new Date('Fri, April 01, 2022'), 
  new Date('Sat, April 02, 2022'), 
  new Date('Sun, April 03, 2022'), 
  new Date('Mon, April 04, 2022'), 
  new Date('Tue, April 05, 2022'), 
  new Date('Wed, April 06, 2022'), 
  new Date('Thu, April 07, 2022')
];

let exemData = [65, 59, 75, 81, 56, 55, 40];

const Data = {
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
};

const config = {
  type: 'bar',
  data: Data,
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
};

const exemCanvas = document.getElementById('exemple').getContext('2d');

const exemChart = new Chart(exemCanvas, config);


const today = new Date();
const dd = today.getDate();
const mm = today.getMonth() + 1; //January is 0!
const yyyy = today.getFullYear();

if (dd < 10) {
   dd = '0' + dd;
}

if (mm < 10) {
   mm = '0' + mm;
} 
    
today = yyyy + '-' + mm + '-' + dd;

const startDateInput = document.getElementById('date-start')
const endDateInput = document.getElementById('date-end')

startDateInput.setAttribute("max", today);
endDateInput.setAttribute("max", today);

function filterData(params) {
  const startValueDate = new Date(startDateInput.value);
  const endValueDate = new Date(endDateInput.value);

  
  console.log(start);
  console.log(end);
}

const canvasIDs = ["sleep-duration-chart", "sleep-intervals-chart", "sleep-goal-chart"];
const chartsArr = [];
canvasIDs.forEach(chartID => {
  chartsArr.push(document.getElementById(chartID).getContext('2d'));
});

// chartsArr.forEach(canvaContexts => {
//   console.log(canvaContexts)
// })

const chartSleepDuration = new Chart(chartsArr[0], {
    type: 'bar',
    data: {
      labels: dates,
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

const chartSleepIntervals = new Chart(chartsArr[1], {
    type: 'bar',
    data: {
      labels: dates,
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
const goalPrcentData = [50, 60, 80, 120, 80, 90, 140]
const overflowPercentData = []

const data = {
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
