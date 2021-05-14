function anotherPeriod(twodates) {
	var dates = twodates.split(',');
	var date1 = dates[0];
	var date2 = dates[1];
	$.ajax({
	  url: '../handlers/filter_another.php',
	  method: 'post',
	  data: {
			datefrom: date1,
			dateto: date2,
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
	    for (var i = 0; i < data.length; i++) {
	      labelarray.push(data[i].label);
	      if (data[i].data.empty == 0) {
	        dataSpent.push(0);
	        dataCpf.push(0);
	        dataSubs.push(0);
	        dataCpc.push(0);
	        dataCpccount.push(0);
			dataCpccount.push(0);
        	dataRk.push(0);
	      }
	       else {
	        dataSpent.push(parseInt(data[i].data.spent));
	        dataCpf.push(parseInt(data[i].data.cpf));
	        dataSubs.push(parseInt(data[i].data.subs));
	        dataCpc.push(parseInt(data[i].data.cpc));
	        dataCpccount.push(parseInt(data[i].data.cpccount));
	        dataCtr.push(parseInt(data[i].data.ctr));
        	dataRk.push(parseInt(data[i].data.rk));
	      } 
	    }
	    $('.listing-item__active').removeClass('listing-item__active');
	    $('#filter_another').addClass('listing-item__active');
	    // updateChart(bigChart, labelarray, dataSubs);
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
    updateChart(lightBlue, labelarray, dataCpccount);
    updateChart(violet, labelarray, dataSpent);
    updateChart(orange, labelarray, dataCpf);
    updateChart(pink, labelarray, dataSubs);
    updateChart(blue, labelarray, dataCpccount);
	}
	});
}

$('#datepicker_range').datepicker( {
	onSelect: function(date) {
		if (date.length == 21){
			anotherPeriod(date);
		}
	}   
});

