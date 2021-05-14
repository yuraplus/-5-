<?php 
	
	require "../libs/db.php";
	$alldata = R::findall('statistics', 'club = ?', array($_POST['club']));
	$dateto = date('d.m.Y', strtotime($_POST['dateto']));
	$datefrom = date('d.m.Y', strtotime($_POST['datefrom']));
	$count = 0;
	while ($dateto != $datefrom){
		$datefrom = date('d.m.Y', strtotime($datefrom . '+1 day'));
		$count++;
	}
	$dateto = date('d.m.Y', strtotime($_POST['dateto']));
	$datefrom = date('d.m.Y', strtotime($_POST['datefrom']));
	if ($count+1==2) {
		$daysarrayoftwo=array();
		foreach ($alldata as $key) {
			$datekey = strtotime($key->updatedate);
			$datekey = date('d.m.Y', $datekey);
			if ($datekey == $datefrom or $datekey == $dateto) {
				array_push($daysarrayoftwo, $key);
			}
		}
		$bigarray = array();
		for ($i = 0; $i<24; $i++){
			$label = '';
			if ($i<10) {
				$label = '0'.$i;
			} else {
				$label = $i;
			}
			$timeminus = date("d.m.Y H.i.s", mktime($label, -10, 0, date('m', strtotime($datefrom)), date('d', strtotime($datefrom)), date('Y', strtotime($datefrom))));
			$timeplus = date("d.m.Y H.i.s", mktime($label, +10, 0, date('m', strtotime($datefrom)), date('d', strtotime($datefrom)), date('Y', strtotime($datefrom))));
			$datearray = array();
				foreach ($daysarrayoftwo as $key) {
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
		$bigarray1 = array();
		for ($i = 0; $i<25; $i++){
			$label = '';
			if ($i<10) {
				$label = '0'.$i;
			} else {
				$label = $i;
			}
			$timeminus = date("d.m.Y H.i.s", mktime($label, -10, 0, date('m', strtotime($dateto)), date('d', strtotime($dateto)), date('Y', strtotime($dateto))));
			$timeplus = date("d.m.Y H.i.s", mktime($label, +10, 0, date('m', strtotime($dateto)), date('d', strtotime($dateto)), date('Y', strtotime($dateto))));
			$datearray = array();
				foreach ($daysarrayoftwo as $key) {
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
			$bigarray1 = array_merge($bigarray1, $stack);
		}
	$bigarrays = array_merge($bigarray, $bigarray1);
	echo json_encode($bigarrays);
	} elseif ($count+1 < 31) {
		$bigarray = array();
		$datefrommonth = $datefrom;
		for ($i=0; $i<($count+1); $i++) {
			$sumSpent = 0;
			$sumCpf = 0;
			$sumSubs = 0;
			$sumCpccount = 0;
			$sumCpc = 0;
			$sumRk = 0;
			$sumCtr = 0;
			foreach ($alldata as $key) {
				$datekey = date('d.m.Y', strtotime($key->updatedate));
				if ($datekey == $datefrommonth) {
					$sumSpent = $sumSpent + $key->spent;
					$sumCpf = $sumCpf + $key->cpf;
					$sumSubs = $sumSubs + $key->subs;
					$sumCpccount = $sumCpccount + $key->cpccount;
					$sumCpc = $sumCpc + $key->cpc;
					$sumRk = $sumRk + $key->activeads;
					$sumCtr = $sumCtr + $key->ctr;
				}
			}
			$darray = array(
				'spent' => $sumSpent,
				'cpf' => $sumCpf,
				'subs' => $sumSubs,
				'cpccount' => $sumCpccount,
				'cpc' => $sumCpc,
				'rk' => $sumRk,
				'ctr' => $sumCtr,
			);
			$array = array(
				'label' => date('d.m', strtotime($datefrommonth)),
				'data' => $darray,
			);
			$datefrommonth = date('d.m.Y', strtotime($datefrommonth)+86400);
			$stack = array($array);
			$bigarray = array_merge($bigarray, $stack);
		}
		echo json_encode($bigarray);
	} elseif ($count+1 > 30) {
		$bigarray = array();
		$months = floor(($count+1)/31)+1;
		$datemonthago = date('d.m.Y', strtotime($datefrom));
		for ($i = 0; $i<$months; $i++) {
			$monthchecker = date('m.Y', strtotime($datemonthago));
			$sumSpent = 0;
			$sumCpf = 0;
			$sumSubs = 0;
			$sumCpccount = 0;
			$sumCpc = 0;
			$sumRk = 0;
			$sumCtr = 0;
			foreach ($alldata as $key) {
				$datekey = date('d.m.Y', strtotime($key->updatedate));
				if (date('m.Y', strtotime($datekey)) == $monthchecker) {
					$sumSpent = $sumSpent + $key->spent;
					$sumCpf = $sumCpf + $key->cpf;
					$sumSubs = $sumSubs + $key->subs;
					$sumCpccount = $sumCpccount + $key->cpccount;
					$sumCpc = $sumCpc + $key->cpc;
					$sumRk = $sumRk + $key->activeads;
					$sumCtr = $sumCtr + $key->ctr;
				}
			}
			$darray = array(
				'spent' => $sumSpent,
				'cpf' => $sumCpf,
				'subs' => $sumSubs,
				'cpccount' => $sumCpccount,
				'cpc' => $sumCpc,
				'rk' => $sumRk,
				'ctr' => $sumCtr,
			);
			$array = array(
				'label' => date('m.Y', strtotime($datemonthago)),
				'data' => $darray,
			);
			$datemonthago = date('d.m.Y', strtotime($datemonthago . "+1 month"));
			$stack = array($array);
			$bigarray = array_merge($bigarray, $stack);
		}
		echo json_encode($bigarray);
	} else {
		echo '0';
	}
?> 