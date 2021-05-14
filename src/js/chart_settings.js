var labelarray = [];
var dataSpent = [];
var dataCpf = [];
var dataSubs = [];
var dataCpc = [];
var dataCpccount = [];
var dataCtr = [];
var dataRk = [];
var aSpent = 0;
var aCpf = 0;
var aSubs = 0;
var aCpc = 0;
var aCpccount = 0;
var aCtr = 0;
var aRk = 0;
$.ajax({
  url: '../handlers/filter_day.php',
  method: 'post',
  data: {
      club: clubName,
    },
  async: false,
  success: function(json){
    var data = JSON.parse(json);
    for (var i = 0; i < data.length; i++) {
      labelarray.push(data[i].label);
      if (data[i].data.empty == 0) {
        dataSpent.push(0);
        dataCpf.push(0);
        dataSubs.push(0);
        dataRk.push(0);
        dataCtr.push(0);
        dataCpccount.push(0);
      } else {
        dataSpent.push(parseInt(data[i].data.spent));
        dataCpf.push(parseInt(data[i].data.cpf));
        dataSubs.push(parseInt(data[i].data.subs));
        dataCpc.push(parseInt(data[i].data.cpc));
        dataCpccount.push(parseInt(data[i].data.cpccount));
        dataCtr.push(parseInt(data[i].data.ctr));
        dataRk.push(parseInt(data[i].data.rk));
        aSpent = aSpent + parseInt(data[i].data.spent);
        aCpf = aCpf + parseInt(data[i].data.cpf);
        aSubs = aSubs + parseInt(data[i].data.subs);
        aCpc = aCpc + parseInt(data[i].data.cpc);
        aCpccount = aCpccount + parseInt(data[i].data.cpccount);
        aCtr = aCtr+ parseInt(data[i].data.ctr);
        aRk = aRk+ parseInt(data[i].data.rk);
      }
    }
    aSpent = Math.floor(aSpent/labelarray.length * 100) / 100  +"₽";
    aCpf = Math.floor(aCpf/labelarray.length * 100) / 100 + '₽';
    aSubs = Math.floor(aSubs/labelarray.length * 100) / 100 ;
    aRk = Math.floor(aRk/labelarray.length * 100) / 100;
    aCtr = Math.floor(aCtr/labelarray.length * 100) / 100;
    aCpccount = Math.floor(aCpccount/labelarray.length * 100) / 100;
    $('#chartRkAverage').html(aRk);
    $('#mobile_rk-average').html(aRk);
    $('#chartSpentAverage').html(aSpent);
    $('#mobile_spent-average').html(aSpent);
    $('#chartCpfAverage').html(aCpf);
    $('#mobile_cpf-average').html(aCpf);
    $('#chartSubsAverage').html(aSubs);
    $('#mobile_subs-average').html(aSubs);
    $('#chartCpccountAverage').html(aCpccount);
    $('#mobile_cpccount-average').html(aCpccount);
    $('#mobile_ctr-average').html(aCtr);
}
});
// var maxSpent = Math.max.apply(null, dataSpent)+5;
// var maxCpf = Math.max.apply(null, dataCpf)+5;
// var maxCpf = Math.max.apply(null, dataCpf)+5;
var maxCpccount = Math.max.apply(null, dataCpccount)+0.2*Math.max.apply(null, dataCpccount);
var maxSpent = Math.max.apply(null, dataSpent)+0.2*Math.max.apply(null, dataSpent);
var maxCpf = Math.max.apply(null, dataCpf)+0.2*Math.max.apply(null, dataCpf);
var maxRk = Math.max.apply(null, dataRk)+0.2*Math.max.apply(null, dataRk);
var maxSubs = Math.max.apply(null, dataSubs)+0.2*Math.max.apply(null, dataSubs);
var maxCpc = Math.max.apply(null, dataCpc)+0.2*Math.max.apply(null, dataCpc);
var maxCtr = Math.max.apply(null, dataCtr)+0.2*Math.max.apply(null, dataCtr);
var lightBluectx = document.getElementById('lightBlue').getContext('2d');
var lightBlue = new Chart(lightBluectx, {
    type: 'line',
    data: {
        labels: labelarray,
        datasets: [{
            data: dataRk,
            fill: true,
            backgroundColor: 'rgb(154,214,211)',
            borderColor: 'rgb(246,246,246)',
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
        min: -1,
        max: maxRk,
        display: false,
        title: {
          display: true,
        },
      }
    }
  }
});

var violetctx = document.getElementById('violet').getContext('2d');
var violet = new Chart(violetctx, {
    type: 'line',
    data: {
        labels: labelarray,
        datasets: [{
            data: dataSpent,
            fill: true,
            backgroundColor: 'rgb(171,165,234)',
            borderColor: 'rgb(246,246,246)',
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
        min: -1,
        max: maxSpent,
        display: false,
        title: {
          display: true,
        },
      }
    }
  }
});

var orangectx = document.getElementById('orange').getContext('2d');
var orange = new Chart(orangectx, {
    type: 'line',
    data: {
        labels: labelarray,
        datasets: [{
            data: dataCpf,
            fill: true,
            backgroundColor: 'rgb(237,200,168)',
            borderColor: 'rgb(246,246,246)',
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
        max: maxCpf,
        min: -1,
        display: false,
        title: {
          display: true,
        },
      }
    }
  }
});

var pinkctx = document.getElementById('pink').getContext('2d');
var pink = new Chart(pinkctx, {
    type: 'line',
    data: {
        labels: labelarray,
        datasets: [{
            data: dataSubs,
            fill: true,
            backgroundColor: 'rgb(234,173,216)',
            borderColor: 'rgb(246,246,246)',
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
        min: -1,
        max: maxSubs,
        display: false,
        title: {
          display: true,
        },
      }
    }
  }
});

var bluectx = document.getElementById('blue').getContext('2d');
var blue = new Chart(bluectx, {
    type: 'line',
    data: {
        labels: labelarray,
        datasets: [{
            data: dataCpccount,
            fill: true,
            backgroundColor: 'rgb(175,207,242)',
            borderColor: 'rgb(246,246,246)',
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
        min: -1,
        max: maxCpccount,
        display: false,
        title: {
          display: true,
        },
      }
    }
  }
});
var bigChartctx = document.getElementById('bigChart').getContext('2d');
var bigChart = new Chart(bigChartctx, {
    type: 'line',
    data: {
        labels: labelarray,
        datasets: [{
            data: dataSubs,
            fill: false,
            backgroundColor: 'rgb(253,181,118)',
            borderColor: 'rgb(253,181,118)',
            borderWidth: 3
        }]
    },
    options: {
      layout: {
      },
    plugins: {
      legend: {
        display: false
      }
    },
    responsive: true,
    radius: 5,
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        display: true,
        grid: {
          color: '#383838',
          lineWidth: 2,
        },
        ticks: {
          color: '#A6A7A9',
          font: {
            family: 'Montserrat Alternates',
            size: '13px',
            weight: '500',
            padding: 25,
          } 
        },
      },
      y: {
        min: 0,
        max: maxSubs,
        display: true,
        grid: {
          color: '#2A2E32',
          lineWidth: 2,
        },
        ticks: {
          color: '#A6A7A9',
          font: {
            family: 'Montserrat Alternates',
            size: '13px',
            weight: '500',
            padding: 25,
          } 
        },
      }
    }
  }
});
 
 
var mobile_chartRKctx = document.getElementById('mobile_chartRK').getContext('2d');
var mobile_chartRK = new Chart(mobile_chartRKctx, {
    type: 'line',
    data: {
        labels: labelarray,
        datasets: [{
            data: dataRk,
            fill: false,
            backgroundColor: 'rgb(154,214,211)',
            borderColor: 'rgb(246,246,246)',
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
        min: -1,
        max: maxRk,
        display: false,
        title: {
          display: true,
        },
      }
    }
  }
});
  
var mobile_chartSpentctx = document.getElementById('mobile_chartSpent').getContext('2d');
var mobile_chartSpent = new Chart(mobile_chartSpentctx, {
    type: 'line',
    data: {
        labels: labelarray,
        datasets: [{
            data: dataSpent,
            fill: false,
            backgroundColor: 'rgb(154,214,211)',
            borderColor: 'rgb(246,246,246)',
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
        min: -1,
        display: false,
        title: {
          display: true,
        },
      }
    }
  }
});


var mobile_chartCpfctx = document.getElementById('mobile_chartCpf').getContext('2d');
var mobile_chartCpf = new Chart(mobile_chartCpfctx, {
    type: 'line',
    data: {
        labels: labelarray,
        datasets: [{
            data: dataCpf,
            fill: false,
            backgroundColor: 'rgb(154,214,211)',
            borderColor: 'rgb(246,246,246)',
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
        min: -1,
        display: false,
        title: {
          display: true,
        },
      }
    }
  }
});

var mobile_chartSubsctx = document.getElementById('mobile_chartSubs').getContext('2d');
var mobile_chartSubs = new Chart(mobile_chartSubsctx, {
    type: 'line',
    data: {
        labels: labelarray,
        datasets: [{
            data: dataSpent,
            fill: false,
            backgroundColor: 'rgb(154,214,211)',
            borderColor: 'rgb(246,246,246)',
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
        min: -1,
        display: false,
        title: {
          display: true,
        },
      }
    }
  }
});

var mobile_chartCpccountctx = document.getElementById('mobile_chartCpccount').getContext('2d');
var mobile_chartCpccount = new Chart(mobile_chartCpccountctx, {
    type: 'line',
    data: {
        labels: labelarray,
        datasets: [{
            data: dataCpccount,
            fill: false,
            backgroundColor: 'rgb(154,214,211)',
            borderColor: 'rgb(246,246,246)',
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
        min: -1,
        display: false,
        title: {
          display: true,
        },
      }
    }
  }
});

var mobile_chartCtrctx = document.getElementById('mobile_chartCtr').getContext('2d');
var mobile_chartCtr = new Chart(mobile_chartCtrctx, {
    type: 'line',
    data: {
        labels: labelarray,
        datasets: [{
            data: dataCtr,
            fill: false,
            backgroundColor: 'rgb(154,214,211)',
            borderColor: 'rgb(246,246,246)',
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
        min: -1,
        display: false,
        title: {
          display: true,
        },
      }
    }
  }
});


var mobile_chartBigctx = document.getElementById('mobile_chartBig').getContext('2d');
var mobile_chartBig = new Chart(mobile_chartBigctx, {
    type: 'line',
    data: {
        labels: labelarray,
        datasets: [{
            data: dataSubs,
            fill: false,
            backgroundColor: 'rgb(253,181,118)',
            borderColor: 'rgb(253,181,118)',
            borderWidth: 3
        }]
    },
    options: {
      layout: {
      },
    plugins: {
      legend: {
        display: false
      }
    },
    responsive: true,
    radius: 2,
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        display: true,
        grid: {
          color: '#383838',
          lineWidth: 2,
        },
        ticks: {
          color: '#A6A7A9',
          font: {
            family: 'Montserrat Alternates',
            size: '8px',
            weight: '500',
            padding: 25,
          } 
        },
      },
      y: {
        min: -1,
        max: maxSubs,
        display: true,
        grid: {
          color: '#2A2E32',
          lineWidth: 2,
        },
        ticks: {
          color: '#A6A7A9',
          font: {
            family: 'Montserrat Alternates',
            size: '13px',
            weight: '500',
            padding: 25,
          } 
        },
      }
    }
  }
});