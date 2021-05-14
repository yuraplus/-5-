<?php 
require "libs/db.php";
session_start();
unset($_SESSION['cguser']);
// session_destroy();
// session_destroy();
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<link rel="stylesheet" href="styles/login.css">
	<link rel="stylesheet" href="fonts/monsterrat/stylesheet.css">
	<link rel="stylesheet" href="fonts/stylesheet.css">
</head>
<body>
	<div class="wrapper_blur">
	</div>
	<div class="modal_accept_body">
		<h1 class="modal_accept_text">
			 
		</h1>
		<div class="modal_accept_btns">
			<div class="modal_accept_btn-no">Ок</div>
		</div>
	</div>
	<div class="logo">
		CG<span>.</span>
	</div>
	<form id="loginform" action="handlers/login.php">
		<div class="form_body">
			<h1 class="form_tittle">
				Авторизация
			</h1>
			<input type="text" name="login" id='login' placeholder="Логин">
			<input type="passsword" name="password" id='password' placeholder="Пароль">
			<input type="submit" value="Войти">
		</div>
	</form>
</body>
<script src="libs/jquery.js"></script>
<script type="text/javascript">
	$('form').submit(function(event){
		event.preventDefault();
		var login = $('#login').val();
		$.ajax({
			url: 'handlers/login.php',
			type: 'post',
			dataType: 'html',
			data: $(this).serialize(),
			success: function(html) {
				if (html == 'password') {
					var alertMsg = 'Неверный <span class="modal_accept_name">пароль</span>!';
					$('.modal_accept_text').html(alertMsg);
					$('.wrapper_blur').fadeIn();
					$('.modal_accept_body').css('display','flex').hide().fadeIn();
				}
				if (html == 'login') {
					var alertMsg = 'Неверный <span class="modal_accept_name">логин</span>!';
					$('.modal_accept_text').html(alertMsg);
					$('.wrapper_blur').fadeIn();
					$('.modal_accept_body').css('display','flex').hide().fadeIn();
				}
				if (html == login) {
					document.location.href = "main";
				}
			}
		});
	});
$('.wrapper_blur').click(function(){
	$(this).fadeOut();
	$('.modal_accept_body').fadeOut();
	$('#login').val('');
	$('#password').val('');

});
$('.modal_accept_btn-no').click(function(){
	$('.wrapper_blur').fadeOut();
	$('.modal_accept_body').fadeOut();
	$('#login').val('');
	$('#password').val('');

});
</script>

</html>