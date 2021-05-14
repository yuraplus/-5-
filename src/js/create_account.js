$('#create_acc_btn').click(function(){
	var login = $('input[name="login"]').val();
	var password = $('input[name="password"]').val();
	$.ajax({
	  url: '../handlers/create_account.php',
	  method: 'post',
	  data: {
			login: login,
			password: password,
			role: role,
		},
	  success: function(json){
	  		$('.menu_add_club__input').val('');
	  		$('.menu_add_club__select-text').html('Роль');
	  		browseClubs();
	  }
	});
});