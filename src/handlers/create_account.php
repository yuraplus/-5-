<?php
require "../libs/db.php";
	if ($_POST['login'] != '' and $_POST['password'] != '' and $_POST['role'] != '') {
		$role = '';
		if ($_POST['role'] == 'admin') {
			$role = "Администратор";
		} else {
			$role = "Наблюдатель";
		}
		$users = R::dispense('users');
		$users->user = $role;
		$users->login = $_POST['login'];
		$users->password_decoded = $_POST['password'];
		$users->password = password_hash($_POST['password'], PASSWORD_DEFAULT);
		$id = R::store($users);
	}
 ?>