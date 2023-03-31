const pie = {
  labels: [
    'English',
    'Mandarin',
    'Chinese Dialects',
    'Malay',
    'Tamil',
    'Others'
  ],
  datasets: [{
    label: 'Language Most Frequently Spoken at Home For Resident Population Aged 5 and Above',
    data: [48.3, 29.9, 8.7,9.2,2.5,1.4],
    backgroundColor: [
      'rgb(255, 205, 86)',
      'rgb(54, 162, 235)',
      'rgb(204, 230, 255)',
      'rgb(255, 99, 132)',
      'rgb(153, 255, 51)',
      'rgb(179, 179, 179)'
    ],
    hoverOffset: 4
  }]
};



new Chart("piechart", {
  type: 'pie',
  data: pie,
  options: {
    responsive: false
}
});

const pie2 = {
  labels: [
    'English',
    'Mandarin',
    'Chinese Dialects',
    'Malay',
    'Tamil',
    'Others'
  ],
  datasets: [{
    label: 'Language Most Frequently Spoken at Home For Resident Population Aged 5 and Above',
    data: [32.3, 35.6, 14.3, 12.2, 3.3, 2.3],
    backgroundColor: [
      'rgb(255, 205, 86)',
      'rgb(54, 162, 235)',
      'rgb(204, 230, 255)',
      'rgb(255, 99, 132)',
      'rgb(153, 255, 51)',
      'rgb(179, 179, 179)'
    ],
    hoverOffset: 4
  }]
};



new Chart ("piechart2", {
  type: 'pie',
  data: pie2,
  options: {
    responsive: false
}
});

var years = [1957,1980,1990,2000,2005,2010,2015,2020];
var english = [1.8,11.6,18.8,23.0,28.1,32.3,36.9,48.3];
var mandarin = [0.1,10.2,23.7,35.0,36.0,35.6,34.9,29.9];
var dialects = [74.4,59.5,39.6,23.8,18.2,14.3,12.2,8.7];
var malay = [13.5,13.9,14.3,14.1,13.2,12.2,10.7,9.2];
var tamil = [5.2,3.1,2.9,3.2,3.1,3.3,3.3,2.5];
var others = [5,1.7,0.7,0.9,1.4,2.3,2.0,1.4];

new Chart("myChart", {
    type: 'line',
    data: {
      labels: years,
      datasets: [
        { 
          data: english,
          label: "English",
          borderColor: 'rgb(255, 205, 86)',
          fill: false
        },
        { 
          data: mandarin,
          label: "Mandarin",
          borderColor: 'rgb(54, 162, 235)',
          fill: false
        },
        { 
          data: dialects,
          label: "Chinese Dialects",
          borderColor: 'rgb(204, 230, 255)',
          fill: false
        },
        { 
          data: malay,
          label: "Malay",
          borderColor: 'rgb(255, 99, 132)',
          fill: false
        },
        { 
          data: tamil,
          label: "Tamil",
          borderColor: 'rgb(153, 255, 51)',
          fill: false
        },
        { 
          data: others,
          label: "Others",
          borderColor: 'rgb(179, 179, 179)',
          fill: false
        }
      ]
    }
});


