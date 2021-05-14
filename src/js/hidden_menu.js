$('.header-menu__burger').click(function(){
	$('.wrapper_fixed').fadeIn();
	$('.hidden_menu').fadeIn();
	$('.hidden_menu').css('display', 'flex');
});
$('.wrapper_fixed').click(function(){
	$('.hidden_menu').fadeOut();
	$('.wrapper_fixed').fadeOut();
});



var bigChartType = 'subs';
$('.filter-menu__subscribers-item').click(function(){
	$('.filter-menu__subscribers-droplist').fadeIn();
	$('.filter-menu__subscribers-droplist').css('display', 'flex');
});

$('.filter-menu__subscribers-droplist-item').click(function(){
	$('.filter-menu__droplist-active').removeClass('filter-menu__droplist-active');
	$(this).addClass('filter-menu__droplist-active');
	$('.listing-item__active').removeClass('listing-item__active');
	$('#filter_day').addClass('listing-item__active');
	if (this.id === 'bigChartSubs') {
		$('.filter-menu__subscribers-item').html('Количество подписок');
		bigChartType = 'subs';
		requestDay();
	}
	if (this.id === 'bigChartRK') {
		$('.filter-menu__subscribers-item').html('Активные рекламные кампании');
		bigChartType = 'rk';
		requestDay();
	}
	if (this.id === 'bigChartBudget') {
		$('.filter-menu__subscribers-item').html('Потраченный бюджет');
		bigChartType = 'budget';
		requestDay();
	}
	if (this.id === 'bigChartCpf') {
		$('.filter-menu__subscribers-item').html('CPF - Стоимость подписки');
		bigChartType = 'cpf';
		requestDay();
	}
	if (this.id === 'bigChartCpccount') {
		$('.filter-menu__subscribers-item').html('Количество переходов');
		bigChartType = 'cpc';
		requestDay();
	}
	if (this.id === 'bigChartCtr') {
		$('.filter-menu__subscribers-item').html('CTR - % перехода к просмотрам');
		bigChartType = 'ctr';
		requestDay();
	}
	$('.filter-menu__subscribers-droplist').fadeOut();
});