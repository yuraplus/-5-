<?php 

	require '../libs/db.php';
	$club = R::findOne('clubs', 'id = ?', array($_POST['club1']));
	$differentclubs = R::findAll('clubs');

	$bigarray = array();
	foreach ($differentclubs as $key) {
		if ($key->id != $club->id) {
			$array = array(
				id => $key->id,
				club => $key->club,
				balance => $key->balance,
			);
		$stack = array($array);
		$bigarray = array_merge($bigarray, $stack); 
		}
	}

	$superbigarray = array(
		selected_club => $club,
		different => $bigarray,
	);	
	echo json_encode($superbigarray);
?>