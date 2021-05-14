function requestDay() {
  $.ajax({
  url: '../handlers/filter_day.php',
  method: 'post',
  async: false,
   data: {
      club: clubName,
    },
  success: function(json){
    var data = JSON.parse(json);
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
    for (var i = 0; i < data.length; i++) {
      labelarray.push(data[i].label);
      if (data[i].data.empty == 0) {
        dataSpent.push(0);
        dataCpf.push(0);
        dataSubs.push(0);
        dataCpc.push(0);
        dataCpccount.push(0);
        dataRk.push(0);
        dataCtr.push(0);
      } else {
        if (data[i].data == '') {
          dataSpent.push(0);
          dataCpf.push(0);
          dataSubs.push(0);
          dataCpc.push(0);
          dataCpccount.push(0);
          dataRk.push(0);
          dataCtr.push(0);
        } else {
          dataSpent.push(parseInt(data[i].data.spent));
          dataCpf.push(parseInt(data[i].data.cpf));
          dataSubs.push(parseInt(data[i].data.subs));
          dataCpc.push(parseInt(data[i].data.cpc));
          dataCpccount.push(parseInt(data[i].data.cpccount));
          dataCtr.push(parseInt(data[i].data.ctr));
          dataRk.push(parseInt(data[i].data.rk));aSpent = aSpent + parseInt(data[i].data.spent);
          aCpf = aCpf + parseInt(data[i].data.cpf);
          aSubs = aSubs + parseInt(data[i].data.subs);
          aCpc = aCpc + parseInt(data[i].data.cpc);
          aCpccount = aCpccount + parseInt(data[i].data.cpccount);
          aCtr = aCtr+ parseInt(data[i].data.ctr);
          aRk = aRk+ parseInt(data[i].data.rk);
          aSpent = aSpent + parseInt(data[i].data.spent);
        }
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
    if (bigChartType == 'subs') {
              updateChart(bigChart, labelarray, dataSubs);
    } 
      if (bigChartType == 'rk') {
              updateChart(bigChart, labelarray, dataRk);
      } 
        if (bigChartType == 'budget') {
              updateChart(bigChart, labelarray, dataSpent);
        } 
          if (bigChartType == 'cpf') {
              updateChart(bigChart, labelarray, dataCpf);
          } 
            if (bigChartType == 'cpc') {
              updateChart(bigChart, labelarray, dataCpc);
            } 
              if (bigChartType == 'ctr') {
                updateChart(bigChart, labelarray, dataCtr);
              } 
    var maxCpccount = Math.max.apply(null, dataCpccount)+0.2*Math.max.apply(null, dataCpccount);
    var maxSpent = Math.max.apply(null, dataSpent)+0.2*Math.max.apply(null, dataSpent);
    var maxCpf = Math.max.apply(null, dataCpf)+0.2*Math.max.apply(null, dataCpf);
    var maxRk = Math.max.apply(null, dataRk)+0.2*Math.max.apply(null, dataRk);
    var maxSubs = Math.max.apply(null, dataSubs)+0.2*Math.max.apply(null, dataSubs);
    var maxCpc = Math.max.apply(null, dataCpc)+0.2*Math.max.apply(null, dataCpc);
    var maxCtr = Math.max.apply(null, dataCtr)+0.2*Math.max.apply(null, dataCtr);
    updateChart(lightBlue, labelarray, dataRk, maxRk);
    updateChart(mobile_chartRK, labelarray, dataRk, maxRk);
    updateChart(violet, labelarray, dataSpent, maxSpent);
    updateChart(mobile_chartSpent, labelarray, dataSpent, maxSpent);
    updateChart(orange, labelarray, dataCpf, maxCpf);
    updateChart(mobile_chartCpf, labelarray, dataCpf, maxCpf);
    updateChart(pink, labelarray, dataSubs, maxSubs);
    updateChart(mobile_chartSubs, labelarray, dataSubs, maxSubs);
    updateChart(blue, labelarray, dataCpccount, maxCpccount);
    updateChart(mobile_chartCpccount, labelarray, dataCpccount, maxCpccount);
    updateChart(mobile_chartCtr, labelarray, dataCtr, maxCtr);
}
});
}
function requestWeek() {
$.ajax({
  url: '../handlers/filter_week.php',
  method: 'post',
  data: {
      club: clubName,
    },
  success: function(json){
    var data = JSON.parse(json);
    var labelarray = [];
    var dataSpent = [];
    var dataCpf = [];
    var dataSubs = [];
    var dataCpc = [];
    var dataCpccount = [];
    var dataCtr = [];
    var dataRk = [];
    var aCpf = 0;
    var aSubs = 0;
    var aCpc = 0;
    var aCpccount = 0;
    var aCtr = 0;
    var aRk = 0;
    var aSpent = 0;
    for (var i = 0; i < data.length; i++) {
      labelarray.push(data[i].label);
      if (data[i].data.empty == 0) {
        dataSpent.push(0);
        dataCpf.push(0);
        dataSubs.push(0);
        dataCpc.push(0);
        dataCpccount.push(0);
        dataRk.push(0);
        dataCtr.push(0);
      } else {
        dataSpent.push(parseInt(data[i].data.spent));
        dataCpf.push(parseInt(data[i].data.cpf));
        dataSubs.push(parseInt(data[i].data.subs));
        dataCpc.push(parseInt(data[i].data.cpc));
        dataCpccount.push(parseInt(data[i].data.cpccount));
        dataCtr.push(parseInt(data[i].data.ctr));
        dataRk.push(parseInt(data[i].data.rk));
        aCpf = aCpf + parseInt(data[i].data.cpf);
        aSubs = aSubs + parseInt(data[i].data.subs);
        aCpc = aCpc + parseInt(data[i].data.cpc);
        aCpccount = aCpccount + parseInt(data[i].data.cpccount);
        aCtr = aCtr+ parseInt(data[i].data.ctr);
        aRk = aRk+ parseInt(data[i].data.rk);
        aSpent = aSpent + parseInt(data[i].data.spent);
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
 if (bigChartType == 'subs') {
              updateChart(bigChart, labelarray, dataSubs);
    } 
      if (bigChartType == 'rk') {
              updateChart(bigChart, labelarray, dataCpccount);
      } 
        if (bigChartType == 'budget') {
              updateChart(bigChart, labelarray, dataSpent);
        } 
          if (bigChartType == 'cpf') {
              updateChart(bigChart, labelarray, dataCpf);
          } 
            if (bigChartType == 'cpc') {
              updateChart(bigChart, labelarray, dataCpc);
            } 
            if (bigChartType == 'ctr') {
                updateChart(bigChart, labelarray, dataCtr);
              } 
    var maxCpccount = Math.max.apply(null, dataCpccount)+0.2*Math.max.apply(null, dataCpccount);
    var maxSpent = Math.max.apply(null, dataSpent)+0.2*Math.max.apply(null, dataSpent);
    var maxCpf = Math.max.apply(null, dataCpf)+0.2*Math.max.apply(null, dataCpf);
    var maxRk = Math.max.apply(null, dataRk)+0.2*Math.max.apply(null, dataRk);
    var maxSubs = Math.max.apply(null, dataSubs)+0.2*Math.max.apply(null, dataSubs);
    var maxCpc = Math.max.apply(null, dataCpc)+0.2*Math.max.apply(null, dataCpc);
    var maxCtr = Math.max.apply(null, dataCtr)+0.2*Math.max.apply(null, dataCtr);
    updateChart(lightBlue, labelarray, dataRk, maxRk);
    updateChart(mobile_chartRK, labelarray, dataRk, maxRk);
    updateChart(violet, labelarray, dataSpent, maxSpent);
    updateChart(mobile_chartSpent, labelarray, dataSpent, maxSpent);
    updateChart(orange, labelarray, dataCpf, maxCpf);
    updateChart(mobile_chartCpf, labelarray, dataCpf, maxCpf);
    updateChart(pink, labelarray, dataSubs, maxSubs);
    updateChart(mobile_chartSubs, labelarray, dataSubs, maxSubs);
    updateChart(blue, labelarray, dataCpccount, maxCpccount);
    updateChart(mobile_chartCpccount, labelarray, dataCpccount, maxCpccount);
    updateChart(mobile_chartCtr, labelarray, dataCtr, maxCtr);
}
});
};
function requestMonth() {
$.ajax({
  url: '../handlers/filter_month.php',
  method: 'post',
   data: {
      club: clubName,
    },
  success: function(json){
    var data = JSON.parse(json);
    var labelarray = [];
    var dataSpent = [];
    var dataCpf = [];
    var dataSubs = [];
    var dataCpc = [];
    var dataCpccount = [];
    var dataCtr = [];
    var dataRk = [];
    var aCpf = 0;
    var aSubs = 0;
    var aCpc = 0;
    var aCpccount = 0;
    var aCtr = 0;
    var aSpent = 0;
    var aRk = 0;
    for (var i = 0; i < data.length; i++) {
      labelarray.push(data[i].label);
      if (data[i].data.empty == 0) {
        dataSpent.push(0);
        dataCpf.push(0);
        dataSubs.push(0);
        dataCpc.push(0);
        dataCpccount.push(0);
        dataRk.push(0);
        dataCtr.push(0);
      } else {
        dataSpent.push(parseInt(data[i].data.spent));
        dataCpf.push(parseInt(data[i].data.cpf));
        dataSubs.push(parseInt(data[i].data.subs));
        dataCpc.push(parseInt(data[i].data.cpc));
        dataCpccount.push(parseInt(data[i].data.cpccount));
        dataCtr.push(parseInt(data[i].data.ctr));
        dataRk.push(parseInt(data[i].data.rk));
        aCpf = aCpf + parseInt(data[i].data.cpf);
        aSubs = aSubs + parseInt(data[i].data.subs);
        aCpc = aCpc + parseInt(data[i].data.cpc);
        aCpccount = aCpccount + parseInt(data[i].data.cpccount);
        aCtr = aCtr+ parseInt(data[i].data.ctr);
        aRk = aRk+ parseInt(data[i].data.rk);
        aSpent = aSpent + parseInt(data[i].data.spent);
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
	 if (bigChartType == 'subs') {
              updateChart(bigChart, labelarray, dataSubs);
    } 
      if (bigChartType == 'rk') {
              updateChart(bigChart, labelarray, dataCpccount);
      } 
        if (bigChartType == 'budget') {
              updateChart(bigChart, labelarray, dataSpent);
        } 
          if (bigChartType == 'cpf') {
              updateChart(bigChart, labelarray, dataCpf);
          } 
            if (bigChartType == 'cpc') {
              updateChart(bigChart, labelarray, dataCpc);
            }
            if (bigChartType == 'ctr') {
                updateChart(bigChart, labelarray, dataCtr);
              }  
    var maxCpccount = Math.max.apply(null, dataCpccount)+0.2*Math.max.apply(null, dataCpccount);
    var maxSpent = Math.max.apply(null, dataSpent)+0.2*Math.max.apply(null, dataSpent);
    var maxCpf = Math.max.apply(null, dataCpf)+0.2*Math.max.apply(null, dataCpf);
    var maxRk = Math.max.apply(null, dataRk)+0.2*Math.max.apply(null, dataRk);
    var maxSubs = Math.max.apply(null, dataSubs)+0.2*Math.max.apply(null, dataSubs);
    var maxCpc = Math.max.apply(null, dataCpc)+0.2*Math.max.apply(null, dataCpc);
    var maxCtr = Math.max.apply(null, dataCtr)+0.2*Math.max.apply(null, dataCtr);
    updateChart(lightBlue, labelarray, dataRk, maxRk);
    updateChart(mobile_chartRK, labelarray, dataRk, maxRk);
    updateChart(violet, labelarray, dataSpent, maxSpent);
    updateChart(mobile_chartSpent, labelarray, dataSpent, maxSpent);
    updateChart(orange, labelarray, dataCpf, maxCpf);
    updateChart(mobile_chartCpf, labelarray, dataCpf, maxCpf);
    updateChart(pink, labelarray, dataSubs, maxSubs);
    updateChart(mobile_chartSubs, labelarray, dataSubs, maxSubs);
    updateChart(blue, labelarray, dataCpccount, maxCpccount);
    updateChart(mobile_chartCpccount, labelarray, dataCpccount, maxCpccount);
    updateChart(mobile_chartCtr, labelarray, dataCtr, maxCtr);
}
});
};

function request6Months() {
$.ajax({
  url: '../handlers/filter_6months.php',
  method: 'post',
   data: {
      club: clubName,
    },
  success: function(json){
    var data = JSON.parse(json);
    var labelarray = [];
    var dataSpent = [];
    var dataCpf = [];
    var dataSubs = [];
    var dataCpc = [];
    var dataCtr = [];
    var dataRk = [];
    var aCpf = 0;
    var aSubs = 0;
    var aCpc = 0;
    var aCpccount = 0;
    var aCtr = 0;
    var aRk = 0;
    var aSpent = 0;
    var dataCpccount = [];
    for (var i = 0; i < data.length; i++) {
      labelarray.push(data[i].label);
      if (data[i].data.empty == 0) {
        dataSpent.push(0);
        dataCpf.push(0);
        dataSubs.push(0);
        dataCpc.push(0);
        dataCpccount.push(0);
        dataRk.push(0);
        dataCtr.push(0);
      } else {
        dataSpent.push(parseInt(data[i].data.spent));
        dataCpf.push(parseInt(data[i].data.cpf));
        dataSubs.push(parseInt(data[i].data.subs));
        dataCpc.push(parseInt(data[i].data.cpc));
        dataCpccount.push(parseInt(data[i].data.cpccount));
        dataCtr.push(parseInt(data[i].data.ctr));
        dataRk.push(parseInt(data[i].data.rk));
        aCpf = aCpf + parseInt(data[i].data.cpf);
        aSubs = aSubs + parseInt(data[i].data.subs);
        aCpc = aCpc + parseInt(data[i].data.cpc);
        aCpccount = aCpccount + parseInt(data[i].data.cpccount);
        aCtr = aCtr+ parseInt(data[i].data.ctr);
        aRk = aRk+ parseInt(data[i].data.rk);
        aSpent = aSpent + parseInt(data[i].data.spent);
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
   if (bigChartType == 'subs') {
              updateChart(bigChart, labelarray, dataSubs);
    } 
      if (bigChartType == 'rk') {
              updateChart(bigChart, labelarray, dataCpccount);
      } 
        if (bigChartType == 'budget') {
              updateChart(bigChart, labelarray, dataSpent);
        } 
          if (bigChartType == 'cpf') {
              updateChart(bigChart, labelarray, dataCpf);
          } 
            if (bigChartType == 'cpc') {
              updateChart(bigChart, labelarray, dataCpc);
            } 
            if (bigChartType == 'ctr') {
                updateChart(bigChart, labelarray, dataCtr);
              } 
    var maxCpccount = Math.max.apply(null, dataCpccount)+0.2*Math.max.apply(null, dataCpccount);
    var maxSpent = Math.max.apply(null, dataSpent)+0.2*Math.max.apply(null, dataSpent);
    var maxCpf = Math.max.apply(null, dataCpf)+0.2*Math.max.apply(null, dataCpf);
    var maxRk = Math.max.apply(null, dataRk)+0.2*Math.max.apply(null, dataRk);
    var maxSubs = Math.max.apply(null, dataSubs)+0.2*Math.max.apply(null, dataSubs);
    var maxCpc = Math.max.apply(null, dataCpc)+0.2*Math.max.apply(null, dataCpc);
    var maxCtr = Math.max.apply(null, dataCtr)+0.2*Math.max.apply(null, dataCtr);
    updateChart(lightBlue, labelarray, dataRk, maxRk);
    updateChart(mobile_chartRK, labelarray, dataRk, maxRk);
    updateChart(violet, labelarray, dataSpent, maxSpent);
    updateChart(mobile_chartSpent, labelarray, dataSpent, maxSpent);
    updateChart(orange, labelarray, dataCpf, maxCpf);
    updateChart(mobile_chartCpf, labelarray, dataCpf, maxCpf);
    updateChart(pink, labelarray, dataSubs, maxSubs);
    updateChart(mobile_chartSubs, labelarray, dataSubs, maxSubs);
    updateChart(blue, labelarray, dataCpccount, maxCpccount);
    updateChart(mobile_chartCpccount, labelarray, dataCpccount, maxCpccount);
    updateChart(mobile_chartCtr, labelarray, dataCtr, maxCtr);
}
});
};

function requestYear() {
$.ajax({
  url: '../handlers/filter_12months.php',
  method: 'post',
   data: {
      club: clubName,
    },
  success: function(json){
    var data = JSON.parse(json);
    var labelarray = [];
    var dataSpent = [];
    var dataCpf = [];
    var dataSubs = [];
    var dataCpc = [];
    var dataCpccount = [];
    var dataCtr = [];
    var aCpf = 0;
    var aSubs = 0;
    var aCpc = 0;
    var aCpccount = 0;
    var aCtr = 0;
    var aRk = 0;
    var aSpent = 0;
    var dataRk = [];
    for (var i = 0; i < data.length; i++) {
      labelarray.push(data[i].label);
      if (data[i].data.empty == 0) {
        dataSpent.push(0);
        dataCpf.push(0);
        dataSubs.push(0);
        dataCpc.push(0);
        dataCpccount.push(0);
        dataRk.push(0);
        dataCtr.push(0);
      } else {
        dataSpent.push(parseInt(data[i].data.spent));
        dataCpf.push(parseInt(data[i].data.cpf));
        dataSubs.push(parseInt(data[i].data.subs));
        dataCpc.push(parseInt(data[i].data.cpc));
        dataCpccount.push(parseInt(data[i].data.cpccount));
        dataCtr.push(parseInt(data[i].data.ctr));
        dataRk.push(parseInt(data[i].data.rk));
        aCpf = aCpf + parseInt(data[i].data.cpf);
        aSubs = aSubs + parseInt(data[i].data.subs);
        aCpc = aCpc + parseInt(data[i].data.cpc);
        aCpccount = aCpccount + parseInt(data[i].data.cpccount);
        aCtr = aCtr+ parseInt(data[i].data.ctr);
        aRk = aRk+ parseInt(data[i].data.rk);
        aSpent = aSpent + parseInt(data[i].data.spent);
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
     if (bigChartType == 'subs') {
              updateChart(bigChart, labelarray, dataSubs);
    } 
      if (bigChartType == 'rk') {
              updateChart(bigChart, labelarray, dataCpccount);
      } 
        if (bigChartType == 'budget') {
              updateChart(bigChart, labelarray, dataSpent);
        } 
          if (bigChartType == 'cpf') {
              updateChart(bigChart, labelarray, dataCpf);
          } 
            if (bigChartType == 'cpc') {
              updateChart(bigChart, labelarray, dataCpc);
            } 
            if (bigChartType == 'ctr') {
                updateChart(bigChart, labelarray, dataCtr);
              } 
    var maxCpccount = Math.max.apply(null, dataCpccount)+0.2*Math.max.apply(null, dataCpccount);
    var maxSpent = Math.max.apply(null, dataSpent)+0.2*Math.max.apply(null, dataSpent);
    var maxCpf = Math.max.apply(null, dataCpf)+0.2*Math.max.apply(null, dataCpf);
    var maxRk = Math.max.apply(null, dataRk)+0.2*Math.max.apply(null, dataRk);
    var maxSubs = Math.max.apply(null, dataSubs)+0.2*Math.max.apply(null, dataSubs);
    var maxCpc = Math.max.apply(null, dataCpc)+0.2*Math.max.apply(null, dataCpc);
    var maxCtr = Math.max.apply(null, dataCtr)+0.2*Math.max.apply(null, dataCtr);
    updateChart(lightBlue, labelarray, dataRk, maxRk);
    updateChart(mobile_chartRK, labelarray, dataRk, maxRk);
    updateChart(violet, labelarray, dataSpent, maxSpent);
    updateChart(mobile_chartSpent, labelarray, dataSpent, maxSpent);
    updateChart(orange, labelarray, dataCpf, maxCpf);
    updateChart(mobile_chartCpf, labelarray, dataCpf, maxCpf);
    updateChart(pink, labelarray, dataSubs, maxSubs);
    updateChart(mobile_chartSubs, labelarray, dataSubs, maxSubs);
    updateChart(blue, labelarray, dataCpccount, maxCpccount);
    updateChart(mobile_chartCpccount, labelarray, dataCpccount, maxCpccount);
    updateChart(mobile_chartCtr, labelarray, dataCtr, maxCtr);
}
});
};

function newFilter(id) {
	$(id).click(function(){
		$('.listing-item__active').removeClass('listing-item__active');
		$(this).addClass('listing-item__active');
	 if (id == '#filter_day') {
    var labelarray = [];
    var dataSpent = [];
    var dataCpf = [];
    var dataSubs = [];
    var dataCpc = [];
    var dataCpccount = [];
    var dataCtr = [];
    var dataRk = [];
    var aCpf = 0;
    var aSubs = 0;
    var aCpc = 0;
    var aCpccount = 0;
    var aCtr = 0;
    var aRk = 0;
    var aSpent = 0;
    requestDay();
   } else if (id == '#filter12_months') {
    requestYear(); 
   } else if (id == '#filter_week') {
    requestWeek(); 

   } else if (id == '#filter_month') {
    requestMonth(); 
   } else if (id == '#filter6_months') {
    request6Months(); 

   } 
	updateviolet(violet);
	updateorange(orange);
	updatepink(pink);
	updateblue(blue);

	// updateConfigAsNewObject(lightBlue);
	// updateConfigAsNewObject(violet);
	// updateConfigAsNewObject(orange);
	// updateConfigAsNewObject(pink);
	// updateConfigAsNewObject(blue);
	});
}

newFilter('#filter_day');
newFilter('#filter_week');
newFilter('#filter_month');
newFilter('#filter6_months');
newFilter('#filter12_months');
// newFilter('#filter_another');
