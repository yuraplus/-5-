<?php 

require "../libs/db.php";
	session_start();

	$admin = R::findOne('users', 'login = ?', array($_SESSION['cguser']));

	if ($admin->user == 'Администратор') {
		echo 'admin';
	}
	if ($admin->user == 'Наблюдатель') {
		echo 'spec';
	}

 ?>