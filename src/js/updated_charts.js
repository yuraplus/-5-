function updateChart(chart, labels, data, max) {
	chart.data.labels=labels;
	chart.data.datasets[0].data = data;
	chart.options.scales.y.max = max;
    chart.update();
}

// function updatelightBlue(chart, labels, data) {
// 	chart.data = {
// 		labels: labels,
//         datasets: [{
//             data: data,
//             fill: true,
//             backgroundColor: 'rgb(154,214,211)',
//             borderColor: 'rgb(246,246,246)',
//             tension: 0.4,
//             borderWidth: 3
//         }]
// 	};
// 	chart.options = {
// 		plugins: {
// 	    	legend: {
// 	    		display: false
// 	    	}
// 	    },
// 	    responsive: true,
// 	    radius: 0,
// 	    interaction: {
// 	      intersect: false,
// 	    },
// 	    scales: {
// 	      x: {
// 	        display: false,
// 	        title: {
// 	          display: true
// 	        }
// 	      },
// 	      y: {
// 	      	min: -1,
// 	        display: false,
// 	        title: {
// 	          display: true,
// 	        },
// 	      }
// 	    }
// 	}
// 	chart.update();
// }
// function updateviolet(chart, labels, data) {
// 	chart.data = {
// 		 labels: labels,
// 	        datasets: [{
// 	            data: data,
// 	            fill: true,
// 	            backgroundColor: 'rgb(171,165,234)',
// 	            borderColor: 'rgb(246,246,246)',
// 	            tension: 0.4,
// 	            borderWidth: 3
// 	        }]
// 	}
// 	chart.options = {
// 		plugins: {
// 	      legend: {
// 	        display: false
// 	      }
// 	    },
// 	    responsive: true,
// 	    radius: 0,
// 	    interaction: {
// 	      intersect: false,
// 	    },
// 	    scales: {
// 	      x: {
// 	        display: false,
// 	        title: {
// 	          display: true
// 	        }
// 	      },
// 	      y: {
// 	        min: -1,
// 	        display: false,
// 	        title: {
// 	          display: true,
// 	        },
// 	      }
// 	    }
// 	}
// 	chart.update();
// }
// function updateorange(chart, labels, data) {
// 	chart.data = {
// 		labels: labels,
//         datasets: [{
//             data: data,
//             fill: true,
//             backgroundColor: 'rgb(237,200,168)',
//             borderColor: 'rgb(246,246,246)',
//             tension: 0.4,
//             borderWidth: 3
//         }]
// 	}
// 	chart.options = {
// 		plugins: {
// 	      legend: {
// 	        display: false
// 	      }
// 	    },
// 	    responsive: true,
// 	    radius: 0,
// 	    interaction: {
// 	      intersect: false,
// 	    },
// 	    scales: {
// 	      x: {
// 	        display: false,
// 	        title: {
// 	          display: true
// 	        }
// 	      },
// 	      y: {
// 	        min: -1,
// 	        display: false,
// 	        title: {
// 	          display: true,
// 	        },
// 	      }
// 	    }
// 	}
// 	chart.update();
// }

// function updatepink(chart, labels, data) {
// 	chart.data = {
// 		labels: labels,
//         datasets: [{
//             data: data,
//             fill: true,
//             backgroundColor: 'rgb(234,173,216)',
//             borderColor: 'rgb(246,246,246)',
//             tension: 0.4,
//             borderWidth: 3
//         }]
// 	}
// 	chart.options = {
// 		plugins: {
// 	      legend: {
// 	        display: false
// 	      }
// 	    },
// 	    responsive: true,
// 	    radius: 0,
// 	    interaction: {
// 	      intersect: false,
// 	    },
// 	    scales: {
// 	      x: {
// 	        display: false,
// 	        title: {
// 	          display: true
// 	        }
// 	      },
// 	      y: {
// 	        min: -1,
// 	        display: false,
// 	        title: {
// 	          display: true,
// 	        },
// 	      }
// 	    }
// 	}
// 	chart.update();
// }

// function updateblue(chart, labels, data) {
// 	chart.data = {
// 		labels: labels,
//         datasets: [{
//             data: data,
//             fill: true,
//             backgroundColor: 'rgb(175,207,242)',
//             borderColor: 'rgb(246,246,246)',
//             tension: 0.4,
//             borderWidth: 3
//         }]
// 	}
// 	chart.options = {
// 		plugins: {
// 	      legend: {
// 	        display: false
// 	      }
// 	    },
// 	    responsive: true,
// 	    radius: 0,
// 	    interaction: {
// 	      intersect: false,
// 	    },
// 	    scales: {
// 	      x: {
// 	        display: false,
// 	        title: {
// 	          display: true
// 	        }
// 	      },
// 	      y: {
// 	        min: -1,
// 	        display: false,
// 	        title: {
// 	          display: true,
// 	        },
// 	      }
// 	    }
// 	}
// 	chart.update();
// }