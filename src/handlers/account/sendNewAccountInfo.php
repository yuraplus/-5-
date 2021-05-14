<?php 

	require "../../libs/db.php";
	$id = $_POST['id'];
	$club = $_POST['club'];
	$rk = $_POST['rk'];
	$clubinclub = R::findOne('users', 'id = ?', array($id));
	if ($club != '' and $rk != '') {
		$clubinclub->password_decoded = $club;
		$clubinclub->password = password_hash($club, PASSWORD_DEFAULT);
		$clubinclub->login = $rk;
		R::store($clubinclub);
		echo "yes";
	} elseif ($club != '') {
		$clubinclub->password_decoded = $club;
		$clubinclub->password = password_hash($club, PASSWORD_DEFAULT);
		R::store($clubinclub);
		echo "yes";
	} elseif ($rk != '') {
		$clubinclub->login = $rk;
		R::store($clubinclub);
		echo "yes";
	} else {
		echo 'no';
	}

 ?>