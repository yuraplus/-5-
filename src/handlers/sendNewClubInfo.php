<?php 

	require "../libs/db.php";
	$id = $_POST['id'];
	$club = $_POST['club'];
	$rk = $_POST['rk'];
	$clubinclub = R::findOne('clubs', 'id = ?', array($id));
	$clubinstats =  R::findAll('statistics', 'club = ?', array($clubinclub->club));
	if ($club != '' and $rk != '') {
		$clubinclub->club = $club;
		$clubinclub->rknumber = $rk;
		R::store($clubinclub);
		foreach ($clubinstats as $key) {
			$key->club = $club;
			R::store($key);
		}
		echo "yes";
	} elseif ($club != '') {
		$clubinclub->club = $club;
		R::store($clubinclub);
		foreach ($clubinstats as $key) {
			$key->club = $club;
			R::store($key);
		}
		echo "yes";
	} elseif ($rk != '') {
		$clubinclub->rknumber = $rk;
		R::store($clubinclub);
		echo "yes";
	} else {
		echo 'no';
	}

 ?>