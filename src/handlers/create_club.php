<?php 

	require "../libs/db.php";
	$club = R::dispense('clubs');
	$club->club = $_POST['clubname'];
	$club->rknumber = $_POST['rknumber'];
	$club->clubkey = bin2hex(random_bytes(10));
	$club->balance = 10000;
	$id = R::store($club);
 ?>