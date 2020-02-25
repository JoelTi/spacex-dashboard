
function myLineChart() {
let myLineChart = document.getElementById('myLineChart').getContext('2d');

// Global Options
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 10;
Chart.defaults.global.defaultFontColor = '#777';

let massPopChart = new Chart(myLineChart, {
  type:'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data:{
    labels:['0', '10', '20', '30', '40', '50', '60'],
    datasets:[{
      data:[
        15.2,
        24.7,
        16.8,
        23.9,
        24.2,
        34.0,
        37.5
      ],
      backgroundColor:'rgba(0,0,0,0)',
      pointBackgroundColor: 'white',
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#7764E4',
      borderWidth: 3.5,
      borderColor:'#7764E4',
    }]
  },
  options:{
    aspectRatio: 1, //pas deze aan voor de verhouding
    responsive: true,
    title:{
      display:false
    },
    label:{
      display:false
    },
    legend:{
      display:false,
    },
    tooltips:{
      enabled:true,
      xPadding: 20,
      yPadding: 10,
    },
    scales: {
      xAxes: [{
        ticks: {
          fontSize: 8,
          fontColor: '#8898AA',
        },
        gridLines: {
          display:false
        },
        scaleLabel: {
          display: true,
          labelString: '(x1000km)',
          fontSize: 9,
        }
      }],
      yAxes: [{
        gridLines: {
          display: true,
          borderDash: [8, 10],
          color: "#ddd"
        },
        ticks: {
          beginAtZero: true,
          max: 40,
          min: 0,
          stepSize: 10,
          fontSize: 8,
          fontColor: '#8898AA',
          callback: function(value, index, values) {
            return value + " °C     ";
          },
        }
      }]
    }
  }
});
}


function myBarChart() {
let myBarChart = document.getElementById('myBarChart').getContext('2d');

// Global Options
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 10;
Chart.defaults.global.defaultFontColor = '#777';

let massPopChart = new Chart(myBarChart, {
  type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data:{
    labels:['0', '10', '20', '30', '40', '50', '60'],
    datasets:[{
      data:[
        28.5,
        12.9,
        10.3,
        9.2,
        8.6,
        7.9,
        5.1
      ],
      backgroundColor:'#FB6340',
      pointBackgroundColor: 'white',
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#FB6340',
      borderWidth: 3.5,
      borderColor:'#FB6340',
    }]
  },
  options:{
    aspectRatio: 1, //pas deze aan voor de verhouding
    responsive: true,
    title:{
      display:false
    },
    label:{
      display:false
    },
    legend:{
      display:false,
    },
    tooltips:{
      enabled:true,
      xPadding: 20,
      yPadding: 10
    },
    scales: {
      xAxes: [{
        barThickness: 7,
        gridLines: {
        display:false,
        },
        scaleLabel: {
          display: true,
          labelString: '(x1000km)',
          fontSize: 9,
        }
      }],
      yAxes: [{
        ticks: {
          fontSize: 8,
          fontColor: '#8898AA',
        },
        gridLines: {
          borderDash: [8, 10],
          color: "#ddd"
        },
        ticks: {
            beginAtZero: true,
            max: 30,
            min: 0,
            stepSize: 10,
            fontSize: 8,
            callback: function(value, index, values) {
                  return value + " L     ";
            }
        }
      }]
    }
  }
});
}

function myPieChart() {
  let myPieChart = document.getElementById('myPieChart').getContext('2d');

  // Global Options
  Chart.defaults.global.defaultFontFamily = 'Lato';
  Chart.defaults.global.defaultFontSize = 10;
  Chart.defaults.global.defaultFontColor = '#777';

  let massPopChart = new Chart(myPieChart, {
    type:'polarArea', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data:{
      labels:['Uranus', 'Mars', 'Saturnus', 'Maan', 'Neptunus', 'Aarde'],
      datasets:[{
        backgroundColor: ['#F53C56', '#11CDEF', '#7764E4', '#FEB969', '#2DCE98', '#FB6340'],
        data:[
          8.87,
          3.71,
          10.44,
          1.62,
          11.15,
          9.78,

        ],
        borderWidth: 0,
      }]
    },
    options:{
      layout: {
            padding: {
                left: 0,
                right: 0,
                top: 10,
                bottom: 10
            }
        },
      responsive: true,
      title:{
        display:false
      },
      label:{
        display:false
      },
      legend:{
        display:false,
        position: 'top',
        align: 'start',
        labels: {
          boxWidth: 40,
          align: 'start',
        },
      },
      tooltips:{
        enabled:true,
        xPadding: 20,
        yPadding: 10
      },
      scales: {
        xAxes: [{
          display: false,
        }],
        yAxes: [{
            display: false,
        }]
      }
    }
  });
}

function myScatterChart() {
let myScatterChart = document.getElementById('myScatterChart').getContext('2d');

// Global Options
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 10;
Chart.defaults.global.defaultFontColor = '#777';

let massPopChart = new Chart(myScatterChart, {
  type:'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data:{
    labels:['0', '10', '20', '30', '40', '50', '60'],
    datasets:[{
      data:[
        0,
        2960,
        3137,
        3835,
        4117,
        4368,
        4023
      ],
      backgroundColor:'#F53C56',
      pointBackgroundColor: '#F53C56',
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#F53C56',
      borderWidth: 5,
      borderColor:'#F53C56',
    }]
  },
  options:{
    aspectRatio: 1, //pas deze aan voor de verhouding
    responsive: true,
    showLines: false,
    title:{
      display:false
    },
    label:{
      display:false
    },
    legend:{
      display:false,
    },
    tooltips:{
      enabled:true,
      xPadding: 20,
      yPadding: 10
    },
    scales: {
      xAxes: [{
        ticks: {
          fontSize: 8,
          fontColor: '#8898AA',
        },
        gridLines: {
          display:false
        },
        scaleLabel: {
          display: true,
          labelString: '(x1000km)',
          fontSize: 9,
        }
      }],
      yAxes: [{
        gridLines: {
          borderDash: [8, 10],
          color: "#ddd"
        },
        ticks: {
            beginAtZero: true,
            max: 5000,
            min: 0,
            stepSize: 1000,
            fontSize: 8,
            callback: function(value, index, values) {
                  return value + " kmh    ";
            }
        }
      }]
    }
  }
});
}

function countdownDate() {
// Set the date we're counting down to
var countDownDate = new Date("Jan 10, 2021 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var seconds = Math.floor((distance % (1000 * 60 * 60 * 60)) / 1000);

  document.getElementById("demo").innerHTML = seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "GELANCEERD!";
  }
}, 1000);
}

function myStatusChartOne() {
  let myStatusChartOne = document.getElementById('myStatusChartOne').getContext('2d');

  // Global Options
  Chart.defaults.global.defaultFontFamily = 'Lato';
  Chart.defaults.global.defaultFontSize = 10;
  Chart.defaults.global.defaultFontColor = '#777';

  let massPopChart = new Chart(myStatusChartOne, {
    type: 'pie',
data: {
    datasets: [{
        label: 'Voedselvoorraad',
        data: [65, 10],
        backgroundColor: ['#2DCE98', '#eee'],
        hoverBackgroundColor: ['#2DCE98', '#eee'],
        borderWidth: 0,
    }],
    },
    options:{
      aspectRatio: 1, //pas deze aan voor de verhouding
      cutoutPercentage: 90,
      responsive: true,
      title:{
        display:true,
        position: 'top',
        text: 'Voedselvoorraad',
        ypadding: 20,
        ypadding: 0,
        fontSize: 10,
      },
      label:{
        display:false
      },
      legend:{
        display:false,
      },
      tooltips:{
        enabled:false,
      },
      scales: {
        xAxes: [{
          display: false,
        }],
        yAxes: [{
          display: false,
        }]
      }
    }
  });
}

function myStatusChartTwo() {
  let myStatusChartTwo = document.getElementById('myStatusChartTwo').getContext('2d');

  // Global Options
  Chart.defaults.global.defaultFontFamily = 'Lato';
  Chart.defaults.global.defaultFontSize = 10;
  Chart.defaults.global.defaultFontColor = '#777';

  let massPopChart = new Chart(myStatusChartTwo, {
    type: 'pie',
data: {
    datasets: [{
        label: 'Watervoorraad',
        data: [15, 10],
        backgroundColor: ['#11CDEF', '#eee'],
        hoverBackgroundColor: ['#11CDEF', '#eee'],
        borderWidth: 0,
    }],
    },
    options:{
      aspectRatio: 1, //pas deze aan voor de verhouding
      cutoutPercentage: 90,
      responsive: true,
      title:{
        display:true,
        position: 'top',
        text: 'Watervoorraad',
        ypadding: 20,
        ypadding: 0,
        fontSize: 10,
      },
      label:{
        display:false
      },
      legend:{
        display:false,
      },
      tooltips:{
        enabled:false,
      },
      scales: {
        xAxes: [{
          display: false,
        }],
        yAxes: [{
          display: false,
        }]
      }
    }
  });
}



window.onload = function() {
  countdownDate();
  myLineChart();
  myBarChart();
  myPieChart();
  myScatterChart();
  myStatusChartOne();
  myStatusChartTwo();
}
