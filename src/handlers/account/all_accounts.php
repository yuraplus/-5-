<?php 

	require "../../libs/db.php";

	$clubs = R::findAll('users');
	$clubsarray = array();
	foreach ($clubs as $key) {
		$array= array(
			name => $key->user,
			id => $key ->id,
			rk => $key->login,
			key => $key->password_decoded,
		);
		$stack = array($array);
		$clubsarray = array_merge($clubsarray, $stack);
	}
	echo json_encode($clubsarray);
?>