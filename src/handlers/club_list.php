<?php 
	require "../libs/db.php";
	$clubs = R::findAll('clubs');
	$bigarray = array();
	foreach ($clubs as $key) {
		$array = array(
			club => $key->club,
			balance => $key->balance,
			id => $key->id,
		);
		$stack = array($array);
		$bigarray = array_merge($bigarray, $stack);
	}
	echo json_encode($bigarray);
?>