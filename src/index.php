<?php
require_once 'libs/db.php';

// var_dump($_SESSION['logged_user']);
session_start();
if (isset($_SESSION['cguser'])) {
	//var_dump($_SESSION['logged_user']);
	echo "<script>window.location.replace('main')</script>";
}
else {
	//var_dump($_SESSION['logged_user']);
	echo "<script>window.location.replace('login')</script>";
}
?>