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
	<link rel="stylesheet" href="styles/partners/partners.css">
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
						Партнеры
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
				</div>
				<input type="submit" class="menu_add_ckub__submit" value="Добавить" id='create_acc_btn'>
			</div>
			<div class="wrapper_clubs">
				<div class="partner_body partner_body-margin">
					<div class="club_body">
						<div class="club_body__clubname">
							<div class="club_body__clubname-edit">
								<div class="club_body__clubname-edit_picture">
									
								</div>
							</div>
							<div class="club_body_editbtn_rk_wall"></div>
								<h1 class="club_clubname">Партнер</h1>
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
							<input type="text" class="club_clubname_grey" placeholder="key" disabled>
							<div class="club_body__key__delete-btn">
								<img src="media/club_user_body/x_grey.svg" alt="" class="club_body__key__delete-pic">
							</div>
						</div>
					</div>
					<div class="club_wall-partners"></div>
					<div class="partners_body_club">
						<div class="club_body-partners">
							<div class="club_body-partners-items">
								<h1 class="club_body-partners-items_text">
									United gamers | подольск
								</h1>
								<img src="media/club_user_body/x_white.svg" alt="" class="club_body-partners-items_delete">
							</div>
							<div class="club_body-partners-items">
								<h1 class="club_body-partners-items_text">
									United gamers | Махачкала
								</h1>
								<img src="media/club_user_body/x_partners1.svg" alt="" class="club_body-partners-items_delete">
							</div>
							<div class="club_body-partners-items">
								<h1 class="club_body-partners-items_text">
									United gamers | Красноярск
								</h1>
								<img src="media/club_user_body/x_partners1.svg" alt="" class="club_body-partners-items_delete">
							</div>
						</div>
						<div class="club_body-partners-add"></div>
					</div>
				</div>
				<div class="partner_body">
					<div class="club_body">
						<div class="club_body__clubname">
							<div class="club_body__clubname-edit">
								<div class="club_body__clubname-edit_picture">
									
								</div>
							</div>
							<div class="club_body_editbtn_rk_wall"></div>
								<h1 class="club_clubname">Партнер</h1>
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
							<input type="text" class="club_clubname_grey" placeholder="key" disabled>
							<div class="club_body__key__delete-btn">
								<img src="media/club_user_body/x_grey.svg" alt="" class="club_body__key__delete-pic">
							</div>
						</div>
					</div>
					<div class="club_wall-partners"></div>
					<div class="partners_body_club">
						<div class="club_body-partners">
							<div class="club_body-partners-items">
								<h1 class="club_body-partners-items_text">
									United gamers | подольск
								</h1>
								<img src="media/club_user_body/x_white.svg" alt="" class="club_body-partners-items_delete">
							</div>
							<div class="club_body-partners-items">
								<h1 class="club_body-partners-items_text">
									United gamers | Махачкала
								</h1>
								<img src="media/club_user_body/x_partners1.svg" alt="" class="club_body-partners-items_delete">
							</div>
							<div class="club_body-partners-items">
								<h1 class="club_body-partners-items_text">
									United gamers | Красноярск
								</h1>
								<img src="media/club_user_body/x_partners1.svg" alt="" class="club_body-partners-items_delete">
							</div>
							<div class="club_body-partners-items">
								<h1 class="club_body-partners-items_text">
									United gamers | Красноярск
								</h1>
								<img src="media/club_user_body/x_partners1.svg" alt="" class="club_body-partners-items_delete">
							</div>
						</div>
						<div class="club_body-partners-add"></div>
					</div>
				</div>
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
	<!-- <script>
		var heightPartnersBlock = $('.club_body-partners').height();
		if (heightPartnersBlock > 60) {
			$('.club_body-partners').css({
				'padding':'12px 0px 0px 104px',
			});
			$('.club_body-partners-h1').css('margin-bottom', '12px');
		}
	</script> -->
</body>
</html>