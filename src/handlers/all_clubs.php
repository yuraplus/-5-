<?php 

	require "../libs/db.php";

	$clubs = R::findAll('clubs');
	$clubsarray = array();
	foreach ($clubs as $key) {
		$array= array(
			name => $key->club,
			id => $key ->id,
			rk => $key->rknumber,
			key => $key->clubkey,
		);
		$stack = array($array);
		$clubsarray = array_merge($clubsarray, $stack);
	}
	echo json_encode($clubsarray);
?>