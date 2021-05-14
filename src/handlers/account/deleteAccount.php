<?php 

	require "../../libs/db.php";
	$club = R::findOne('users', 'id = ?', array($_POST['id']));
	$admins = R::findAll('users', 'user = ?', array('Администратор'));
	$count = 0;
	foreach ($admins as $key) {
		$count++;
	}
	$error = '';
	if ($count < 2 and $club->user == 'Администратор') {
		$error = 'alert';
	} 
	if ($count > 1 and $club->user == 'Администратор') {
		R::trash($club);
		$error = 'noalert';
	}
	if ($club->user == 'Наблюдатель') {
		R::trash($club);
		$error = 'noalert';
	}

	echo $error;
 ?>