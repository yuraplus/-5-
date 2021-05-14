<?php 

	require "../libs/db.php";
	$club = R::findOne('clubs', 'id = ?', array($_POST['id']));
	$clubsinstat = R::findAll('statistics', 'club = ?', array($club->club));
	R::trash($club);
	R::trashAll($clubsinstat);
 ?>