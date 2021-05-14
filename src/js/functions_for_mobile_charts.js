var clubMobile = '';
var timeMobile = '';
var chartMobile = '';

function replaceh1(argument) {
	argument = argument.replace('<h1 class="mobile_ul-text">', '');
	argument = argument.replace('</h1>', '');
}

$('.mobile_btn').click(function(){
	clubMobile = $('#mobile-club_ul-text').html();
	timeMobile = $('#mobile-time_ul-text').html();
	if (clubMobile == 'Клуб' || timeMobile == 'Период') {
		$('.modal_accept_body').css('display','flex').hide().fadeIn();
		$('.wrapper_blur-mobile').fadeIn();
	} else {

		if (timeMobile == 'День') {
			clubName = clubMobile;
			requestDay();
		}
		if (timeMobile == 'Неделя') {
			clubName = clubMobile;
			requestWeek();
		}
		if (timeMobile == 'Месяц') {
			clubName = clubMobile;
			requestMonth();
		}
		if (timeMobile == '6 месяцев') {
			clubName = clubMobile;
			request6Months();
		}
		if (timeMobile == '12 месяцев') {
			clubName = clubMobile;
			requestYear();
		}
		$('.mobile_body-visual-wall').fadeOut();
		$('.mobile_body-visual-body').css('overflow', 'auto');
	}
});

$('.modal_accept_btn-no').click(function(){
	$('.modal_accept_body').fadeOut();
	$('.wrapper_blur-mobile').fadeOut();
});