$('.header-menu__clubname').click(function(){
	$('.header-menu__clubname-drop').fadeIn();
});

var clubName = '';
$.ajax({
	url: '../handlers/club_list.php',
	method: 'post',
	async: false,
	success: function(json){
		var data = JSON.parse(json);
		var clublist = '';
		var clublistMob = '';
		for (var i = 0; i<data.length; i++){
			var circleColor = '';
			if (data[i].balance < 500) {
				circleColor = 'circle_violet';
			} 
			if (data[i].balance < 1) {
				circleColor = 'circle_red';
			}
			if (i == 0) {
				var clubHtmlMob = '<h1 class="mobile_ul-drop_text mobile_ul-drop_text_margin mobile_ul-drop_club" id="clubMobList'+ data[i].id +'">'+ data[i].club +'</h1>';
				var clubHtml = '<div class="header-menu__clubname-drop-item margin_bottom_droplist-item" id="club'+ data[i].id +'"><div class="header-menu__clubname-drop-circle '+ circleColor +'"></div><div class="header-menu__clubname-drop-name header-menu__clubname-drop_chosen">'+ data[i].club +'</div></div>';
				clublist = clublist +''+ clubHtml;			
				clublistMob = clublistMob + '' + clubHtmlMob;			
			} else {
				if (i+1 != data.length) {
					var clubHtmlMob = '<h1 class="mobile_ul-drop_text mobile_ul-drop_text_margin mobile_ul-drop_club" id="clubMobList'+ data[i].id +'">'+ data[i].club +'</h1>';
					var clubHtml = '<div class="header-menu__clubname-drop-item margin_bottom_droplist-item" id="club'+ data[i].id +'" onclick="newClubChosen(this.id)"><div class="header-menu__clubname-drop-circle '+ circleColor +'"></div><div class="header-menu__clubname-drop-name">'+ data[i].club +'</div></div>';
					clublist = clublist +''+ clubHtml;
					clublistMob = clublistMob + '' + clubHtmlMob;			
				} else {
					var clubHtmlMob = '<h1 class="mobile_ul-drop_text mobile_ul-drop_club" id="clubMobList'+ data[i].id +'">'+ data[i].club +'</h1>';
					var clubHtml = '<div class="header-menu__clubname-drop-item" id="club'+ data[i].id +'" onclick="newClubChosen(this.id)"><div class="header-menu__clubname-drop-circle '+ circleColor +'"></div><div class="header-menu__clubname-drop-name">'+ data[i].club +'</div></div>';
					clublist = clublist +''+ clubHtml;			
					clublistMob = clublistMob + '' + clubHtmlMob;			
				}
			}
		}
		$('.header-menu__clubname-drop').html(clublist);
		$('.header-menu__clubname-text').html(data[0].club);
		$('#mobile_drop-club').html(clublistMob);
		clubName = data[0].club;
	}
})

function newClubChosen(idKek) {
	var idclub = idKek.replace('club', '');
	$.ajax({
		url: '../handlers/club_list_id.php',
		method: 'post',
		 data: {
		      club1: idclub,
		    },
		    async: false,
		success: function(json){
			var data = JSON.parse(json);
			var circleColorFirst = '';
			var clublist = '';
				if (data.selected_club.balance < 500) {
					circleColorFirst = 'circle_violet';
				} 
				if (data.selected_club.balance < 1) {
					circleColorFirst = 'circle_red';
				}
			var clublist = clublist + '<div class="header-menu__clubname-drop-item margin_bottom_droplist-item" id="club'+ data.selected_club.id +'"><div class="header-menu__clubname-drop-circle '+ circleColorFirst +'"></div><div class="header-menu__clubname-drop-name header-menu__clubname-drop_chosen">'+ data.selected_club.club +'</div></div>';
			for (var i = 0; i<data.different.length; i++){
				var circleColor = '';
				if (data.different[i].balance < 500) {
					circleColor = 'circle_violet';
				} 
				if (data.different[i].balance < 1) {
					circleColor = 'circle_red';
				}
				if (i+1 != data.different.length) {
					var clubHtml = '<div class="header-menu__clubname-drop-item margin_bottom_droplist-item" id="club'+ data.different[i].id +'" onclick="newClubChosen(this.id)"><div class="header-menu__clubname-drop-circle '+ circleColor +'"></div><div class="header-menu__clubname-drop-name">'+ data.different[i].club +'</div></div>';
					clublist = clublist +''+ clubHtml;			
				} else {
					var clubHtml = '<div class="header-menu__clubname-drop-item" id="club'+ data.different[i].id +'" onclick="newClubChosen(this.id)"><div class="header-menu__clubname-drop-circle '+ circleColor +'"></div><div class="header-menu__clubname-drop-name">'+ data.different[i].club +'</div></div>';
					clublist = clublist +''+ clubHtml;			
				}
				
			}
			$('.header-menu__clubname-drop').html(clublist);
			$('.header-menu__clubname-text').html(data.selected_club.club);
			$('.header-menu__clubname-drop').fadeOut();
			clubName = data.selected_club.club;
			$('.filter-menu__droplist-active').removeClass('filter-menu__droplist-active');
			$('#bigChartSubs').addClass('filter-menu__droplist-active');
			bigChartType = 'subs';
			requestDay();
			$('.listing-item__active').removeClass('listing-item__active');
			$('#filter_day').addClass('listing-item__active');
			$('.filter-menu__subscribers-item').html('Количество подписок');
		}
	})
}