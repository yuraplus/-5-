<?php 
session_start();
require '../libs/db.php';
if (!isset($_SESSION['cguser'])) {
	unset($_SESSION['cguser']);
	echo 'unset';
}
$user = R::findOne('users', 'login = ?', array($_SESSION['cguser']));
if ($user->login != $_SESSION['cguser']) {
	unset($_SESSION['cguser']);
	echo 'unset';	
}

 ?>