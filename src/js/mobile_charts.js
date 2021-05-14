var mobile_chartRKctx = document.getElementById('mobile_chartRK').getContext('2d');
var mobile_chartRK = new Chart(mobile_chartRKctx, {
    type: 'line',
    data: {
        labels: labelarray,
        datasets: [{
            data: dataCpccount,
            fill: false,
            borderColor: 'rgb(246,246,246,1)',
            tension: 0.4,
            borderWidth: 3
        }]
    },
    options: {
    plugins: {
    	legend: {
    		display: false
    	}
    },
    responsive: true,
    radius: 0,
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        display: false,
        title: {
          display: true
        }
      },
      y: {
        min: -0.1,
        max: maxCpccount,
        display: false,
        title: {
          display: true,
        },
      }
    }
  }
});