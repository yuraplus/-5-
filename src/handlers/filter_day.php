<?php 
	require "../libs/db.php";
	$todaysStats = R::findAll('statistics', 'club = ?', array($_POST['club']));
	$date = date("d/m/Y");
	$prikol = array();
	foreach ($todaysStats as $key) {
		$datekey = strtotime($key->updatedate);
		$datekey = date('d/m/Y', $datekey);
		if ($datekey == $date) {
			array_push($prikol, $key);
		}
	}
	$hournow = date('H');
	$bigarray = array();
	for ($i = 0; $i<$hournow+1; $i++){
		$label = '';
		if ($i<10) {
			$label = '0'.$i;
		} else {
			$label = $i;
		}
		$timeminus = date("d.m.Y H.i.s", mktime($label+1, -10));
		$timeplus = date("d.m.Y H.i.s", mktime($label+1, +10));
		$datearray = array();
			foreach ($prikol as $key) {
				$datekeydef = strtotime($key->updatedate);
				$datekey = date('d.m.Y H:i:s', $datekeydef);
				$darray = array();
				if ($timeminus <= $datekey && $timeplus >= $datekey) {
					$darray = array(
						'spent' => $key->spent,
						'cpf' => $key->cpf,
						'subs' => $key->subs,
						'cpccount' => $key->cpccount,
						'cpc' => $key->cpc,
						'rk' => $key->activeads,
						'ctr' => $key->ctr,
						'hour' => date('H', $datekeydef),
					);
					$datearray = $darray; 
					break;
				} else {
					$darray = array(
						'empty' => 0,
					);
					$datearray = $darray; 
				}
			}
		$label = $label . '.00';
		$array = array(
			'label' => $label,
			'data' => $datearray,
		);
		$stack = array($array);
		$bigarray = array_merge($bigarray, $stack);
	}
	echo json_encode($bigarray);
 ?>