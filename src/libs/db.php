<?php 
	require "rb.php";

	R::setup( 'mysql:host=localhost;dbname=cgbase','root', 'root' );
	if(!R::testConnection()) die('No DB connection!');
	
	header('Cache-Control: no cache');
	session_cache_limiter('private_no_expire');
?>