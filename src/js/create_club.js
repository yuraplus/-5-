$('#createclub').submit(function(event){
	event.preventDefault();
	$.ajax({
		url: '../handlers/create_club.php',
		type: 'post',
		dataType: 'html',
		data: $(this).serialize(),
		success: function(html) {
			$('.menu_add_club__input').val('');
			browseClubs();
		}
	});
});


$('#change_vkpassword').submit(function(event){
	event.preventDefault();
	$.ajax({
		url: '../handlers/change_vkpassword.php',
		type: 'post',
		dataType: 'html',
		data: $(this).serialize(),
		success: function(html) {
			$('.menu_add_club__input').val('');
		}
	});
});