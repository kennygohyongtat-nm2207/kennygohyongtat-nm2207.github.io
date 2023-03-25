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


