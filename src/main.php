<?php 

session_start();
 ?>
<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	
	<!-- styles for main page -->
	<link rel="stylesheet" href="styles/main.css">
	<link rel="stylesheet" href="styles/main_media.css">
	<!-- styles for fonts -->
	<link rel="stylesheet" href="fonts/stylesheet.css">

	<!-- styles for calendar (datepicker) 1. custom, 2. lib	 -->
	<link rel="stylesheet" href="styles/calendar/calendar.css">
	<link rel="stylesheet" href="libs/datepicker/css/datepicker.css">

	<link rel="stylesheet" href="styles/mobile.css">
	
	<!-- jquery lib -->
	<script src="libs/jquery.js"></script>

	<!-- chart js lib -->
	<script src="https://cdn.jsdelivr.net/npm/chart.js@3.1.1/dist/chart.js"></script>

	<title>CG</title>
	
</head>
<body>
	<div class="wrapper_blur-mobile">
	</div>
	<div class="modal_accept_body">
		<h1 class="modal_accept_text">
			Есть пустые поля!
		</h1>
		<div class="modal_accept_btns">
			<div class="modal_accept_btn-no">Ок</div>
		</div>
	</div>
	<div class="mobile_body">
		<div class="mobile_header">
			<h1 class="mobile_header-text">
				CYBER GRO<font>UP</font> | Реклама
			</h1>
			<div class="mobile_header-logout" id='logout-mobile'>
				
			</div>
		</div>
		<div class="mobile_body-block">
			<div class="mobile_ul-body">
				<div class="mobile_ul" id="mobile-club">
					<h1 class="mobile_ul-text" id="mobile-club_ul-text">Клуб</h1>
					<img src="media/icons/arrow_mobile.svg" alt="">	
				</div>
				<div class="mobile_ul-drop"  id="mobile_drop-club">

				</div>
			</div>
		</div>
		<div class="mobile_body-block" >
			<div class="mobile_ul-body">
				<div class="mobile_ul" id="mobile-time">
					<h1 class="mobile_ul-text" id="mobile-time_ul-text">Период</h1>
					<img src="media/icons/arrow_mobile.svg" alt="">	
				</div>
				<div class="mobile_ul-drop"  id="mobile_drop-time">
					<h1 class="mobile_ul-drop_text mobile_ul-drop_text_margin mobile_ul-drop_club_time">День</h1>
					<h1 class="mobile_ul-drop_text mobile_ul-drop_text_margin mobile_ul-drop_club_time">Неделя</h1>
					<h1 class="mobile_ul-drop_text mobile_ul-drop_text_margin mobile_ul-drop_club_time">Месяц</h1>
					<h1 class="mobile_ul-drop_text mobile_ul-drop_text_margin mobile_ul-drop_club_time">6 месяцев</h1>
					<h1 class="mobile_ul-drop_text mobile_ul-drop_club_time">12 месяцев</h1>

				</div>
			</div>
		</div>
		<!-- <div class="mobile_body-block" >
			<div class="mobile_ul-body">
				<div class="mobile_ul" id="mobile-chart">
					<h1 class="mobile_ul-text">
						График
					</h1>
					<img src="media/icons/arrow_mobile.svg" alt="">	
				</div>
				<div class="mobile_ul-drop"  id="mobile_drop-chart">
					<h1 class="mobile_ul-drop_text mobile_ul-drop_text_margin mobile_ul-drop_club_chart" id='bigChartSubsMob'>
						Количество подписок
					</h1>
					<h1 class="mobile_ul-drop_text mobile_ul-drop_text_margin mobile_ul-drop_club_chart" id='bigChartRKMob'>
						Активных рекламных кампаний
					</h1>
					<h1 class="mobile_ul-drop_text mobile_ul-drop_text_margin mobile_ul-drop_club_chart" id='bigChartBudgetMob'>
						Потраченный бюджет
					</h1>
					<h1 class="mobile_ul-drop_text mobile_ul-drop_text_margin mobile_ul-drop_club_chart" id='bigChartCpfMob'>
						CPF - Стоимость подписки
					</h1>
					<h1 class="mobile_ul-drop_text mobile_ul-drop_text_margin mobile_ul-drop_club_chart" id='bigChartCpccountMob'>
						Количество переходов
					</h1>
					<h1 class="mobile_ul-drop_text mobile_ul-drop_club_chart" id="bigChartCtrMob">
						CTR - % перехода к просмотрам
					</h1>
				</div>
			</div>
		</div> -->
		<div class="mobile_body-visual">
			<div class="mobile_body-visual-body">
				<div class="mobile_body-visual-wall">
					Выберите клуб и период!
				</div>
				<div class="mobile_body-visual-item" id="chart1">
					<canvas id="mobile_chartRK" class="mobile_body-visual-canvas"></canvas>
					<div class="mobile_body-visual-item_info">
						<h1 class="mobile_body-visual-item_chart-name">
							Активных РК
						</h1>
						<h1 class="mobile_body-visual-item_chart-average" id='mobile_rk-average'>
							
						</h1>
					</div>
				</div>
				<div class="mobile_body-visual-item" id="chart2">
					<canvas id="mobile_chartSpent" class="mobile_body-visual-canvas"></canvas>
					<div class="mobile_body-visual-item_info">
						<h1 class="mobile_body-visual-item_chart-name">
							Потрачено
						</h1>
						<h1 class="mobile_body-visual-item_chart-average" id="mobile_spent-average">
							
						</h1>
					</div>
				</div>
				<div class="mobile_body-visual-item" id="chart3">
					<canvas id="mobile_chartCpf" class="mobile_body-visual-canvas"></canvas>
					<div class="mobile_body-visual-item_info">
						<h1 class="mobile_body-visual-item_chart-name">
							Цена подписки
						</h1>
						<h1 class="mobile_body-visual-item_chart-average" id="mobile_cpf-average">
							
						</h1>
					</div>
				</div>
				<div class="mobile_body-visual-item" id="chart4">
					<canvas id="mobile_chartSubs" class="mobile_body-visual-canvas"></canvas>
					<div class="mobile_body-visual-item_info">
						<h1 class="mobile_body-visual-item_chart-name">
							Подписки
						</h1>
						<h1 class="mobile_body-visual-item_chart-average" id="mobile_subs-average">
							
						</h1>
					</div>
				</div>
				<div class="mobile_body-visual-item" id="chart5">
					<canvas id="mobile_chartCpccount" class="mobile_body-visual-canvas"></canvas>
					<div class="mobile_body-visual-item_info">
						<h1 class="mobile_body-visual-item_chart-name">
							Переходы
						</h1>
						<h1 class="mobile_body-visual-item_chart-average" id="mobile_cpccount-average">
							
						</h1>
					</div>
				</div>
				<div class="mobile_body-visual-item" id="chart6">
					<canvas id="mobile_chartCtr" class="mobile_body-visual-canvas"></canvas>
					<div class="mobile_body-visual-item_info">
						<h1 class="mobile_body-visual-item_chart-name">
							CTR
						</h1>
						<h1 class="mobile_body-visual-item_chart-average" id="mobile_ctr-average">
							
						</h1>
					</div>
				</div>
				<!-- <div class="mobile_body-visual-item" id="chart7">
					<canvas id="mobile_chartBig" class="mobile_body-visual-canvas"></canvas>
					<div class="mobile_body-visual-item_info">
						<h1 class="mobile_body-visual-item_chart-name">
							Подробный график
						</h1>
						<h1 class="mobile_body-visual-item_chart-average" id="mobile_cpccount-average">
							
						</h1>
					</div>
				</div> -->
			</div>
			<div class="mobile_body-visual_circles">
				<div class="mobile_body-visual_circle active_circle" id="circle1"></div>
				<div class="mobile_body-visual_circle" id="circle2"></div>
				<div class="mobile_body-visual_circle" id="circle3"></div>
				<div class="mobile_body-visual_circle" id="circle4"></div>
				<div class="mobile_body-visual_circle" id="circle5"></div>
				<div class="mobile_body-visual_circle" id="circle6"></div>
			</div>
		</div>
		<div class="mobile_body-btn">
			<div class="mobile_btn">
				Применить
			</div>
		</div>
		<!-- <div class="mobile_body-block">
			<div class="mobile_ul">
				
			</div>
		</div> -->
	</div>
	<div class="wrapper_fixed"></div>
	<div class="wrapper">
		<div class="wrapper__body">
			<div class="header-menu">
					<div class="header-menu__clubname-drop">
					</div>
				<div class="header-menu__clubname">
					<h1 class="header-menu__clubname-text">
						
					</h1>
					<img src="media/icons/arrow_down.svg" class="header-menu__clubname-droplist">
				</div>
				<div style="position: relative;" id='burder'>

				</div>
			</div>
			<div class="data-visualization">
				<div class="data-visualization__item lightBlue-chart">
					<canvas id="lightBlue"></canvas>
					<div class="data-visualization__item-content">
						<div class="d-v__i-c__left">
							<h1 class="d-v__i-c__left-chart-name">
								Активных РК
							</h1>
							<h1 class="d-v__i-c__left-chart-amount" id="chartRkAverage">
								
							</h1>
						</div>
						
					</div>
				</div>
				<div class="data-visualization__item violet-chart">
					<canvas id="violet"></canvas>
					<div class="data-visualization__item-content">
						<div class="d-v__i-c__left">
							<h1 class="d-v__i-c__left-chart-name">
								Потрачено
							</h1>
							<h1 class="d-v__i-c__left-chart-amount" id="chartSpentAverage">
								
							</h1>
						</div>
						
					</div>
				</div>
				<div class="data-visualization__item orange-chart">
					<canvas id="orange"></canvas>
					<div class="data-visualization__item-content">
						<div class="d-v__i-c__left">
							<h1 class="d-v__i-c__left-chart-name">
								Цена подписки
							</h1>
							<h1 class="d-v__i-c__left-chart-amount" id="chartCpfAverage">
								
							</h1>
						</div>
					</div>
				</div>
				<div class="data-visualization__item pink-chart">
					<canvas id="pink"></canvas>
					<div class="data-visualization__item-content">
						<div class="d-v__i-c__left">
							<h1 class="d-v__i-c__left-chart-name">
								Подписки
							</h1>
							<h1 class="d-v__i-c__left-chart-amount" id="chartSubsAverage">
								
							</h1>
						</div>
					</div>
				</div>
				<div class="data-visualization__item blue-chart">
					<canvas id="blue"></canvas>
					<div class="data-visualization__item-content">
						<div class="d-v__i-c__left">
							<h1 class="d-v__i-c__left-chart-name">
								Переходы
							</h1>
							<h1 class="d-v__i-c__left-chart-amount" id="chartCpccountAverage">
								1231
							</h1>
						</div>
					</div>
				</div>
			</div>
			<div class="filter-menu">
				<div class="filter-menu__listing">
					<h1 class="filter-menu__listing-item listing-item__active" id="filter_day">День</h1>
					<h1 class="filter-menu__listing-item" id="filter_week">Неделя</h1>
					<h1 class="filter-menu__listing-item" id="filter_month">Месяц</h1>
					<h1 class="filter-menu__listing-item" id="filter6_months">6 Месяцев</h1>
					<h1 class="filter-menu__listing-item" id="filter12_months">12 Месяцев</h1>
					<input class="datepicker-here" data-range="true" id="datepicker_range">
					<label for="datepicker_range"><h1 class="filter-menu__listing-item" id="filter_another">Другой период</h1></label>
				</div>  
				<div class="filter-menu__subscribers">
					<h1 class="filter-menu__subscribers-item">Количество подписок</h1>
					<img src="media/icons/arrow_down.svg">
					<div class="filter-menu__subscribers-droplist">
						<h1 class="filter-menu__subscribers-droplist-item filter-menu__droplist-active" id='bigChartSubs'>
							Количество подписок
						</h1>
						<h1 class="filter-menu__subscribers-droplist-item" id='bigChartRK'>
							Активных рекламных кампаний
						</h1>
						<h1 class="filter-menu__subscribers-droplist-item" id='bigChartBudget'>
							Потраченный бюджет
						</h1>
						<h1 class="filter-menu__subscribers-droplist-item" id='bigChartCpf'>
							CPF - Стоимость подписки
						</h1>
						<h1 class="filter-menu__subscribers-droplist-item" id='bigChartCpccount'>
							Количество переходов
						</h1>
						<h1 class="filter-menu__subscribers-droplist-item" id="bigChartCtr">
							CTR - % перехода к просмотрам
						</h1>
					</div>
				</div>
			</div>
			<div class="big-chart">
				<canvas id="bigChart"></canvas>
			</div>
		</div>
	</div>
	  <style>
		.calendar {
			display: flex;
			background: #212529;
			box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.4);
			border-radius: 8px;
			padding: 25px 20px 30px 20px;
			align-items: center;
			width: 520px;
			overflow: hidden;
		}
		.datepicker--pointer {
			display: none;
		}
		.datepicker {
			border-radius: 8px;
			border: 0px solid black;
		}
		.calendar_barrier {
			margin: 0px 10px;
		}
		.datepicker--nav {
			border-bottom: 0px solid #efefef;
			-webkit-justify-content: center;
			justify-content: center;
		}
		.datepicker--day-name {
			font-family: Montserrat Alternates;
			font-style: normal;
			font-weight: bold;
			font-size: 8px;
			letter-spacing: 0.05em;
			color: #F6F6F6;
		} 
		.datepicker {
			background-color: #212529;
		}
		.datepicker--nav-title, .datepicker--nav-title i {
			font-family: Montserrat Alternates;
			font-style: normal;
			font-weight: bold;
			font-size: 15px;
			letter-spacing: 0.05em;
			color: #F6F6F6;
		}
		.datepicker--nav-title:hover {
			background-color: #212529;
			color: #D7D7D7;
		}
		.datepicker--cell-day.-other-month-, .datepicker--cell-year.-other-decade- {
			color: #212529;
			background: #212529;
			border-radius: 0px;
		}
		.datepicker {
		    font-family: Montserrat Alternates;
			font-style: normal;
			font-weight: bold;
			font-size: 10px;
			letter-spacing: 0.05em;
			color: #F6F6F6;
		}
		.datepicker--cell.-current- {
			color: #F6F6F6;
		} 
		.datepicker--cell.-selected- {
			font-family: Montserrat Alternates;
			font-style: normal;
			font-weight: bold;
			font-size: 10px;
			letter-spacing: 0.05em;
			color: #FDB576;
			background-color: #2A2E32;
		}
		.datepicker--cell.-focus- {
			background: #2A2E32;
		}
		.datepicker--cell.-selected-.-focus-, .datepicker--cell.-current-.-focus-, .datepicker--cell.-selected-.-current- {
			color: #FDB576;
			background: #2A2E32;
		}
		.datepicker--cell-day.-other-month-:hover {
			color: #212529;
			background-color: #212529;
			cursor: default;
		}
		.datepicker--cell.-current-.-in-range-, .datepicker--cell.-in-range- {
			color: #f6f6f6;
			background-color: rgb(55,59,62);
		}
	</style>	
</body>
<script>
	$.ajax({
		url: 'handlers/user_checker.php',
		type: 'post',
		async: false,
		success: function(html) {
			if (html == 'admin') {
				var header = '<div class="hidden_menu"><div class="hidden_menu__item hidden_menu__item-margin"><img src="media/hidden_menu/active/home.svg" alt="" class="hidden_menu__item-logo"><h1 class="hidden_menu__item-text" style="color: #FDB576;">Главная</h1></div><div class="hidden_menu__item hidden_menu__item-margin"><img src="media/hidden_menu/settings.svg" alt="" class="hidden_menu__item-logo"><a href="settings"><h1 class="hidden_menu__item-text">Настройки</h1></a></div><div class="hidden_menu__item hidden_menu__item-margin"><img src="media/hidden_menu/users.svg" alt="" class="hidden_menu__item-logo"><a href="accounts"><h1 class="hidden_menu__item-text">Пароли и доступы</h1></a></div><div class="hidden_menu__item"><img src="media/hidden_menu/logout.svg" alt="" class="hidden_menu__item-logo"><h1 class="hidden_menu__item-text" id="logout">Выйти</h1></div></div><img src="media/icons/menu_burger.svg" class="header-menu__burger">';
					$('#burder').html(header);
			}
			if (html == 'spec') {
				var header = '<img src="media/hidden_menu/logout.svg" alt="" class="header-menu__burger" id="logoutspec">';
				$('#burder').html(header);
			}
		}
	});
</script>
<script>
	$('#logout').click(function(){
		$.ajax({
			url: 'handlers/logout.php',
			type: 'post',
			success: function(html) {
				if (html == 'unset') {
					document.location.href = "login";
				}
			}
		});
	});
	$('#logoutspec').click(function(){
		$.ajax({
			url: 'handlers/logout.php',
			type: 'post',
			success: function(html) {
				if (html == 'unset') {
					document.location.href = "login";
				}
			}
		});
	});
	$('#logout-mobile').click(function(){
		$.ajax({
			url: 'handlers/logout.php',
			type: 'post',
			success: function(html) {
				if (html == 'unset') {
					document.location.href = "login";
				}
			}
		});
	});
</script>
<script>
	$.ajax({
		url: 'handlers/session_checker.php',
		type: 'post',
		success: function(html) {
			if (html == 'unset') {
				document.location.href = "login";
			}
		}
	});
	$('*').click(function(){
		$.ajax({
			url: 'handlers/session_checker.php',
			type: 'post',
			success: function(html) {
				if (html == 'unset') {
					document.location.href = "login";
				}
			}
		});
	});
</script>
<script src="js/club_list.js"></script>
<script  src="js/bigchartdata.js"></script>
<script src="js/hidden_menu.js"></script>
<script src="js/updated_charts.js"></script>
<script src="js/chart_settings.js"></script>
<script src="js/filter-menu.js"></script>
<script src="libs/datepicker/js/datepicker.js"></script>
<script src="js/filter_custom_period.js"></script>
<script src="js/functions_for_mobile_charts.js"></script>
<!-- <script>
	var mobileDropHeight = $('.mobile_ul-drop').height()+20;
	var mobileDropBottom = '-'+mobileDropHeight+'px';
	$('.mobile_ul-drop').css('bottom', mobileDropBottom);
</script> -->
<script>
	function showDropMobile(id, iddrop) {
		$(id).click(function(){
			$(iddrop).slideToggle();
		});
	}
	showDropMobile('#mobile-club', '#mobile_drop-club');
	showDropMobile('#mobile-time', '#mobile_drop-time');
	showDropMobile('#mobile-chart', '#mobile_drop-chart');

	$('.mobile_ul-drop_club').click(function(){
		var clubNameMobile = $(this).html();
		var clubNameH = '<h1 class="mobile_ul-text" id="mobile-club_ul-text">'+ clubNameMobile +'</h1>';
		$('#mobile-club').html(clubNameH);
		$('#mobile_drop-club').slideUp();
	});
	$('.mobile_ul-drop_club_time').click(function(){
		var timeMobile = $(this).html();
		var timeMobileH = '<h1 class="mobile_ul-text" id="mobile-time_ul-text">'+ timeMobile +'</h1>';
		$('#mobile-time').html(timeMobileH);
		$('#mobile_drop-time').slideUp();
	});
	$('.mobile_ul-drop_club_chart').click(function(){
		var chartMobile = $(this).html();
		var chartMobileH = '<h1 class="mobile_ul-text">'+ chartMobile +'</h1>';
		$('#mobile-chart').html(chartMobileH);
		$('#mobile_drop-chart').slideUp();
	});
</script>
<script>
	$('.mobile_body-visual-body').on("scroll", function () {
	    var scrolled = $(this).scrollTop();
	    if(scrolled < 180) {
	    	$('.active_circle').removeClass('active_circle');
	        $('#circle1').addClass('active_circle');
	    } else if(scrolled < 360) {     
	        $('.active_circle').removeClass('active_circle');
	        $('#circle2').addClass('active_circle');
	    } else if(scrolled < 540) {     
	        $('.active_circle').removeClass('active_circle');
	        $('#circle3').addClass('active_circle');
	    } else if(scrolled < 720) {     
	        $('.active_circle').removeClass('active_circle');
	        $('#circle4').addClass('active_circle');
	    } else if(scrolled < 900) {     
	        $('.active_circle').removeClass('active_circle');
	        $('#circle5').addClass('active_circle');
	    } else if(scrolled < 1080) {     
	        $('.active_circle').removeClass('active_circle');
	        $('#circle6').addClass('active_circle');
	    } else if(scrolled < 1260) {     
	        $('.active_circle').removeClass('active_circle');
	        $('#circle7').addClass('active_circle');
	    }
	});
</script>
<script>
	jQuery(function($){
		$(document).mouseup(function (e){ // событие клика по веб-документу
			var div = $(".header-menu__clubname-drop"); // тут указываем ID элемента
			if (!div.is(e.target) // если клик был не по нашему блоку
			    && div.has(e.target).length === 0) { // и не по его дочерним элементам
				div.fadeOut(); // скрываем его
			}
			var idiv = $(".filter-menu__subscribers-droplist"); // тут указываем ID элемента
			if (!idiv.is(e.target) // если клик был не по нашему блоку
			    && idiv.has(e.target).length === 0) { // и не по его дочерним элементам
				idiv.fadeOut(); // скрываем его
			}
		});
	});
</script>
</html>