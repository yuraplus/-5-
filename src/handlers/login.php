<?php 

require "../libs/db.php";
session_start();
$user = R::findOne('users', 'login = ?', array($_POST['login']));
	if ($user)
		{
			if (password_verify($_POST['password'], $user->password))
			{	
				$_SESSION['cguser'] = $_POST['login']; 
				echo $_SESSION['cguser'];

			}else
			{
				echo "password";
			}
		}else
		{
			echo "login";
		}
 ?>