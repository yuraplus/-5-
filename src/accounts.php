<?php 

	require "libs/db.php";
	session_start();
	$admin = R::findOne('users', 'login = ?', array($_SESSION['cguser']));
	if ($admin->user != 'Администратор') {
		echo "<script>window.location.replace('main')</script>";
	}

?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<link rel="stylesheet" href="styles/account/account.css">
	<link rel="stylesheet" href="fonts/stylesheet.css">
	<link rel="stylesheet" href="fonts/monsterrat/stylesheet.css">
	<script src="libs/jquery.js"></script>
</head>
<body>
	<div class="wrapper_blur"></div>
	<div class="modal_accept_body">
		<h1 class="modal_accept_text">
			Вы уверены, что хотите удалить аккаунт логин: <span class="modal_accept_name"></span>? 
		</h1>
		<div class="modal_accept_btns">
			<div class="modal_accept_btn-no">Нет</div>
			<div class="modal_accept_btn-yes">Да</div>
		</div>
	</div>
	<div class="modal_alert_body">
		<h1 class="modal_alert-text">
			На платформе не может быть 0 администраторов!
		</h1>
		<div class="modal_alert-btn">
			Ок
		</div>
	</div>
	<div class="wrapper">
		<div class="wrapper_body">
			<div class="header-menu">
				<div class="header-menu__clubname">
					<h1 class="header-menu__clubname-text">
						Пароли и доступы
					</h1>
				</div>
				<div style="position: relative;">
					<div class="hidden_menu">
						<div class="hidden_menu__item hidden_menu__item-margin">
							<img src="media/hidden_menu/home.svg" alt="" class="hidden_menu__item-logo">
							<a href="main">
								<h1 class="hidden_menu__item-text">
									Главная
								</h1>
							</a>
						</div>
						<div class="hidden_menu__item hidden_menu__item-margin">
							<img src="media/hidden_menu/settings.svg" alt="" class="hidden_menu__item-logo">
							<a href="settings">
								<h1 class="hidden_menu__item-text">
									Настройки
								</h1>
							</a>
						</div>
						<div class="hidden_menu__item hidden_menu__item-margin">
							<img src="media/hidden_menu/active/users.svg" alt="" class="hidden_menu__item-logo">
							<a href="accounts">
								<h1 class="hidden_menu__item-text hidden_menu__item-active">
									Пароли и доступы
								</h1>
							</a>
						</div>
						<div class="hidden_menu__item">
							<img src="media/hidden_menu/logout.svg" alt="" class="hidden_menu__item-logo">
							<h1 class="hidden_menu__item-text" id="logout">
								Выйти
							</h1>
						</div>
					</div>
					<img src="media/icons/menu_burger.svg" class="header-menu__burger">
				</div>
			</div>
			<div class="menu_add_club" action="handlers/create_club.php" id="createclub">
				<div class="menu_add_club_inputs">
					<input type="text" class="menu_add_club__input input__margin-right" name="login" placeholder="Логин">
					<input type="text" class="menu_add_club__input input__margin-right" name="password" placeholder="Пароль">
					<div name="123" id="" class="menu_add_club__select">
						<h1 class="menu_add_club__select-text">
							Роль
						</h1>
						<div class="menu_add_club__select-dummy">
							<img src="media/icons/select_settings.svg" alt="">
						</div>
						<div class="menu_add_club__select_droplist">
							<h1 class="menu_add_club__select_droplist-item menu_add_club__select_droplist-margin" data-acc='admin'>
								Администратор
							</h1>
							<h1 class="menu_add_club__select_droplist-item" data-acc='spectator'>
								Наблюдатель
							</h1>
						</div>
					</div>
				</div>
				<input type="submit" class="menu_add_ckub__submit" value="Добавить" id='create_acc_btn'>
			</div>
			<div class="wrapper_clubs">
				<!-- <div class="club_body">
					<div class="club_body__clubname">
						<div class="club_body__clubname-edit">
							<div class="club_body__clubname-edit_picture">
								
							</div>
						</div>
						<div class="club_body_editbtn_rk_wall"></div>
							<input type="text" class="club_clubname" placeholder="United Gamers | Подольск" disabled>
						<div class="club_body_clubname_rk_wall"></div>
					</div>
					<div class="club_body__rk">
						<h1 class="club_text_top">
							123
						</h1>
						<input type="text" class="club_clubname_grey" placeholder="key" disabled>
						<div class="club_body_key_rk_wall"></div>
					</div>
					<div class="club_body__key">
						<h1 class="club_text_top">
							123
						</h1>
						<h1 class="club_text_bot">
							123
						</h1>
						<div class="club_body__key__delete-btn">
							<img src="media/club_user_body/x_grey.svg" alt="" class="club_body__key__delete-pic">
						</div>
					</div>
				</div> -->
			</div>
		</div>
	</div>
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
	</script>
	<script>
		var role = '';
		var heightDrop = $('.menu_add_club__select_droplist').height()+55;
		var heightDrop = '-'+heightDrop+'px';
		$('.menu_add_club__select_droplist').css('bottom', heightDrop);
		$('.menu_add_club__select-dummy').click(function(){
			$('.menu_add_club__select_droplist').fadeIn();
		});
		$('.menu_add_club__select_droplist-item').click(function(){
			var attr = $(this).attr('data-acc');
			if (attr == 'admin') {
				$('.menu_add_club__select-text').html('Администратор');
				role = 'admin';
			} else {
				$('.menu_add_club__select-text').html('Наблюдатель');
				role = 'spectator';
			}
			$('.menu_add_club__select_droplist').fadeOut();
		});
	</script>
	<script src="js/account_functions.js"></script>
	<script src="js/create_account.js"></script>
	<script>
	$('.header-menu__burger').click(function(){
		$('.wrapper_blur').fadeIn();
		$('.hidden_menu').css('display', 'flex').hide().fadeIn();
	});
	$(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $('.hidden_menu'); // тут указываем класс элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.fadeOut(); // скрываем его
			$('.wrapper_blur').fadeOut();
        }
    });
    $(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $('.menu_add_club__select_droplist'); // тут указываем класс элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.fadeOut(); // скрываем его
			$('.wrapper_blur').fadeOut();
        }
    });
	</script>
</body>
</html>