
var myChart = new Chart("chart", {
    type: "bar",
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of hours per day',
            data: [12, 19, 3, 5, 2, 3],
            // borderWidth: 1,
            // borderColor: '#22cc22',
            backgroundColor: '#22cc22',
        }]
    },
    options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              max: 24
            }
          }]
        }
      }
});


function yes(){
  window.electronAPI.yes('Analiza',20,2,3);
  console.log("1")
}