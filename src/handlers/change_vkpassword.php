<?php 
	require "../libs/db.php";
	$password=R::findOne('config', 'id = ?', array(1));
	$password->vkpassword = $_POST['vkpassword'];
	R::store($password);
?>